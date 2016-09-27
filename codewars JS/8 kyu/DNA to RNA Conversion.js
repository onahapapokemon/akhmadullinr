function DNAtoRNA(dna) {
    var rna = dna.replace(/T/gi,'U');
    return rna;
}

// http://www.codewars.com/kata/dna-to-rna-conversion/train/javascript