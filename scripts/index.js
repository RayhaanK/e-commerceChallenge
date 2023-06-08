let featuredProducts = [
    {
        id: 1,
        title: "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
        imageUrl: "https://i.postimg.cc/jjyXrMRB/spider-man-across-the-spider-verse.jpg",
        description: "Miles Morales continues his journey as Spider-Man, swinging across different dimensions. He reunites with Gwen Stacy, a.k.a. Spider-Gwen, and they team up once again. Together, they encounter new versions of Spider-Man from various dimensions. They face a formidable threat that puts the entire Spider-Verse in danger. The film explores the complexities of their friendship and their individual growth as heroes.",
        content: "Find out More!",
        date: new Date()
    },
    {
        id: 2,
        title: "THE LITTLE MERMAID",
        imageUrl: "https://i.postimg.cc/sXRY74KY/the-little-mermaid.jpg",
        description: "Ariel, a curious and adventurous mermaid, dreams of experiencing life on land. She falls in love with a human prince named Eric after saving him from a shipwreck. Determined to be with Eric, Ariel makes a deal with the sea witch Ursula to become human. Ursula takes away Ariel's voice in exchange for legs, setting a time limit for her to win Eric's love. Ariel befriends colourful characters like Flounder, Sebastian, and Scuttle who aid her journey.",
        content: "Find out More!",
        date: new Date()
    },
    {
        id: 3,
        title: "GUARDIANS OF THE GALAXY VOL. 3",
        imageUrl: "https://i.postimg.cc/7Lz59hN1/guardians-of-the-galaxy-v3.jpg",
        description: "The Guardians find themselves facing a new cosmic threat that puts the universe in peril. Gamora's return after her sacrifice in Avengers: Endgame raises questions about her altered memories. The team embarks on a mission to uncover Gamora's past and restore her connections with the Guardians. Peter Quill (Star-Lord) struggles with reconciling his feelings for the Gamora he knows and the Gamora from an alternate timeline. Rocket's complex history is explored, delving into his origins and emotional growth.",
        content: "Find out More!",
        date: new Date()
    },
    {
        id: 4,
        title: "THE FLASH",
        imageUrl: "https://i.postimg.cc/c4wKSr3v/the-flash.jpg",
        description: "Barry Allen, a forensic scientist with superhuman speed, discovers the ability to travel through time. He learns about the existence of parallel universes and encounters different versions of himself and other characters. The film explores Barry's journey to master his powers and use them responsibly. A major threat emerges, possibly involving a formidable enemy from his rogues' gallery, like Reverse-Flash. Barry forms alliances with other DC superheroes, leading to exciting crossovers and team-ups.",
        content: "Find out More!",
        date: new Date()
    },
]

let product = document.querySelector(".featPost");
featuredProducts.forEach((data) => {
  product.innerHTML += `
  <div class="col mt-4 d-flex justify-content-center">
  <div class="card">
  <div class= "titleC">
  <h4 class="display-5 text-center text-white">${data.title}</h4>
  </div>
  <img
  src="${data.imageUrl}"
  class="card-img-top img-fluid cpic"
  alt="..."
/>
  <div class="card-body">
        <p class="card-text text-white descC">
        "${data.description}"
            </p>
            <a href="./HTML/blogpost.html"><button class="featbtn">${data.content}</button></a>
            <p class="text-white mt-2">${data.date}</p>
            </div>
            </div>  
            </div>
    `;
});

