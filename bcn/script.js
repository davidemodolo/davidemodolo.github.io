document.addEventListener("DOMContentLoaded", () => {
    const audioGrid = document.getElementById('audio-grid');
    const searchInput = document.getElementById('search');
    const panels = document.querySelectorAll('.panel');
    let selectedClasses = new Set();
    selectedClasses.add('ccrizzi');
    selectedClasses.add('zanzara');
    selectedClasses.add('extra');
    let audioData = [];

    // Load audio data from JSON file
    fetch('audio_list.json')
        .then(response => response.json())
        .then(data => {
            audioData = data;
            updateGrid();
        });

    // Add event listeners to panels
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            const panelClass = panel.querySelector('p').textContent;
            if (selectedClasses.size === 3) {
                selectedClasses.forEach(selectedClass => {
                    if (selectedClass !== panelClass) {
                        const element = document.getElementById(`${selectedClass.toLowerCase()}-panel`);
                        element.classList.remove('selected');
                        selectedClasses.delete(selectedClass);
                    }
                });
            } else if (selectedClasses.size === 1 && selectedClasses.has(panelClass)) {
                panels.forEach(panel => {
                    if (panel.classList.contains('selected')) {
                        panel.classList.remove('selected');
                    }
                    const panelClass = panel.querySelector('p').textContent;
                    selectedClasses.add(panelClass);
                    panel.classList.add('selected');
                });
            } else {
                if (selectedClasses.has(panelClass)) {
                    selectedClasses.delete(panelClass);
                    panel.classList.remove('selected');
                } else {
                    selectedClasses.add(panelClass);
                    panel.classList.add('selected');
                }
            }
            updateGrid();
        });
    });

    // Add event listener to search input
    searchInput.addEventListener('input', updateGrid);

    function updateGrid() {
        const query = searchInput.value.toLowerCase();
        audioGrid.innerHTML = '';

        let filteredData = audioData.filter(item =>
            item.title.toLowerCase().includes(query)
        );

        const gridItems = Array.from(audioGrid.children);
        gridItems.forEach(item => {
            item.classList.add('hidden');
        });

        setTimeout(() => {
            audioGrid.innerHTML = '';
            filteredData.forEach(item => createGridItem(item));
        }, 0);

        if (selectedClasses.size > 0) {
            filteredData = filteredData.filter(item => selectedClasses.has(item.class));
        } else {
            filteredData = [];
        }

        filteredData.forEach(item => createGridItem(item));
    }

    function createGridItem(item) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.classList.add(item.class.toLowerCase());
        gridItem.innerHTML = `
            <p>${item.title}</p>
            <i class="play-icon"><img class = "icon" src="play.svg" alt="Play"></i>
            <audio src="${item.audio_path}" preload="none"></audio>
        `;
        const playIcon = gridItem.querySelector('.play-icon');
        const audio = gridItem.querySelector('audio');

        audio.addEventListener('ended', () => {
            playIcon.innerHTML = '<img class = "icon" src="play.svg" alt="Play">';
        });

        playIcon.addEventListener('click', () => {
            if (audio.paused) {
                playIcon.innerHTML = '<img class = "icon" src="stop.svg" alt="Stop">';
                audio.play();
            } else {
                playIcon.innerHTML = '<img  class = "icon" src="play.svg" alt="Play">';
                audio.pause();
                audio.currentTime = 0;
            }
        });

        audioGrid.appendChild(gridItem);
        setTimeout(() => {
            gridItem.classList.remove('hidden');
            gridItem.classList.add('visible');
        }, 10);
    }
});
