// Trending Now images slide arrow 
let imgs = document.querySelector(".imgs")
let leftArrow = document.getElementById("left")
let rightArrow = document.getElementById("right")

function updateArrow() {
    let birat = 4;  //  sometime margin error
    //  agar scroll start me ho to left arrow hide   
    if (imgs.scrollLeft <= 0) {
        leftArrow.parentElement.classList.add("Arrow-hide")
    } else {
        leftArrow.parentElement.classList.remove("Arrow-hide")
    }
    //  agar scroll end tak pahuch jaye to right arrow hide
    if (imgs.scrollLeft + imgs.clientWidth >= imgs.scrollWidth - birat) {
        rightArrow.parentElement.classList.add("Arrow-hide")
    } else {
        rightArrow.parentElement.classList.remove("Arrow-hide")
    }
}

rightArrow.addEventListener("click", () => {
    imgs.scrollBy({ left: imgs.clientWidth });
})
leftArrow.addEventListener("click", () => {
    imgs.scrollBy({ left: -imgs.clientWidth });
})

imgs.addEventListener("scroll", updateArrow);    //  scroll hone par arrows update
updateArrow();   //  initial state set karna 



// Frequently Asked Questions answer-so
let ans = document.querySelectorAll(".ans");

ans.forEach((element) => {
    element.onclick = () => {
        let plus = element.querySelector("svg")
        let answer = element.nextElementSibling;

        if (answer.classList.contains("answer-so")) {
            answer.classList.remove("answer-so")
            plus.style.transform = "rotate(0deg)"
        }
        else {
            ans.forEach((ele) => {
                ele.nextElementSibling.classList.remove("answer-so")
                ele.querySelector("svg").style.transform = "rotate(0deg)"
            })
            answer.classList.add("answer-so")
            // answer.classList.add("answer-so")
            plus.style.transform = "rotate(45deg)"
        }
    }
})

