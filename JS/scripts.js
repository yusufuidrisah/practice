let x = 30
console.log(x)
document.getElementById("students").innerHTML = x

let y =  {
"name": "John Doe",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "coding", "hiking"]
}

console.log(y)
console.log(y.hobbies)

var zn= y.name + y.age
console.log(zn)


const zantel = Object.keys(y)


for( i = 0; i < zantel.length; i++){
    console.log(`${zantel[i]}: ${y[zantel[i]]}`);
    let zabibu = i
   
}

// console.log(zabibu)

// console.log(document.getElementById(students))

// fetch('./data/data.json')
// .then( response => response.json())
// .then( watu => console.log(watu))

/*const data = [
    ["Jina", "Umri", "Jiji"],
    ["Ali", 25, "Dar es Salaam"],
    ["Zainab", 30, "Mwanza"],
    ["Hassan", 28, "Arusha"]
    ["Hassan", 28, "Arusha"]
  ];
  
  let table = "<table>";
  
  for (let i = 0; i < data.length; i++) {
    table += "<tr>";
    // for (let j = 0; j < data[i].length; j++) {
      table += "<td>" + data[i][j] + "</td>";
    }
    table += "</tr>";
//   }
  
  table += "</table>";
  
  document.body.innerHTML = table;*/
  