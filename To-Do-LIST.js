
    const form= document.querySelector("#form");
    const btn=document.getElementsByClassName("button");
    const input=document.getElementById("user-input");
    const list=document.getElementById("list");
    let inputVal = '';
    let todos = [];
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    });
    


     function clickbutton(){
        const task =input.value;
        const formtwo=document.createElement("form");
        formtwo.classList.add("form");
        const task_input=document.createElement("input");
        task_input.classList.add("user-input");
        task_input.setAttribute("readonly","readonly");
        task_input.type="text";
        task_input.value=task;
        inputVal = task;
        todos.push(inputVal);
       
        const edit=document.createElement("button");
        edit.classList.add("editbutton");
        edit.type="button";
        edit.innerText="Edit";

        const deletebtn=document.createElement("button");
        deletebtn.classList.add("deletebutton");
        deletebtn.type="button";
        deletebtn.innerText="Delete";

        formtwo.appendChild(task_input);
        formtwo.appendChild(edit);
        formtwo.appendChild(deletebtn);
        list.appendChild(formtwo);
        // input.value="";
        console.log("saving to storage");
        // saving data to localStorage
        saveData();
        input.value = "";
        edit.addEventListener('click',()=>{
            
            if(edit.innerText.toLowerCase()=="edit"){
                
                task_input.removeAttribute('readonly');
                task_input.focus();
                edit.innerText="save";
               

            }else{
                task_input.setAttribute('readonly',"readonly");
                edit.innerText="Edit"

            }
        });

        deletebtn.addEventListener('click',()=>{
            list.removeChild(formtwo);
            
        });
    }
    function saveData(){
      
        localStorage.setItem("data",JSON.stringify(todos));

    }

    function getFromLocalStorage() {
        const reference = localStorage.getItem('data');
        // if reference exists
        if (reference) {
          // converts back to array and store it in todos array
          todos = JSON.parse(reference);
        //   renderTodos(todos);
          todos.map( item => {
            const formtwo=document.createElement("form");
            formtwo.classList.add("form");
            const task_input=document.createElement("input");
            task_input.classList.add("user-input");
            task_input.setAttribute("readonly","readonly");
            task_input.type="text";
            task_input.value=item;
            const edit=document.createElement("button");
            edit.classList.add("editbutton");
            edit.type="button";
            edit.innerText="Edit";

            const deletebtn=document.createElement("button");
            deletebtn.classList.add("deletebutton");
            deletebtn.type="button";
            deletebtn.innerText="Delete";

            formtwo.appendChild(task_input);
            formtwo.appendChild(edit);
            formtwo.appendChild(deletebtn);
            list.appendChild(formtwo);
            edit.addEventListener('click',()=>{
            
                if(edit.innerText.toLowerCase()=="edit"){
                    
                    task_input.removeAttribute('readonly');
                    task_input.focus();
                    edit.innerText="save";
                   
    
                }else{
                    task_input.setAttribute('readonly',"readonly");
                    edit.innerText="Edit"
    
                }
            });
    
            deletebtn.addEventListener('click',()=>{
                list.removeChild(formtwo);
                
            });
            })

        }
      }
      // getting from local storage 
      getFromLocalStorage();
     function searchTask(){
        
        let filter = document.getElementById('search').value;
        
        let text= filter.toUpperCase();

        
        let div= document.getElementById('list');
        let form= div.getElementsByTagName('form');
        

        for(var i=0;i<form.length;i++){
           
            let input= form[i].getElementsByTagName('input')[0];
            let textvalue=input.value;
            
            if(textvalue.toUpperCase().indexOf(text) > -1){
                form[i].style.display=" ";
              
            }
            else{
                form[i].style.display="none";
                
                
            }

        }
        

    }
    
    





