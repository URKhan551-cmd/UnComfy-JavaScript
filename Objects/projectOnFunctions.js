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

  




  // READMEE
  # Shipment Processing & Pantry Restock Planner

## Project Overview

This project simulates a pantry inventory management system that processes incoming shipment data, removes duplicate shipment records, compares incoming items with existing pantry inventory, creates restock decisions, groups actions by storage zone, and safely clones pantry data without modifying the original inventory.

The project demonstrates important JavaScript concepts:

* Array and object manipulation
* Data transformation pipelines
* `Set` for duplicate detection
* Array methods (`map`, `some`)
* Object grouping using dynamic keys
* Deep copying objects
* Functional programming principles

---

# Data Flow

The application processes data through multiple stages:

```
Raw Shipment Strings
        |
        v
parseShipment()
        |
        v
Parsed Shipment Objects
        |
        v
planRestock()
        |
        v
Restock Actions
        |
        v
groupByZone()
        |
        v
Final Grouped Result
```

---

# Function Documentation

## 1. parseShipment(rawData)

### Purpose

Converts raw shipment strings into structured JavaScript objects and removes duplicate shipment records based on SKU.

### Input

An array of raw shipment strings:

```javascript
[
 "A10|Tomatoes|5|2027-01-01",
 "B21|Bananas|10|2027-01-01"
]
```

### Processing

* Splits each string using `"|"` delimiter.
* Extracts product information:

  * SKU
  * Name
  * Quantity
  * Expiration date
  * Storage zone
* Uses a `Set` to track previously processed SKUs.
* Ignores duplicate SKU entries.

### Output

Returns an array of shipment objects:

```javascript
[
 {
   sku: "A10",
   name: "Tomatoes",
   qty: 5,
   expires: "2027-01-01",
   zone: "general"
 }
]
```

---

# 2. planRestock(pantry, shipment)

### Purpose

Compares incoming shipment items against the current pantry inventory and decides what action should be taken.

### Decision Rules

| Condition                    | Action  |
| ---------------------------- | ------- |
| Quantity <= 0                | discard |
| SKU exists in pantry         | restock |
| SKU does not exist in pantry | donate  |

### Processing

For every shipment item:

1. Checks quantity validity.
2. Searches pantry SKU using `.some()`.
3. Creates an action object.

### Output

Returns:

```javascript
[
 {
   type: "restock",
   item: {...}
 },
 {
   type: "donate",
   item: {...}
 }
]
```

---

# 3. groupByZone(actions)

### Purpose

Organizes generated actions according to the item's storage zone.

### Processing

* Reads:

```javascript
action.item.zone
```

* Creates a dynamic object key for each zone.
* Stores related actions inside zone arrays.

### Example Output

```javascript
{
 fridge: [
   {
     type:"restock",
     item:{...}
   }
 ],

 general:[
   {
     type:"discard",
     item:{...}
   }
 ]
}
```

---

# 4. clonePantry(pantry)

### Purpose

Creates a deep copy of the pantry inventory to prevent accidental modification of the original data.

### Why?

JavaScript objects are reference-based.

A direct assignment:

```javascript
const copy = pantry;
```

would modify the original pantry when the copy changes.

Instead:

```javascript
pantry.map(item => ({...item}))
```

creates:

* A new array
* New objects inside the array

### Output

A separate pantry copy that can be safely modified.

---

# Key JavaScript Concepts Practiced

## Set for Duplicate Detection

```javascript
const skuPresent = new Set();
```

Used to maintain unique SKUs efficiently.

---

## Array.some()

Used to check whether an item exists:

```javascript
pantry.some(item => item.sku === shipment.sku)
```

Returns:

```javascript
true / false
```

---

## Dynamic Object Keys

Used for grouping:

```javascript
resultObj[zone]
```

Creates:

```javascript
{
 fridge:[]
}
```

---

## Spread Operator

Used for object cloning:

```javascript
{...item}
```

Creates a new object with copied properties.

---

# Final Execution Pipeline

```javascript
const shipment = parseShipment(rawData);

const actions = planRestock(pantry, shipment);

const groupedObject = groupByZone(actions);

console.log(groupedObject);
```

The final output provides a categorized view of all shipment decisions grouped by storage location.

---

# Skills Demonstrated

* Data parsing
* Data normalization
* Inventory management logic
* Object-oriented data handling
* JavaScript ES6+ features
* Clean function separation
* Problem-solving with algorithms and data structures

  return arr;
  
}
parseShipment(rawData);

