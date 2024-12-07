import Log from "./Log.js";
import Engine from "./Engine.js";
import Wheels from "./Wheels.js";
import Car from "./Car.js";

Log.title("Car Example");
const car = new Car(new Engine(), new Wheels());
car.drive();
