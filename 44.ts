function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
      console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

makeSandwich("Bread", "Ham", "Cheese");
console.log("---");
makeSandwich("Bread", "Turkey", "Lettuce", "Tomato");
console.log("---");
makeSandwich("Bread", "Peanut Butter", "Jelly", "Banana");  