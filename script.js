const EDUCATION = "education";
const WORK = "work";

function createProjectEntry(entry) {
  const div = document.createElement("div");
  div.classList.add("container-entry");
  if (entry.imagePath != "") { 
  const img = document.createElement("img");
  img.src = entry.imagePath;
  img.alt = entry.name;
  div.appendChild(img);
  }

  const container_project_elements = document.createElement("div");
  container_project_elements.classList.add("container-project-elements");
  const container_project_info = document.createElement("div");
  container_project_info.classList.add("container-project-info");
  const title = document.createElement("p");
  title.innerHTML = `${entry.name}`;
  title.classList.add("project-name");
  container_project_info.appendChild(title);
  const description = document.createElement("p");
  description.innerHTML = `${entry.description}`;
  description.classList.add("project-description");
  container_project_info.appendChild(description);
  container_project_elements.appendChild(container_project_info);

  const container_tags = document.createElement("div");
  container_tags.classList.add("container-tags");
  entry.tags.forEach((tag) => {
    const tag_element = document.createElement("p");
    tag_element.innerHTML = tag;
    tag_element.classList.add("tag");
    container_tags.appendChild(tag_element);
  });
  container_project_info.appendChild(container_tags);

  const button = document.createElement("button");
  button.innerHTML = "Go to project";
  button.onclick = () => {
    window.open(entry.link);
  };
  container_project_elements.appendChild(button);
  div.appendChild(container_project_elements);

  return div;
}


function currentSlide(n, section, slideIndex) {
  var parentEntries = document.querySelectorAll(`div[id*='${section}']`);
  var entries = [];
  parentEntries.forEach(function(parent) {
    var childEntries = parent.getElementsByClassName("container-entry");
    for (var i = 0; i < childEntries.length; i++) {
      entries.push(childEntries[i]);
    }
  });

  if (n >= entries.length)
    n = 0;
  if (n < 0)
    n = entries.length - 1;

  entries[slideIndex].style.display = 'none';
  entries[n].style.display = 'flex';
  return n;
}


function changeDotActive(n, section) {
  var parentEntries = document.querySelectorAll(`div[id*='${section}']`);
  var dots = [];

  parentEntries.forEach(function(parent) {
    var childDots = parent.getElementsByClassName("dot");
    for (var i = 0; i < childDots.length; i++) {
      dots.push(childDots[i]);
    }
  });
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot-active");
  }
  if (n >= 0 && n < dots.length) {
    dots[n].classList.add("dot-active");
  }
}


function initializeProjects(div, projects, dots_div, section, slideIndex = 0){
  projects.forEach((entry, index) => {
    const projectEntry = createProjectEntry(entry);
    if (index != slideIndex) {
      projectEntry.style.display = 'none'; // Initially hide all entries
    }
    div.appendChild(projectEntry);
  });

  for (let i = 0; i < projects.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i == slideIndex) {
      dot.classList.add("dot-active");
    }
    dot.onclick = () => {
      slideIndex = currentSlide(i, section, slideIndex);
      changeDotActive(i, section);
    };
    dots_div.appendChild(dot);
  }
}

const UNIVERSITY = "university";
const university_projects_div = document.getElementById(
  "container-entries-university-projects"
);
import university_projects from "./entries/university_projects/university_proj.js";
var university_slideIndex = 0;
const dots_university = document.getElementById("dots-university");
initializeProjects(university_projects_div, university_projects, dots_university, UNIVERSITY, university_slideIndex);

const HOBBY = "hobby";
const hobby_projects_div = document.getElementById(
  "container-entries-hobby-projects"
);
import hobby_projects from "./entries/hobby_projects/hobby_proj.js";
var hobby_slideIndex = 0;
const dots_hobby = document.getElementById("dots-hobby");
initializeProjects(hobby_projects_div, hobby_projects, dots_hobby, HOBBY, hobby_slideIndex);
