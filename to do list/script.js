function add(){
    var taskname=document.getElementById("taskname").value
    var tasklist = document.getElementById('mytodo')

    var newtodoitem =document.createElement('div')

    var todoname = document.createElement('li')
     
    todoname.innerHTML =  taskname
     
    var deleteicon=document.createElement('i')
    deleteicon.classList.add('far')
    deleteicon.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deleteicon)
    
    tasklist.appendChild(newtodoitem)
}
 
var tasklist=document.getElementById("mytodo")
tasklist.addEventListener('click',deleteitem)

function deleteitem(e)
{
    const element= e.target
    if(element.classList[0]=='far')
    {
        element.parentElement.remove()
    }
}