function add(...values) {
  const products = values[0]; 
  const cart = { 1: 4, 3: 5 }; 
  const orderTotal = products.reduce((total, product) => {
    const qty = cart[product.id] || 0;

    if (qty > 0) {
      const itemTotal = product.price * qty;
      console.log(`Name: ${product.name}, Price: ${product.price}, Qty: ${qty}, Total: ${itemTotal}`);
      return total + itemTotal;
    }

    return total;
  }, 0); 

  console.log("Order Value:", orderTotal);
}

const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

add(products);
