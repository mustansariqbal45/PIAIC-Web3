var guestL:String[] = ["Muhammad Asif", "Faizan Abbasi", "Usama Qadri", "Talha Khan", "Ishaq"]
printInvitationMessages(guestL)

console.log("\nUnfortunately, our new dinner table won't arrive in time, and we can only invite two guests.");

while (guestL.length > 2) {
    const removedGuest = guestL.pop();
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

console.log("\nFinal Guest List:");
printInvitationMessages(guestL);

function printInvitationMessages(guests:String[]): void {
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner. Please join us for an evening of great conversations and delicious food.\nSincerely, \n\tMustansar Iqbal`)
    }
}