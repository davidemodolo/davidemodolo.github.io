const university_projects_div = document.getElementById(
  "container-entries-university-projects"
);

import university_projects_json from "./entries/university_projects/university_projects.json" assert { type: "json" };

university_projects_json.forEach((entry, index) => {
  const div = document.createElement("div");
  div.classList.add("container-entry");
//   if (index === 0) {
//     div.classList.add("main-entry");
//   }
  const img = document.createElement("img");
  img.src = entry.imagePath;
  img.alt = entry.name;
  div.appendChild(img);

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

  university_projects_div.appendChild(div);
});
