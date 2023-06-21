async function data(pokemon) {
    const Http = new XMLHttpRequest();
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        const data = JSON.parse(Http.responseText)
        alert(data.name)
    }
}