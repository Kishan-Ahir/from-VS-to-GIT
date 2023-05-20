let form = document.querySelector("#addForm");
let ul=document.querySelector("#items");

form.addEventListener("submit",additem);
ul.addEventListener("click",removeitems);


/*
When an event occurs on an element, such as a click event on a link or a form submission event, the browser typically performs a default action associated with that event. For example, a click event on a link will navigate to the URL specified in the link's href attribute, and a form submission event will submit the form and refresh the page.
to prevent this default behaviour we use e.preventDefault().
*/


function removeitems(event) {
    event.preventDefault();
    if(event.target.classList.contains("delete"))
    {
        if(confirm("Are you sure???"))
        {
            let li = event.target.parentElement;
            ul.removeChild(li);
        }
    }
}


/*
e.target refers to the element that triggered the event. For example, if you have a click event listener on a button and you click that button, e.target will be a reference to that button element.

classList is a property of DOM elements that represents the classes applied to the element.

contains("delete") is a method of the classList property. It checks whether the specified class name ("delete" in this case) is present in the element's class list and returns a Boolean value indicating the result.
 */


function additem(e) {
    e.preventDefault();
    
    let itemvalue = document.querySelector("#item").value;
    let addli = document.createElement("li");
    addli.className = "list-group-item";
    
    let editbtn = document.createElement("button");
    editbtn.className = "btn btn-dark btn-sm float-right ";
    editbtn.setAttribute("style","margin-right:5px;");
    editbtn.appendChild(document.createTextNode("Edit"));

    let deletbtn = document.createElement("button");
    deletbtn.className = "btn btn-danger btn-sm float-right delete";
    deletbtn.appendChild(document.createTextNode("X"));
    addli.appendChild(deletbtn);
    addli.appendChild(editbtn);
    addli.appendChild(document.createTextNode(itemvalue));

    ul.appendChild(addli);
}



