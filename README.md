# Math Delimiters Replacer

This is a simple Edge browser extension that replaces LaTeX math delimiters in text. It replaces `\[ ... \]` with `$$ ... $$` for multiline formulas and `\( ... \)` with `$ ... $` for inline formulas.

## Installation

Follow these steps to install the Math Delimiters Replacer extension in your Edge browser:

1. **Download the Extension Files**

   Clone or download this repository to your local machine.

2. **Open Edge Extensions Page**

   Open the Edge browser and navigate to the extensions page by typing `edge://extensions/` in the address bar and pressing Enter.

3. **Enable Developer Mode**

   Toggle the switch to enable "Developer mode" in the bottom-left corner of the extensions page.

4. **Load Unpacked Extension**

   Click on the "Load unpacked" button and select the folder where you downloaded or cloned the extension files. This folder should contain `manifest.json`, `popup.html`, `popup.js`, and `icon.png`.

## Usage

1. **Open the Extension**

   Click on the Math Delimiters Replacer icon in the Edge toolbar to open the extension popup.

2. **Enter Text**

   Enter or paste the text containing LaTeX math delimiters into the input text area.

3. **Convert Delimiters**

   Click the "Convert" button to replace the LaTeX math delimiters.

4. **Copy to Clipboard**

   Click the "Copy to Clipboard" button to copy the converted text to the clipboard.

## Files

- `manifest.json`: Defines the extension and its permissions.
- `popup.html`: The HTML file for the extension's popup interface.
- `popup.js`: The JavaScript file that contains the logic for replacing delimiters and handling button clicks.
- `icon.png`: The icon for the extension.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
