const app = Vue.createApp({
    data() {
        return {

            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            url: 'http://www.naver.com',
            inStock: true,

            inventory: 8,
            details: ['50% cotten', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue'}
            ],
            cart: 0,
            vimgs: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if(this.cart>0) {
                this.cart -= 1;
            }
        },
        updateImage(vimg) {
            this.image = vimg;
        }
    }
})
