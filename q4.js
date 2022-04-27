let inputArray = {
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
};
function mostExpensive(inputArray) {
    let key = Object.keys(inputArray);
    let val = Object.values(inputArray);
    let maximum = Math.max(...val);
    for (let i in val) {
        if (val[i] === maximum) {
            return key[i];
        }
        else continue;
    }
}
console.log(`most expensive item is ${mostExpensive(inputArray)}`);