<template>
  <section class="py-5">
    <h1 class="section-title text-center py-5">Что о нас говорят</h1>
    <div
      id="carouselExampleControls"
      class="carousel slide "
      data-interval="false"
      data-touch="true"
    >
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <div
            class="d-flex review__slide flex-column flex-md-row justify-content-center align-items-center"
          >
            <img
              src="../assets/arina.jpg"
              alt=""
              class="review__image mr-md-5"
            />
            <div class="d-flex flex-column w-75">
              <p>
                В начале призыв: "Обращайтесь без сомнений в эту организацию!"))
                Я же обратилась в данную службу с вопросом заявления на
                гражданство. При чем хочу заметить, что накануне подачи, всего
                то за день. Всегда же думаешь, что всё успеется, все документы
                собраны. Ан нет... Огромная благодарность приятной, грамотной,
                ответственной барышне Кристине. Проверила весь комплект
                документов и нашла неточности. В срочном порядке помогла всё
                привести в надлежащий вид. Подали с первого раза, без каких либо
                исправлений. И при этом приятно удивили стоимость работ и
                расположение организации. Всего то в двух шагах от УФМС.
              </p>
              <h4>Арина Кабанина</h4>
            </div>
          </div>
        </div>
        <div class="carousel-item" v-for="review in reviews" :key="review.id">
          <div
            class="d-flex review__slide flex-column flex-md-row justify-content-center align-items-center"
          >
            <img
              v-bind:src="require('@/assets/' + review.image)"
              class="review__image mr-5"
            />

            <div class="d-flex flex-column w-75">
              <p>{{ review.text }}</p>
              <h4>{{ review.name }}</h4>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <img src="../assets/left-arrow.svg" alt="" class="arrow" />
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <img src="../assets/right-arrow.svg" alt="" class="arrow" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Review",
  props: ["reviews"],
};
</script>

<style scoped>
section {
  background-color: #f2f4f6;
}
</style>

<style>
.arrow {
  width: 70px;
  height: 70px;
}

.review__slide {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.review__photo {
  background-size: cover;
  border-radius: 50%;
}

.review__image {
  border-radius: 50%;
  min-width: 200px;
  width: 200px;
  min-height: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top;
}

@media screen and (max-width: 767px) {
  .arrow {
    display: none;
  }
  .review__image {
    margin-bottom: 3rem;
  }
}
</style>
