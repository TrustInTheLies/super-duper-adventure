<template>
  <header class="header">
    <div class="container-fluid w-100 mx-0">
      <div
        class="row justify-content-around flex-nowrap flex-column flex-lg-row align-items-center pt-3 pb-5 w-100"
      >
        <router-link to="/" class="text-decoration-none"
          ><div class="header__wrapper d-flex align-items-center flex-column">
            <img
              src="../assets/long-logo.png"
              alt=""
              class="header__logo mr-md-3"
            />
            <h3 class="header__home">МигрантProfi</h3>
          </div>
        </router-link>
        <div class="header__wrapper d-flex flex-column">
          <div
            class="header__location d-flex align-items-center mb-3 mr-md-5 w-100"
          >
            <img src="../assets/map.svg" alt="" class="mr-3" />
            <p class="header__paragraph mb-0">
              г.Подольск ул.Генерала Варенникова, 4
            </p>
          </div>
          <div class="header__schedule d-flex align-items-center">
            <img src="../assets/calendar.svg" alt="" class="mr-3" />
            <div>
              <p class="header__paragraph mb-0">Пн-Пт: 9:00 - 18:00</p>
              <p class="header__paragraph mb-0">Сб: 09:00 - 14:00</p>
            </div>
          </div>
        </div>
        <div class="header__wrapper d-flex align-items-center flex-column">
          <div class="d-flex align-items-center mb-3 mt-3">
            <img src="../assets/email.svg" alt="" class="mr-3 header__email" />
            <p class="mb-0">migrantprofi@yandex.ru</p>
          </div>
          <p>+7 (901) 549-28-61</p>
          <p>+7 (926) 857-69-90</p>
          <div>
            <img src="../assets/tg.svg" alt="" class="header__social mr-3" />
            <img src="../assets/viber.svg" alt="" class="header__social mr-3" />
            <img src="../assets/whatsapp.svg" alt="" class="header__social" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.header__home {
  color: #3c508c;
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 3rem;
  margin-top: -50px;
}

.header__logo {
  max-width: 90%;
  width: 500px;
  height: auto;
}

.header__social {
  width: 40px;
  height: auto;
}

.header__email {
  width: 40px;
  height: 40px;
}

.header__location {
  width: 50px;
  height: 50px;
}
</style>
