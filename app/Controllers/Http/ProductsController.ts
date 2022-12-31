import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";

interface BaseProduct {
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  salesmanId?: number;
  id?: number;
}

export default class ProductsController {
  public async index({ view }: HttpContextContract): Promise<string> {
    const products = await Product.query().orderBy("id", "desc");
    return view.render("products/index", { product: products });
  }

  public async create({ view }: HttpContextContract): Promise<string> {
    return view.render("products/create");
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const newproduct: BaseProduct = request.only([
      "name",
      "price",
      "stock",
      "description",
      "category",
    ]);
    await Product.create(newproduct)
      .then(() => {
        response.redirect("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async delete({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id);
    if (product) {
      await product
        .delete()
        .then(() => {
          response.redirect("/products");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
