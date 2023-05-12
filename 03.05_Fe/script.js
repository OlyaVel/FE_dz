function toggleRedSquare() {
    const redSquare = document.querySelector('.red-square')
    redSquare.classList.toggle('green-square')
}


function togglePinkSquare() {
    const pinkSquare = document.querySelector('.pink-square')
    const blueSquare = document.querySelector('#colorBlue')
    pinkSquare.classList.toggle('blue-square')
    console.log(blueSquare.id)
}


function toggleYellowSquare() {
    const yellowSquare = document.querySelector('.yellow-square')
    yellowSquare.classList.toggle('yellow-square-big')
}


const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex architecto tempore autem voluptas aliquid dicta nisi libero illo odit. Libero voluptatibus repellendus mollitia dolor minima reiciendis suscipit aperiam optio. Assumenda iste aut, sed aperiam laudantium ipsum accusamus dolorum voluptates atque consequatur amet cum labore? Earum nemo itaque dolorem placeat dolore molestias sint repudiandae eum mollitia? Minus iusto at ab perferendis illum pariatur culpa iure qui corrupti rerum ad sed, quibusdam fugiat atque fuga voluptatem architecto cum error voluptates. Eligendi, enim provident deserunt culpa doloremque reiciendis repellendus consequuntur deleniti beatae in iure tempore a quibusdam architecto saepe nihil quia eaque ad sequi. Provident tempore porro incidunt impedit molestias dignissimos deserunt quia accusantium nobis rem officiis nam dolorem modi commodi cum deleniti recusandae quas, ipsam, sed necessitatibus dicta natus ex ad nostrum! Sequi omnis necessitatibus et dignissimos veritatis veniam reprehenderit vitae, incidunt, dolorum explicabo numquam modi aliquid animi ab dolores ipsam dicta?"
const span1 = document.querySelector("#span1")
const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", function () {
    span1.innerHTML = `<p>
        ${text}
        </p>`
    span1.style.backgroundColor = "blue"
})


const span2 = document.querySelector("#span2")
const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", function () {
    if (span2.innerHTML == "") {
        span2.innerHTML += `<p id = "blue">
        ${text}
        </p>`
        const blue = document.querySelector("#blue")
        blue.style.backgroundColor = "blue"
    }
    else if (blue.style.backgroundColor == "blue") {
        span2.innerHTML += `<p id = "green">
        ${text}
        </p>`
        const blue = document.querySelector("#green")
        blue.style.backgroundColor = "green"
    }
})


/* Решение задания №2
const main = document.querySelector("main")
const buttons = document.querySelectorAll(".btn")
buttons.forEach(function(button){
    button.addEventListener("click", function (event) {
        if (event.target.id == "img") {
            main.style.background = "url(./r001-020.jpg)"
        } else {
            const color = event.target.id
            main.style.background = color
        }
    })
})
*/