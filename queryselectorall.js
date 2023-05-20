let li = document.querySelectorAll(".list-group-item");
li[1].style.color = "green";

let odd_li = document.querySelectorAll(".list-group-item:nth-child(odd)"); //this nthchild odd is css property not javascript or browser property.

odd_li.forEach((el)=>{
    el.style.backgroundColor = "green";
})
