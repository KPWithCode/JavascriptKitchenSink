let name = 'Zed';

const usstates = '50';

var sum = 5 + 4;
console.log(sum);


// Added if else statment sot that if name stats 
// with letter after L and alert of Back of the line is displayed
if (name.charCodeAt(0) >= 77) {
    alert('Back of the line chump!');
} else {
    alert('Next!');
}
// sayHello function
function sayHello(Phone) {
    alert(Phone);
}
sayHello('Samsung');
sayHello('Apple');

function add(water, juice) {
    (water + juice)
    return name
}
let myNum = add(21, 19);
console.log(myNum);


//checkAge function[]

let names = ['Charles', 'Abby', 'James', 'John'];

function checkAge(name, age) {
    if (age < 21) {
        alert(`Sorry ${name} you aren't old enough to view this page!`);
    } else {
        alert('Come on in Budster');
    }
}

checkAge(names[0], 21);
checkAge(names[1], 27);
checkAge(names[2], 18);
checkAge(names[3], 17);

// Array for favorite Vegetables
var favVeggies = ['Carrots', 'Radish', 'Cabbage', 'Lettuce'];

for(let i = 0; i < favVeggies.length; i++)   {
    console.log (favVeggies[i]);

}
