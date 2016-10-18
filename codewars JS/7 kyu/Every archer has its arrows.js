function archersReady(archers){
    if (!archers.length) return false;
    return archers.every( a => a >= 5);
}