import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Salesman from "./Salesman";

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public salesmanId: number;

  @column()
  public name: string;

  @column()
  public price: number;

  @column()
  public stock: number;

  @column()
  public description: string;

  @column()
  public category: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Salesman)
  public salesman: BelongsTo<typeof Salesman>;
}
