interface Car {
    brand: string;
    model: string;
    year: number;
}

interface CarBrand {
    brand: string;
}

function getCar(vehicle: Car | CarBrand): string {
    if ("model" in vehicle && "year" in vehicle) {
        return `This is a ${vehicle.brand} ${vehicle.model} from ${vehicle.year}`;
    }
    return `This is a ${vehicle.brand}`;
}

console.log(getCar({ brand: "Toyota", model: "Corolla", year: 2020 }));
console.log(getCar({ brand: "Ford" }));