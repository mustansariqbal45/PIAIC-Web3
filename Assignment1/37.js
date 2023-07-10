function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
make_shirt(); // Default: size = "large", message = "I love TypeScript"
make_shirt("medium"); // Default: message = "I love TypeScript", custom size = "medium"
make_shirt("small", "Hello World"); // Custom: size = "small", message = "Hello World"  
