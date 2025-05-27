# simple-dropdown-toggle

A tiny utility function to toggle the visibility of a dropdown element using plain JavaScript.

## Installation

```bash
npm install @aleloiac/simple-dropdown-toggle
```

## Usage

This package provides a single named export: `toggleDropdown`. It toggles a DOM element’s visibility by switching between `display: "none"` and `display: "block"`.

### Example

```js
import { toggleDropdown } from "@aleloiac/simple-dropdown-toggle";

const dropdown = document.getElementById("my-dropdown");
const toggleButton = document.getElementById("my-button");

toggleButton.addEventListener("click", () => {
  toggleDropdown(dropdown);
});
```

# Notes

- Designed for use in vanilla JavaScript projects.

- Intended for browser environments (bundled via Webpack, Vite, etc.).

- Assumes the dropdown element’s display style is initially set via CSS or inline.
