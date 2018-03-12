function truncateString(str, len) {
    if (typeof str !== "string" || typeof len !== "number") {
        return new Error("First argument must be a string, second argument must be a number")
    }

    return str.slice(0, len)
}

console.log(truncateString("hi, how is it going?", 5));