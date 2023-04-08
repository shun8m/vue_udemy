const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      toggleFlg: true,
    };
  },
  computed: {
    toggleStatus() {
      if (this.toggleFlg == false) {
        return "Show";
      } else {
        return "Hide";
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggle() {
      this.toggleFlg = !this.toggleFlg;
    },
  },
});

app.mount("#assignment");
