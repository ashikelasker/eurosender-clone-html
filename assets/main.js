$(document).ready(() => {
  // business switch client
  $(document).on("click", ".c-switch", (e) => {
    $(e.target).toggleClass("switch-on");
  });

  //   settings dropdown
  $(document).on("click", ".settings-menu-item", (e) => {
    $(".settings-dropdown-wrapper").toggleClass("show");
  });
  document.addEventListener("click", (event) => {
    const settingsDropdownItem = document.querySelector(".settings-menu-item");

    const settingsDropdown = document.querySelector(
      ".settings-dropdown-wrapper"
    );

    if (
      !settingsDropdownItem.contains(event.target) &&
      !settingsDropdown.contains(event.target)
    ) {
      $(settingsDropdown).removeClass("show");
    }
  });
});
