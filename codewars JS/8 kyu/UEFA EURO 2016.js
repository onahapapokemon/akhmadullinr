function uefaEuro2016(arr1,arr2) {
    if (arr2[0] == arr2[1]) return 'At match ' + arr1[0] + ' - ' + arr1[1] + ', teams played draw.';
    else if (arr2[0] > arr2[1]) return 'At match ' + arr1[0] + ' - ' + arr1[1] + ', ' + arr1[0] + ' won!'
    else if (arr2[0] < arr2[1]) return 'At match ' + arr1[0] + ' - ' + arr1[1] + ', ' + arr1[1] + ' won!'
}