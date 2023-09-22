let isMenuOpen = false;

function toggleDropdown() {
  let dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show-dropdown");

  let dropdownIcon = document.getElementsByClassName("expand-icon")[0];
  dropdownIcon.textContent = isMenuOpen ? "expand_more" : "keyboard_arrow_up";
  isMenuOpen = !isMenuOpen;
}