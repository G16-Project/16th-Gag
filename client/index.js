
$(document).ready(function () {
  const email = $("#login-email").val()
  const password = $("#login-password").val()
  if (email && password) {
    $("#home-page").show()
    $("#login-page").hide()
    $("#register-page").hide()
  }
  else {
    $("#login-page").show()
    $("#home-page").hide()
    $("#register-page").hide()
  }
})

function register() {
  console.log("Silahkan pak!")
  $("#login-page").hide()
  $("#register-page").show()
}

function login(event) {
  event.preventDefault()
  const email = $("#login-email").val()
  const password = $("#login-password").val()
  if (email && password) {
    $("#login-page").hide()
    $("#home-page").show()
  }
  else {
    $("#login-page").show()
    $("#home-page").hide()
  }
}

function logout() {
  $("#login-page").show()
  $("#home-page").hide()
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
    .done(response => {
      console.log(response)
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