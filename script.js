let submit = document.querySelector(".Submit");
let addClub = document.querySelector(".AddClub");
let searchClub = document.querySelector(".SearchClub");

const ClubData = [
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
console.log(ClubData);
console.log("hi");

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
  console.log("hi");

  console.log(getData);
  ClubData.push(getData);
  console.log(ClubData);
});

searchClub.addEventListener("click", function () {
  const clubdata = document.querySelector(".clubdata");
  const message = document.createElement("div");
  const show = document.querySelector(".getsports").value;
  const showData = capitalizeWord(show);

  message.classList.add("show-data");

  message.innerHTML =
    "<ul>" +
    ClubData.map(function (clubdata) {
      if (showData != clubdata.Sports) return console.log("zing zing");
      else
        return (
          "<li>" +
          "<strong>Title: </strong>" +
          clubdata.Name +
          "<br/>" +
          "<strong>Subtitle: </strong>" +
          clubdata.Email +
          "<br/>" +
          "<strong>Sports: </strong>" +
          clubdata.Sports +
          "<br/>" +
          "<strong>Location: </strong>" +
          clubdata.location +
          "<br/>" +
          "</li>"
        );
    }).join("");
  +"</ul>";
  clubdata.append(message);
});

function capitalizeWord(word) {
  // Convert the word to lowercase first
  word = word.toLowerCase();

  // Capitalize the first letter and concatenate the rest
  return word.charAt(0).toUpperCase() + word.slice(1);
}
