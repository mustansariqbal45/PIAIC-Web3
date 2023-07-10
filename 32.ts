let current_users: string[] = ['John', 'Emily', 'Mike', 'Sophia', 'David'];
let new_users: string[] = ['Emma', 'JOHN', 'Liam', 'mIke', 'Noah'];

for (let new_user of new_users) {
  let usernameExists = current_users.some(
    (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
  );

  if (usernameExists) {
    console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username "${new_user}" is available.`);
  }
}