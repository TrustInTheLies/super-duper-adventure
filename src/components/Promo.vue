<template>
  <section class="pt-5">
    <h3 class="text-center py-5 section-title">
      Хотите ускорить путь к получению российского гражданства? Хотите быть в
      числе наших довольных клиентов?
    </h3>
    <div class="d-flex justify-content-around">
      <img src="../assets/worker1.png" alt="" class="promo__image" />
      <div class="d-flex flex-column text-wrapper align-items-center">
        <p class="text-center pt-5">
          Тогда оставляйте заявку на нашем сайте, и наши специалисты сделают всю
          работу за Вас, и вам ненужно будет тратить время и нервы в огромных
          очередях и бегать из кабинета в кабинет не понимая, что от Вас хотят!
        </p>
        <button
          class="button promo__button my-3"
          data-toggle="modal"
          data-target="#question-modal"
        >
          Получить бесплатную консультацию
        </button>
      </div>
      <img src="../assets/worker2.png" alt="" class="promo__image" />
    </div>
    <Modal />
  </section>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Promo",
  components: { Modal },
};
</script>

<style>
.text-wrapper {
  max-width: 30%;
}

.promo__image {
  height: 500px;
  width: auto;
}

@media screen and (max-width: 1024px) {
  .promo__image {
    height: 400px;
  }
}

@media screen and (max-width: 768px) {
  .promo__image {
    display: none;
  }
  .text-wrapper {
    max-width: 80%;
  }
  .promo__button {
    margin-bottom: 50px !important;
  }
}
</style>
