function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string; modelName: string; options: { [key: string]: any } } {
    const car = {
      manufacturer: manufacturer,
      modelName: modelName,
      options: {}
    } as { manufacturer: string; modelName: string; options: { [key: string]: any } };
  
    for (let option of options) {
      const key = Object.keys(option)[0];
      const value = option[key];
      car.options[key] = value;
    }
  
    return car;
  }
  
  const car1 = createCar("Toyota", "Corolla", { color: "blue" }, { year: 2022 });
  console.log(car1);
  
  const car2 = createCar("Honda", "Civic", { color: "red" }, { features: ["GPS", "Sunroof"] });
  console.log(car2);
  