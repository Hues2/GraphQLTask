var listOfProductObjects = [];
var row = document.getElementById("row");
var index = 0;
const limit = 12;

async function getData() {
  listOfProductObjects = await fetch("http://localhost:3000/index")
    .then((res) => res.json())
    .then((data) => {
      return data.items;
    });
}

function appendData() {
  getData().then(() => {
    nextPage();
  });
}

function nextPage() {
  // Can replace limit with listOfProductObjects.length to get all options
  if (index == limit) {
    index = 0;
  }
  const counter = index;

  if (counter < limit) {
    while (row.firstChild) {
      row.firstChild.remove();
    }
  }
  displayItems(counter);
}

function previousPage() {
  // Can replace limit with listOfProductObjects.length to get all options
  if (index == 0) {
  } else {
    if (index == 4) {
      index = limit - 4;
    } else {
      index = index - 8;
    }
    const counter = index;

    while (row.firstChild) {
      row.firstChild.remove();
    }
    displayItems(counter);
  }
}

function displayItems(counter) {
  for (let i = counter; i < counter + 4; i++) {
    if (i < limit) {
      var column = document.createElement("div");
      column.setAttribute("id", "column");
      var img = document.createElement("img");
      var h2 = document.createElement("h2");
      var h3 = document.createElement("h3");
      img.src = listOfProductObjects[i].image.url;
      h2.textContent = listOfProductObjects[i].name;
      h3.textContent =
        listOfProductObjects[i].price.regularPrice.amount.value +
        " " +
        listOfProductObjects[i].price.regularPrice.amount.currency;
      column.appendChild(img);
      column.appendChild(h2);
      column.appendChild(h3);
      row.appendChild(column);
      index += 1;
    }
  }
}

// Gets data with user input
async function getDataWithUserInput() {
  const userInputField = document.getElementById("userInput");
  const userInput = {
    input: userInputField.value,
  };
  if (userInput.input.length == 0) {
    userInputField.style.borderColor = "red";
  } else {
    userInputField.style.borderColor = "black";
    await fetch("http://localhost:3000/search", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.items.length == 0) {
          console.log("Product not found");
          document.getElementById("userInput").value = "Product not found";
          document.getElementById("userInput").style.color = "red";
        } else {
          console.log("Products found");
          document.getElementById("userInput").style.color = "black";
          console.log(data.items);
          listOfProductObjects = data.items;
          index = 0;
          nextPage();
        }
      });
  }
}
