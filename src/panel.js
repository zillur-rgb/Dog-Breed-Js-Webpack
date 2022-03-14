const panels = (() => {
  // header Variables
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const links = document.createElement("a");
  const body = document.querySelector("body");

  // Footer variables
  const footer = document.createElement("footer");
  const github = document.createElement("div");
  // const addressTitle = document.createElement("h2");
  // const address = document.createElement("p");
  // const hoursTitle = document.createElement("h2");
  // const hours = document.createElement("p");

  const appendHeader = () => {
    header.classList.add("panel");
    body.prepend(header);
    header.append(nav);
    nav.append(links);

    document.querySelector("nav a").setAttribute("id", "1");
    links.textContent = "Home";
    nav.append(links.cloneNode());
    document.querySelector("nav a:last-child").textContent = "Dogs";
    document.querySelector("nav a").setAttribute("id", "2");
    nav.append(links.cloneNode());
    document.querySelector("nav a").setAttribute("id", "3");
    document.querySelector("nav a:last-child").textContent = "Contact";
    nav.append(links.cloneNode());
  };

  const appendFooter = () => {
    footer.classList.add("panel");
    github.setAttribute("href", "https://github.com/zillur-rgb");
    github.innerHTML = `<p>copyright 2022 MD Zillur Rahman</p>`;
    body.append(footer);
    footer.append(github);
  };

  return {
    appendHeader,
    appendFooter,
  };
})();

export default function appendPanels() {
  panels.appendHeader(), panels.appendFooter();
}
