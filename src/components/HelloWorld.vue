<template>
  <div>
    <h1>Test</h1>
    <nav
      class="navbar sticky-top navbar-expand-md navbar-light justify-content-end"
    >
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
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header popup-header">
            <h5 class="modal-title popup-header" id="exampleModalLabel">
              Modal title
            </h5>
            <p>feel free to delete title if you want</p>
          </div>
          <div class="modal-body">
            <h4>A very selling title</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              ullam repudiandae itaque deserunt minima optio doloribus commodi,
              dolorum voluptatem natus culpa esse nisi eos molestiae impedit
              quibusdam dignissimos qui nostrum!
            </p>
            <form class="send-form">
              <input type="text" placeholder="Name" class="form-field" />
              <input type="text" placeholder="Email" class="form-field" />
              <input type="text" placeholder="Phone" class="form-field" />
            </form>
          </div>
          <div class="modal-footer popup-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button v-on:click="show = !show" class="btn">switch</button>
      <p v-if="show">
        1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p v-if="show">
        5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p v-if="show">
        6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        7 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p v-if="show">
        8 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fugit
        iste commodi cumque facilis pariatur sit rem labore officiis, est
        cupiditate nostrum saepe modi, neque odit! Ipsum sint recusandae in?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  name: "HelloWorld",
};
</script>

<style>
.popup-header {
  width: 100%;
  align-self: center;
}
.popup-footer {
  justify-content: center;
}
.send-form {
  display: flex;
  flex-direction: column;
}
.form-field {
  margin-top: 10px;
}

.navbar {
  background-color: #fff;
  text-align: end;
}

.navbar-toggler {
  border: none;
}

@media screen and (max-width: 500px) {
  .navbar {
    background-color: #000;
  }
}
</style>
