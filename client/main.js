var listOfProductObjects = [];
var pageNumber = 1;
var numberOfPages = 3;
var row = document.getElementById("row");
var rows = [];

async function getData() {
  listOfProductObjects = await fetch("http://localhost:3000/index")
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    });
}

function appendData() {
  getData().then(() => {
    displayFirstPage();
  });
}

function displayFirstPage() {
    while (row.firstChild){
        row.firstChild.remove();
    } 
  for (let i = 0; i < 4; i++) {
    var column = document.createElement("div");
    column.setAttribute("id", "column");
    var img = document.createElement("img");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    img.src = listOfProductObjects[i].image.url;
    h2.textContent = listOfProductObjects[i].name;
    h3.textContent = listOfProductObjects[i].price.regularPrice.amount.value + " " + listOfProductObjects[i].price.regularPrice.amount.currency
    column.appendChild(img);
    column.appendChild(h2);
    column.appendChild(h3);
    row.appendChild(column);
  }
  pageNumber = 1;
}

function displaySecondPage() {
    while (row.firstChild){
        row.firstChild.remove();
    } 
  pageNumber = 2;
  for (let i = 4; i < 8; i++) {
    var column = document.createElement("div");
    column.setAttribute("id", "column");
    var img = document.createElement("img");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    img.src = listOfProductObjects[i].image.url;
    h2.textContent = listOfProductObjects[i].name;
    h3.textContent = listOfProductObjects[i].price.regularPrice.amount.value + " " + listOfProductObjects[i].price.regularPrice.amount.currency
    column.appendChild(img);
    column.appendChild(h2);
    column.appendChild(h3);
    row.appendChild(column);
  }
  pageNumber = 2;
}

function displayThirdPage() {
  while (row.firstChild){
      row.firstChild.remove();
  }  
  pageNumber = 3;
  for (let i = 8; i < 12; i++) {
    var column = document.createElement("div");
    column.setAttribute("id", "column");
    var img = document.createElement("img");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    img.src = listOfProductObjects[i].image.url;
    h2.textContent = listOfProductObjects[i].name;
    h3.textContent = listOfProductObjects[i].price.regularPrice.amount.value + " " + listOfProductObjects[i].price.regularPrice.amount.currency
    column.appendChild(img);
    column.appendChild(h2);
    column.appendChild(h3);
    row.appendChild(column);
  }
  pageNumber = 3;
}

function nextButton() {
  if (pageNumber == 1) {
    displaySecondPage();
  } else if (pageNumber == 2) {
    displayThirdPage();
  } else {
    displayFirstPage();
  }
}

function previousButton() {
  if (pageNumber == 1) {
    displayThirdPage();
  } else if (pageNumber == 2) {
    displayFirstPage();
  } else {
    displaySecondPage();
  }
}





// Gets data with user input
async function getDataWithUserInput(){
    const userInputField = document.getElementById("userInput");
    const userInput = {
      input : userInputField.value,
    }
  
    await fetch("http://localhost:3000/search", {
        method: 'POST',
        headers: {
            'content-type': 'application/json', 
        },
        body: JSON.stringify(userInput),
    })
    .then(res => res.json())
    .then(data => {
      if (data.items.length == 0){
        console.log("Product not found");
        document.getElementById("userInput").style.color = "red";
      }else{
        console.log("Products found");
        document.getElementById("userInput").style.color = "black";
        console.log(data.items);
        listOfProductObjects = data.items
        console.log("Display First Page");
        displayFirstPage();
      }
    });
}
