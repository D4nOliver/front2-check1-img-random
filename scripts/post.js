let infoCards = [
  {
    titulo: "KUNG FU GATO",
    url: "https://i.pinimg.com/originals/c9/66/5c/c9665cadeb7a1fc8b18a68d120de4ece.jpg",
    desc: `-Everybody is kung fu fighting (hoo, huh) <br> -Your mind becomes fast as
lightning <br> -Although the future is a little bit frightening <br> -It's the book of your life that you're writing`,
  },
];

for (let i in infoCards) {
  const container = document.querySelector(".container");
  const newCard = document.createElement("div");
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  newCard.classList.add("card");
  img.classList.add("imgCard");
  h1.classList.add("titulo");
  p.classList.add("desc");

  p.innerHTML = infoCards[i].desc;
  h1.innerText = infoCards[i].titulo;
  img.src = infoCards[i].url;

  newCard.appendChild(img);
  newCard.appendChild(h1);
  newCard.appendChild(p);
  container.appendChild(newCard);
}
