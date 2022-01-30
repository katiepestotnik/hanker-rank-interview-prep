const key = 'weapon'

const robot = {
    name: 'Destructor',
    serial: 1,
    isEvil: true,
    ["Gas Tank"]: 'Full',
    [key]: "Cannons",
    speak: () => {
        console.log('exterminate')
    },
    attack: () => {
        console.log(`${robot.name} is attacking with ${robot.weapon}`)
    }
  }
robot.speak()
robot.attack()

const robotEmpire = {
    army: [],
    build: function() {
        const newRobot = {
            name: `Robot Solider ${this.army.length}`,
            serial: this.army.length,
            weapon: 'Flame throwers',
            attack: () => {
                console.log('attack')
            }
        }
        robotEmpire.army.push(newRobot)
    }
}
robotEmpire.build()
console.log(robotEmpire.army)
robotEmpire.build()

for (let index = 0; index < 20; index++) {
    robotEmpire.build()
}
// console.log(robotEmpire.army)

for (const robot of robotEmpire.army) {
    if (robot.serial % 2 === 0) {
        robot.attack()
    }
}

const brokenRobot = {
    part1: "arm",
    part2: "lazer",
    part3: "wheels"
}

const {part1, ...theRest} = brokenRobot

console.log(part1, theRest)