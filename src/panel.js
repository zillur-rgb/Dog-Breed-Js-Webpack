const panels = (() => {
  // header Variables
  let header = document.createElement("header");
  let nav = document.createElement("nav");
  let links = document.createElement("a");
  let body = document.querySelector("body");

  // Footer variables
  const footer = document.createElement("footer");
  const github = document.createElement("div");

  const appendHeader = () => {
    header.classList.add("panel");
    body.prepend(header);

    document.querySelector("header").append(nav);
    document.querySelector("nav").append(links);
    document.querySelector("nav a").setAttribute("id", "1");
    links.textContent = "Home";
    document.querySelector("nav").append(links.cloneNode());
    document.querySelector("nav a:last-child").textContent = "Dogs";
    document.querySelector("nav a").setAttribute("id", "2");
    document.querySelector("nav").append(links.cloneNode());
    document.querySelector("nav a").setAttribute("id", "3");
    document.querySelector("nav a:last-child").textContent = "Contact";
  };

  const appendFooter = () => {
    footer.classList.add("panel");
    github.setAttribute("href", "https://github.com/zillur-rgb");
    github.innerHTML = `<p>copyright 2022 MD Zillur Rahman</p>`;
    body.append(footer);
    document.querySelector("footer").append(github);
  };

  return {
    appendHeader,
    appendFooter,
  };
})();

export default function appendPanels() {
  panels.appendHeader(), panels.appendFooter();
}
