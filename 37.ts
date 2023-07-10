function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

make_shirt(); // Default: size = "large", message = "I love TypeScript"
make_shirt("medium"); // Default: message = "I love TypeScript", custom size = "medium"
make_shirt("small", "Hello World"); // Custom: size = "small", message = "Hello World"  