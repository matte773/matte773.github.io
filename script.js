document.addEventListener("DOMContentLoaded", function() {
    // Load the XML file
    fetch('squarespace.xml')
        .then(response => response.text())
        .then(xmlString => {
            // Parse the XML
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlString, 'application/xml');

            // Convert XML to HTML
            let xmlAsHtml = new XMLSerializer().serializeToString(xmlDoc);

            // Display in the div
            document.getElementById('xmlData').innerHTML = xmlAsHtml;
        });
});
