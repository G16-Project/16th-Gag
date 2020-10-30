const SERVER = "http://localhost:3000"

$(document).ready(function () {
  const email = $("#login-email").val()
  const password = $("#login-password").val()
  const token = localStorage.getItem("token")
  console.log(token)
  if (token) {
    $("#home-page").show()
    $("#login-page").hide()
    $("#register-page").hide()
    randomJokeQuotes()
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
  }).fail(err => {
    console.log(err)
  })
}

function logout() {
  $("#login-page").show()
  $("#home-page").hide()
  localStorage.removeItem("token")
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

function getChuck() {
  const token = localStorage.getItem("token")
  $.ajax({
    method: "GET",
    url: SERVER + "/random"
  }).done(res => {
    $("#randomize").empty()
    console.log(res)
    $("#randomize").append(`
    <div class="mt-5">
    <p class="font-weight-bold">Chuck Norris</p>
      <p class="text-justify">${res}</p>
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
    url: SERVER + "/favQ",
    headers: {
      token: token
    }
  }).done(res => {
    $("#randomize").empty()
    console.log(res)
    $("#randomize").append(`
      <div class="mt-5">
        <p class="font-weight-bold">Quote</p>
        <p class="text-justify">${res}</p>
      </div>
    `)
  }).fail(err => {
    console.log(err)
  })
}

function getDadJokes() {
  const token = localStorage.getItem("token")
  $.ajax({
    method: "GET",
    url: SERVER + "/dad-jokes"
  }).done(res => {
    $("#randomize").empty()
    console.log(res)
    $("#randomize").append(`
      <div class="mt-5">
        <p class="font-weight-bold">Dad Jokes</p>
        <p class="text-justify">${res}</p>
      </div>
    `)
  }).fail(err => {
    console.log(err)
  })
}

function randomJokeQuotes() {
  let random = Math.ceil(Math.random() * 3)
  let joke
  if (random === 1) {
    joke = getChuck()
  }
  else if (random === 2) {
    joke = getFavQs()
  }
  else if (random === 3) {
    joke = getDadJokes()
  }
  return joke
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  // console.log('ID: ' + profile.getId());
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail());
  var id_token = googleUser.getAuthResponse().id_token;
  // console.log(id_token)

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/googleLogin',
    data: {
      id_token
    }
  })
    .done(res => {
      const token = res.access_token
      localStorage.setItem("token", token)
      $("#home-page").show()
      $("#login-page").hide()
      $("#register-page").hide()
      $("#login-email").val("")
      $("#login-password").val("")
      randomJokeQuotes()
    })
    .fail(err => {
      console.log(err)
    })
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}