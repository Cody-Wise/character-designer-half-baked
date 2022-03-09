// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

let headCounter = 0;
let middleCounter = 0;
let bottomCounter = 0;

const phrases = [];

headDropdown.addEventListener('change', () => {

    const headValue = headDropdown.value;

    headCounter++;

    // get the value of the head dropdown

    // increment the head change count state
    
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    headEl.style.backgroundImage = `url("./assets/${headValue}-head.png")`;

    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {

    const middleValue = middleDropdown.value;

    middleCounter++;
    // get the value of the middle dropdown

    // increment the middle change count state
    
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)

    middleEl.style.backgroundImage = `url("./assets/${middleValue}-middle.png")`;

    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {

    const bottomValue = bottomDropdown.value;

    bottomCounter++;
    // get the value of the bottom dropdown

    // increment the bottom change count state
    
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    bottomEl.style.backgroundImage = `url("./assets/${bottomValue}-pants.png")`;

    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCatchPhrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    

// eslint-disable-next-line indent
phrases.push(newCatchPhrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';


    displayCatchphrases();


    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)

});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state

    reportEl.textContent = `The head has been changed ${headCounter} times, the middle has been changed ${middleCounter} times, and the bottom has been changed ${bottomCounter} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';

    for (let phrase of phrases){

        const pTag = document.createElement('p');

        pTag.classList.add('catchphrase');

        pTag.textContent = phrase;



        catchphrasesEl.append(pTag);

    }

    // loop through each catchphrase in state

    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
