import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    const products = await Product.all();
    return view.render("products/index", { product: products });
  }

  public async create({ view }: HttpContextContract) {
    return view.render("products/create");
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
