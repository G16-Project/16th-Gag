
$(document).ready(function() {
  const email = $("#login-email").val()
  const password = $("#login-password").val()
  if(email && password) {
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
  if(email && password) {
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