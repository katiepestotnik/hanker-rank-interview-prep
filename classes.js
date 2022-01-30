class Animal {
    constructor(sound, ears, legs) {
        this.sound = sound
        this.ears = ears
        this.legs = legs
    }
    makeSound() {
        console.log(this.sound)
    }
}
const dog = new Animal('woof', 2, 4)
const pig = new Animal('oink', 2, 4)
const cow = new Animal('moo', 2, 4)

console.log(dog, pig, cow)
dog.makeSound()

class Pig extends Animal {
    static count = 0
    constructor(name) {
        super('oink', 2, 4)
        this.name = name
        Pig.count++
    }
    rollInMud() {
        console.log(`${this.name} like to roll in the mud`)
    }
    makeSound() {
        console.log('new make sound')
    }
    static countPigs() {
        return Pig.count
    }
}
const babe = new Pig('babe')
console.log(babe)
babe.rollInMud()
babe.makeSound()

const pig1 = new Pig("1")
const pig2 = new Pig("2")
const pig3 = new Pig("3")
console.log(Pig.countPigs())