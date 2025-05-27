export function toggleDropdown(dropdownEntry) {
  if (dropdownEntry.style.display === "none") {
    dropdownEntry.style.display = "block";
  } else {
    dropdownEntry.style.display = "none";
  }
}
