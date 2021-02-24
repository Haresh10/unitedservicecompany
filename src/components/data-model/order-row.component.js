export default class OrderRow {
  constructor(id, desc, qty, disc, unit, rate, price) {
    this.id = id; //service id
    this.desc = desc; // service description
    this.qty = qty; // Quanitity entered by client
    this.disc = disc; // discount %
    this.unit = unit;
    this.rate = rate; // rate per unit
    this.price = price; // Total price
  }
}
