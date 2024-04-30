$(window).on("load", function() {
    $("#preloader").fadeOut("slow");
});
  

let result = {
  tag: "",
  free: true,
  role: false,
  user: "lavinmarques97",
  email: "lavinmarques97@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
    console.log("clicked");

    resultCon.innerHTML = `
    <div id="preloader">
        <img class="transparent-bg" src="libs/Loading_icon2.gif" alt="Loading Animation">
    </div>
    `;

  let email = document.getElementById("emailInput").value;

  console.log(email);
  let key = "ema_live_0aCcMagAOZW12ZKS3tXZuwuV82pk6LBE1nqRMUKa";

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let req = await fetch(url);
  let result = await req.json();
  let str = ``;

  for (key of Object.keys(result)) {
    if(result[key] !== "" && result[key] !== "")
    str = str + `<div>${key}: ${result[key]}</div>`;
  }

  // btn.innerHTML = `<button type="button">New Validate</button>`

  resultCon.innerHTML = str;
});
