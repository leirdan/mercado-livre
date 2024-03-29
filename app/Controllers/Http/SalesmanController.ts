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
    const listSalesman = await Salesman.query().orderBy("id", "desc");
    // TODO: exibir os vendedores na tela; caso o usuário queira, poderá ver o perfil completo de um vendedor ao clicar em "Saiba mais"
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
      "description",
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

  public async profile({ view, params }: HttpContextContract) {
    const id = params.id;
    const salesman = await Salesman.find(id);
    return view.render("salesman/profile", { salesman: salesman });
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
