/**
 * QAP1 - FRONT-END & JAVASCRIPT!!
 *
 *
 * Please update the following with your information:
 *
 *      Name:       <Tanner_Jones>
 *
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

function main() {
  // For debugging, display all of our data in the console
  // You can remove this once you start working...
  console.log({ products, categories }, "Store Data");
}

addEventListener("DOMContentLoaded", main);

document.addEventListener("DOMContentLoaded", function () {
  const categories = [
    { id: "c1", description: "Category 1" },
    { id: "c2", description: "Category 2" },
    { id: "c3", description: "Category 3" },
    { id: "c4", description: "Category 4" },
  ];

  const products = [
    {
      id: "p1",
      name: "Product 1",
      description: "Description 1",
      price: 10,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p2",
      name: "Product 2",
      description: "Description 2",
      price: 20,
      discontinued: false,
      categories: ["c2"],
    },

    // Add more product objects as needed
  ];

  const menu = document.querySelector("#menu");
  const tableBody = document.querySelector("#product-table tbody");
  const selectedCategoryTitle = document.querySelector("#selected-category");

  categories.forEach(function (category) {
    const button = document.createElement("button");
    button.innerText = category.description;
    menu.appendChild(button);

    button.addEventListener("click", function () {
      showProducts(category);
    });
  });

  function showProducts(category) {
    selectedCategoryTitle.textContent = category.description;

    // Clear the current table rows
    tableBody.innerHTML = "";

    // Filter products based on the selected category and non-discontinued status
    const filteredProducts = products.filter(
      (product) =>
        product.categories.includes(category.id) && !product.discontinued
    );

    filteredProducts.forEach(function (product) {
      const row = document.createElement("tr");
      const titleCell = document.createElement("td");
      const descriptionCell = document.createElement("td");
      const priceCell = document.createElement("td");

      row.addEventListener("click", function () {
        console.log("Clicked product:", product);
        // Add your code to handle the click event on a product row
      });

      titleCell.textContent = product.name;
      descriptionCell.textContent = product.description;
      priceCell.textContent = formatCurrency(product.price);

      row.appendChild(titleCell);
      row.appendChild(descriptionCell);
      row.appendChild(priceCell);

      tableBody.appendChild(row);
    });
  }

  function formatCurrency(price) {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(price / 100);
  }
});
