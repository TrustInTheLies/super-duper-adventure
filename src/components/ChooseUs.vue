<template>
  <section class="py-5 choose-us">
    <h1 class="text-center py-5 section-title">
      Почему многие выбирают именно нас
    </h1>
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="choose__card col-md-6 col-lg-4 mb-5 d-flex align-items-center"
          v-for="reason in reasons"
          :key="reason.id"
        >
          <img
            :src="require('../assets/' + reason.img)"
            alt=""
            class="choose__logo"
          />
          <div>
            <h5>{{ reason.title }}</h5>
            <p>{{ reason.paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChooseUs",
  props: ["reasons"],
};
</script>

<style>
.choose-us {
  background-color: #f2f4f6;
}

.choose__logo {
  width: 120px;
  height: 120px;
  margin-right: 1rem;
}
</style>
