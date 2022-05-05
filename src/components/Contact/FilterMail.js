export const FilterMail = (e) => {
  e.preventDefault();

  const contactForm = document.querySelector("#contact-form");
  const inputEmail = document.querySelector("#email");
  const msgAlert = document.querySelector(".msg-alert");

  contactForm.autocomplete = "off";
  // const url = "http://localhost:3021/Sendmail.php";
  const url = "./src/components/Contact/Sendmail.php";

  console.log("Filtermail Enabled");

  let formData = [];
  let errors = "";
  let dataSend = [];

  for (let i = 0; i < contactForm.length - 1; i++) {
    formData.push(contactForm[i]);
  }

  formData.forEach((form) => {
    if (form.value === "" || form.value == null) {
      errors = "Veuillez remplir tous les champs !";
    } else {
      if (inputEmail.value.includes("@")) {
        dataSend.push(form.value);
      } else {
        errors = "Le format d'email est invalid !";
      }
    }
  });

  if (errors !== "" || errors !== null) {
    const mailer = {
      name: dataSend[0],
      email: dataSend[1],
      subject: dataSend[2],
      body: dataSend[3],
      isSend: false,
    };

    sending(url, mailer, true);

    sendStatus(url, true);

    setTimeout(() => {
      msgAlert.textContent = "Merci pour votre message, à très bientôt !";
      msgAlert.classList.remove("noSend");
      msgAlert.classList.add("isSend");
    });
  } else {
    msgAlert.textContent = errors;
    msgAlert.classList.remove("isSend");
    msgAlert.classList.add("noSend");
  }
};

function sending(url, body, log = false) {
  let reqOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(url, reqOptions).then(async (response) => {
    const resContent = await response.text();
    try {
      if (resContent.ok && resContent.status === 200) {
        if (log === true) console.log(resContent);
      }
    } catch (error) {
      if (log === true) console.log(error);
    }
  });
}

function sendStatus(url, log = false) {
  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    const resContent = await res.text();
    try {
      if (res.ok && res.status === 200) {
        JSON.parse(resContent).forEach((res) => {
          if (res.isSend === true) {
            if (log === true) {
              console.log(resContent);
              return true;
            }
          } else {
            return false;
          }
        });
      }
    } catch (error) {
      if (log === true) console.log(error);
    }
  });
}
