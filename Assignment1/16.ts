var guestL:String[] = ["Muhammad Asif", "Faizan Abbasi", "Usama Qadri"]
printInvitationMessages(guestL)

console.log("\nWe found a bigger dinner table!")

// Add a new guest to the beginning of the array
guestL.unshift("Sohail Khan");

// Add a new guest to the middle of the array
const middleIndex: number = Math.floor(guestL.length / 2);
guestL.splice(middleIndex, 0, "Ishaq");

// Add a new guest to the end of the array using push()
guestL.push("Talha Khan");

console.log("\nUpdated Guest List:");
printInvitationMessages(guestL);

function printInvitationMessages(guests:String[]): void {
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner. Please join us for an evening of great conversations and delicious food.\nSincerely, \n\tMustansar Iqbal`)
    }
}