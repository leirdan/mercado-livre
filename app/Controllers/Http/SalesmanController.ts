import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Salesman from "App/Models/Salesman";

interface BaseSalesman {
  name: string;
  cep: number;
  age: number;
  login: string;
  password: string;
}

export default class SalesmanController {
  public async index({ view }: HttpContextContract): Promise<String> {
    const listSalesman = await Salesman.query().orderBy("updated_at", "desc");
    return view.render("salesman/index", { salesman: listSalesman });
  }

  public async create({ view }: HttpContextContract): Promise<String> {
    return view.render("salesman/create");
  }

  public async store({
    request,
    response,
  }: HttpContextContract): Promise<void> {
    const newSalesman: BaseSalesman = request.only([
      "name",
      "login",
      "age",
      "cep",
      "password",
    ]);

    await Salesman.create(newSalesman)
      .then(() => {
        response.redirect("/salesman");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public async show({ view, request }: HttpContextContract) {
    const id = request.param("id");
    const salesman = await Salesman.find(id);
    return view.render("salesman/index", { salesman: salesman });
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
