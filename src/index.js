import * as $ from "jquery";

import { signUserUp, signUserIn } from "./model";

function initListeners() {
  $("#submit").on("click", () => {
    const firstName = $("#fName").val();
    const lastName = $("#lName").val();
    const email = $("#signEmail").val();
    const password = $("#signpass").val();

    // console.log(firstName, lastName, email, password);
    signUserUp(firstName, lastName, email, password);
  });

  //   $("#so").on("click", () => {
  //     // console.log("Sign Out");
  //     signUserOut();
  //   });

  $("#loginBtn").on("click", () => {
    let logEmail = $("#logEmail").val();
    let logpass = $("#logpass").val();
    signUserIn(logEmail, logpass);
  });
}

$(document).ready(function () {
  initListeners();
});
