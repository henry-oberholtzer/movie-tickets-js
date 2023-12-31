const movieList = {

    1: {
        movieName: "Rocky Horror Picture Show",
        rating: "R",
        times: [10, 12, 14, 16, 18, 20, 22, 24],
        imageURL: "https://cdn.europosters.eu/image/750/posters/the-rocky-horror-picture-show-lips-i151236.jpg",
    },
    2: {
        movieName: "The Worst Witch",
        rating: "R",
        times: [10, 14, 18, 24],
        imageURL: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Worst_Witch_cover.jpg",
    },
    3: {
        movieName: "Muppet Treasure Island",
        rating: "G",
        times: [12, 16, 20, 24],
        imageURL: "https://upload.wikimedia.org/wikipedia/en/a/a3/Muppettreasure.png",
    },
    4: {
        movieName: "Congo",
        rating: "PG-13",
        times: [13, 16, 19, 23],
        imageURL: "",
    },
    5: {
        movieName: "It",
        rating: "R",
        times: [18, 20, 22],
        imageURL: "",
    },
    6: {
        movieName: "Charlie's Angels",
        rating: "PG-13",
        times: [14, 17, 20],
        imageURL: "",
    },
    7: {
        movieName: "Gingerclown",
        rating: "R",
        times: [17, 20, 23],
        imageURL: "",
    },
    8: {
        movieName: "FernGully",
        rating: "G",
        times: [10, 14],
        imageURL: "",
    },
}

// Business Logic

function enterAge(age) {
    const movieKeys = Object.keys(movieList);
    const movieFiltered = []
    movieKeys.forEach(function (index) {
        if (age >= 17) {
            movieFiltered.push(index)
        } else if (age > 12 && movieList[index].rating === "PG-13") {
            movieFiltered.push(index);
        } else if (age > 12 && movieList[index].rating === "G") {
            movieFiltered.push(index);
        } else if (age <= 12 && movieList[index].rating === "G") {
            movieFiltered.push(index);
        }
    });
    return movieFiltered;
}
    function moviePrice(time, age) {
        if (age >= 65) {
          return "$8";
        } else if (time >= 17) {
          return "$18";
        } else {
          return "$10";
        }
    };

// UI Logic

function onMovieTimeClick(event) {
    const time = event.target.id
    const age = parseInt(document.getElementById("age").value);
    const priceResult = moviePrice(time, age);
    document.getElementById("priceResult").innerText = priceResult;
}


function getMovieTimes(event) {
    const index = event.target.id
    if (parseInt(index) === 2) { 
        document.getElementById("tim").setAttribute("style", "");
    }
    const times = movieList[index].times
    const showtimesDiv = document.getElementById("showtimes");
    const ul = document.createElement("ul");
    times.forEach(function (time) {
      const li = document.createElement("li");
      li.addEventListener("click", onMovieTimeClick)
      li.setAttribute("id", time)

      ul.append(li);
      li.append(time);
    })
    showtimesDiv.append(ul);
    document.getElementById("aboutMovie").removeAttribute("class");
}

function displayFilms(event) {
    event.preventDefault();
    document.getElementById("aboutMovie").removeAttribute("class", "hidden");
    document.getElementById("movieDiv").innerHTML = null;
    document.getElementById("priceResult").innerText = null;
    document.getElementById("showtimes").innerHTML = null;
    const movieDiv = document.getElementById("movieDiv");
    const movieListDiv = document.createElement("div")
    const age = parseInt(document.getElementById("age").value);
    const movieArray = enterAge(age);
    movieArray.forEach((element) => movieListDiv.append(movieParagraphElement(element)));
    movieDiv.append(movieListDiv);
    movieDiv.setAttribute("class","");
}

function movieParagraphElement(element) {
    const p = document.createElement("p");
    const index = parseInt(element);
    p.setAttribute("id", element);
    const movieTitle = movieList[index].movieName;
    p.addEventListener("click", getMovieTimes)
    p.append(movieTitle);
    return p
}

function interactive() {
    const form = document.getElementById("age-form")
    form.addEventListener("submit", displayFilms)
}

window.addEventListener("load", interactive)