async function fetchAPI(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }

}

const pact = fetchAPI('https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0&current=temperature_2m&timezone=GMT&forecast_days=1')
pact.then((data) => {
    const container = document.getElementById("weatherDialog");

    // Clear the container before adding new articles
    container.innerHTML += "";

        const element = document.createElement('div');
        element.classList.add();
        element.innerHTML = `
        Weather | Null City<br><br>
        ${data.current.temperature_2m} ${data.current_units.temperature_2m}
        `;
        container.appendChild(element);
});