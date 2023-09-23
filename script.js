let submit = document.querySelector(".Submit");
let addClub = document.querySelector(".AddClub");
let searchClub = document.querySelector(".SearchClub");

// Check if data is already stored in localStorage and initialize ClubData accordingly
let ClubData = JSON.parse(localStorage.getItem("ClubData")) || [
  {
    Name: "Vancover Tennis Club",
    Sports: "Tennis",
    location: "Vancouver",
    Email: "vantennisclub@gmail.com",
  },
  {
    Name: "Boys Volleyball",
    Sports: "Volleyball",
    location: "Vancouver",
    Email: "ballboys@gmail.com",
  },
  {
    Name: "Soccer club",
    Sports: "Soccer",
    location: "Vancouver",
    Email: "menssoccer@gmail.com",
  },
];

// Function to save the ClubData array to localStorage
function saveDataToLocalStorage() {
  localStorage.setItem("ClubData", JSON.stringify(ClubData));
}

submit.addEventListener("click", function () {
  let clubname = document.querySelector(".ClubName").value;
  let sport = document.querySelector(".Sports").value;
  let sports = capitalizeWord(sport);
  let location = document.querySelector(".Location").value;
  let email = document.querySelector(".Email").value;
  let getData = {
    Name: clubname,
    Sports: sports,
    location: location,
    email: email,
  };

  ClubData.push(getData);
  saveDataToLocalStorage();
  console.log(ClubData); // Save the updated data to localStorage
});

searchClub.addEventListener("click", function () {
  const clubdata = document.querySelector(".clubdata");
  const message = document.createElement("div");
  // const show = document.querySelector(".getsports").value;
  // const showData = capitalizeWord(show);

  message.classList.add("show-data");

  message.innerHTML =
    "<ul>" +
    ClubData.filter(function (clubdata) {
      console.log(clubdata);
      return showData === clubdata.Sports;
    })
      .map(function (clubdata) {
        return (
          "<li>" +
          "<strong>Title:Name </strong>" +
          clubdata.Name +
          "<br/>" +
          "<strong>email: </strong>" +
          clubdata.email +
          "<br/>" +
          "<strong>Sports: </strong>" +
          clubdata.Sports +
          "<br/>" +
          "<strong>Location: </strong>" +
          clubdata.location +
          "<br/>" +
          "</li>"
        );
      })
      .join("") +
    "</ul>";

  clubdata.append(message);
});

function capitalizeWord(word) {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let part1 = document.querySelector(".part1");
let part2 = document.querySelector(".part2");
let getClub = document.querySelector(".getClub");
let getPlayer = document.querySelector(".getPlayer");

getClub.addEventListener("click", function () {
  part2.classList.add("hidden1");
  part1.classList.remove("hidden1");
});
getPlayer.addEventListener("click", function () {
  part1.classList.add("hidden1");
  part2.classList.remove("hidden1");
});
let clubData = document.querySelector(".clubdata");
addClub.addEventListener("click", function () {
  console.log("h2");
  clubData.classList.remove("hidden");
});

const players = [
  {
    Name: "John",
    Email: "john@fake.com",
    Sport: "Soccer",
    Location: "Vancouver",
  },
  {
    Name: "Cindy",
    Email: "Cindy@fake.com",
    Sport: "Tennis",
    Location: "Burnaby",
  },
  {
    Name: "Fake",
    Email: "Fake@fake.com",
    Sport: "Basketball",
    Location: "Richmond",
  },
];

var render = function (data) {
  var app = document.getElementById("list");

  let playerHtml =
    `<ul class="responsive-table">` +
    `<li class="table-header">` +
    `<div class="col col-1">Name</div>` +
    `<div class="col col-2">Email</div>` +
    `<div class="col col-3">Sport</div>` +
    `<div class="col col-4">Location</div>` +
    `</li>` +
    data
      .map(function (player) {
        return (
          `<li class="table-row">` +
          `<div class="col col-1" data-label="Job Id"> ` +
          player.Name +
          `</div>` +
          "<br/>" +
          `<div class="col col-2" data-label="Job Id"> ` +
          player.Email +
          `</div>` +
          "<br/>" +
          `<div class="col col-3" data-label="Job Id"> ` +
          player.Sport +
          `</div>` +
          "<br/>" +
          `<div class="col col-4" data-label="Job Id"> ` +
          player.Location +
          `</div>` +
          "<br/>" +
          "</li>"
        );
      })
      .join("");
  +"</ul>";
  app.innerHTML = playerHtml;
};
render(players);

var handleSearch = function (event) {
  event.preventDefault();
  // Get the search terms from the input field
  var searchTerm = event.target.elements["sport"].value;
  // Tokenize the search terms and remove empty spaces
  var tokens = searchTerm
    .toLowerCase()
    .split(" ")
    .filter(function (token) {
      return token.trim() !== "";
    });
  if (tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join("|"), "gim");
    var filteredList = players.filter(function (player) {
      // Create a string of all object values
      var playerString = "";
      for (var key in player) {
        if (player.hasOwnProperty(key) && player[key] !== "") {
          playerString += player[key].toString().toLowerCase().trim() + " ";
        }
      }
      // Return book objects where a match with the search regex if found
      return playerString.match(searchTermRegex);
    });
    // Render the search results
    render(filteredList);
  }
};

document.addEventListener("submit", handleSearch);

document.addEventListener("reset", function (event) {
  event.preventDefault();
  render(players);
});
