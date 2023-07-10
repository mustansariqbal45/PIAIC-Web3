function make_album(artist: string, title: string, tracks?: number): object {
    let album = {
        artist,
        title
    } as { artist: string; title: string; tracks?: number };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 12));
console.log(make_album("Artist 3", "Album 3", 11));  