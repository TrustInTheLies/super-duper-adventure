<template>
  <section class="title d-flex flex-column align-items-center">
    <h1 class="py-5 section-title text-center">Мигрант Profi</h1>
    <div
      class="d-flex align-items-center justify-content-center pb-5 flex-column flex-md-row"
    >
      <div class="d-flex">
        <img src="../assets/triangle.svg" alt="" />
        <p>Срочная подготовка документов</p>
      </div>
      <div class="d-flex mx-5">
        <img src="../assets/triangle.svg" alt="" />
        <p>Бесплатная консультация</p>
      </div>
      <div class="d-flex">
        <img src="../assets/triangle.svg" alt="" />
        <p>Самые низкие цены</p>
      </div>
    </div>
    <button
      type="button"
      class="button my-5"
      data-toggle="modal"
      data-target="#question-modal"
    >
      Бесплатная консультация
    </button>
  </section>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
h1,
p {
  color: #fff;
}

h1 {
  font-size: 4rem;
}

p {
  font-size: 1rem;
  margin: 5px 0 0 10px;
}
</style>

<style>
.title {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/bg.png");
  background-color: rgba(255, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
}

.section-title {
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.title__bullet {
  list-style-image: url("../assets/triangle.svg");
}

.button {
  color: #fff;
  font-size: 1.5rem;
  background-color: #150f36;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
}

.button:hover {
  color: #7b7b7b;
}

@media screen and (max-width: 450px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>
