const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  computed: {
    result() {
      if (this.counter <= 36) {
        return "Not there yet";
      } else {
        return "Too much";
      }
    },
  },

  methods: {
    add(number) {
      return (this.counter = this.counter + number);
    },
  },

  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 2000);
    },
  },
});

app.mount("#assignment");
