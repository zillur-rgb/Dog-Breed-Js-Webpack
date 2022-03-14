const panels = (() => {
  let header = document.createElement("header");
  header.classList.add("panel");

  const appendHeader = () => {
    console.log("header");
  };

  const appendFooter = () => {
    console.log("footer");
  };

  return {
    appendHeader,
    appendFooter,
  };
  let nav = document.createElement("nav");
})();

export default function appendPanels() {
  panels.appendHeader(), panels.appendFooter();
}
