let li = document.getElementsByClassName("list-group-item");
li[2].style.backgroundColor = "green";

/*
for(let i=0;i<li.length;i++)
{
    li[i].style.fontWeight = "bold";
}
*/

let array_of_li = Array.from(li);

array_of_li.forEach(element => {
    element.style.fontWeight = "bold";
});