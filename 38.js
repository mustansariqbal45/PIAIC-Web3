function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi"); // Default country: "Pakistan"
describe_city("London", "United Kingdom");
describe_city("New York", "United States");
