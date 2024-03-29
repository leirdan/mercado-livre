import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Product from "./Product";

export default class Salesman extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public cep: number;

  @column()
  public age: number;

  @column()
  public login: string;

  @column()
  private password: string;

  @column()
  public description: string;

  static get table() {
    return "salesman";
  }

  protected getPassword() {
    return this.password;
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Product)
  public product: HasMany<typeof Product>;
}
