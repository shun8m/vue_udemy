const app = Vue.createApp({
    data() {
        return {
            name: 'Shun',
            age: 31,
            hoge: 'https://instagrammernews.com/image/CmqauGJrWWu'
        };
    },
    methods: {
        plus5age() {
            return this.age + 5;
        },
        random() {
            const randomNumber = Math.floor((Math.random()*10)) /10;
            return randomNumber;
        }
    }
});

app.mount('#assignment');