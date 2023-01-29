 
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getName() {
        console.log(this.name)
    }
}


export { Dog }