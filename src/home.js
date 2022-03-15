const appendHome = () => {
  const content = document.createElement("div");
  const titleWrapper = document.createElement("div");
  const title = document.createElement("div");
  const infoWrapper = document.createElement("div");
  const card = document.createElement("div");
  const img = document.createElement("img");

  //Atributes for above
  content.setAttribute("id", "content");
  titleWrapper.classList.add("title-container");
  title.classList.add("title");
  infoWrapper.classList.add("info-container");
  card.classList.add("card", "radius");
  img.classList.add("radius");
  img.setAttribute("src", "./imgs/american-eskimo.jpg");

  // no attributes variables
  const ingTitle = document.createElement("h2");
  const loremIpsum = document.createElement("p");

  title.innerHTML = "<h1>Find dog breed and adapt from us</h1>";
  ingTitle.textContent = "FEATURED DOG";
  loremIpsum.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam dignissimos dolorum, exercitationem, eos nesciunt praesentium explicabo illum accusantium maxime.";

  const panel = document.querySelector(".panel");
  panel.parentNode.insertBefore(content, panel.nextSibling);
  content.append(titleWrapper);
  titleWrapper.append(title);
  content.append(infoWrapper);
  infoWrapper.append(card);

  card.append(img);
  card.append(ingTitle);
  card.append(loremIpsum);
};

export default appendHome;
