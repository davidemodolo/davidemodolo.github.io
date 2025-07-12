class InteractiveCard {
  constructor({ imagePath, bgColor, titleText, categoryText, audioPath }) {
    this.imagePath = imagePath;
    this.bgColor = bgColor;
    this.titleText = titleText;
    this.categoryText = categoryText;
    this.audioPath = audioPath;
    this.isPlaying = false;
    this.audio = new Audio(this.audioPath); // Add Audio object

    // Create the card
    this.cardElement = this.createCard();
    this.addHoverEffect();
    this.addTiltEffect();

    // Add event listener for audio end
    this.audio.addEventListener("ended", () => this.resetCard());
  }

  createCard() {
    // Create main card container
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = this.bgColor;

    // Create the content container
    const content = document.createElement("div");
    content.classList.add("content");

    // Create the title
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = this.titleText;

    // Create the category
    const category = document.createElement("p");
    category.classList.add("category");
    category.textContent = this.categoryText;

    // Create the button for play/pause functionality
    const button = document.createElement("button");
    button.classList.add("icon-button");
    button.innerHTML = '<img src="play.svg" alt="Play">';
    button.onclick = () => this.togglePlay(button);

    // Append elements to content
    content.appendChild(title);
    content.appendChild(category);
    content.appendChild(button);

    // Append content to the card
    card.appendChild(content);

    // Add background image as a hover effect
    const hoverImage = document.createElement("div");
    hoverImage.classList.add("hover-image");
    hoverImage.style.backgroundImage = `url(${this.imagePath})`;
    card.appendChild(hoverImage);

    // Append card to body (or another container)
    document.body.appendChild(card);

    return card;
  }

  togglePlay(button) {
    this.isPlaying = !this.isPlaying;
    button.innerHTML = this.isPlaying
      ? '<img src="stop.svg" alt="Stop">'
      : '<img src="play.svg" alt="Play">';

    // Change image to color if playing, grayscale if not
    const hoverImage = this.cardElement.querySelector(".hover-image");
    hoverImage.style.filter = this.isPlaying ? "none" : "grayscale(100%)";
    hoverImage.style.opacity = this.isPlaying ? "1" : "0";

    // Play or pause the audio
    if (this.isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  resetCard() {
    this.isPlaying = false;
    const button = this.cardElement.querySelector(".icon-button");
    button.innerHTML = '<img src="play.svg" alt="Play">';

    const hoverImage = this.cardElement.querySelector(".hover-image");
    hoverImage.style.filter = "grayscale(100%)";
    hoverImage.style.opacity = "0";
  }

  addHoverEffect() {
    // Create hover effect to blend color and grayscale image
    this.cardElement.addEventListener("mouseenter", () => {
      if (!this.isPlaying) {
        const hoverImage = this.cardElement.querySelector(".hover-image");
        hoverImage.style.opacity = 1;
      }
    });

    this.cardElement.addEventListener("mouseleave", () => {
      if (!this.isPlaying) {
        this.cardElement.style.backgroundColor = this.bgColor;
        const hoverImage = this.cardElement.querySelector(".hover-image");
        hoverImage.style.opacity = 0;
      }
    });
  }

  addTiltEffect() {
    // Tilt effect on mouse move
    this.cardElement.addEventListener("mousemove", (e) => {
      const cardRect = this.cardElement.getBoundingClientRect();
      const centerX = cardRect.left + cardRect.width / 2;
      const centerY = cardRect.top + cardRect.height / 2;

      const x = (e.clientX - centerX) / cardRect.width;
      const y = (e.clientY - centerY) / cardRect.height;

      const rotateX = y * 25; // Maximum tilt angle for X-axis
      const rotateY = -x * 25; // Maximum tilt angle for Y-axis

      this.cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset tilt on mouse leave
    this.cardElement.addEventListener("mouseleave", () => {
      this.cardElement.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const audioGrid = document.getElementById("audio-grid");
  const searchInput = document.getElementById("search");
  const panels = document.querySelectorAll(".panel");
  let selectedClasses = new Set();
  selectedClasses.add("ccrizzi");
  selectedClasses.add("zanzara");
  selectedClasses.add("extra");
  let audioData = [];

  // Load audio data from JSON file
  fetch("audio_list.json")
    .then((response) => response.json())
    .then((data) => {
      audioData = data;
      updateGrid();
    });

  // Add event listeners to panels
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      const panelClass = panel.querySelector("p").textContent;
      if (selectedClasses.size === 3) {
        selectedClasses.forEach((selectedClass) => {
          if (selectedClass !== panelClass) {
            const element = document.getElementById(
              `${selectedClass.toLowerCase()}-panel`
            );
            element.classList.remove("selected");
            selectedClasses.delete(selectedClass);
          }
        });
      } else if (
        selectedClasses.size === 1 &&
        selectedClasses.has(panelClass)
      ) {
        panels.forEach((panel) => {
          if (panel.classList.contains("selected")) {
            panel.classList.remove("selected");
          }
          const panelClass = panel.querySelector("p").textContent;
          selectedClasses.add(panelClass);
          panel.classList.add("selected");
        });
      } else {
        if (selectedClasses.has(panelClass)) {
          selectedClasses.delete(panelClass);
          panel.classList.remove("selected");
        } else {
          selectedClasses.add(panelClass);
          panel.classList.add("selected");
        }
      }
      updateGrid();
    });
  });

  // Add event listener to search input
  searchInput.addEventListener("input", updateGrid);

  function updateGrid() {
    const query = searchInput.value.toLowerCase();
    audioGrid.innerHTML = "";

    let filteredData = audioData.filter((item) =>
      item.title.toLowerCase().includes(query)
    );

    if (selectedClasses.size > 0) {
      filteredData = filteredData.filter((item) =>
        selectedClasses.has(item.class)
      );
    } else {
      filteredData = [];
    }

    filteredData.forEach((item) => createGridItem(item));
  }

  function createGridItem(item) {
    const bgColor = getBgColor(item.class);
    const card = new InteractiveCard({
      imagePath: "a.png",
      imagePath:
        item.class === "ccrizzi"
          ? "icons/ccrizzi.jpg"
          : item.class === "zanzara"
          ? "icons/la_zanzara.jpg"
          : "icons/barcelona.jpeg",
      bgColor: bgColor,
      titleText: item.title,
      categoryText: item.class,
      audioPath: item.audio_path,
    });

    audioGrid.appendChild(card.cardElement);
  }

  function getBgColor(category) {
    switch (category.toLowerCase()) {
      case "ccrizzi":
        return "blue";
      case "zanzara":
        return "green";
      case "extra":
        return "orange";
      default:
        return "gray";
    }
  }
});