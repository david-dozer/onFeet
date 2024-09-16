const SneaksAPI = require('changed-sneaks-api');
const sneaks = new SneaksAPI();

//getProducts(keyword, limit, callback) takes in a keyword and limit and returns a product array 
sneaks.getProducts("Kobe", 5, function(err, products){
    console.log(products)
})