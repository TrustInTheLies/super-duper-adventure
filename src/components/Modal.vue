<template>
  <div>
    <div
      class="modal fade"
      id="question-modal"
      tabindex="-1"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h4>У вас есть вопрос?</h4>
            <p>
              Задайте его нашим специалистам, мы с радостью поможем вам
            </p>
            <form
              class="send-form d-flex flex-column"
              @submit.prevent="sendMail"
            >
              <textarea
                placeholder="Ваш вопрос"
                name="question"
                class="form-field mb-3"
                required
                v-model="question"
              />
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                class="form-field mb-3"
                required
                v-model="clientName"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                class="form-field mb-3"
                required
                v-model="phone"
              />
              <div class="d-flex justify-content-center">
                <button
                  type="button"
                  class="btn form__button mr-3"
                  data-dismiss="modal"
                  @click="resetMessage"
                >
                  Закрыть
                </button>
                <button type="submit" value="send" class="btn form__button">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Modal",
  props: ["cards"],
  data() {
    return {
      question: "",
      clientName: "",
      phone: "",
    };
  },
  methods: {
    sendMail(e) {
      emailjs
        .sendForm(
          "service_webber",
          "template_8atemd8",
          e.target,
          "user_flKYvFLn54BU4gXTzpkHd"
        )
        .then((result) => {
          let form = document.querySelector(".send-form");
          let answer = document.createElement("p");
          answer.classList.add("text-center");
          answer.classList.add("font-weight-bold");
          answer.classList.add("mt-3");
          answer.setAttribute("id", "answer");
          if (result.status === 200) {
            console.log(result.status);
            form.appendChild(answer);
            answer.textContent =
              "Спасибо за обращение! Наш специалист скоро свяжется с вами.";
            this.question = "";
            this.clientName = "";
            this.phone = "";
            return answer;
          } else {
            answer.textContent =
              "К сожалению, произошла ошибка, попробуйте повторить запрос позже.";
            this.question = "";
            this.clientName = "";
            this.phone = "";
          }
        });
    },
    resetMessage() {
      if (document.getElementById("answer"))
        document.getElementById("answer").remove();
    },
  },
};
</script>

<style>
.form__button {
  padding: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  color: #000;
  background-color: #fff;
  font-size: 1rem;
  width: 150px !important;
}

.form-field {
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #000;
}
</style>
