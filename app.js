function correctTitle(input) {
    let splittedInput = input.toLowerCase().split(/([,.\s])/).join(" ");
    let arr = [];
    console.log(splittedInput);
    // for (const words of splittedInput) {
    //     words[0].toUpperCase() + words[i].substr(1);
    //     console.log(words);
    //     if (words == ("In" || "The" || "Of")) {
    //         let newWord = words.toLowerCase();
    //         arr.push(newWord);
    //     }
    //     arr.push(words);
    //     // console.log(words);
    // }
    for (let i = 0; i < splittedInput.length; i++) {
        splittedInput[i] = splittedInput[i].charAt(0).toUpperCase() + splittedInput[i].substr(1);
        // console.log(splittedInput[i]);
        arr.push(splittedInput[i]);
        // console.log(arr[i]);
        if (arr[i] === "In" | arr[i] === "The" | arr[i] === "Of" | arr[i] === "And") {
            arr[i] = arr[i].toLowerCase();
            // arr.push(arr[i]);

        }
        // console.log(arr[i]);
    }
    // console.log(arr);
}

correctTitle("jOn SnoW, kINg IN thE noRth");
correctTitle("sansa stark,lady of winterfell.");
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.");