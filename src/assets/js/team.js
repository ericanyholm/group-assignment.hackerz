// src/assets/js/team.js
document.addEventListener("DOMContentLoaded", () => {
  // Parcel-kompatibla bilder
  const profileFemale = new URL(
    "../../img/profile-pic-female.png",
    import.meta.url
  ).href;
  const profileMale = new URL("../../img/profile-pic-male.png", import.meta.url)
    .href;
  const anthonyProfile = new URL(
    "../../img/profile-pic-male.png",
    import.meta.url
  ).href;

  const teamMembers = [
    { name: "Melissa Humble", role: "CEO", img: profileFemale },
    { name: "Anthony Example", role: "CTO", img: anthonyProfile },
    { name: "John Doe", role: "CFO", img: profileMale },
    { name: "Jane Smith", role: "CMO", img: profileFemale },
    { name: "Michael Brown", role: "Lead Developer", img: profileMale },
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

    div.innerHTML = `
      <img src="${member.img}" alt="${member.name}" />
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
