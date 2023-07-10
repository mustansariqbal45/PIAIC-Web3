var guestL:String[] = ["Muhammad Asif", "Faizan Abbasi", "Usama Qadri"]

for (let i = 0; i < guestL.length; i++) {
  console.log(`Dear ${guestL[i]},\nYou are cordially invited to dinner. Please join us for an evening of great conversations and delicious food.\nSincerely, \n\tMustansar Iqbal`)
}

var guestWhoCantMakeIt:String = guestL[1]
var newGuest:String = "Talha Khan"
guestL[1] = newGuest

console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to dinner.`)

console.log("\nUpdated Guest List:")
for (let i = 0; i < guestL.length; i++) {
    console.log(`Dear ${guestL[i]},\nYou are cordially invited to dinner. Please join us for an evening of great conversations and delicious food.\nSincerely, \n\tMustansar Iqbal`)
}