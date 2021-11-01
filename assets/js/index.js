"use strict";

const cardsContainer = document.getElementById("cardsContainer");
const HTMLElements = actors.map((actor) => createActorCards(actor));

function createActorCards(actor){
  return createElement('li',{classNames:['cardWrapper']},[
    createElement('article',{classNames:['cardContainer']},[
      createImageWrapper(actor),
      createElement('h2',{classNames:['cardName']},[
        document.createTextNode(actor.name||'noname')
      ]),
      createElement('p',{classNames:['cardDescription']},[
        document.createTextNode(actor.birthdate||'unknow')
      ]),
    ])
  ])
}

cardsContainer.append(...HTMLElements);

/**
 * 
 * @param {String} type 
 * @param {object} options 
 * @param {Node[]} children 
 */
function createElement(type,{classNames},children){
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}

function createImageWrapper(actor) {
  const { id, name } = actor;
  const imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("id", `wrapper${id}`);
  imgWrapper.classList.add("cardImageWrapper");

  const initials = document.createElement("div");
  initials.classList.add("initials");
  // initials.append(document.createTextNode(actor.name[0]));
  initials.append(
    document.createTextNode(
      name
        .split(" ")
        .map((n) => n[0])
        .join(".") || "noname"
    )
  );
  initials.style.backgroundColor = stringToColour(name || "");

  imgWrapper.append(initials, createImage(actor));
  return imgWrapper;
}

function createImage({ photo, name, id }) {
  const img = document.createElement("img");
  img.classList.add("cardImage");
  img.setAttribute("src", photo);
  img.setAttribute("alt", name);
  img.dataset.id = id;
  img.addEventListener("error", handleImageError);
  img.addEventListener("load", handleImageLoad);
  return img;
}

function handleImageError({ target }) {
  target.remove();
}
function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${target.dataset.id}`).append(target);
}

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i + 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
