let li = document.querySelectorAll(".list-group-item");

li[2].style.color = "red";

let odd_li = document.querySelectorAll(".list-group-item:nth-child(odd)"); //this nthchild odd is css property not javascript or browser property.

odd_li.forEach((el)=>{
    el.style.backgroundColor = "lightblue";
})

let even_li = document.querySelectorAll(".list-group-item:nth-child(even)");
even_li.forEach((el)=>{
    el.style.backgroundColor = "lightpink";
})