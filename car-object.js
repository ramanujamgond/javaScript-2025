// create a car object with properties brand, model, year, and color. Then log each property using dot notation.

const car = {
    brand: "Land Rover",
    model: "Defender 130",
    year: 2022,
    color: "jet black",
    carDetails: function () {
        console.log("The car brand is " + this.brand + "It was launch is year " + this.year + "The model and color of car is " +
            this.model, this.color);
    }
}

car.carDetails();

car.owner = "Ramanujam Gond";
car.color = "royal white";

delete car.year;

console.log(car);