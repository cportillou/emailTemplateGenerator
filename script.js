"use strict";
//Declaring variables
const generatedTemplateCode = document.querySelector(".generatedTemplateCode");
const generatedTemplateCodeContainer = document.querySelector(
  ".generatedTemplateCodeContainer"
);
const btnCopy = document.querySelector(".copyLinkBtn");
const btnRender = document.querySelector(".renderLinkBtn");
const btnGenerate = document.querySelector(".btn-form");
const form = document.querySelector(".form-element");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnModal = document.querySelector(".btn--close-modal");
const previewModal = document.querySelector(".previewContent");

// Default values
const fName = "${m://FirstName}";
let optOutLink = "${l://OptOutLink?d=Unsubscribe}";
let logoURL = "";
let bannerURL = "";
let projectIntro = "";
let projectWhat = "";
let projectWhen = "";
let projectDuration = "";
let projectIncentive = "";
let projectClosing = "";
let surveyURL = "";
let projectManagers = "";
let role = "";
let projectPhone = "";
let projectCode = "";

// Events

form.addEventListener("submit", function (event) {
  // Check if form is valid

  event.preventDefault();

  if (!form.checkValidity()) {
    console.log(form.checkValidity());
    // Prevent form submission if invalid

    alert("Please fill in all required fields correctly.");
  } else {
    getFormValues();
    console.log("Project intro is: ", projectIntro);
    generateHTML();
  }
});

btnModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

btnCopy.addEventListener("click", function (e) {
  e.preventDefault();
  copyGeneratedCode();
});

btnRender.addEventListener("click", function (e) {
  e.preventDefault();
  previewGeneratedHTML();
});

// Functions

function getFormValues() {
  logoURL = "https://survey.10kvoices.com/CP/Graphic.php?IM=IM_6PvZEirrINmXWTQ";
  bannerURL =
    "https://survey.10kvoices.com/CP/Graphic.php?IM=IM_9Qq5ViJpfY2y1Ui";
  projectIntro = document.getElementById("projectIntro").value;
  projectWhat = document.getElementById("projectWhat").value;
  projectWhen = document.getElementById("projectWhen").value;
  projectDuration = document.getElementById("projectDuration").value;
  projectIncentive = document.getElementById("projectIncentive").value;
  projectClosing = document.getElementById("projectClosing").value;
  surveyURL =
    "https://survey.10kvoices.com/jfe/form/SV_cGaNpipmQCdV20C?Source=Reviewer&amp;Version=1";
  projectManagers = document.getElementById("projectManagers").value;
  role = document.getElementById("role").value;
  projectPhone = document.getElementById("phone").value;
  projectCode = document.getElementById("projectCode").value;
}

function formatHtml(html) {
  let formatted = "";
  const indentSize = 3; // Number of spaces for indentation
  const lines = html.replace(/>\s+</g, "><").split(/(?<=>)/); // Split by closing tags
  let indentLevel = 0;

  lines.forEach((line) => {
    if (line.match(/^<\/\w/)) {
      // Closing tag decreases indent level
      indentLevel -= 1;
    }

    formatted += " ".repeat(indentSize * indentLevel) + line.trim() + "\n";

    if (line.match(/^<\w[^>]*[^/]>$/)) {
      // Opening tag increases indent level
      indentLevel += 1;
    }
  });

  return formatted.trim();
}

function generateHTML() {
  htmlCode = `
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge">
<link href="https://fonts.googleapis.com/css2?family=Alata&amp;display=swap" rel="stylesheet" />
<style type="text/css">/* General reset */
    body, table, td, a {
      text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      background-color: #f0f0f0;
      font-family: 'Alata', Arial, sans-serif;

    }
    img {
      border: 0;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      max-width: 100%;
    }
    table {
      border-collapse: collapse !important;
      width: 100%;
    }

.btn_Apply{
font-size:18px;
padding: 10px 20px;
background-color:#72b99c;
color:#ffffff !important;
font-weight:bold;
text-decoration:none;
border-radius: 5px;
display:inline-block;
}

a:active, a:hover, a:link, a:visited{
color:#ffffff;

}

    /* Responsive design */
    @media only screen and (max-width: 600px) {
      .container {
        width: 95% !important;
      }
      .banner img {
        width: 95% !important;
        height: auto !important;
      }
    }

    /* Overlay and background */
    .background {
      background-image: url('https://survey.10kvoices.com/ControlPanel/Graphic.php?IM=IM_XPAglnOw6qFOph4');
      background-size: cover;
      background-position: center;
    }
    .overlay {
      background-color: rgba(255, 255, 255, 0.5);
      width: 100%;
      padding: 0;
    }

    /* Email container */
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    /* Logo section */
    .banner {
      padding: 20px;
      text-align: right;
    }

    .content {
      padding: 20px;
      text-align: left;
      color: #333333;
      font-size: 16px;
      line-height: 1.6;
    }
</style>
<!-- Background with Overlay -->
<table class="background" role="presentation">
	<tbody>
		<tr>
			<td>
			<table class="overlay" role="presentation">
				<tbody>
					<tr>
						<td align="center"><!-- Main Container -->
						<table class="container" role="presentation" style="width: 100%;"><!-- Logo Banner -->
							<tbody>
								<tr>
									<td class="banner"><img alt="Logo" src="${logoURL}" style="height: auto;" width="200" /></td>
								</tr>
								<!-- Content -->
								<tr>
									<td class="content"><img src="${bannerURL}" style="max-width: 600px;" /><br />
									<br />
									Hello ${fName},<br />
									<br />
									${projectIntro}<br />
									<br />
									<strong>Study Details:</strong>
									<ul>
										<li><strong>What</strong>: ${projectWhat}</li>
										<li><strong>When</strong>: Availability between <strong>${projectWhen}</strong></li>
										<li><strong>Duration</strong>: ${projectDuration}</li>
										<li><strong>Incentive</strong>: $${projectIncentive} Virtual Gift Card (delivered within 7-14 days after completion)</li>
									</ul>
									${projectClosing}<br />
									<br />
									<strong>Ready to participate? </strong> Apply now or share this opportunity with someone you know who might be a great fit!<br />
									<br />
									&nbsp;
									<div style="text-align: center;"><a class="btn_Apply" href="${surveyURL}" style="color:#ffffff;" target="_blank">Click Here to Start</a></div>
									<br />
									<br />
									We look forward to hearing your valuable insights!<br />
									<br />
									Sincerely,<br />
									<br />
									<strong>${projectManagers}</strong><br />
									<strong>${role}</strong><br />
									<strong>Project Phone</strong> ${projectPhone}<br />
									<strong>Project Code</strong> ${projectCode}

									<div style="text-align: center;"><span style="font-size:11px;">${optOutLink}</span></div>
									</td>
								</tr>
							</tbody>
						</table>
						<!-- End of Main Container --></td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>
`;

  htmlCode = formatHtml(htmlCode);
  generatedTemplateCode.textContent = htmlCode;
  generatedTemplateCodeContainer.classList.remove("hidden");
}

function previewGeneratedHTML() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  previewModal.innerHTML = htmlCode;
}

function copyGeneratedCode() {
  navigator.clipboard
    .writeText(generatedTemplateCode.textContent)
    .then((btnCopy.textContent = "Copied!"))
    .catch((err) => alert("Failed to copy code. Error: ", err));

  if (btnCopy.textContent === "Copied!") {
    setTimeout(function () {
      btnCopy.textContent = "Copy Code";
    }, 1000);
  }
}

let html = "";
