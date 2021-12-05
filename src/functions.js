export function appendValue(field, value) {
    if (field == "0") {
        return value;
    } else {
        return field + value;
    }
}
