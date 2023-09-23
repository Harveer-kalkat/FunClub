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
  var searchTerm = event.target.elements["location"].value;
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
