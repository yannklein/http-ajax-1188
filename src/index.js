// //////////////////////
// Rehearsal
// //////////////////////

// 1. Select elements (button)
// const button = document.querySelector("#click-me");

// // 2. Listen to an event (click on the button)
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (add a disabled class, change the innerText)
//   const clickedElement =  event.currentTarget;
//   clickedElement.classList.add("disabled");
//   clickedElement.innerText = "Loading...";
// });


// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (submit, keyword, results)
console.log('start of the code');
const submit = document.querySelector("#submit");
const keyword = document.querySelector("#keyword");
const results = document.querySelector("#results");

// 2. Listen to a click on submit
submit.addEventListener("click", (event) => {
  console.log('after the click');

  event.preventDefault(); // prevent the default reload of the page
  // console.log(event);
  // 2.5 Ftech OMDB API, get the movies
  const url = `https://www.omdbapi.com/?s=${keyword.value}&apikey=adf1f2d7`;
  // const movies = fetch(url) //DOESNT WORK
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log('data arrives');
      results.innerHTML = '';
      // 3. Change the DOm, display the movies
      const movies = data.Search;
      movies.forEach((movie) => {
        results.insertAdjacentHTML(
          "beforeend", 
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="" />
            <p>${movie.Title}</p>
          </li>`
        );
      });
    });
    console.log('after the fetch');
});
console.log('end of the code');

// //////////////////////
// HTTP POST request
// //////////////////////

const signUp = (event) => {
  event.preventDefault()
  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  const data = {email: emailValue, password: passwordValue};

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  };

  // 2.5 Fecth dummy API (POST)
  fetch("https://reqres.in/api/register", options)
    .then(response => response.json())
    .then((data) => {
      // 3. Change the DOM
      console.log(data)
    });

};

// 1. Select elements
const form = document.querySelector("#form");
// 2. Listen to a submit event
form.addEventListener("submit", signUp);