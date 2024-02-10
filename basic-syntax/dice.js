let d6 = function(){
  return(Math.floor(6 * Math.random()) + 1)
}

//console.log(d6())

let diceRoller = function(sides){

  return(Math.floor(sides * Math.random()) + 1)

}

for(i=0; i<5; i++)
  console.log(diceRoller(18))
