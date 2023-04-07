const app = Vue.createApp({
    data() {
      return {
        registered_keydown: '',
        registered_enter: ''
      };
    },
    methods: {
      alert() {
        window.alert('alert dayo');
      },
      register_keydown(event) {
        this.registered_keydown = event.target.value;
      },
      register_enter(event) {
        this.registered_enter = this.registered_keydown;
      }
    }
  });
  
  app.mount('#assignment');
  