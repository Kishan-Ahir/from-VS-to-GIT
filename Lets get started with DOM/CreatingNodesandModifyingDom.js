let li = document.querySelector("li");
let ul = document.querySelector("ul");
console.log(li.parentNode);
console.log(ul.lastChild);
console.log(ul.lastElementChild);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
console.log(li.nextSibling);
console.log(li.nextElementSibling);
console.log(ul.previousSibling);
console.log(ul.previousElementSibling);

let new_div = document.createElement("div");
new_div.className = "class";
new_div.id = "id";
new_div.setAttribute("title","title");
let new_text_node = document.createTextNode("newtextnode");
new_div.appendChild(new_text_node);
console.log(new_div);