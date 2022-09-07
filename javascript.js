



console.log(Math.round(4.8))

console.log(Math.trunc(3.9234234))

console.log(Math.floor(3.9))

console.log(Math.pow(2,4))

console.log(Math.sqrt(81))

console.log(Math.abs(-18.25))

console.log(Math.sin(90 * Math.PI / 180))

console.log(Math.max(12,34,56,89,99,999))

console.log(Math.min(12,34,56,89,99,999))

console.log(((Math.random() *10)+1))


console.log(((Math.log(100))))

var a = 10;
var b = 20;

if(a > b ){
    alert('A is greater than A')
}else{
    alert('B is greater than A')
}



var a = 10;
var b = 20;
var c = 30;

if(a > b){
    alert('a is greater than b')
}else if(b > c){
    alert('b is greater than c')
}else{
    alert('c is greater than a and b')
}

function mathfunc(){


var numA = document.getElementById('ValA').value;
var numB = document.getElementById('ValB').value;
var numAInt = Math.round(numA)
var numBint = Math.round(numB)



if(numA > numB){
    alert('A is greater than B')
}else{
    alert('B is greater than A')
}
}


console.log(new Date().getDay())

switch(new Date().getDay()){


    case 0:
        alert("Juma")
        break;
    case 1:
        alert("shanba")
        break;  
         
    case 2:
        alert("1shanbi")
        break;
        
    case 3:
        alert("3shanbi")
        break;
        
    case 4:
        alert("3 shanbi")
        break;
        
    case 5:
        alert("4 shanbi")
        break;
        
    case 6:
        alert("5 shanbi")
        break;
        default:
            alert('5 shanbi')
  }


var score = prompt();

switch(true){

    case(score <= 100 && score >= 90):
        alert("A")
        break;
        
    case(score <= 89 && score >= 80):
        alert("B")
    break;
    
    case(score <= 79 && score >= 70):
        alert("C")
        break;
        
    case(score <= 69 && score >= 60):
        alert("D")
        break;

    case(score <= 59 && score >= 50):
        alert("E")
        break;

    case(score <= 49 && score >= 40):
        alert("f")
        break;

    
}


const arrNum = [12,23,45,56,78,890,456,563]

for(let i =0; i<arrNum.length; i++){
    console.log(i)
}

const items = {
    name:"TV",price:200,brand: 'sony'
   }

   for(let key in items){
    console.log(key+ items[key])
   }


const item = ['tv', 'car', 'pc', 'remote', 'sanitaiar']

for(let x of item){
    console.log(x)
    }

var st = 'startupistan'

for(let x of st){
    console.log(x)
}



for(let i = 0; i<10;i++){
    if(i == 3){
        
        continue;
    }
    console.log(i)
}

var count = 1;
var asd=[];
function countfunc(){
    count++

    asd.push(asd)

    console.log(asd)

    console.assert("total"+ asd)
  
   
}
