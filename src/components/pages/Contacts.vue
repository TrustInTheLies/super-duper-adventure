<template>
  <section>
    <Header />
    <Navbar v-bind:linksExtended="linksExtended" :links="links" />
    <article
      class="faq__article d-flex justify-content-around flex-column flex-md-row"
    >
      <div class="wrapper">
        <p>+7 (901) 549-28-61</p>
        <p>+7 (926) 857-69-90</p>
        <p>г.Подольск ул.Генерала Варенникова, 4</p>
        <p>migrantprofi@yandex.ru</p>
        <p>Пн-Пт: 9:00 - 18:00</p>
        <p>Сб: 09:00 - 14:00</p>
      </div>
      <div class="wrapper">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A43cd8945c0b1467a2f5481e05d517aa4b5ec5f9437238544fb58beacbab8f7d7&amp;source=constructor"
          frameborder="0"
          class="w-100 contacts__map"
        ></iframe>
      </div>
    </article>
    <Footer />
  </section>
</template>

<script>
import Header from "../Header.vue";
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";

export default {
  name: "C1",
  components: { Header, Navbar, Footer },
  data() {
    return {
      linksExtended: [
        {
          id: "РВП",
          text: "РВП",
          sublinks: [
            {
              id: "Основания получения РВП",
              text: "Основания получения РВП",
              link: "/osnovaniya-polucheniya-rvp",
            },
            {
              id: "РВП по квоте",
              text: "РВП по квоте",
              link: "/rvp-po-kvote",
            },
            {
              id: "РВП без квоты",
              text: "РВП без квоты",
              link: "/rvp-bez-kvoti",
            },
          ],
        },
        {
          id: "ВНЖ",
          text: "ВНЖ",
          sublinks: [
            {
              id: "Основания получения ВНЖ",
              text: "Основания получения ВНЖ",
              link: "/osnovaniya-polucheniya-vnj",
            },
            {
              id: "ВНЖ в упрощенном порядке",
              text: "ВНЖ в упрощенном порядке",
              link: "/vnj-v-uproshennom-poryadke",
            },
          ],
        },
        {
          id: "НРЯ",
          text: "НРЯ",
          sublinks: [
            {
              id: "Основания получения НРЯ",
              text: "Основания получения НРЯ",
              link: "/osnovaniya-polucheniya-nrya",
            },
          ],
        },
        {
          id: "Гражданство",
          text: "Гражданство",
          sublinks: [
            {
              id: "Основания для получения гражданства РФ",
              text: "Основания для получения гражданства РФ",
              link: "/osnovaniya-dlya-polucheniya-grajdanstva-rf",
            },
            {
              id: "Получение гражданства РФ в упрощенном порядке",
              text: "Получение гражданства РФ в упрощенном порядке",
              link: "/poluchenie-grajdanstva-rf-v-uproshennom-poryadke",
            },
            {
              id: "Гражданство по НРЯ",
              text: "Гражданство по НРЯ",
              link: "/grajdanstvo-po-nrya",
            },
            {
              id: "Гражданство РФ для детей",
              text: "Гражданство РФ для детей",
              link: "/grajdanstvo-rf-dlya-detei",
            },
            {
              id: "Гражданство РФ по браку",
              text: "Гражданство РФ по браку",
              link: "/grajdanstvo-rf-po-braku",
            },
          ],
        },
      ],
      links: [
        {
          id: "О нас",
          text: "О нас",
          link: "/o-nas",
        },
        {
          id: "Контакты",
          text: "Контакты",
          link: "/kontakti",
        },
      ],
    };
  },
};
</script>

<style>
.wrapper {
  min-width: 40%;
}

.contacts__map {
  min-height: 400px;
}
</style>
