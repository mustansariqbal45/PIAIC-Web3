var guestL = ["Muhammad Asif", "Faizan Abbasi", "Usama Qadri"];
for (var i = 0; i < guestL.length; i++) {
    console.log("Dear ".concat(guestL[i], ",\nYou are cordially invited to dinner. Please join us for an evening of great conversations and delicious food.\nSincerely, \n\tMustansar Iqbal"));
}
var guestWhoCantMakeIt = guestL[1];
var newGuest = "Talha Khan";
guestL[1] = newGuest;
console.log("Unfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));
console.log("\nUpdated Guest List:");
for (var i = 0; i < guestL.length; i++) {
    console.log("Dear ".concat(guestL[i], ",\nYou are cordially invited to dinner. Please join us for an evening of great conversations and delicious food.\nSincerely, \n\tMustansar Iqbal"));
}
