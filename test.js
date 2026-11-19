// Question #5
const products = [
    {
      name: "เสื้อยืด",
      price: 10,
      quantity: 2,
    },
    {
      name: "กางเกงยีนส์",
      price: 5,
      quantity: 3,
    },
    {
      name: "เสื้อเชิ้ต",
      price: 10,
      quantity: 5,
    },
  ];
  
  const promotionCode = ""; //บรรจุ String โค้ดส่วนลด
  
  function calculateTotalPrice (products,promotionCode) {
    let totalPrice = products[];
    let saleTotalPrice = 0;
    for (i = 0; i < products.length ; i++) {
        totalPrice = totalPrice + ( products[i].price * products[i].quantity );
    }
    console.log(totalPrice);
}
 
  
