
// problems: cause uncaught type error 
//citied from Fullyworld Web Tutorials https://www.youtube.com/watch?v=YnFF5IbqVpA&t=2452s

addEventListener("DOMContentLoaded", function(){
    let newForm = document.getElementById("newForm");
    let todoList = document.getElementById("todoList");
    //let rmBtn = document.createElement("button");

    //retrieve saved info
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    //resert id ranking
    if(savedTodos.length > 1){
        for( let i = 0; i < savedTodos.length; i++){
            savedTodos[i].id = i + 1;
            localStorage.setItem('todos', JSON.stringify(savedTodos)); 
        }
    }

    let id = 1;
	if(savedTodos === null || savedTodos.length == 0){
		id = 1;
	}else{
		id = savedTodos[savedTodos.length -1].id ;
		savedTodos.map(todo=>{
            //est. elements
            let rmBtn = document.createElement('button');
            rmBtn.innerText= "DELETE";
			let div = document.createElement('div');
			div.setAttribute("class","listItem");
			// let input = document.createElement('input');
			// input.setAttribute("type","checkbox");
			div.setAttribute("id",todo.id);
			let h1 = document.createElement('h3');
			h1.setAttribute("class","itemHeading");
			h1.innerHTML = todo.mission;
            rmBtn.id = todo.id
            h1.id = todo.id

            //add line-though if finished
            if (todo.isCompleted === true){
                h1.style.textDecoration = "line-through";
                h1.setAttribute("value", todo.isCompleted)
            }else{
                h1.style.textDecoration = "none";
                h1.setAttribute("value", todo.isCompleted)
            }
            
            div.append(h1);
            div.append(rmBtn);
			
			todoList.append(div);
		});

    }




    //appending submit todolist
    newForm.addEventListener("submit", function(e){
        e.preventDefault();
        //console.log(e.target.tagName);

        //task to todo
        
        let newTodo = document.createElement("div");
        newTodo.innerText = document.getElementById("todo").value;
        newTodo.isCompleted = false;
        newTodo.id = Id();

        function Id(){
            if(savedTodos === null || savedTodos == 0){
                return 1;
            }else{
                return (savedTodos.length+1);
            }
        }
        //save to local
        savedTodos.push({ 
            mission: newTodo.innerText,
            isCompleted: false,
            id: newTodo.id
        });
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        
        //append exution
        todoList.appendChild(newTodo);
        window.location.reload();
        newForm.reset();

    })

    //line-through todolist status
    todoList.addEventListener("click", function(e){
        x = e.target;
        // console.log(x.id);
        let updateList = JSON.parse(localStorage.getItem('todos'));


        let newUp = [];



        for (let z = 0; z < updateList.length; z++){


            //removal process
            if(x.type == "submit" && updateList[z].id == x.id){
                let deletedItem = e.target;
                //
                let toSaveList = []
                // console.log(savedTodos[deletedItem.id-1].mission);
                console.log(deletedItem.id);
                //deletedItem.innerText = savedTodos[deletedItem.id-1].mission
                toSaveList = savedTodos.filter(function (todo) {
                    console.log(savedTodos.id);

                    return todo.id !== Number(deletedItem.id);
                });

                // console.log(toSaveList);

                localStorage.setItem('todos', JSON.stringify(toSaveList));
                window.location.reload();

            }else{
                //JSON.parse(localStorage.getItem('todos')[z] has list of <div> and <h1>
                if(updateList[z].id == x.id && updateList[z].isCompleted == false){
                    updateList[z].isCompleted = true;
                    localStorage.setItem('todos',JSON.stringify(updateList));
                    console.log(x.id.toString());
                    window.location.reload();
                }else if(updateList[z].id == x.id && updateList[z].isCompleted == true){
                    updateList[z].isCompleted = false;
                    localStorage.setItem('todos',JSON.stringify(updateList));
                    // console.log(x.id.toString());
                    window.location.reload();
                }
                }




        }




    })

    // //coun't not delete properly
    // const inputs = document.querySelectorAll('button');
	// let cleanse = []
    // let update = savedTodos;
    // let newUpdate = [];
	// for(let i =0; i<inputs.length; i++){
	// 	inputs[i].addEventListener("click",e=>{
    //         let rmAr = e.target.id;
    //         if (update[i].id == inputs[i].id){
    //             newUpdate.push(update[Number(savedTodos[i].id)]);
    //         }

            
    //         if(newUpdate.length > 1){
    //             for( let i = 0; i < newUpdate.length; i++){
    //                 newUpdate[i].id = i+1;
    //                 localStorage.setItem('todos', JSON.stringify(newUpdate)); 
    //             }
    //         }
    
    //         localStorage.setItem('todos', JSON.stringify(newUpdate));

            
	// 	});

	// }
    // cleanse = [];



});



