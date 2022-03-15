const createDogsPage = (() => {
  const content = document.createElement("div");
  const dogsContainer = document.createElement("div");
  const dogsCard = document.createElement("div");
  const img = document.createElement("img");
  const subtitle = document.createElement("h2");
  const description = document.createElement("p");
  const dogsPageTitle = document.createElement("h1");

  dogsPageTitle.setAttribute("id", "page-title");
  content.setAttribute("id", "content");
  dogsContainer.classList.add("dogs-container");
  dogsCard.classList.add("dogs-card", "radius");
  img.classList.add("radius");
  img.setAttribute("src", "./imgs/american-eskimo.jpg");
  subtitle.textContent = "American Eskimo";
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut";

  const setDogsTitle = () => {
    dogsPageTitle.innerHTML = `<u id='dogs-Page-title'>All Dogs</u>`;
    const panel = document.querySelector(".panel");
    panel.parentNode.insertBefore(dogsPageTitle, panel.nextSibling);
    panel.parentNode.insertBefore(content, dogsPageTitle.nextSibling);
  };

  const displayCards = () => {
    const panel = document.querySelector(".panel");
    panel.parentNode.insertBefore(content, dogsPageTitle.nextSibling);
    content.append(dogsContainer);
    dogsCard.append(img);
    dogsCard.append(subtitle);
    dogsCard.append(description);

    for (let i = 0; i < 6; i++) {
      dogsContainer.append(dogsCard.cloneNode(true));
    }
  };

  return {
    setDogsTitle,
    displayCards,
  };
})();

export default function appendDogs() {
  createDogsPage.setDogsTitle(), createDogsPage.displayCards();
}
