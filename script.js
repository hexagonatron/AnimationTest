const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const animationContainer = document.querySelector(".animation-container")

let squareEl = document.querySelector(".square")
let squareEl1;

nextBtn.addEventListener("click", (e) => {
    removeNode(squareEl, "left");
    squareEl = createSquare("right");
    
})
prevBtn.addEventListener("click", (e) => {
    removeNode(squareEl, "right");
    squareEl = createSquare("left");
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
        },10);
    } else if(position === "right"){
        console.log("Test");
        newSquare.classList.add("animate-right");
        animationContainer.appendChild(newSquare);
        setTimeout(() => {
            newSquare.classList.remove("animate-right");
        },10);
    }

    return newSquare;

}

const removeNode = (node, position) => {
    node.classList.add(`animate-${position}`);
    setTimeout(() => {
        node.parentNode.removeChild(node);
    }, 2000);
}