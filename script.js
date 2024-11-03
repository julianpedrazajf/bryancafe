document.addEventListener("DOMContentLoaded", function() {
    fetch('data/cafeWebsite.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            
            // Example: Display content from Home page's hero section
            let heroSection = xml.querySelector("Page[name='Home'] > Section[id='hero']");
            let title = heroSection.querySelector("Title").textContent;
            let subtitle = heroSection.querySelector("Subtitle").textContent;
            let description = heroSection.querySelector("Description").textContent;
            
            document.getElementById("hero").innerHTML = `
                <h2>${title}</h2>
                <p>${subtitle}</p>
                <p>${description}</p>
            `;
        })
        .catch(error => console.error("Error loading XML:", error));
});
