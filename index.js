// index.js
var App = new Vue({
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["The Martian", "Inglorious Basterds", "Forrest Gump", "Forgetting Sarah Marshall"],
      newMovie: "",
    };
  },
  methods: {
    addMovie: function () {
      movies.push(this.newMovie);
      this.newMovie = "";
    },
  },
});

Vue.createApp(App).mount("#app");
