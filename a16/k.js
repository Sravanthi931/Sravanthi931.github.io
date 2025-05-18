const products=[
    { id :1 , name : "p1" , price : 34},
    { id :2 , name : "p2" , price : 40},
    { id :3 , name : "p3" , price : 50}
]
const cart={1:4,3:5};
const orderValue = products.reduce((sum, product) => {
  if (cart[product.id]) {
    const qty = cart[product.id];
    const total = product.price * qty;
    console.log("Name: " + product.name + "Price:" + product.price + "Qty:" + qty + "Total:"+total);
    return sum + total;
  }
  return sum;
}, 0);