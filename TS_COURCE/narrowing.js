function getCar(vehicle) {
    if ("model" in vehicle && "year" in vehicle) {
        return "This is a ".concat(vehicle.brand, " ").concat(vehicle.model, " from ").concat(vehicle.year);
    }
    return "This is a ".concat(vehicle.brand);
}
console.log(getCar({ brand: "Toyota", model: "Corolla", year: 2020 }));
console.log(getCar({ brand: "Ford" }));
