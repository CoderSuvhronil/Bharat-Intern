// Sample data for projects
let projects = [];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <button onclick="removeProject(${index})">Remove</button>
        `;
        projectList.appendChild(card);
    });
}

// Function to add a new project
function addProject() {
    const name = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;

    if (name && description) {
        const newProject = { name, description };
        projects.push(newProject);

        // Clear input fields
        document.getElementById("project-name").value = "";
        document.getElementById("project-description").value = "";

        displayProjects();
    }
}

// Function to remove a project
function removeProject(index) {
    projects.splice(index, 1);
    displayProjects();
}

// Initialize the tool
displayProjects();
