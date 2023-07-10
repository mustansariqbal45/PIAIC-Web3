var placesToVisit:String[] = ["England", "United States", "Pakistan", "India", "Canada"];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort());

console.log("\nOriginal Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log(placesToVisit.sort());

console.log("\nOriginal Order:");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order:");
console.log(placesToVisit);

console.log("\nReversed Order:");
console.log(placesToVisit.reverse());

console.log("\nOriginal Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log(placesToVisit.sort());

console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());