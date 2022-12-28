import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Salesman from "App/Models/Salesman";

export default class SalesmanController {
  public async index({ view, request }: HttpContextContract) {
    const id = request.param("id");
    const salesman = await Salesman.find(id);
    return view.render("salesman/index", { salesman: salesman });
  }

  public async create({ view }: HttpContextContract) {
    return view.render("salesman/create");
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
