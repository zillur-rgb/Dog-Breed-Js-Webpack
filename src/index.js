import appendHome from "./home.js";
import appendPanels from "./panel.js";
import appendDogs from "./dogs.js";
import appendContact from "./contact";

appendPanels();
appendHome();
// appendDogs();
// appendContact();

const init = (() => {
  const removeContent = () => {
    let content = document.querySelector("#content");
    content.remove();
    let title = document.querySelector("#page-title");
    if (title) {
      title.remove();
    }
  };

  const setEventListeners = () => {
    const home = document.querySelector("#one");
    const dogs = document.querySelector("#two");
    const contact = document.querySelector("#three");

    home.addEventListener("click", () => {
      removeContent();
      appendHome();
    });

    dogs.addEventListener("click", () => {
      removeContent();
      appendDogs();
    });

    contact.addEventListener("click", () => {
      removeContent();
      appendContact();
    });
  };
  return {
    setEventListeners,
  };
})();

init.setEventListeners();
