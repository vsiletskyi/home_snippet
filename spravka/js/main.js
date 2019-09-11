window.addEventListener("load", Init);


function Init() {
    let url = "https://swapi.co/api/people/";
    Request(url, GetPerson);

    let nextBtn = document.querySelector(".next-btn");
    nextBtn.addEventListener("click", Next);

    let PrevBtn = document.querySelector(".prev-btn");
    PrevBtn.addEventListener("click", Prev);

    
}

function Next(){
    // console.log("Next");
    let newUrl = state.next;
    Request(newUrl, GetPerson);
}

function Prev(){
      
    let newUrl2 = state.prev;
    Request(newUrl2, GetPerson);
}

function Request(url, callback) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            let errStatus = xhr.status;
            let errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
}

function GetPerson(persons) {
    console.log(persons);

    state.next = persons.next;
    state.prev = persons.previous;
    let countOfPerson = document.querySelector(".count");
    console.log(countOfPerson)
    countOfPerson.textContent = `10 of ${persons.count}`;


    let elem = document.querySelector("#root");
    if(elem.hasChildNodes()){
        elem.firstElementChild.remove()
    }
    let table = document.createElement("table");
    table.setAttribute("class", "table table-inbox table-hover")
    elem.append(table);
    // let tbody = document.createElement("tbody");
    // tbody.textContent = "name";
    // table.append(tbody);
    //  for (let i = 0; i < persons.results.length; i++) {
    //     let tr = document.createElement("tr");
    //     let tdName = document.createElement("td");
    //     tr.append(tdName);
    //     table.append(tr);
    //     tdName.textContent = persons.results[i].name;

    //     console.log(persons)
    //      console.log(persons.results[i].name);
    //      console.log(persons.results[i].birth_year);
    //      console.log(persons.results[i].gender);
    //      console.log("--------------------");
    //  }

    
    for (let i = 0; i < 11; i++) {
        let tr = document.createElement("tr");
        for (let i = 0; i < 3; i++) {
            var td = document.createElement("td");
            tr.append(td);
        }
        table.append(tr);
    }
    table.rows[0].cells[0].textContent = ("Name");
    table.rows[0].cells[1].textContent = ("Birth Year");
    table.rows[0].cells[2].textContent = ("Gender");
    for (var i=0; i<3; i++){
        table.rows[0].cells[i].setAttribute("class", "thead");
    }
    for (let i = 1; i < persons.results.length; i++){
        table.rows[i].cells[0].textContent = persons.results[i].name;
        table.rows[i].cells[1].textContent = persons.results[i].birth_year;
        table.rows[i].cells[2].textContent = persons.results[i].gender;
    }
}

let state = {
    next: "",
    prev: ""
}




// Test2();

// const Test2 = function(){
// console.log("Test2");
// }



// Test();

// function Test(){
// console.log("Test");
// }



// let a = 10;
// let b = 130;
// Init = (a , b) =>{
// return a + b;
// }


// const res = Init(a, b);
// console.log(res);



// let Person = {
// name : "Bill",
// surname: "Gates",
// age: 58,
// data: {
// day: 23,
// month: 10,
// year: 1956
// }
// }


// console.log(Person.name);
// console.log(Person.age);

// let day = Person.data.day;


// console.log("Day:", day);

// console.log(Person.data);


// let arr = [4,6,"Tom",[8678,3453,"Test"]];

// console.log(arr);


// let arrPerson = [Person,Person];
// console.log(arrPerson);

// function GetPerson(persons) {
//     console.log(persons.results);

//     for (let i = 0; i < persons.results.length; i++) {
//         console.log(persons.results[i].name);
//         console.log(persons.results[i].birth_year);
//         console.log(persons.results[i].gender);
//         console.log("--------------------------------");
//     }
// }