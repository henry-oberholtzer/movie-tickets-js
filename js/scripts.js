const movieList = {
    1: {
        movieName: "Rocky Horror Picture Show",
        rating: "R",
        times: [10, 12, 14, 16, 18, 20, 22, 24],
        imageURL: "https://cdn.europosters.eu/image/750/posters/the-rocky-horror-picture-show-lips-i151236.jpg"
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
        imageURL: "https://upload.wikimedia.org/wikipedia/en/a/a3/Muppettreasure.png"
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
    movieKeys.forEach(function(index) {
        if(age >= 17) {
            movieFiltered.push(index)
        } else if(age > 12 && movieList[index].rating === "PG-13") {
            movieFiltered.push(index);
        } else if(age > 12 && movieList[index].rating === "G") {
            movieFiltered.push(index);
        } else if(age <= 12 && movieList[index].rating === "G") {
            movieFiltered.push(index);
        }
    });
    return movieFiltered;
}