const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];


// Duplicate sku values in the shipment should be ignored.
// When the zone segment is not provided, it should default to "general".
// The qty value should be converted to a number.

  
function parseShipment(rawData){
const skuPresent = new Set();
let arr = []
  for(let str of rawData){
    let split = str.split("|");
    if(skuPresent.has(split[0])){
       continue;
    }

      skuPresent.add(split[0]);
      let val ={
      sku: split[0],
      name: split[1],
      qty: Number(split[2]),
      expiry: split[3],
      zone: split[4] ?? "general"
      };
       arr.push(val)
    
     
  };
  console.log(skuPresent)
   console.log(arr);
  return arr;
  
}
parseShipment(rawData);

