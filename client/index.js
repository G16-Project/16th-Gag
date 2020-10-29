const SERVER = "http://localhost:3000"

$(document).ready(function() {
  const email = $("#login-email").val()
  const password = $("#login-password").val()
  const token = localStorage.getItem("token")
  console.log(token)
  if(token) {
    $("#home-page").show()
    $("#login-page").hide()
    $("#register-page").hide()
    randomJokeQuotes()
    console.log("--itu joke nya--")
  }
  else {
    $("#login-page").show()
    $("#home-page").hide()
    $("#register-page").hide()
  }
})

function registerPage() {
  $("#login-page").hide()
  $("#register-page").show()
}

function loginPage() {
  $("#login-page").show()
  $("#register-page").hide()
}

function register() {
  $("#login-page").hide()
  $("#register-page").show()
  const email = $("#reg-email").val()
  const password = $("#reg-password").val()
  $.ajax({
    method: "POST",
    url: SERVER + "/register",
    data: {
      email,
      password
    }
  }).done(res => {
    console.log(res)
    $("#home-page").hide()
    $("#login-page").hide()
    $("#register-page").show()
  })
}

function login(event) {
  event.preventDefault()
  const email = $("#login-email").val()
  const password = $("#login-password").val()
  $.ajax({
    method: "POST",
    url: SERVER + "/login",
    data: {
      email,
      password
    }
  }).done(res => {
    const token = res.access_token
    localStorage.setItem("token", token)
    $("#home-page").show()
    $("#login-page").hide()
    $("#register-page").hide()
    $("#login-email").val("")
    $("#login-password").val("")
    randomJokeQuotes()
    console.log("--itu joke nya--")
  }).fail(err => {
    console.log(err)
  })
}

function logout() {
  $("#login-page").show()
  $("#home-page").hide()
  localStorage.removeItem("token")
}

function getChuck() {
  const token = localStorage.getItem("token")
  $.ajax({
    method: "GET",
    url: SERVER + "/random"
  }).done(res => {
    console.log(res)
    $("#randomize").append(`
  <div class="mt-5">
  <p class="font-weight-bold">Chuck Norris</p>
    <p class="text-justify">${res}</p>
    <button class="form-control" onclick="randomJokeQuotes()">Randomize Joke!</button>
  </div>
  `)
  }).fail(err => {
    console.log(err)
  })
}

function getFavQs() {
  const token = localStorage.getItem("token")
  $.ajax({
    method: "GET",
    url: SERVER + "/favQ"
  })
}

function getDadJokes() {
  const token = localStorage.getItem("token")
  $.ajax({
    method: "GET",
    url: SERVER + "/dad-jokes"
  }).done(res => {
    console.log(res)
    $("#randomize").append(`
  <div class="mt-5">
    <p class="font-weight-bold">Dad Jokes</p>
    <p class="text-justify">${res}</p>
    <button class="form-control" onclick="randomJokeQuotes()">Randomize Joke!</button>
  </div>
  `)
  }).fail(err => {
    console.log(err)
  })
}

function randomJokeQuotes() {
  let random = Math.ceil(Math.random()*3)
  let joke
  if(random === 1) {
    joke = getChuck()
  }
  else if(random === 2) {
    joke = getFavQs()
  }
  else if(random === 3) {
    joke = getDadJokes()
  }
  return joke
}
