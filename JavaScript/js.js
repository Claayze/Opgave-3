Vue.createApp({
    data() {
        return {
            message: "",
            list: [],
            obj: {},
            obj2: {},
            obj3: {},
            num: 1
        }
    },
    methods: {
        Add(){
            this.obj["msg"] = this.message
            this.obj["num"] = this.num
            this.num++
            this.list.push(this.obj)

            this.obj2["msg"] = this.message.toLowerCase()
            this.obj2["num"] = this.num
            this.num++
            this.list.push(this.obj2)

            this.obj3["msg"] = this.message.toUpperCase()
            this.obj3["num"] = this.num
            this.num++
            this.list.push(this.obj3)
            
        }
    }
}).mount("#app")