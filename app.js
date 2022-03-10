// import functions and grab DOM elements
const hatDropdown = document.getElementById('hat-dropdown');
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const hatEl = document.getElementById('hat');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const nameEl = document.getElementById('name');
const historyEl = document.getElementById('history');
const historyE2 = document.getElementById('history2');
const historyE3 = document.getElementById('history3');
const historyE4 = document.getElementById('history4');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let hatCounter = 0;
let headCounter = 0;
let middleCounter = 0;
let bottomCounter = 0;

const phrases = [];

hatDropdown.addEventListener('change', () => {

    const hatValue = hatDropdown.value;

    hatCounter++;

    const ex = document.getElementById('hat-dropdown');

    const str = ex.options[ex.selectedIndex].text;


    const pTag2 = document.createElement('p');

    pTag2.textContent = str;

    pTag2.classList.add('history');

    historyEl.append(pTag2);

    // get the value of the head dropdown

    // increment the head change count state
    
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)

    hatEl.style.backgroundImage = `url("./assets/${hatValue}-hat.png")`;

    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

headDropdown.addEventListener('change', () => {

    const headValue = headDropdown.value;

    headCounter++;

    const ex = document.getElementById('head-dropdown');

    const str2 = ex.options[ex.selectedIndex].text;


    const pTag3 = document.createElement('p');

    pTag3.textContent = str2;

    pTag3.classList.add('history');

    historyE2.append(pTag3);

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

    const ex = document.getElementById('middle-dropdown');

    const str3 = ex.options[ex.selectedIndex].text;


    const pTag4 = document.createElement('p');

    pTag4.textContent = str3;

    pTag4.classList.add('history');

    historyE3.append(pTag4);
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

    const ex = document.getElementById('bottom-dropdown');

    const str4 = ex.options[ex.selectedIndex].text;


    const pTag5 = document.createElement('p');

    pTag5.textContent = str4;

    pTag5.classList.add('history');

    historyE4.append(pTag5);
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

nameButton.addEventListener('click', () => {

    nameEl.textContent = nameInput.value;

    nameInput.value = '';


});


function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state

    reportEl.textContent = `The hat has been changed ${hatCounter} times, the head has been changed ${headCounter} times, the middle has been changed ${middleCounter} times, and the bottom has been changed ${bottomCounter} times.`;
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

}
