import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "salesman";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer("cep").unsigned();
      table.integer("age").unsigned();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn("cep");
      table.dropColumn("age");
    });
  }
}
