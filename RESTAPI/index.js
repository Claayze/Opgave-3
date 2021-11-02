const baseUrl = "http://jsonplaceholder.typicode.com/todos"
const test = Vue.createApp({
    data() {
        return {
            Todos: []
        }
    },
    async created() {
    const response = await axios.get(baseUrl);
    this.Todos = response.data;
    console.log(test);
    console.table(this.Todos);
    }

}).mount("#app")
