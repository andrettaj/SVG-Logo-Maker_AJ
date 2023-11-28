class Shape {
    constructor ( color ){
        this.color = color     
    }
}

class Circle extends Shape {
    constructor(color){
        super(color)
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor(color){
        super(color)
    }
    render(){
        return `<polygon points="150,25 250,175 50," fill="${this.color}" />`
    }
}

class Square extends Shape {
    constructor(color){
        super(color)
    }
    render(){
        return `<rect x="50" y="25" width="150" height="150" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square}