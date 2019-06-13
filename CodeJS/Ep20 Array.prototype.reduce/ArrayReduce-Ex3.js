// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
   return arr.reduce( (totalCost,eleArr)=> totalCost + eleArr.price,0);
  //  return arr.reduce(function(totalCost,b) {
  //    console.log(totalCost,b.price)
  //    return totalCost + b.price;
  //  },0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];
shoppingSpree(wishlist); // 227005
