const app = Vue.createApp({
  data() {
    return {
      userinput: "",
      paragraphIsVisible: true,
      background: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userinput === "user1",
        user2: this.userinput === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggle() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});

app.mount("#assignment");
