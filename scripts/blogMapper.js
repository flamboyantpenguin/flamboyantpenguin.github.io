fetch("https://blog.flamboyantpenguin.in/feed.xml")
    .then((response) => response.text())
    .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/xml");
        const articles = doc.getElementsByTagName("entry");
        const container = document.getElementById("articleContainer");
        container.innerHTML += "";
        for (let index = 0; index < articles.length; index++) {
            let title = articles[index].getElementsByTagName("title")[0].childNodes[0].nodeValue;
            let summary = articles[index].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
            let url = articles[index].getElementsByTagName("id")[0].childNodes[0].nodeValue;
            let pbDate = articles[index].getElementsByTagName("updated")[0].childNodes[0].nodeValue;

            const element = document.createElement('a');
            element.classList.add();
            element.innerHTML = `
                <a href = "${url}" target="_blank">
                <div class = "big-button">
                    ${title}<br><br>
                    ${summary}
                    <br><br>${pbDate}
                </div>
                </a>`;
            container.appendChild(element);
        }
    });