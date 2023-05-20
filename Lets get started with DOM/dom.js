console.dir(document); //to see all the properties or methods in console window which is in document.



console.log(document.domain);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "Hello kishan"
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);



//GetElementsById
let header = document.getElementById("header-title");
console.log(header.innerHTML);
console.log(header.innerText);
console.log(header.textContent);
header.innerText = 'Hello duniya';
header.textContent = 'Hello World'
