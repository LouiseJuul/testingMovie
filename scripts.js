const myMovies = {
    "movieList": [{
        "Title": "Shrek",
        "YoutubeId": "oW-vf54cUes",
    },
    {
        "Title": "Ice Age",
        "YoutubeId": "0jUTl0TkmX8",
    },
    {
        "Title": "Madagascar",
        "YoutubeId": "U0rmYUlDPxg",
    },
    {
        "Title": "UP",
        "YoutubeId": "yADAYe9efE0",
    },
    {
        "Title": "Ratatouille",
        "YoutubeId": "fIjHfW6y4Mg",
    },
    {
        "Title": "Checkered Ninja",
        "YoutubeId": "JomgeiCFJ6E",
    }
]
};


//finding the root element
const app = document.getElementById('root');

//creating an element for the logo
const logo = document.createElement('img');
//logo.src = 'logo.png';

//creating a container element
const container = document.createElement('div');
container.setAttribute('class', 'container');

//attaching the container to the root element
app.appendChild(container);

//the url is our endpoint and contains the data that we want to work with
let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

//get the title and YoutubeId from the JSON file
myMovies.movieList.forEach(movie=> {
console.log(movie.Title);
console.log(movie.YoutubeId);
let url = "http://www.omdbapi.com/?t="+movie.Title+"&apikey=ebbc5a90";

//Embed video
const showVideo = document.createElement("iframe");
showVideo.setAttribute("src", "https://www.youtube.com/embed/"+movie.YoutubeId);

//The endpoint is passed into the call of the fetch function. The call of the fetch returns a promise
fetch(proxyUrl + url)
    //when the promise is resolved we extract the JSON part of the response object
    .then(response => {
        return response.json();
    })
    //then we can work with the JSON data
    .then(movie => {
        // We iterate through all the objects


            //Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');


          //Create a div with a card class
          const content = document.createElement('div');
          content.setAttribute('class', 'content');

          //Create a div with a card class
            const trailer = document.createElement('div');
            trailer.setAttribute('class', 'trailer');


            //Create an h1 and set the text content to the movie's title and year
            const h1 = document.createElement('h1');
            h1.textContent = movie.Title + ' ' + '(' + movie.Year + ')';

            // Create a p and set the text content to the movie's plot
            const p = document.createElement('p');
            p.textContent = movie.Plot;

            // Create a h3 and set the text content to the movie's imdbRating
            const h2= document.createElement('h2');
            h2.textContent = 'Rating:' + movie.imdbRating + '/10';

        //append the objects
        card.appendChild(trailer);
        trailer.appendChild(showVideo);
        card.appendChild(content);
        content.appendChild(h1);
        content.appendChild(p);
        content.appendChild(h2);
        container.appendChild(card);


    })
    .catch(err => {
        // Do something for an error here
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    })
})










