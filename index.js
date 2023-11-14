const inquirer = require("inquirer")
inquirer.prompt ([
{ name: "color", type: "input", message:" Please provide the text color"},
{ name: "shape", type: "input", message:" Please provide the shape"},
{ name: "background", type: "input", message:" Please provide the background color"},
])



.then (function(answers)  {
 console.log( answers)
})



