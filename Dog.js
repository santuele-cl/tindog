// Create the Dog class here
class Dog {
    constructor(obj) {
        this.name = obj.name
        this.avatar = obj.avatar
        this.age = obj.age
        this.bio = obj.bio
        this.hasBeenSwiped = obj.hasBeenSwiped
        this.hasBeenLiked = obj.hasBeenLiked
    }
    getName() {
        console.log(this.name)
    }
}


export { Dog }