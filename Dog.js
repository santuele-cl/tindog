 
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHTML() {
        const { elementId,name,avatar, age, bio} = this
        let dogHTML = `
            <div class="main">
                <div class="post-img">
                    <img src="${avatar}" alt="">
                </div>
                <div class="post-description">
                    <h2 id="dog-name">${name}, ${age}</h2>
                    <p>${bio}</p>
                </div>
            </div>
            <div class="post-buttons">
            <button 
                class="btn btn-primary" 
                id="dislike-btn"
                data-id="${elementId}"
            >
                    <img src="./images/icon-cross.png" alt="cross icon">
            </button>
            <button 
                class="btn btn-primary" 
                id="like-btn"
                data-id="${elementId}"
            >
                    <img src="./images/icon-heart.png" alt="heart icon">
            </button>
        </div>
        `
        return dogHTML
    }
    renderDogHtml(getDogHTML) {
        const { elementId } = this
        document.getElementById(elementId).innerHTML = getDogHTML()
    }
    getLikeStamp() {
        console.log(this.name)
    }
    getDislikeStamp() {

    }
    getUuid() { return this.elementId }
    getName() { return this.name }
    
}


export { Dog }