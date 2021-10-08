// import functions

// reference needed DOM elements


// set event listeners 

    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

function madLib(input) {
    const pluralNoun1 = document.getElementById(`${input}-input`);
    const adjective1 = document.getElementById(`${input}-input`);
    const pluralNounAnimal1 = document.getElementById(`${input}-input`);
    const pluralNoun2 = document.getElementById(`${input}-input`);
    const adjective2 = document.getElementById(`${input}-input`);
    const color = document.getElementById(`${input}-input`);
    const adjective3 = document.getElementById(`${input}-input`);
    const noun1 = document.getElementById(`${input}-input`);
    const pluralNoun3 = document.getElementById(`${input}-input`);
    const adjective4 = document.getElementById(`${input}-input`);
    const verb1 = document.getElementById(`${input}-input`);
    const pluralNoun4 = document.getElementById(`${input}-input`);
    const verbEd1 = document.getElementById(`${input}-input`);
    const verb2 = document.getElementById(`${input}-input`);
    const noun2 = document.getElementById(`${input}-input`);
    const adjective5 = document.getElementById(`${input}-input`);
    
    const pluralNoun1Out = document.getElementById(`${input}`);
    const adjective1Out = document.getElementById(`${input}`);
    const pluralNounAnimal1Out = document.getElementById(`${input}`);
    const pluralNoun2Out = document.getElementById(`${input}`);
    const adjective2Out = document.getElementById(`${input}`);
    const colorOut = document.getElementById(`${input}`);
    const adjective3Out = document.getElementById(`${input}`);
    const noun1Out = document.getElementById(`${input}`);
    const pluralNoun3Out = document.getElementById(`${input}`);
    const adjective4Out = document.getElementById(`${input}`);
    const verb1Out = document.getElementById(`${input}`);
    const pluralNoun4Out = document.getElementById(`${input}`);
    const verbEd1Out = document.getElementById(`${input}`);
    const verb2Out = document.getElementById(`${input}`);
    const noun2Out = document.getElementById(`${input}`);
    const adjective5Out = document.getElementById(`${input}`);

    const button = document.getElementById(`go-mad`);

    button.addEventListener('click', populate);

    function populate() {
        const in01 = pluralNoun1.value;
        const in02 = adjective1.value;
        const in03 = pluralNounAnimal1.value;
        const in04 = pluralNoun2.value;
        const in05 = adjective2.value;
        const in06 = color.value;
        const in07 = adjective3.value;
        const in08 = noun1.value;
        const in09 = pluralNoun3.value;
        const in10 = adjective4.value;
        const in11 = verb1.value;
        const in12 = pluralNoun4.value;
        const in13 = verbEd1.value;
        const in14 = verb2.value;
        const in15 = noun2.value;
        const in16 = adjective5.value;
       
        const out01 = pluralNoun1Out.textContent;
        const out02 = adjective1Out.textContent;
        const out03 = pluralNounAnimal1Out.textContent;
        const out04 = pluralNoun2Out.textContent;
        const out05 = adjective2Out.textContent;
        const out06 = colorOut.textContent;
        const out07 = adjective3Out.textContent;
        const out08 = noun1Out.textContent;
        const out09 = pluralNoun3Out.textContent;
        const out10 = adjective4Out.textContent;
        const out11 = verb1Out.textContent;
        const out12 = pluralNoun4Out.textContent;
        const out13 = verbEd1Out.textContent;
        const out14 = verb2Out.textContent;
        const out15 = noun2Out.textContent;
        const out16 = adjective5Out.textContent;

        console.log(in01);
    }
}




madLib(`p-noun-01`);
madLib(`adj-01`);
madLib(`p-noun-animal-01`);
madLib(`p-noun-02`);
madLib(`adj-02`);
madLib(`color`);
madLib(`adj-03`);
madLib(`noun-01`);
madLib(`p-noun-03`);
madLib(`adj-04`);
madLib(`verb-01`);
madLib(`p-noun-04`);
madLib(`verb-ed-01`);
madLib(`verb-02`);
madLib(`noun-02`);
madLib(`adj-05`);
