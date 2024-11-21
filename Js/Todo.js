todo_array = [] ;

function display() {
    print = '<ul>'

    todo_array.map((v,i) => {
        print += `
        <li>${v}<button onclick="handledel(${i})">Delete</button></li>
        `
    })
    print+= '</ul>'
    document.getElementById('task').innerHTML = print;

}

const handledel = (i) => {
    todo_array.splice(i, 1);
    console.log(todo_array);
    display();
}

const handlesub = () => {
    event.preventDefault();
   let todo = document.getElementById("todo").value;
    console.log(todo);
    
    todo_array.push(todo);
    console.log(todo_array);

    display();
}