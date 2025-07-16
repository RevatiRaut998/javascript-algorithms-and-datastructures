const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const nameElem = document.getElementById("creature-name");
const idElem = document.getElementById("creature-id");
const weightElem = document.getElementById("weight");
const heightElem = document.getElementById("height");
const typesElem = document.getElementById("types");
const statElems = {
  hp: document.getElementById("hp"),
  attack: document.getElementById("attack"),
  defense: document.getElementById("defense"),
  "special-attack": document.getElementById("special-attack"),
  "special-defense": document.getElementById("special-defense"),
  speed: document.getElementById("speed")
};

// Map API stat names to your HTML element IDs
const statNameMap = {
  "hp": "hp",
  "attack": "attack",
  "defense": "defense",
  "special-attack": "special-attack",
  "special-defense": "special-defense",
  "speed": "speed"
};

searchButton.addEventListener("click", async () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  // Clear UI
  nameElem.textContent = "";
  idElem.textContent = "";
  weightElem.textContent = "";
  heightElem.textContent = "";
  typesElem.innerHTML = "";
  Object.values(statElems).forEach(el => el.textContent = "");

  try {
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`);
    
    // Check if response is not ok (404, 500, etc.)
    if (!res.ok) {
      alert("Creature not found");
      return;
    }

    const data = await res.json();

    // Fill basic info
    nameElem.textContent = data.name.toUpperCase();
    idElem.textContent = `#${data.id}`; 
    weightElem.textContent = `Weight: ${data.weight}`; 
    heightElem.textContent = `Height: ${data.height}`; 

    // Fill types - clear first, then add divs
    typesElem.innerHTML = "";
    data.types.forEach(type => {
      const div = document.createElement("div");
      div.textContent = type.name.toUpperCase(); 
      typesElem.appendChild(div);
    });

    // Fill stats - API uses 'base_stat'  
    data.stats.forEach(stat => {
      const statName = stat.name.toLowerCase();
      const domId = statNameMap[statName];
      if (domId && statElems[domId]) {
        statElems[domId].textContent = stat.base_stat; // Use base_stat from API
      }
    });

  } catch (error) {
    // Handle network errors or JSON parsing errors
    alert("Creature not found");
  }
});
