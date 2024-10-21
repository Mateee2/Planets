// Function to open the modal with the planet info
async function showModal(planetName) {
    const modal = document.getElementById("infoModal");
    const planetInfo = await fetchPlanetData(planetName, 'en'); // Default to English
    document.getElementById("planetName").textContent = planetName;
    document.getElementById("planetInfo").textContent = planetInfo;
    modal.style.display = "flex"; // Show modal
}

// Function to fetch planet data (can be extended for actual API use)
async function fetchPlanetData(planet, lang) {
    const planetData = {
        Mercury: {
            en: "Mercury is the smallest planet in our solar system and the closest to the Sun.",
            ge: "მერკური არის ჩვენი მზის სისტემის ყველაზე პატარა პლანეტა და ყველაზე ახლოს მზის მიმართ."
        },
        Venus: {
            en: "Venus is often called Earth's sister planet due to their similar size and composition.",
            ge: "ვენერას ხშირად უწოდებენ დედამიწის და დები პლანეტის მსგავსად მათი მსგავსი ზომისა და შემადგენლობის გამო."
        },
        Earth: {
            en: "Earth is the only planet known to support life, with a diverse range of ecosystems.",
            ge: "კომპაქტის გარშემო მბრუნავი დედამიწა არის ერთადერთი პლანეტა, რომელიც ცნობილია როგორც სიცოცხლის მქონე."
        },
        Mars: {
            en: "Mars is known as the Red Planet and has the largest dust storms in the solar system.",
            ge: "მარსი ცნობილია როგორც წითელი პლანეტა და აქვს ყველაზე დიდი მტვრის შტორმები მზის სისტემაში."
        },
        Jupiter: {
            en: "Jupiter is the largest planet in our solar system, known for its Great Red Spot.",
            ge: "იუპიტერი არის ჩვენი მზის სისტემის ყველაზე დიდი პლანეტა, ცნობილი თავისი დიდი წითელი ლაქით."
        },
        Saturn: {
            en: "Saturn is famous for its stunning rings made of ice and rock particles.",
            ge: "სატურნი ცნობილი არის თავისი მშვენიერი რგოლებით, რომლებიც ყინულისა და ქვის ნაწილაკებისგან შედგება."
        },
        Uranus: {
            en: "Uranus is unique for its tilted axis, which causes extreme seasons.",
            ge: "ურანოსი უნიკალურია თავისი მიდრეკილი ღერძით, რაც ექსტრემალური სეზონების მიზეზი ხდება."
        },
        Neptune: {
            en: "Neptune is the farthest planet from the Sun, with strong winds and storms.",
            ge: "ნეპტუნი არის მზისგან ყველაზე შორს მდებარე პლანეტა, ძლიერი ქარებითა და შტორმებით."
        },
    };

    // Return the information based on the selected language
    return planetData[planet][lang];
}

// Function to close the modal
function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

// Change the language in the modal
function changeLanguage() {
    const planetName = document.getElementById("planetName").textContent;
    const lang = document.getElementById("languageSelect").value;
    fetchPlanetData(planetName, lang).then(info => {
        document.getElementById("planetInfo").textContent = info;
    });
}

// Function to speak the planet information
function speakInfo() {
    const infoText = document.getElementById("planetInfo").textContent;
    const utterance = new SpeechSynthesisUtterance(infoText);
    utterance.lang = 'en-US'; // Set language to English
    speechSynthesis.speak(utterance);
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("infoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
