/**
 * Using for filter mail data
 *
 */
export class Sendmail {
  constructor(forms, alert) {
    this.forms = forms;
    this.alert = alert;
    this.email = "";
    this.formData = [];
    this.errors = "";
    this.dataSend = [];
    this.isSend = false;

    this.getFormData();
    this.filterFormData();
  }

  getFormData() {
    for (let i = 0; i < this.forms.length - 1; i++) {
      this.formData.push(this.forms[i]);
    }
  }

  filterFormData() {
    this.formData.forEach((form) => {
      if (form.value === "" || form.value == null) {
        this.errors = "Veuillez remplir tous les champs !";
      } else {
        this.email = this.formData[1].value;

        if (this.isValidMail(this.email)) {
          this.dataSend.push(form.value);
        } else {
          this.errors = "Le format d'email est invalid !";
        }
      }
    });

    if (this.errors === "" || this.errors === null) {
      const [name, email, subject, message] = this.dataSend;
      this.sending({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });

      setTimeout(() => {
        this.alert.textContent = "Merci pour votre message, à très bientôt !";
        this.alert.classList.remove("noSend");
        this.alert.classList.add("isSend");
        this.forms.reset();

        setTimeout(() => {
          this.alert.textContent = "";
          this.alert.classList.remove("isSend");
        }, 3000);
      }, 2000);
    } else {
      this.alert.textContent = this.errors;
      this.alert.classList.remove("isSend");
      this.alert.classList.add("noSend");
    }
  }

  isValidMail(email) {
    if (email.includes("@")) {
      return true;
    } else {
      return false;
    }
  }

  sending(body, log = false) {
    let url = "sendmail";
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
}
