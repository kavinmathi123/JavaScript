const button = document.querySelector("button");
let resultdiv = document.createElement('div'); // create eleemt in js
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)
//event listener
button.addEventListener('click', displayStats)
function displayStats() {
    let input = document.getElementById("input");
    const city = input.options[input.selectedIndex].value;
    let population = 0, language = '';
    switch (city) {
        case 'Coimbatore':
            population = 3084000;
            language = "tamil"
            break
        case 'Chennai':
            population = 4646732;
            language = "tamil"
            break;
        case 'Delhi':
            population = 33807000;
            language = "hindi"
            break;
    }
    let text = `The india city of ${city} has a population of ${population}. Language spoken is ${language}.`;
    console.log(text);
    document.getElementById('result').innerHTML = text
}