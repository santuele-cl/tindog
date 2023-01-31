 
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHTML() {
        const { name,avatar, age, bio } = this
        let dogHTML = `
            <div class="post-img" id="post-img">
                <img class="dog-img" src="${avatar}" alt="${name} avatar">
            </div>
            <div class="post-stamp" id="post-stamp">
                ${this.getStampHtml()}
            </div>
            <div class="post-description">
                <h2 id="dog-name">${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
        `
        return dogHTML
    }
    getStampHtml() {
        const { hasBeenLiked, hasBeenSwiped } = this
        let stampHtml = ``
        if(hasBeenLiked && hasBeenSwiped) {
            stampHtml = `
                <img 
                    class="stamp-img" 
                    src="./images/badge-like.png" 
                    alt="liked stamp"
                >
            `
        } else if(!hasBeenLiked && hasBeenSwiped) {
            stampHtml = `
                <img 
                    class="stamp-img" 
                    src="./images/badge-nope.png" 
                    alt="liked stamp"
                >
            `
        }
        return stampHtml
    }
}

export { Dog }