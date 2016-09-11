function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0].toLowerCase() == 'r') return name + " plays banjo";
    else return name + " does not play banjo";
}

console.log(areYouPlayingBanjo('Richard'));

console.log(areYouPlayingBanjo('Johnny'));