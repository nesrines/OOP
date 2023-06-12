//TASK-1
let AreaOfTheCircle = r => {
    if (isNaN(r)) return "It's not a Number.";
    else return Math.PI * r ** 2;
}
document.getElementById("Calculate").onclick = () => {
    let r = document.getElementById("Radius").value;
    document.getElementById("Result").innerHTML = AreaOfTheCircle(r);
}

//TASK-2


//TASK-3
let ArrayFunc = array => {
    if(Array.isArray(array)) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) min = array[i];
        }
        return `The smallest element of the array is ${min}.`;
    }
    else return "It's not an Array.";
}
let x = ['b', 'd', 'a', 'c'];
console.log(ArrayFunc(x));