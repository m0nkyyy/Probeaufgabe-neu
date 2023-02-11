console.log('Connected')
// grab all elements
const form = document.querySelector('#form');
const pName = document.querySelector('#name');
const task = document.querySelector('#task');

// Array
let projectArr = [];

// form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // creates a project id
    let id = Math.random() * 99999999999;

    // creates the new project
    const project = new Project(id, pName.value, task.value)

    // add project to the Array
    projectArr = [...projectArr, project];
    console.log(projectArr);

    // add Projects to the localstorage
    addToStorage(projectArr)

    // get projects from localstorage
})
getFromStorage();


// show Projects
function displayProject(arr) {
    console.log(arr);
}

// get Projects from the localstorage
function getFromStorage() {
    projectArr = []
    Object.keys(localStorage).forEach(key => {
        object = JSON.parse(localStorage.getItem(key));
        projectArr = [...object];
        console.log(projectArr);
        return projectArr;
    });
}

// add Projects to the localstorage
function addToStorage(arr) {
    localStorage.setItem('Projects', JSON.stringify(arr));
}

// blueprint for the project class
class Project {
    constructor(id, name, tasks) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
    }
}

