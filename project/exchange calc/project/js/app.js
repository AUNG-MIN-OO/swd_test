

let input = document.getElementById("input")
let from = document.getElementById("from");
let to = document.getElementById("to");
let result = document.getElementById("result");
let historyList = document.getElementById("history-list");

function createOption(x,y,z){
    let o = document.createElement("option");
    let t = document.createTextNode(y);
    o.setAttribute("value",toNum(z));
    o.appendChild(t);
    x.appendChild(o);
}

function toNum(x){
    return Number(x.replace(",",""));
}


for(x in data.rates){
    createOption(from,x,data.rates[x])
    createOption(to,x,data.rates[x])
    // console.log(x)
}

//to insert data to table
function createTr(x){
    let tr = document.createElement("tr");

    let rowSpacer  = document.getElementById("row-spacer");
    console.log(rowSpacer)

    if(rowSpacer){
        rowSpacer.remove();
        console.log("removed")
    }
    //to get datas much times
    x.map(function(el){
        let td = document.createElement("td");
        let text = document.createTextNode(el);
        
        td.appendChild(text);
        tr.appendChild(td);
        historyList.appendChild(tr);
    });
}

//to save datas in localstorage
function store(){
    localStorage.setItem("record",historyList.innerHTML);
}

document.getElementById("calc").addEventListener("submit",function(e){
    e.preventDefault();
    //get state
    let x = input.value;
    let y = from.value;
    let z = to.value;
    console.log(x,y,z)

    //process
    let first = x*y;
    let second = first/z;
    //to get data for table
    let fromText = x+" "+from.options[from.selectedIndex].innerHTML;
    let toText = to.options[to.selectedIndex].innerHTML;
    let resultText = second.toFixed(2);
    let date = new Date().toLocaleString();
    let arr = [date,fromText,toText,resultText];
    createTr(arr);
    store();

    //set
    result.innerHTML = resultText;
    input.focus();
    input.value ="";
    from.value = "";
    to.value = "1";
});

// IIFE function to call locakstorage memory to table
(function(){
    if(localStorage.getItem("record")){
        historyList.innerHTML = localStorage.getItem("record");
    }else{
        historyList.innerHTML = `<tr id=row-spacer><td colspan="4">No Record</td></tr>`
    }
})()

function test(){
    console.log(from.options[from.selectedIndex].innerHTML)
}



