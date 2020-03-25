const likeButton = document.querySelector('.like-button')
const groupCuff = document.querySelector('.group-cuff')
const groupBottomRight = document.querySelector('.group-bottom-right')
const groupTopRight = document.querySelector('.group-top-right')
const groupTopLeft = document.querySelector('.group-top-left')
const groupLeft = document.querySelector('.group-left')
let clickCount = 0


likeButton.addEventListener('click', () => {
    clickCount ++
    likeButton.classList.add('bigger')
    if(clickCount >= 12) {
        groupLeft.classList.add('cracked')
        likeButton.classList.add('exploded')
    } else if (clickCount >= 9) {
        groupBottomRight.classList.add('cracked')
    } else if (clickCount >= 6) {
        groupTopRight.classList.add('cracked')
    } else if (clickCount >= 3) {
        groupTopLeft.classList.add('cracked')
    }
})

likeButton.addEventListener('transitionend', () => {
    likeButton.classList.remove('bigger')
})