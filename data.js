import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
const dogs = [
    {
        elementId: uuidv4(),
        name: "Rex",
        avatar: "/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false,
    },
    {
        elementId: uuidv4(),
        name: "Bella",
        avatar: "public/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false,
    },
    {
        elementId: uuidv4(),
        name: "Teddy",
        avatar: "public/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false,
    }
]

export { dogs }