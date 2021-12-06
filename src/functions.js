

export function appendValue(field, value) {
    if (field == "0") {
        return value;
    } else {
        return new String(field) + value;
    }
}


export function calculate(value) {
    try {
        return eval(value);
    } catch (e) {
        return "Err"
    }
}