Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    methods: {
        reset() {
            this.perspective = 100,
                this.rotateZ = 0,
                this.rotateX = 0,
                this.rotateY = 0
        },
        copy() {
            const copyItem = `transform:${this.box.transform}`
            const el = document.createElement('textarea')
            el.appendChild(document.createTextNode(copyItem))
            el.style.position = 'absolute'
            el.style.left = '-99999px'
            const sections = document.getElementById('copy')
            document.getElementById('copy').appendChild(el)
            el.select(); //select textarea contenrs
            document.execCommand("copy");
            el.remove()

            console.log(el)
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateX(${this.rotateZ}deg)`
            }
        }
    }

}).mount('#app')