/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";
import Product from "App/Models/Product";

Route.get("/", async ({ view }) => {
  const products = await Product.query().orderBy("id", "desc");
  return view.render("home", { product: products });
});

Route.group(() => {
  Route.get("/", "ProductsController.index").as("products.index");
  Route.get("/create", "ProductsController.create").as("products.create");
  Route.get("/filter", "ProductsController.filter").as("products.filter");
  Route.post("/", "ProductsController.store").as("products.store");
  Route.get("/delete/:id", "ProductsController.delete").as("products.delete");
}).prefix("/products");

Route.group(() => {
  Route.get("/", "SalesmanController.index").as("salesman.index");
  Route.get("/create", "SalesmanController.create").as("salesman.create");
  Route.post("/", "SalesmanController.store").as("salesman.store");
  Route.get("/profile/:id", "SalesmanController.profile").as(
    "salesman.profile"
  );
}).prefix("/salesman");
