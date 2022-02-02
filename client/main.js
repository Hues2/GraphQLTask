var listOfProductObjects = [];
var pageNumber = 0;
const row = document.getElementById("row");

async function getData(){
    listOfProductObjects = await fetch("http://localhost:3000").then(res => res.json()).then(data => {
        return data.items;
    });
}

function appendData(){
    console.log("Before");
    getData()
    .then(() =>{
        displayFirstPage();
    });
}

function displayFirstPage(){
    
    for (let i = 0; i < 4; i++) {
        var column = document.createElement("div");
        column.setAttribute('id', 'column');
        var img = document.createElement("img");
        var h3 = document.createElement("h3");
        img.src = listOfProductObjects[i].image.url;
        h3.textContent = 'Name: ' + listOfProductObjects[i].name;
        column.appendChild(img);
        column.appendChild(h3);
        row.appendChild(column);
    }
}



