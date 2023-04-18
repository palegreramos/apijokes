function muestra_chiste(chiste) {
    if (chiste.type=="single")
        document.querySelector("h2").innerText=chiste.joke;
    else 
    document.querySelector("h2").innerText=chiste.setup + " " + chiste.delivery;
}

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://v2.jokeapi.dev/joke/Any?lang=es') 
.then(response => response.json()) 
.then(data => muestra_chiste(data));
});
