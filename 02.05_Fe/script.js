
const main = document.querySelector("main");
// 1

for (let i = 100; i >= 50; i--) {
    if (i % 10 === 0) {
        main.innerHTML +=  `<div class="numbers">${i}</div>`
    }
    
}

// 2
const namesContainer = ["Olga", "Lena", "Anna", "Ina"]
for (let i = 0; i < namesContainer.length; i++) {
    main.innerHTML += `<div class="strings_container">
                                <p>${namesContainer[i]}</p>
                        </div>`
}

// 3
const users = [
    {
        first_name: "Olga",
        last_name: "Vel",
        age: 35
    },
    {
        first_name: "Lena",
        last_name: "Let",
        age: 16
    },
    {
        first_name: "Anna",
        last_name: "Hor",
        age: 37
    },
    {
        first_name: "Ina",
        last_name: "Sun",
        age: 15 
    },
]
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        main.innerHTML += `<div class="users_container">
                                    <h2>${users[i].first_name}</h2>
                                    <h3>${users[i].last_name}</h3>
                                    <p>${users[i].age} years old</p>
                            </div>`
    }
}
