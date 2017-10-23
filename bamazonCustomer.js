var inquirer = require('inquirer');
var mysql = require('mysql')
//connection to bamazon/
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "bamazon"
});

var dbArr = [];
//Connnect to mySQL. Run itemList() function
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as " + connection.threadId);
  //port these results as list items in inquirer.
  itemList();
  // itemQuant();
  connection.end();
});

//Running this application will first display all of the items available for sale.
//Include the ids, names, and prices of products for sale
function itemList() {
  connection.query('SELECT * FROM products', function(err, result) {
    if (err) throw err;
    for (i = 0; i < result.length; i++) {
      dbArr.push(result[i].item_id +
        ' | ' +
        result[i].product_name +
        ' | ' +
        '$' +
        result[i].price);
    };
    // console.log(dbArr);
    inquirer.prompt({
      name: "item",
      type: "list",
      /*
       The app should then prompt users with two messages.

         * The first should ask them the ID of the product they would like to buy.
         */
      message: "What item would you like to purchase?",
      choices: dbArr
    }).then(function(answer) {
      console.log("You selected " + answer.item);
      console.log("How many of " + answer.item + "would you like?");
      return answer.item;
    });
  });
};

function itemQuant() {
  connection.query('SELECT * FROM products', function(err, result) {
      if (err) throw err;
  /** The second message should ask how many units of the product they would like to buy*/
  inquirer.prompt({

  }).then(function(answer) {
    var query = 'SELECT * FROM products WHERE stock_quantity =?'


    })


  });
};
//Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
//If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

/* However, if your store _does_ have enough of the product, you should fulfill the customer's order.
 * This means updating the SQL database to reflect the remaining quantity.
 * Once the update goes through, show the customer the total cost of their purchase.
 */
