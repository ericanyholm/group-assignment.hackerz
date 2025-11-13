// src/assets/js/team.js
document.addEventListener("DOMContentLoaded", () => {
  // Parcel-kompatibla bilder
  const profileFemale = new URL("../../img/profile-pic-female.png",import.meta.url).href;
  const profileMale = new URL("../../img/profile-pic-male.png", import.meta.url).href;
  const EmmaL = new URL("../../img/emmal-profile-ballon.jpeg",import.meta.url).href;
  const EmmaH = new URL("../../img/emma-profile-ballon.png",import.meta.url).href;
  const AnnaS = new URL("../../img/anna-profile-ballon.png",import.meta.url).href;
  const EricaB = new URL("../../img/erica-profile-ballon.png",import.meta.url).href;
  const Anthony = new URL("../../img/anthony-profil-pic.jpeg",import.meta.url).href;

  const teamMembers = [
    { name: "Emma VG Lokander", role: "Codemaster2000X", img: EmmaL },
    { name: "Anthony Josefsson", role: "ProGitter5x", img: Anthony },
    { name: "Emma Hansson", role: "Image-fixer", img: EmmaH },
    { name: "Erica Bååth Nyholm", role: "Snorproducent", img: EricaB },
    { name: "Anna Scavo", role: "Bot", img: AnnaS },
    { name: "Emily Johnson", role: "Designer", img: profileFemale },
    { name: "David Wilson", role: "Marketing", img: profileMale },
    { name: "Sophia Davis", role: "HR", img: profileFemale },
    { name: "Daniel Martinez", role: "Sales", img: profileMale },
    { name: "Olivia Garcia", role: "Support", img: profileFemale },
    { name: "James Anderson", role: "Intern", img: profileMale },
    { name: "Ava Thomas", role: "Consultant", img: profileFemale },
  ];

  const container = document.getElementById("team-container");

 // Lägg till rubrik
  const heading = document.createElement("h2");
  heading.classList.add("team-heading");
  heading.textContent = "Meet the team";
  container.appendChild(heading);

  // Skapa grid-container
  const grid = document.createElement("div");
  grid.classList.add("team-grid");
  container.appendChild(grid);

  // Lägg till teammedlemmar
  teamMembers.forEach((member, index) => {
    const div = document.createElement("div");
    div.classList.add("team-member");

    const altText = `Porträtt av ${member.name}, ${member.role}`;
    div.innerHTML = `
      <img src="${member.img}" alt="${altText}" />
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    `;

    grid.appendChild(div);

    // Lägg till animation med liten delay per medlem
    setTimeout(() => {
      div.classList.add("moveUp");
    }, index * 150);
  });
});
