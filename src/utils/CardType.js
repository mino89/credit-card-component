const CardType = {
    composeUrl(type){
        return {
            url: `./img/creditcards/${type}.svg`, 
            name: type
        }
    },
    getImg(value) {
        switch (true) {
            case value.match(new RegExp("^4")) != null:
                return this.composeUrl("visa")

            case value.match(new RegExp("^(34|37)")) != null:
                return this.composeUrl("amex")

            case value.match(new RegExp("^5[06-8]")) != null:
                return this.composeUrl("maestro")

            case value.match(new RegExp("^5[1-5]")) != null:
                return this.composeUrl("mastercard")

            case value.match(new RegExp("^6011")) != null:
                return this.composeUrl("discover")

            case value.match(new RegExp("^62")) != null:
                return this.composeUrl("unionpay")

            case value.match(new RegExp("^9792")) != null:
                return this.composeUrl("troy")

            case value.match(new RegExp("^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}")) != null:
                return this.composeUrl("dinersclub")

            case value.match(new RegExp("^35(2[89]|[3-8])")) != null:
                return this.composeUrl("jcb")

            default:
                return "unknown"

        }
    }
}


export default CardType