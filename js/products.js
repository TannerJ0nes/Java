/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "p1",
    name: "name 1",
    description: "FUCK",
    price: 420,
    discontinued: false,
    categories: ["c1"],
  },
  /*
    {
      id: "P1",
      name: "Name 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
];
