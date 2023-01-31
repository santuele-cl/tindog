import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

// Save element in a variable for easy access
const likeBtn = document.getElementById('like-btn')
const dislikeBtn = document.getElementById('dislike-btn')

let disableBtnBool = false

// This program will loop through this dogs array
let dogsArray = ["Rex","Bella","Teddy"]

document.addEventListener('click', (event) => {

    // Check if the target element are the buttons or their child
    if(event.target.id === 'like-btn' || event.target.parentElement.id === 'like-btn') {
        handleLikeBtnClick()
    } else if (event.target.id === 'dislike-btn' || event.target.parentElement.id === 'dislike-btn') {
        handleDislikeBtnClick()
    }
}) 

const toggleBtn = () => {
    // Toggle  buttons on/off after interaction
    disableBtnBool = !disableBtnBool
    likeBtn.disabled = disableBtnBool
    dislikeBtn.disabled = disableBtnBool
}

const handleLikeBtnClick = () => {

    // Set hasBeenSwiped to true if user like/dislike the pic
    dog.hasBeenSwiped = true

    // Toggle the hasBeenLiked boolean
    // dog.hasBeenLiked = dog.hasBeenLiked ? false : true
    dog.hasBeenLiked = true
    
    // Re-render Dog html after interaction 
    renderDogHtml()
    likeBtn.classList.toggle('liked')

    // Toggle off buttons after liking
    toggleBtn()

    // Generate new dog image after 1.5secs
    setTimeout(() => {
        dog = getNewDog()
        renderDogHtml(dog)
        likeBtn.classList.toggle('liked')

        // Toggle on buttons getting new Dog obj
        toggleBtn()
    },2000)

}

const handleDislikeBtnClick = () => {
   
    // Set hasBeenSwiped to true if user like/dislike the pic
    dog.hasBeenSwiped = true

    // Toggle the hasBeenLiked boolean
    dog.hasBeenLiked = false

    // Re-render Dog html after interaction 
    renderDogHtml()
    dislikeBtn.classList.toggle('disliked')

    // Disable buttons after liking / disliking
    toggleBtn()

    // Generate new dog image after 1.5secs
    setTimeout(() => {
        dog = getNewDog()
        renderDogHtml(dog)
        dislikeBtn.classList.toggle('disliked')

        // Toggle on buttons getting new Dog obj
        toggleBtn()
    },2000)
}

const renderDogHtml = () => {
    document.getElementById('post-container').innerHTML = dog.getDogHTML()
}

function getDogData(dogsDataArr, dogName) {
    const data = dogsDataArr.filter( dog => {
        return dog.name === dogName
    })[0]
    return data
}

const getNewDog = () => {
    if(!dogsArray.length > 0)  {
        dislikeBtn.classList.remove('disliked')
        likeBtn.classList.remove('liked')

        const postContainer = document.getElementById('post-container')
        postContainer.innerHTML = `
            <div class="empty">
                <i class="fa-regular fa-hourglass"></i>
                <p>Empty feed.</p>
                <p> Refresh to load.</p>
            </div>
        `
    } else {
        return new Dog(getDogData(dogs,dogsArray.shift()))
    }
    
}

let dog = getNewDog()
renderDogHtml(dog)





















// let dogsArray = ["Rex","Bella","Teddy"]

// const getNewdog = () => {
//     const nextDogData = dogs[dogsArray.shift()]
//     return new Dog(nextDogData)
// }