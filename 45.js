function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = Object.keys(option)[0];
        var value = option[key];
        car.options[key] = value;
    }
    return car;
}
var car1 = createCar("Toyota", "Corolla", { color: "blue" }, { year: 2022 });
console.log(car1);
var car2 = createCar("Honda", "Civic", { color: "red" }, { features: ["GPS", "Sunroof"] });
console.log(car2);
