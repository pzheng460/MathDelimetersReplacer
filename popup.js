function replaceDelimiters(text) {
    // Replace \[ \] with $$ $$ for multiline formulas
    text = text.replace(/\\\[/g, "$$$$").replace(/\\\]/g, "$$$$");

    // Replace \( \) with $ $ for inline formulas
    text = text.replace(/\\\(/g, '$').replace(/\\\)/g, '$');

    return text;
}

document.getElementById('convertButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const convertedText = replaceDelimiters(inputText);
    document.getElementById('outputText').value = convertedText;
});

document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText).then(() => {
        // alert('Converted text copied to clipboard.');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
