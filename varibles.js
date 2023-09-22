// Variables in JavaScript are used to store and manage data in your programs. 
// They are like containers that hold different types of information.


// Declaration: You declare a variable using the var, let, or const keyword, followed by the variable name. For example: 


// diffenence between let ,var ,const


// but before difference we have to learn naming convension of varibles 
// rules for declare variable name in javascript
// Variable names can include letters, digits, underscores, and dollar signs.
//  They cannot start with a digit and are case-sensitive. 
// they can start with underscore and dollar
// Choose meaningful names that describe the variable's purpose.

//  example :
let firstName = "Alice";
let user_age = 25;
let price = 10.99; 



// difference 1.....

//   let is globally and blocked scope on other hand const and let are blocked scope 
   let a = 10 ;
   if(a>8){
    let a = 20 
    console.log(`the value of a inside the block is ${a} `)
   }
   console.log(`the value of a outside the block is ${a} `)
// this is also same in case of const but here in the case of var the var is both blocked and globally  scoped 
var tester = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
    // console.log(hello); // error: hello is not defined
 
    // the example of global  scope
    var a1 = 10 ;
   if(a1>8){
    var a1 = 20 
    console.log(`the value of a inside the block is ${a1} `)
   }
   console.log(`the value of a outside the block is ${a1} `)

// here we clearly see that a1 is also presant outside the block





// the second main difference between let var and const is : 
 
// we can redeclare and update(reinitialize) the var but in case of let we can only do the reinitialization of varible 
// and in case of const we cannot do nothing for example
 let var1 = 10;
 console.log(var1);
//  let var1 = 20;  // now this show an error because we can only reinitialize the varible not declare 
  var1 = 20 
  console.log(var1);



  //   but in case of var we do both reinitializaton and redeclaration
var var2 = 20 ;
console.log(var2)
var var2 = 30; //now this show know error because we can  do both reinitializaton and redeclaration
console.log(var2)
 var2 = 40 ;




 //   in  const we cannot do reinitializaton and redeclaration
const var3 = 10;
// var3 = 40 // it show error 
  



//  hoisting  : // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 


// hoisting of var variable...............
 

// This means that if we do this:
// console.log(myName)
var myName = "ashu" ;
// the output is undefined because the var variables are hoisted to the top of their scope and initialized with a value of undefined.

// it is interpreted as 
    var greeter;
    // console.log(greeter); // greeter is undefined
    greeter = "say hello"

   
   
   
   
    // hoisting of let variable................
    // Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined
    // , the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
     
    // console.log(`the value of user is ${user}`)
    let user = "ashu"

    
    
    
    
    //hoisting of const variable..........................
    // Just like let, const declarations are hoisted to the top but are not initialized.

    // console.log(`the value of user1 is ${user1}`)
    const user1 = "ashu"

    // overview : 
    // var declarations are globally scoped or function scoped while let and const are block scoped.
    // var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
    // They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
    // While var and let can be declared without being initialized, const must be initialized during declaration.

    //  Note :
    //  This behavior is somehow different when it comes to objects declared with const.
    //  While a const object cannot be updated, the properties of this objects can be updated.
    //   Therefore, if we declare a const object as this:

    const greeting = {
        message: "say Hi",
        times: 4
    }
    // while we cannot do this:

    // greeting = {
    //     words: "Hello",
    //     number: "five"
    // } // error:  Assignment to constant variable.
//   we can do this:

    greeting.message = "say Hello instead";
    // const aaaaaa; here it shows error because it shoule be initialize 
    let aaaaa;
    var bbbbb;
