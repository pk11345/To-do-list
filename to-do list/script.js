let taskinput = document.querySelector("#taskinput")
let addbtn = document.querySelector("#taskbutton")
let tasklist = document.querySelector("#tasklist")

addbtn.addEventListener("click", addtask = ()=>{
    let list = document.createElement("li")
    let span = document.createElement("span")
    let dlt = document.createElement("button")
    let done = document.createElement("button")
    let btns = document.createElement("div")
    tasklist.appendChild(list)
    list.appendChild(span)
    list.appendChild(btns)
    btns.appendChild(dlt)
    btns.appendChild(done)
    span.innerHTML = taskinput.value
    dlt.innerText ="delete"
    done.innerText = "Done"
    taskinput.value = " "
    dlt.addEventListener("click", ()=>{
        list.remove()
    })
    done.addEventListener("click", ()=>{
        span.style.textDecoration = "line-through"
    })
})
taskinput.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        addtask()
    }
})