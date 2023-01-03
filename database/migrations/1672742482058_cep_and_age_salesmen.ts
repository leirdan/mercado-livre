import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "salesman";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer("CEP").unsigned();
      table.integer("age").unsigned();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn("CEP");
      table.dropColumn("age");
    });
  }
}
