var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "The Great " + names[i];
    }
    return names;
}
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magicians(make_great(__spreadArray([], magicians, true)));
console.log("\n---\n");
show_magicians(magicians);
