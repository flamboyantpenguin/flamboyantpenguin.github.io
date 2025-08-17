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

const pact = fetchAPI('https://dev.to/api/articles?tag=linux&per_page=10')
pact.then((data) => {
    const container = document.getElementById("newsContainer");

    // Clear the container before adding new articles
    container.innerHTML += "";

    data.forEach(article => {
        const element = document.createElement('a');
        element.classList.add();
        element.innerHTML = `
        <a href = "${article.url}">
        <div class = "big-button" style="background-image: url(${article.cover_image}); background-blend-mode: darken;background-color: rgba(0,0,0,0.6);">
            ${article.title}
        </div>
        </a>`;
        container.appendChild(element);
    });
});

