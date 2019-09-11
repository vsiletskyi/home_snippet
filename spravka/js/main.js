window.addEventListener("load", Init);


function Init() {
    let url = "https://swapi.co/api/people/";
    Request(url, GetPerson);

    

    let nextBtn = document.querySelector(".next-btn");
    nextBtn.addEventListener("click", Next);

    let PrevBtn = document.querySelector(".prev-btn");
    PrevBtn.addEventListener("click", Prev);

    let planBtn = document.querySelector(".plan-btn");
    planBtn.addEventListener("click", GetPlanets);

    let persBtn = document.querySelector(".pers-btn");
    persBtn.addEventListener("click", Person);
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

    if(state.prev!=null) {
        document.querySelector(".prev-btn").style.display = 'block'
    } else {
        document.querySelector(".prev-btn").style.display = 'none'
    }
    if(state.next!=null) {
        document.querySelector(".next-btn").style.display = 'block'
    } else {
        document.querySelector(".next-btn").style.display = 'none'
    }
}

function GetPlanets(persons) {
    let url2 = state.url="https://swapi.co/api/planets/";
    Request(url2, GetPerson);  


    // state.next = persons.next;
    // state.prev = persons.previous;
    // let countOfPerson = document.querySelector(".count");
    // countOfPerson.textContent = `10 of ${persons.count}`;
    // let elem = document.querySelector("#root");
    // if(elem.hasChildNodes()){
    //     elem.firstElementChild.remove()
    // }
    // let table = document.createElement("table");
    // table.setAttribute("class", "table table-inbox table-hover")
    // elem.append(table);
       
    // for (let i = 0; i < 11; i++) {
    //     let tr = document.createElement("tr");
    //     for (let i = 0; i < 3; i++) {
    //         var td = document.createElement("td");
    //         tr.append(td);
    //     }
    //     table.append(tr);
    // }
    // table.rows[0].cells[0].textContent = ("Name");
    // table.rows[0].cells[1].textContent = ("Orbital Period");
    // table.rows[0].cells[2].textContent = ("Diameter");
    // for (var i=0; i<3; i++){
    //     table.rows[0].cells[i].setAttribute("class", "thead");
    // }
    // for (let i = 1; i < persons.results.length; i++){
    //     table.rows[i].cells[0].textContent = persons.results[i].name;
    //     table.rows[i].cells[1].textContent = persons.results[i].orbital_period;
    //     table.rows[i].cells[2].textContent = persons.results[i].diameter;
    // }
}

function Person() {
    let url2 = state.url="https://swapi.co/api/people/";
    Request(url2, GetPerson);  

}

let state = {
    next: "",
    prev: "",
    url: ""
}




