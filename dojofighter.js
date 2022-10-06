// https://turmeric.seircohort.com/frontend-fundamentals/week-2/day-3/lab/fighter

class Fighter {
    constructor (name) {
        this.name = name
        this.health = 10
        this.strength = Math.floor(Math.random() * 6) + 5
        this.defense = Math.floor(Math.random() * 6) + 5
        console.log(`A new Challenger has entered the ring!`)
        console.log(`Welcome, ${this.name}! You have ${this.strength} strength and ${this.defense} defense.`)
    }

    attack (target) {
        let dmg = this.strength - target.defense
        if (dmg > 0) {
            target.health = target.health - dmg
        }
        else {dmg = 0}
        console.log(`${this.name} did ${dmg} damage to ${target.name}, who has ${target.health} health left`)
    }
}

fighterArray = [
    "E. Honda",
    "M. Bison",
    "Chun Li",
    "Dhalsim",
    "Guile",
    "Balrog",
    "Sagat",
    "Vega",
    "Blanka",
    "Zangief",
    "Ken",
    "Ryu"
]


const player1 = new Fighter(fighterArray[Math.floor(Math.random() * fighterArray.length)])
const player2 = new Fighter(fighterArray[Math.floor(Math.random() * fighterArray.length)])
let counter = 50
while (player1.health > 0 && player2.health > 0 && counter > 0) {
    player1.attack(player2)
    player2.attack(player1)
    counter -= 1
}

if (player1.health < player2.health) {
    console.log(`${player2.name} is the winner!`)
}
else if (player2.health < player1.health) {
    console.log(`${player1.name} is the winner!`)
}
else {
    console.log(`${player1.name} and ${player2.name} are evenly matched!`)
}