const Format = {
    sanitizeLetters(value) {
        return value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    },
    cardFormat(value) {
        if (value) {
            var v = this.sanitizeLetters(value);
            var matches = v.match(/\d{4,16}/g);
            var match = (matches && matches[0]) || "";
            var parts = [];
            for (let i = 0, len = match.length; i < len; i += 4) {
                parts.push(match.substring(i, i + 4));
            }
            if (parts.length) {
                return parts.join(" ");
            } else {
                return this.sanitizeLetters(value);
            }
        }
    }
}

export default Format