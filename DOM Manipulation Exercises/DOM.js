//1.  Select the section with an id of container without using querySelector.
document.getElementById("container");

//2.  Select the section with an id of container using querySelector.
document.querySelector("#container");

//3.  Select all of the list items with a class of “second”.
document.getElementsByClassName("second");

//4.  Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

//5.  Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.classList.add("main");


//6.  Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 7.  Give the section with an id of container the text “Hello!”.
// have to comment out the code for lter questions to work properly
// let txt = document.querySelector("#container");
// txt.innerText = "Hello";

//8.  Create a new li element.
let newLi = document.createElement("li");


//9.  Give the li the text “four”.
newLi.innerText = "four";

//10. Append the li to the ul element.
let ul = document.querySelector("#container ul");
ul.appendChild(newLi);

//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
//it didn't do anything

let lisInsideOl = document.querySelectorAll("ol li");

for (let i = 0; i < lisInsideOl.length; i++ ){
    lisInsideOl[i].style.backgroundColor = "green";
}

//12. Remove the div with a class of footer
let footer1 = document.querySelector(".footer");
footer1.remove();
