const inquirer = require("inquirer")
const {Triangle, Circle, Square} = require("./lib/shapes")
// inquirer.prompt ([
// { name: "color", type: "input", message:" Please provide the text color"},
// { name: "shape", type: "input", message:" Please provide the shape"},
// { name: "background", type: "input", message:" Please provide the background color"},
// ])


inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter 3 characters for your text',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter the color of the text',
        },

        {
          type: 'list',
          name: 'shape',
          message: 'Please chose either circle, triangle or square for the shape of your svg',
          choices: ["circle", "triangle", "square"]
        },
       
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter the color of the shape',
        },

      ])
    
    .then (function(answers)  {
      console.log("answers~~ ",answers)
    //   if(answers.shape === "circle"){
    //   new Circle(answers.shapeColor)
    // }
    })
 



// post.printMetaData();