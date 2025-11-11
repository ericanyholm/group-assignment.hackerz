// src/assets/js/render-team.js
import { teamMembers } from './teamMembers.js'; 

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("team-members");
  
  // Skydd: kör bara om elementet finns
  if (!container) return;

  const html = teamMembers
    .map(member => `
      <div class="member-card">
        <img src="${member.img}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    `)
    .join("");

  container.innerHTML = html;
});