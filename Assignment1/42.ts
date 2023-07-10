function make_great(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
      names[i] = "The Great " + names[i];
    }
}

function show_magicians(names: string[]): void {
for (let name of names) {
    console.log(name);
}
}
  
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

make_great(magicians);
show_magicians(magicians);