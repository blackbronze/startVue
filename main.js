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
            imgs: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
            ],
            stylesObj: {
                color: 'red',
                'font-size': '14px'
            },
            activeClass: true,

            isActive: true,
            activeClassNm: 'color-circle',

            product: 'Socks',
            brand: 'Vue Mastery',

            selectedImg: 0
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
        },
        updateImg(index) {
            this.selectedImg = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.imgs[this.selectedImg].image;
        }
    }
})
