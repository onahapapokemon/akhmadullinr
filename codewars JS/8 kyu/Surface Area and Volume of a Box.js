function getSize(width, height, depth) {
    var surface = (2*width*height) + (2*height*depth) + (2*width*depth);
    var volume = width*height*depth;
    var arr = [];
    arr.push(surface,volume);
    return arr;
}