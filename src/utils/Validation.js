const Validate = {
    luhnCheck(num) {
        let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        return sum % 10 === 0;
    },
    validateCardLength(e) {
        const value = e.target.value
        if (value && value.length <= e.target.maxLength && this.luhnCheck(value.replace(/\s/g, ""))) {
            e.target.setCustomValidity("")
        } else {
            e.target.setCustomValidity(true);
        }
    },
    validateData(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const fields = Array.from(e.target.elements)
        const  validation = []
        fields.forEach((field) => {
            if (field.required) {
                if (field.checkValidity()) {
                    field.classList.remove('error')
                    validation.push(true)
                } else {
                    field.classList.add('error')
                    validation.push(false)
                }
            }
        })
        return validation.includes(false) ? false : true
    },
}

export default Validate