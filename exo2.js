function textvide(text) {
    return text !== "" && text !== null;
}

a = textvide("bonjour"); // true
b = textvide(""); // false
c = textvide(null); // true

console.log(a);
console.log(b);
console.log(c);