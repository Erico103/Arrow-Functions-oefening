const l = console.log()

//deel A
// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()


const ikRockArrowFunctions2 =  () =>  console.log("Joe, ik rock de arrow functions!!!!");
    
ikRockArrowFunctions2()

//deel B
//functie op 1 regel
const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();

  const fivePlusSeven1 = () => console.log(5+7)

  fivePlusSeven1()

  //Deel C
  const myFunction = (a, b) => a+b;
   
  console.log(myFunction(5, 2))

  //Deel D

  const addFive = (a) => a + 5;

  console.log(addFive(6));

  //Deel E
const createObject = () => ({greeting : 'hello'})

console.log(createObject());


 
