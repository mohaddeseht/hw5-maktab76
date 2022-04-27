let arr = ["a", "v", "y", "z"];
function makeObject(arr) {
    let obj = arr.reduce((acc, v) => ({ ...acc, [v]: v.toUpperCase() }), {});
    return obj;
}
console.log(makeObject(arr));