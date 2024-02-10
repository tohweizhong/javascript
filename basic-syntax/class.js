class Profession{
  constructor(name, hp, magical){
    this.name = name
    this.hp = hp
    this.magical = magical
  }
}

let fighter = new Profession("Fighter", 15, false)
console.log(fighter)


let wizard = new Profession("Wizard", 10, true)
if(wizard.magical == true)
  wizard.spell = function(){console.log("Fireball!")}

wizard.spell()
