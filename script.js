document.addEventListener('DOMContentLoaded', () => {

    loadPersonaData();
});

async function loadPersonaData() {
    try {
        const response = await fetch('persona_data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        populatePersona(data);
    } catch (error) {
        console.error("Could not load persona data:", error);
        alert("Failed to load persona_data.json. Please make sure you have run the Python script first to generate this file.");
    }
}

function populatePersona(data) {

    document.getElementById('persona-title').textContent = data.personaTitle || 'N/A';
    document.getElementById('demographics-age').textContent = data.demographics.Age || 'N/A';
    document.getElementById('demographics-occupation').textContent = data.demographics.Occupation || 'N/A';
    document.getElementById('demographics-location').textContent = data.demographics.Location || 'N/A';
    document.getElementById('persona-quote').textContent = data.quote || '';

    const populateList = (elementId, items) => {
        const list = document.getElementById(elementId);
        list.innerHTML = ''; // Clear any existing items
        if (items && items.length > 0) {
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
            });
        }
    };

    populateList('persona-habits', data.habits);
    populateList('persona-frustrations', data.frustrations);
    populateList('persona-goals', data.goals);

}