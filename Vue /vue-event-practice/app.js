const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    win() {
      return this.counter++;
    },
    lose() {
      return this.counter--;
    },
  },
});

app.mount("#events");
