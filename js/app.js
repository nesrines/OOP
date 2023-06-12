//TASK-1
let AreaOfTheCircle = r => {
    if (isNaN(r)) return "It's not a Number.";
    else if (r < 0) return "Radius can't be negative.";
    else return Math.PI * r ** 2;
}
document.getElementById("Calculate").onclick = () => {
    let r = parseFloat(document.getElementById("Radius").value);
    document.getElementById("Result").innerHTML = AreaOfTheCircle(r);
}

//TASK-2
class Tag {
    #id;
    constructor(className, style) {
        this.className = className;
        this.style = style;
    }
    getId() { return this.#id; }
    setId(id) { this.#id = id; }
}
class Input extends Tag {
    constructor(className, style, placeholder) {
        super(className, style);
        this.placeholder = placeholder;
    }
}
let inputText = new Input("blabla", "margin-right: 5px;", "Enter the Radius");
inputText.setId("Radius");
console.log(inputText.getId());

//TASK-3
let ArrayFunc = array => {
    if(Array.isArray(array)) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) min = array[i];
        }
        return `The smallest element of the array is ${min}.`;
    }
    else return `${array} is not an Array.`;
}
let x = ['b', 'd', 'a', 'c'];
console.log(ArrayFunc(x));