import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer("salesman_id").unsigned().references("salesman.id");
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn("salesman_id");
    });
  }
}
