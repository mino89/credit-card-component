export class Validate {

    constructor() {
        this.errors = []
        this.validation = []
    }


    getErrors() {

        return this.errors
    }
    addError(e) {
        if (!this.errors.includes(e.name)) this.errors.push(e.name)
    }

    removeError(e) {
        const errors = this.errors
        if (errors.includes(e.name)) errors.splice(errors.indexOf(e.name), 1)
    }

    luhnCheck(num) {
        let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        return sum % 10 === 0;
    }

    validateCardLength(e) {
        const value = e.target.value
        const name = e.target
        if (value && value.length <= e.target.maxLength && this.luhnCheck(value.replace(/\s/g, ""))) {
            this.removeError(name)
            e.target.setCustomValidity("")
        } else {
            this.addError(name)
            e.target.setCustomValidity(true);
        }
    }

    checkField(field){
        if (field.checkValidity()) {
            this.removeError(field)
            field.parentNode.classList.remove('error')
            field.removeAttribute('aria-invalid')
            this.validation.push(true)
        } else {
            this.addError(field)
            field.parentNode.classList.add('error')
            field.setAttribute('aria-invalid', true)
            this.validation.push(false)
        }
   
    }

    validateData(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const fields = Array.from(e.target.elements)
        this.validation = []
        fields.forEach((field) => {
            if (field.required) {
                this.checkField(field)
            }
        })
        return this.validation.includes(false) ? false : true
    }
}

export default Validate