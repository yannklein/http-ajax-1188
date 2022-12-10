// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select elements (button)
// const button = document.querySelector("#click-me");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (disable, change the text)
//   event.currentTarget.disabled = true;
//   event.currentTarget.innerText = "Loading...";
// });


// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (input, button, list)
console.log("Start of the JS");

const input = document.querySelector("#keyword");
const button = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. Listen to a click on button
button.addEventListener("click", (event) => {
  // console.log(event);
  console.log("button clicked");

  event.preventDefault();
  // 2.5 Fetch data from OMDBAPI
  const keyword = input.value;
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  // const results = fetch(url) DOESNT WORK
  fetch(url)
    .then( response => response.json())
    .then( (data) => {
      console.log("data arrives");
      // console.log(data.Search);
      const movies = data.Search;
      // 3. Change the DOM (show data on list)
      results.innerHTML = "";
      movies.forEach((movie) => {
        results.insertAdjacentHTML("beforeend", `
          <li class='list-inline-item'>
            <img src="${movie.Poster}" alt="" />
            <p>${movie.Title}</p>
          </li>
        `)
    });
  })
  console.log("after the fetch");
});


// //////////////////////
// HTTP POST request
// //////////////////////

const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  const data = {"email": emailValue, "password": passwordValue};

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }

  const url = "https://reqres.in/api/register";
  
  fetch(url, options)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)