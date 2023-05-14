import Model from "./__Model.js";

export default class Employee extends Model {
  constructor({ id, name, surename, experience, age, address }) {
    super("workers");
    this.id = id;
    this.name = name;
    this.surename = surename;
    this.experience = experience;
    this.age = age;
    this.address = address;
  }
}
