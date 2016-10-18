function generateMenu (menuItems) {
    var html = ""
    if (menuItems.length === 0) return html
    for (var i = 0; i < menuItems.length; i++) {
        html += '<a href=\"'+ menuItems[i].url +'\">'+ menuItems[i].text +'</a>'
    }
    return html
}

// http://www.codewars.com/kata/generate-html-links/solutions?show-solutions=1