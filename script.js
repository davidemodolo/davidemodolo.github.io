const university_projects_div = document.getElementById("container-entries-university-projects");

import university_projects_json from './entries/university_projects/university_projects.json' assert { type: 'json' };

university_projects_json.forEach((entry, index) => {
    const div = document.createElement("div");
    div.classList.add("container-entry");
    if (index === 0) {
        div.classList.add("main-entry"); 
    }
    div.innerHTML = `
        <h4>${entry.name}</h4>
        <p>${entry.description}</p>
    `;
    university_projects_div.appendChild(div);
});
