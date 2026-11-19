// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

let minInventory = inventory[0].quantity;
let minInventoryName = inventory[0].name;

for (i = 0; i < inventory.length ; i++) {
  if( inventory[i].quantity < minInventory ) {
      minInventory = inventory[i].quantity;
      minInventoryName = inventory[i].name;
  }
};

console.log("สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " + minInventoryName + " ซึ่งมี " + minInventory +" ชิ้น");