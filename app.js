 const out = document.getElementById('inp');
 const body = document.body;

function OnTaskAdded(e, itemDiv, addElementInputBoxDiv, put)
{
    const li = document.createElement('li');
        const val=put.value;
        li.innerText =val;
        put.value=""
        itemDiv.appendChild(li)
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.className = 'buttons'
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'
        deleteButton.className = 'buttons'
        itemDiv.appendChild(editButton)
        itemDiv.appendChild(deleteButton)

        deleteButton.onclick = function (e) {
            console.log('Delete button clicked.')
            li.remove()
            editButton.remove()
            deleteButton.remove()
           }

           editButton.onclick = function(e){
            console.log('Edit button clicked.')
            const ii=li.innerText;
            li.remove();
            editButton.remove();
            deleteButton.remove();
            const put = document.createElement('input');
            addElementInputBoxDiv.appendChild(put);
            put.value = ii;
            put.addEventListener('keydown', (e) =>{
                if(e.key=='Enter'){
                    OnTaskAdded(e, itemDiv, addElementInputBoxDiv, put)
                    put.remove()
                }
            })
           }
}

function OnAddTaskButtonClicked(e, itemDiv, addElementInputBoxDiv)
{
    const put = document.createElement('input');
    addElementInputBoxDiv.appendChild(put);
    put.addEventListener('keydown', (e) =>{
        if(e.key=='Enter'){
            OnTaskAdded(e, itemDiv, addElementInputBoxDiv, put)
            put.remove()
        }
        })
}

 out.addEventListener('keydown',(e) =>{
     if(e.key=='Enter'){
        const itemDiv = document.createElement('div')
        itemDiv.className = 'item';
        body.appendChild(itemDiv)
        const it=document.createElement('h1');
        itemDiv.appendChild(it);
        it.className='main';
        it.innerText=out.value;
        out.value="";
        const btn=document.createElement('button');
        itemDiv.appendChild(btn);
        btn.innerText='Add';
        const btns=document.createElement('button');
        itemDiv.appendChild(btns);
        btns.innerText='Delete ToDo';
        btns.addEventListener('click',(e) =>{
            itemDiv.remove();
        })
        const addElementInputBoxDiv = document.createElement('div')
        itemDiv.appendChild(addElementInputBoxDiv)
       btn.addEventListener('click',(e) =>{
                OnAddTaskButtonClicked(e, itemDiv, addElementInputBoxDiv)
        })  
    }
})
    



