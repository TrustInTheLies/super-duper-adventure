<template>
  <section>
    <Header />
    <Navbar v-bind:linksExtended="linksExtended" :links="links" />
    <article class="faq__article">
      <p>
        Нерезиденты Российской Федерации и лица, у которых нет гражданства,
        могут получить РВП упрощенно, на основаниях, прописанных пункте 3 статьи
        ФЗ «О правовом иностранных граждан в РФ».
      </p>
      <p>Получение временного документа доступны получить:</p>
      <ul>
        <li>Иностранцам, состоящим в браке с гражданином РФ</li>
        <li>
          Гражданам, рожденным на территории РСФСР или ранее являлись гражданами
          СССР
        </li>
        <li>
          Не резидентам Российской Федерации, у которых есть образование,
          полученное в России
        </li>
        <li>Детям, рожденным на территории РФ</li>
        <li>
          Детям иностранных граждан, у которых есть разрешение на временное
          пребывание. Также подающие документы на оформление вида на жительство
        </li>
        <li>
          Нетрудоспособным, чей опекун на законном основании временно проживает
          на территории РФ или подал документы на вид на жительство
        </li>
        <li>Гражданам Украины со статусом беженца</li>
        <li>Резидентам Туркменистана по программе переселения</li>
        <li>
          Иностранным гражданам, незаконно выдворенным из Крымской АССС и их
          прямых родственников
        </li>
        <li>
          Иностранным гражданам, которые попадают под программу о переселении
          соотечественников
        </li>
        <li>
          Иностранным гражданам, окончившим ВУЗ в РФ с тем, кто закончил
          обучение с отличием
        </li>
        <li>Высококвалифицированным специалистам</li>
        <li>
          Специалистам, официально проработавшим в РФ минимум полгода, п
          специальности, попавшей в перечень нужных профессий
        </li>
        <li>
          Иностранным гражданам, в отношении которых решение о гражданстве было
          отменено
        </li>
      </ul>
      <p>
        Чтобы получить РВП по основаниям, следует подготовить следующий пакет
        документов:
      </p>
      <ul>
        <li>Заявления (2 экземпляра)</li>
        <li>Личные фото, размером 3,5 на 4,5 (матовые)</li>
        <li>Документ, подтверждающий личность</li>
        <li>
          Медицинская справка, подтверждающая отсутствие инфекционных
          заболеваний. Получить медсправку можно в любом медицинском учреждении
        </li>
        <li>Заключение психиатра-нарколога</li>
        <li>
          Справка о доходах, неработающим необходимо предоставить справку из
          центра занятости
        </li>
        <li>Документ, подтверждающий факт родства с гражданином России</li>
        <li>
          Сертификат о знании русского языка или аттестат об образовании,
          выданные в СССР до 1 сентября 1991 года или в РФ после 1 сентября 1991
          года
        </li>
        <li>
          Квитанция об оплате государственной пошлины, на данный момент стоит
          5000 рублей
        </li>
      </ul>
      <p>
        Для получения полной информации предлагаем посетить наш офис.
        Специалисты проконсультируют вас, помогут собрать все необходимые
        документы. Также заполнят заявления. Консультация по любым вопросам
        бесплатная. Также можно позвонить по телефону, наши сотрудники
        предоставят необходимую информацию.
      </p>
    </article>
    <Footer />
  </section>
</template>

<script>
import Header from "../Header.vue";
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";

export default {
  name: "RVP3",
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
