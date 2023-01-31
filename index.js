// Remember to import the data and Dog class!
import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

const dislikeBtn = document.getElementById('dislike-btn')
const likeBtn = document.getElementById ('like-btn')

let dogsArray = ["Rex","Bella","Teddy"]

document.addEventListener('click', (event) => {

    if(event.target.dataset.id) {
        if(event.target.id === 'like-btn') {
            handleLikeBtnClick(event.target.dataset.id)
        } else if(event.target.id === 'dislike-btn') {
            handleDislikeBtnClick(event.target.dataset.id)
        }
    } else if (event.target.parentElement.dataset.id) {
        if(event.target.parentElement.id === 'like-btn') {
            handleLikeBtnClick(event.target.parentElement.dataset.id)
        } else if(event.target.parentElement.id === 'dislike-btn') {
            handleDislikeBtnClick(event.target.parentElement.dataset.id)
        }
    }

}) 

const handleLikeBtnClick = (id) => {
    // console.log(`${id} hasBeenSwiped = true`)
    // console.log(`you have liked ${id}`)
    // console.log(`${id} hasBeenLike = true`)
    // console.log("adding liked stamp")
    // console.log("displaying new dog in 3 secons")
    // console.log("getNewDog()")
    // console.log("renderNewDog()")
    dog = getNewDog()
    renderDogHtml(dog)
    // setTimeout(()=> {
    //     console.log("getNewDog()")
    //     console.log("renderNewDog()")
    //     dog = getNewDog()
    // }, 3000)
}

const handleDislikeBtnClick = (id) => {
    // console.log(`${id} hasBeenSwiped = true`)
    // console.log(`you have disliked ${id}`)
    // console.log("adding disliked stamp")
    // console.log("displaying new dog in 3 secons")
    // console.log("getNewDog()")
    // console.log("renderNewDog()")
    dog = getNewDog()
    renderDogHtml(dog)
    // setTimeout(()=> {
    //     console.log("getNewDog()")
    //     console.log("renderNewDog()")
    //     dog = getNewDog()
    //     renderDogHtml(dog())
    // }, 3000)
}

const renderDogHtml = (dog) => {
    document.getElementById('dog-container').innerHTML = dog.getDogHTML()
}

function getDogData(dogsDataArr, dogName) {
    const data = dogsDataArr.filter( dog => {
        return dog.name === dogName
    })[0]
    return data
}


const getNewDog = () => {
    if(!dogsArray.length > 0)  {
        dogsArray = ["Rex","Bella","Teddy"]
    } 
    const dogName = dogsArray.shift()

    return new Dog(getDogData(dogs,dogName))
}

let dog = getNewDog()
renderDogHtml(dog)





















// let dogsArray = ["Rex","Bella","Teddy"]

// const getNewdog = () => {
//     const nextDogData = dogs[dogsArray.shift()]
//     return new Dog(nextDogData)
// }