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
  let totalPrice = 0;
  let saleTotalPrice = 0;
  for (i = 0; i < products.length ; i++) {
    totalPrice = totalPrice + ( products[i].price * products[i].quantity );
  }
  if (promotionCode = "SALE50" ) {
    saleTotalPrice = totalPrice * 0.5 ;
  }
  else if (promotionCode = "SALE20" ) {
    saleTotalPrice = totalPrice * 0.8 ;
  }
  else {

  };

  return saleTotalPrice;
  }


console.log(calculateTotalPrice (products,promotionCode));