/**
 * Using for filter mail data
 *
 */
export class Sendmail {
  constructor(forms, url, alert) {
    this.forms = forms;
    this.url = url;
    this.alert = alert;
    this.email = "";
    this.formData = [];
    this.errors = "";
    this.dataSend = [];

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
      this.sending(this.url, {
        name: this.dataSend[0],
        email: this.dataSend[1],
        subject: this.dataSend[2],
        body: this.dataSend[3],
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

  sending(url, body, log = false) {
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
