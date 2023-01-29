// Remember to import the data and Dog class!
import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

let dogsArray = ["Rex","Bella","Teddy"]

const getNewdog = () => {
    const nextDogData = dogs[dogsArray.shift()]
    return new Dog(nextDogData)
}