<template>
  <section class="py-5">
    <h1 class="text-center mb-5 section-title">Часто предоставляемые услуги</h1>
    <div class="services d-flex justify-content-center flex-wrap">
      <div
        class="service__card mr-sm-3 mb-3"
        v-for="card in cards"
        :key="card.id"
      >
        <div
          class="service__header-wrapper d-flex align-items-center justify-content-center"
        >
          <h4 class="service__card-title">{{ card.title }}</h4>
        </div>
        <p class="service__price py-4 mb-0">{{ card.price }}</p>
      </div>
    </div>
    <Modal />
  </section>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Services",
  components: {
    Modal,
  },
  props: ["cards"],
};
</script>

<style>
.service__price {
  font-weight: bold;
  font-size: 1.5rem;
}

.service__card-title {
  color: #fff;
  margin: 0;
}

.service__header-wrapper {
  background-color: #150f36;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 1rem;
  height: 30%;
}

.service__card {
  text-align: center;
  border-radius: 20px;
  background-color: #f2f4f6;
  min-width: 300px;
}

.services__button {
  font-size: 1.2rem;
  padding: 10px;
}
</style>
