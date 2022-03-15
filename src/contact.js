const createContact = (() => {
  const content = document.createElement("div");
  const contactTitle = document.createElement("h1");
  const dogsContainer = document.createElement("div");
  const contactCard = document.createElement("div");
  const imgWrapper = document.createElement("div");
  const img = document.createElement("img");
  const contactWrapper = document.createElement("div");
  const contactUsTitle = document.createElement("h2");
  const contactUsPara = document.createElement("p");

  contactTitle.innerHTML = `<u id='dogs-title'>Contact</u>`;
  dogsContainer.classList.add("dogs-container");
  contactCard.classList.add("contact-card", "radius");
  imgWrapper.classList.add("img-wrapper");
  img.classList.add("radius");
  img.setAttribute("src", "./imgs/american-eskimo.jpg");
  contactWrapper.classList.add("contact-wrapper");
  contactUsTitle.textContent = "Contact Us";
  contactUsPara.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam<br><br>Signissimos dolorum, exercitationem, eos nesciunt praesentium  explicabo illum accusantium maxime.";

  const setContactTitle = () => {
    const panel = document.querySelector(".panel");
    panel.parentNode.insertBefore(content, contactTitle.nextSibling);
    panel.parentNode.insertBefore(contactTitle, panel.nextSibling);
    panel.parentNode.insertBefore(content, contactTitle.nextSibling);
  };

  const displayCard = () => {
    const panel = document.querySelector(".panel");
    panel.parentNode.insertBefore(content, contactTitle.nextSibling);
    content.append(dogsContainer);
    dogsContainer.append(contactCard);
    contactCard.append(imgWrapper);
    imgWrapper.append(img);
    contactCard.append(contactWrapper);
    contactWrapper.append(contactUsTitle);
    contactWrapper.append(contactUsPara);
  };

  return {
    setContactTitle,
    displayCard,
  };
})();

export default function appendContact() {
  createContact.setContactTitle();
  createContact.displayCard();
}
