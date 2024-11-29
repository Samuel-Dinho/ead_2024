var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function handleUnionAndIntersection(input, details) {
    console.log("Input:", input);
    console.log("Details:", details.propA, details.propB);
}
// Exemplo de uso:
handleUnionAndIntersection(42, { propA: "Texto", propB: 99 });
function checkConditional(input) {
    return (input ? { flag: true } : { flag: false });
}
// Exemplo de uso:
var resultTrue = checkConditional(true); // { flag: true }
var resultFalse = checkConditional(false); // { flag: false }
console.log(resultTrue); // { flag: true }
console.log(resultFalse); // { flag: false }
function updateConfig(config) {
    var defaultConfig = { host: "localhost", port: 80, useSSL: false };
    return __assign(__assign({}, defaultConfig), config);
}
function printConfig(config) {
    console.log("Host: ".concat(config.host, ", Port: ").concat(config.port, ", SSL: ").concat(config.useSSL));
    // config.host = "newhost"; // Erro: Readonly impede modificações.
}
// Exemplo de uso:
var newConfig = updateConfig({ port: 443, useSSL: true });
printConfig(newConfig);
var countries = {
    Brazil: "Brasília",
    USA: "Washington, D.C.",
    France: "Paris",
};
function getCapital(country) {
    return countries[country];
}
// Exemplo de uso:
console.log(getCapital("Brazil")); // Brasília
console.log(getCapital("India")); // undefined
function createPartialList(items) {
    return items;
}
var partialUsers = createPartialList([
    { id: 1, name: "Alice" },
    { age: 30 },
]);
console.log(partialUsers);
