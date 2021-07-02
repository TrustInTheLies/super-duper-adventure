<template>
  <section>
    <Header />
    <Navbar v-bind:linksExtended="linksExtended" :links="links" />
    <article class="faq__article">
      <p>
        Иностранцы, которым присвоен статус носителя русского языка, обладают
        возможностью пройти упрощённую процедуру получения гражданства. Следует
        придерживаться изложенного ниже алгоритма действий. НРЯ может
        претендовать на оформление гражданства, не придерживаясь временных рамок
        по ВНЖ.
      </p>
      <p>Какие документы понадобятся?</p>
      <p>
        Оформив статус носителя русского языка, можно подавать заявление на
        получение паспорта гражданина Российской Федерации.
      </p>
      <ul>
        <li>Два экземпляра заявления установленного образца</li>
        <li>Вид на жительство</li>
        <li>Удостоверение личности</li>
        <li>
          Три цветных фотографии, исполненных на матовой бумаге (формат три на
          четыре)
        </li>
        <li>
          Квитанция о внесении государственной пошлины на счёт регистратора
        </li>
        <li>Решение о присвоении статуса носителя русского языка</li>
        <li>
          Документ о смене имени и фамилии (при актуальности данного пункта)
        </li>
      </ul>
    </article>
    <Footer />
    <router-view />
  </section>
</template>

<script>
import Header from "../Header.vue";
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";

export default {
  name: "C3",
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

<style></style>
