var turtles = [
  {
    name:"Leo",
    color:"blue",
    noise:"Slash"
  },
  {
    name:"Donnie",
    color:"purple",
    noise:"Bonk"
  },
  {
    name:"Raph",
    color:"red",
    noise:"Kachink"
  },
  {
    name:"Mikey",
    color:"orange",
    noise:"Whack"
  }
]

// for (var i = 0; i < turtles.length; i++)
var container = document.createElement("div");
container.style.height = "100px";
container.style.width = "100px";
container.style.border = "3px solid black";
container.style.backgroundColor = "green";
container.style.color = "white";
var names = document.createElement("p");
names.innerHTML = turtles[0].name;
container.appendChild(names);
document.body.appendChild(container);
var bool1 = false;
var bool2 = false;
var bool9 = false;
container.addEventListener('click', function(event){
  if (bool1 == false) {
    names.innerHTML = " ";
    bool1 = true;
  } else {
    names.innerHTML = turtles[0].name;
    bool1 = false;
  }
});
container.addEventListener('mouseover', function(event){
  if(bool2 == false){
    // container.style.border = "10px";
    container.style.borderColor = turtles[0].color;
    // container.style.border = "0px";
    bool2 = true;
  }else {
    container.style.borderColor = "3px solid black";
  }
container.addEvenListener('mouseout', function(event){
  if(bool9 == false){
  container.style.borderColor = "";
    bool9 = true;
}else {
  container.style.borderColor = "3px solid black";
    bool9 = false;
      
}
});
});

var container1 = document.createElement("div");
container1.style.height = "100px";
container1.style.width = "100px";
container1.style.border = "3px solid black";
container1.style.backgroundColor = "green";
container1.style.color = "white";
var names1 = document.createElement("p");
names1.innerHTML = turtles[1].name;
container1.appendChild(names1);
document.body.appendChild(container1);
var bool3 = false;
var bool4 = false;

container1.addEventListener('click', function(event){
  if (bool3 == false) {
    names1.innerHTML = " ";
    bool3 = true;
  } else {
    names1.innerHTML = turtles[1].name;
    bool3 = false;
  }
});
container1.addEventListener('mouseover', function(event){
  if(bool4 == false){
  container1.style.borderColor = turtles[1].color;
    bool4 = true;
  }else {
   container1.style.borderColor = "3px solid black";
    bool4 = false;
  }
})

var container2 = document.createElement("div");
container2.style.height = "100px";
container2.style.width = "100px";
container2.style.border = "3px solid black";
container2.style.backgroundColor = "green";
container2.style.color = "white";
var names2 = document.createElement("p");
names2.innerHTML = turtles[2].name;
container2.appendChild(names2);
document.body.appendChild(container2);
var bool5 = false;
var bool6 = false;
container2.addEventListener('click', function(event){
  if (bool5 == false) {
    names2.innerHTML = " ";
    bool5 = true;
  } else {
    names2.innerHTML = turtles[2].name;
    bool5 = false;
  }
});
container2.addEventListener('mouseover', function(event){
  if(bool6 == false){
    container2.style.borderColor = turtles[2].color;
    bool4 = true;
  }else {
   container2.style.borderColor = "3px solid black";
  }
})
var container3 = document.createElement("div");
container3.style.height = "100px";
container3.style.width = "100px";
container3.style.border = "3px solid black";
container3.style.backgroundColor = "green";
container3.style.color = "white";
var names3 = document.createElement("p");
names3.innerHTML = turtles[3].name;
container3.appendChild(names3);
document.body.appendChild(container3);
var bool7 = false;
var bool8 = false;
container3.addEventListener('click', function(event){
  if (bool7 == false) {
    names3.innerHTML = " ";
    bool7 = true;
  } else {
    names3.innerHTML = turtles[3].name;
    bool7 = false;
  }
});
container3.addEventListener('mouseover', function(event){
  if(bool8 == false){
   container3.style.borderColor = turtles[3].color;
    bool4 = true;
  }else {
   container3.style.borderColor = "3px solid black";
  }
})