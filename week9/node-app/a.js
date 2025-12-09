"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function run1(fn) {
    setInterval(fn, 1000);
}
run1(function () {
    console.log("hey there!"); // this is called callback 
});
function run2(fn) {
    setInterval(fn, 1000);
}
run2(function () {
    console.log("hey there2!"); // this is called callback 
});
//# sourceMappingURL=a.js.map