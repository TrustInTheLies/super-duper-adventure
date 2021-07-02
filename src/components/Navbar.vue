<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navbar-nav justify-content-center mx-auto">
        <div
          class="nav-item dropdown"
          v-for="link in linksExtended"
          :key="link.id"
        >
          <a
            class="nav-link navbar__link"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ link.text }}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <transition-group name="fade">
              <router-link
                class="dropdown-item"
                :to="sublink.link"
                v-for="sublink in link.sublinks"
                :key="sublink.id"
                >{{ sublink.text }}</router-link
              >
            </transition-group>
          </div>
        </div>
        <router-link
          class="nav-link navbar__link"
          :to="link.link"
          v-for="link in links"
          v-bind:key="link.id"
          >{{ link.text }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["linksExtended", "links"],
};
</script>

<style>
.navbar {
  background-color: #150f36;
}

.navbar-toggler {
  border: none;
}

.navbar__link {
  font-size: 1.2rem;
  margin-right: 1rem;
  color: #fff !important;
}

.navbar__link:last-child {
  margin-right: 0;
}

.dropdown-menu {
  background-color: #150f36;
  border: none;
}

.dropdown-item {
  color: #fff;
}

@media screen and (max-width: 767px) {
  .navbar {
    background-color: #fff;
  }
  .navbar__link {
    padding-left: 14px !important;
    color: #000 !important;
  }
  .navbar__link:hover {
    background-color: #e9ecef;
  }
  .dropdown-menu {
    background-color: #fff;
  }
  .dropdown-item {
    color: #000;
  }
}
</style>
