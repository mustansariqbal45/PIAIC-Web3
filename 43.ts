function make_great(names: string[]): string[] {
    for (let i = 0; i < names.length; i++) {
      names[i] = "The Great " + names[i];
    }
    return names;
}

function show_magicians(names: string[]): void {
for (let name of names) {
    console.log(name);
}
}
  
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

show_magicians(make_great([...magicians]));
console.log("\n---\n")
show_magicians(magicians);