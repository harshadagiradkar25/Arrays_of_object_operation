let cars = [];
cars.push({ make: "Toyota", model: "Camry", year: 2018});
cars.push({ make: "Toyota", model: "Camry", year: 2018});
cars.push({ make: "Toyota", model: "Camry", year: 2018});

cars.shift();

cars.push({ make: "Honda", model: "Civic", year: 2020 });

cars[1].model = "Accord";

console.log(cars);
