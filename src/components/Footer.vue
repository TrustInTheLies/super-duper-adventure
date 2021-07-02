<template>
  <footer class="justify-content-center align-items-center py-5 container">
    <div class="row align-items-center">
      <div class="header__wrapper d-flex align-items-center flex-column">
        <img
          src="../assets/long-logo.png"
          alt=""
          class="header__logo mr-md-3"
        />
        <h3 class="header__home">МигрантProfi</h3>
      </div>
      <div
        class="d-flex col-md-6 col-lg-3 justify-content-center align-items-center mb-5"
      >
        <a
          href="https://www.instagram.com/migrantprofi/?utm_medium=copy_link"
          target="_blank"
          class="mr-3"
          ><img src="../assets/instagram.png" alt="" class="footer__social"
        /></a>
        <a href="https://vk.com/migrantprofi" target="_blank"
          ><img src="../assets/vk.png" alt="" class="footer__social"
        /></a>
      </div>
      <form
        class="d-flex flex-column col-md-6 col-lg-3 footer__form"
        @submit.prevent="sendMail"
      >
        <h3 class="mb-3">Остались вопросы?</h3>
        <input
          class="form-control mb-3"
          type="text"
          placeholder="Ваше имя"
          name="name"
          v-model="clientName"
          required
        />
        <input
          class="form-control mb-3"
          type="text"
          placeholder="Ваш телефон"
          name="phone"
          v-model="phone"
          required
        />
        <button type="submit" value="send" class="btn button mb-3">
          Отправить
        </button>
      </form>
    </div>
  </footer>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Footer",
  data() {
    return {
      clientName: "",
      phone: "",
    };
  },
  methods: {
    sendMail(e) {
      emailjs
        .sendForm(
          "service_webber",
          "template_f8h4b6a",
          e.target,
          "user_flKYvFLn54BU4gXTzpkHd"
        )
        .then((result) => {
          let form = document.querySelector(".footer__form");
          let answer = document.createElement("p");
          answer.classList.add("text-center");
          answer.classList.add("font-weight-bold");
          answer.classList.add("mt-3");
          answer.setAttribute("id", "footer-answer");
          if (result.status === 200) {
            console.log(result.status);
            form.appendChild(answer);
            answer.textContent =
              "Спасибо за обращение! Наш специалист скоро свяжется с вами.";
            this.clientName = "";
            this.phone = "";
            return answer;
          }
        });
    },
  },
};
</script>

<style>
.image {
  flex-shrink: 0;
}

.footer__logo {
  width: 100%;
  height: auto;
}

.footer__social {
  width: 50px;
  height: 50px;
}
</style>
