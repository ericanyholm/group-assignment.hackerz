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

  teamMembers.forEach((member) => {
    const div = document.createElement("div");
    div.classList.add("team-member");

    div.innerHTML = `
      <img src="${member.img}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    `;

    container.appendChild(div);
  });
});
