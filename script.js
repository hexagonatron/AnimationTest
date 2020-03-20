const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const animationContainer = document.querySelector(".animation-container")

let squareEl = document.querySelector(".square")
let squareEl1;

nextBtn.addEventListener("click", (e) => {
    squareEl.classList.add("animate-left");
    squareEl1 = createSquare("right");
    setTimeout(removeCurrent, 2000);
    
})
prevBtn.addEventListener("click", (e) => {
    squareEl.classList.add("animate-right");
    squareEl1 = createSquare("left");
    setTimeout(removeCurrent, 2000);
})

const createSquare = (position) => {
    var newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;

    if(position === "left"){
        console.log("Test");
        newSquare.classList.add("animate-left");
        animationContainer.appendChild(newSquare);
        setTimeout(() => {
            newSquare.classList.remove("animate-left");
        },20);
    } else if(position === "right"){
        console.log("Test");
        newSquare.classList.add("animate-right");
        animationContainer.appendChild(newSquare);
        setTimeout(() => {
            newSquare.classList.remove("animate-right");
        },20);
    }

    return newSquare;

}

const removeCurrent = () => {
    squareEl.parentNode.removeChild(squareEl);
    squareEl = squareEl1;
}