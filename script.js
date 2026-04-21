/* ============================================================
   MoodEats — script.js
   Linked in index.html via: <script src="script.js"></script>
   (placed at bottom of <body> so HTML is loaded first)
   ============================================================ */

/* ══════════════════════════════════════════
   1. DATA — Mood → Food Mapping
   (This is the CORE LOGIC of the project)
   ══════════════════════════════════════════ */

const moodData = {
  happy: {
    label: "Happy 😊",
    tip: "<strong>Keep the good vibes going!</strong> Light, colourful foods match your bright energy. Go for fresh fruits, wholesome snacks and foods that celebrate your mood.",
    color: "#F0A500",
    tagColor: "rgba(240,165,0,0.15)",
    tagText: "#F0A500",
    nutrition: { carbs: 55, protein: 30, fats: 25, vitamins: 80, hydration: 70 },
    foods: [
      { emoji: "🍓", name: "Strawberries",    benefit: "Vitamin C boost, natural mood lifter",   tag: "Antioxidant" },
      { emoji: "🍌", name: "Banana",          benefit: "Natural sugars + serotonin precursor",    tag: "Energy" },
      { emoji: "🥗", name: "Fresh Salad",     benefit: "Light, hydrating, full of folate",        tag: "Hydrating" },
      { emoji: "🍊", name: "Oranges",         benefit: "Vitamin C keeps energy levels high",      tag: "Vitamin C" },
      { emoji: "🥤", name: "Fruit Smoothie",  benefit: "Quick nutrients + natural sweetness",     tag: "Refreshing" },
      { emoji: "🍫", name: "Dark Chocolate",  benefit: "Releases endorphins, small indulgence",   tag: "Mood Boost" },
    ]
  },

  stressed: {
    label: "Stressed 😤",
    tip: "<strong>Stress drains magnesium and B-vitamins.</strong> Eat foods that calm your nervous system — avoid caffeine and high-sugar snacks which spike cortisol.",
    color: "#E05C5C",
    tagColor: "rgba(224,92,92,0.15)",
    tagText: "#E05C5C",
    nutrition: { carbs: 40, protein: 50, fats: 35, vitamins: 75, hydration: 65 },
    foods: [
      { emoji: "🥑", name: "Avocado",         benefit: "Healthy fats reduce cortisol levels",    tag: "Calming" },
      { emoji: "🌰", name: "Almonds",          benefit: "Magnesium reduces anxiety symptoms",     tag: "Magnesium" },
      { emoji: "🍵", name: "Chamomile Tea",    benefit: "L-theanine calms the nervous system",    tag: "Relaxing" },
      { emoji: "🐟", name: "Salmon",           benefit: "Omega-3 lowers stress hormones",         tag: "Omega-3" },
      { emoji: "🥦", name: "Broccoli",         benefit: "Sulforaphane protects brain from stress",tag: "Brain Food" },
      { emoji: "🫐", name: "Blueberries",      benefit: "Antioxidants fight stress-induced damage",tag: "Antioxidant" },
    ]
  },

  tired: {
    label: "Tired 😴",
    tip: "<strong>Low energy often means low iron or B12.</strong> Eat slow-release energy foods to avoid the sugar crash. Stay hydrated — dehydration is the #1 cause of fatigue.",
    color: "#7B8FE0",
    tagColor: "rgba(123,143,224,0.15)",
    tagText: "#7B8FE0",
    nutrition: { carbs: 70, protein: 40, fats: 30, vitamins: 60, hydration: 85 },
    foods: [
      { emoji: "🥚", name: "Boiled Eggs",      benefit: "Complete protein + B12 for energy",      tag: "Protein" },
      { emoji: "🌾", name: "Oats",             benefit: "Slow-release carbs, no energy crash",    tag: "Sustained" },
      { emoji: "💧", name: "Water + Lemon",    benefit: "Dehydration is the top cause of fatigue",tag: "Hydration" },
      { emoji: "🍠", name: "Sweet Potato",     benefit: "Iron + complex carbs for steady energy", tag: "Iron" },
      { emoji: "☕", name: "Green Tea",         benefit: "Gentle caffeine with L-theanine balance",tag: "Alertness" },
      { emoji: "🍯", name: "Honey + Milk",     benefit: "Quick natural sugars + tryptophan",      tag: "Natural" },
    ]
  },

  sad: {
    label: "Sad 😢",
    tip: "<strong>When you're feeling low, your serotonin levels drop.</strong> Foods rich in tryptophan and omega-3 help rebuild it. Avoid processed food — it worsens mood dips.",
    color: "#5CB8A0",
    tagColor: "rgba(92,184,160,0.15)",
    tagText: "#5CB8A0",
    nutrition: { carbs: 45, protein: 55, fats: 40, vitamins: 70, hydration: 60 },
    foods: [
      { emoji: "🍫", name: "Dark Chocolate",   benefit: "Triggers serotonin + endorphin release", tag: "Mood Lift" },
      { emoji: "🥜", name: "Peanut Butter",    benefit: "Tryptophan helps produce serotonin",     tag: "Serotonin" },
      { emoji: "🐟", name: "Tuna",             benefit: "Omega-3 DHA directly supports mood",     tag: "Omega-3" },
      { emoji: "🍒", name: "Cherries",         benefit: "Melatonin + anthocyanins lift spirits",  tag: "Antioxidant" },
      { emoji: "🫘", name: "Lentil Soup",      benefit: "Folate deficiency is linked to sadness", tag: "Folate" },
      { emoji: "🥛", name: "Warm Milk",        benefit: "Tryptophan + serotonin precursor",       tag: "Comfort" },
    ]
  },

  energetic: {
    label: "Energetic ⚡",
    tip: "<strong>You're on fire — fuel it right!</strong> Your body needs lean protein to build and complex carbs to maintain performance. Stay hydrated for peak output.",
    color: "#F07A28",
    tagColor: "rgba(240,122,40,0.15)",
    tagText: "#F07A28",
    nutrition: { carbs: 65, protein: 70, fats: 25, vitamins: 65, hydration: 90 },
    foods: [
      { emoji: "🍗", name: "Grilled Chicken",  benefit: "Lean protein for muscle maintenance",    tag: "Protein" },
      { emoji: "🍚", name: "Brown Rice",        benefit: "Complex carbs for sustained performance",tag: "Carbs" },
      { emoji: "🥦", name: "Broccoli",         benefit: "Vitamins + minerals for peak output",    tag: "Vitamins" },
      { emoji: "🍌", name: "Banana",           benefit: "Quick energy + electrolytes post-workout",tag: "Electrolyte" },
      { emoji: "💧", name: "Coconut Water",    benefit: "Natural electrolytes, rehydrate fast",   tag: "Hydration" },
      { emoji: "🥚", name: "Egg Whites",       benefit: "Pure protein, fast-absorbing",           tag: "Lean Protein" },
    ]
  },

  anxious: {
    label: "Anxious 😰",
    tip: "<strong>Anxiety activates your fight-or-flight response.</strong> Magnesium and GABA-supporting foods help calm it down. Avoid caffeine, sugar spikes, and skipping meals.",
    color: "#A07BE0",
    tagColor: "rgba(160,123,224,0.15)",
    tagText: "#A07BE0",
    nutrition: { carbs: 35, protein: 45, fats: 50, vitamins: 80, hydration: 75 },
    foods: [
      { emoji: "🌰", name: "Cashews",          benefit: "Zinc + magnesium calm the nervous system",tag: "Calming" },
      { emoji: "🍵", name: "Lavender Tea",     benefit: "Linalool reduces anxiety naturally",     tag: "Relaxing" },
      { emoji: "🥑", name: "Avocado",          benefit: "B6 + folate support stress response",    tag: "B Vitamins" },
      { emoji: "🫐", name: "Blueberries",      benefit: "Flavonoids reduce panic response",       tag: "Anti-anxiety" },
      { emoji: "🐟", name: "Mackerel",         benefit: "Omega-3 reduces cortisol significantly", tag: "Omega-3" },
      { emoji: "🥗", name: "Spinach Salad",    benefit: "Magnesium + folate, anxiety fighters",   tag: "Magnesium" },
    ]
  },

  focused: {
    label: "Focused 🎯",
    tip: "<strong>Your brain burns glucose rapidly when focused.</strong> Give it steady fuel with complex carbs and choline-rich foods. Hydration is critical — even 2% dehydration hurts cognition.",
    color: "#28B4E0",
    tagColor: "rgba(40,180,224,0.15)",
    tagText: "#28B4E0",
    nutrition: { carbs: 60, protein: 50, fats: 45, vitamins: 85, hydration: 80 },
    foods: [
      { emoji: "🫐", name: "Blueberries",      benefit: "Anthocyanins improve memory + focus",    tag: "Brain Food" },
      { emoji: "🐟", name: "Salmon",           benefit: "DHA is the brain's structural fat",      tag: "DHA" },
      { emoji: "☕", name: "Black Coffee",      benefit: "Adenosine blocker = sharper focus",      tag: "Alertness" },
      { emoji: "🥚", name: "Eggs",             benefit: "Choline builds acetylcholine for memory",tag: "Choline" },
      { emoji: "🌰", name: "Walnuts",          benefit: "Omega-3 ALA supports brain function",    tag: "Omega-3" },
      { emoji: "🍵", name: "Matcha",           benefit: "L-theanine + caffeine = calm focus",     tag: "Focus" },
    ]
  },

  sick: {
    label: "Sick 🤒",
    tip: "<strong>When you're unwell, your immune system is working overtime.</strong> Eat light, easy-to-digest foods. Zinc, Vitamin C, and ginger are your best allies right now.",
    color: "#5CB8A0",
    tagColor: "rgba(92,184,160,0.15)",
    tagText: "#5CB8A0",
    nutrition: { carbs: 50, protein: 35, fats: 20, vitamins: 95, hydration: 95 },
    foods: [
      { emoji: "🍲", name: "Chicken Soup",     benefit: "Anti-inflammatory, easy on stomach",     tag: "Healing" },
      { emoji: "🫚", name: "Ginger Tea",        benefit: "Ginger fights nausea + inflammation",    tag: "Anti-inflam." },
      { emoji: "🍋", name: "Lemon + Honey",    benefit: "Vitamin C + antimicrobial properties",   tag: "Immunity" },
      { emoji: "🧄", name: "Garlic",           benefit: "Allicin — nature's antibiotic",          tag: "Antibacterial" },
      { emoji: "💧", name: "ORS / Water",      benefit: "Stay hydrated — fight fever dehydration",tag: "Hydration" },
      { emoji: "🍚", name: "Plain Rice",       benefit: "Gentle on stomach, easy to digest",      tag: "Digestive" },
    ]
  }
};


/* ══════════════════════════════════════════
   2. DOM ELEMENT REFERENCES
   ══════════════════════════════════════════ */

const moodGrid      = document.getElementById('moodGrid');
const moodSection   = document.getElementById('moodSection');
const resultsSection = document.getElementById('resultsSection');
const resultsTitle  = document.getElementById('resultsTitle');
const resultsSubtitle = document.getElementById('resultsSubtitle');
const moodTipBox    = document.getElementById('moodTipBox');
const foodGrid      = document.getElementById('foodGrid');
const nutritionBar  = document.getElementById('nutritionBar');
const logBtn        = document.getElementById('logBtn');
const backBtn       = document.getElementById('backBtn');
const logSection    = document.getElementById('logSection');
const logList       = document.getElementById('logList');
const clearLogBtn   = document.getElementById('clearLogBtn');


/* ══════════════════════════════════════════
   3. STATE VARIABLES
   ══════════════════════════════════════════ */

let currentMood = null;   // which mood is selected
let alreadyLogged = false; // prevent double logging


/* ══════════════════════════════════════════
   4. MOOD SELECTION — Event Listener
   ══════════════════════════════════════════ */

moodGrid.addEventListener('click', function (e) {
  // Find the button that was clicked (even if user clicked child element)
  const btn = e.target.closest('.mood-btn');
  if (!btn) return;

  const mood = btn.getAttribute('data-mood');
  selectMood(mood, btn);
});


/* ══════════════════════════════════════════
   5. CORE FUNCTION — Select Mood + Show Results
   ══════════════════════════════════════════ */

function selectMood(mood, btn) {
  // Remove 'selected' from all buttons
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));

  // Highlight chosen button
  btn.classList.add('selected');

  // Store current mood
  currentMood = mood;
  alreadyLogged = false;
  logBtn.classList.remove('logged');
  logBtn.textContent = '✅ Log This Mood Entry';

  // Get data for this mood
  const data = moodData[mood];

  // Update results section
  resultsTitle.textContent = `You feel ${data.label}`;
  resultsSubtitle.textContent = `Here's what your body needs right now`;
  moodTipBox.innerHTML = `💡 ${data.tip}`;

  // Render food cards
  renderFoods(data);

  // Render nutrition bars
  renderNutrition(data);

  // Show results section
  resultsSection.classList.remove('hidden');

  // Scroll smoothly to results
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ══════════════════════════════════════════
   6. RENDER FOOD CARDS
   ══════════════════════════════════════════ */

function renderFoods(data) {
  foodGrid.innerHTML = data.foods.map(food => `
    <div class="food-card">
      <span class="food-img">${food.emoji}</span>
      <div class="food-name">${food.name}</div>
      <div class="food-benefit">${food.benefit}</div>
      <span class="food-tag" style="background:${data.tagColor}; color:${data.tagText};">
        ${food.tag}
      </span>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════
   7. RENDER NUTRITION BARS
   ══════════════════════════════════════════ */

function renderNutrition(data) {
  const n = data.nutrition;
  const bars = [
    { label: 'Carbs',     value: n.carbs,     color: '#F0A500' },
    { label: 'Protein',   value: n.protein,   color: '#E05C5C' },
    { label: 'Fats',      value: n.fats,      color: '#7B8FE0' },
    { label: 'Vitamins',  value: n.vitamins,  color: '#5CB8A0' },
    { label: 'Hydration', value: n.hydration, color: '#28B4E0' },
  ];

  nutritionBar.innerHTML = `
    <h4>Recommended Nutritional Focus</h4>
    ${bars.map(b => `
      <div class="nut-row">
        <div class="nut-label">${b.label}</div>
        <div class="nut-track">
          <div class="nut-fill" style="width: ${b.value}%; background: ${b.color};"></div>
        </div>
        <div class="nut-pct">${b.value}%</div>
      </div>
    `).join('')}
  `;
}


/* ══════════════════════════════════════════
   8. BACK BUTTON — Hide results
   ══════════════════════════════════════════ */

backBtn.addEventListener('click', function () {
  resultsSection.classList.add('hidden');
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  currentMood = null;
  moodSection.scrollIntoView({ behavior: 'smooth' });
});


/* ══════════════════════════════════════════
   9. LOG MOOD ENTRY — localStorage
   ══════════════════════════════════════════ */

logBtn.addEventListener('click', function () {
  if (!currentMood || alreadyLogged) return;

  alreadyLogged = true;
  logBtn.classList.add('logged');
  logBtn.textContent = '✅ Entry Logged!';

  const data = moodData[currentMood];
  const entry = {
    mood:  currentMood,
    label: data.label,
    foods: data.foods.slice(0, 3).map(f => f.name).join(', '),
    time:  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  // Save to localStorage
  const log = getLog();
  log.unshift(entry); // add to beginning
  localStorage.setItem('moodEatsLog', JSON.stringify(log));

  // Re-render log
  renderLog();

  // Show toast
  showToast(`Mood logged: ${data.label}`);
});


/* ══════════════════════════════════════════
   10. GET LOG from localStorage
   ══════════════════════════════════════════ */

function getLog() {
  try {
    return JSON.parse(localStorage.getItem('moodEatsLog') || '[]');
  } catch {
    return [];
  }
}


/* ══════════════════════════════════════════
   11. RENDER LOG ENTRIES
   ══════════════════════════════════════════ */

function renderLog() {
  const log = getLog();

  if (log.length === 0) {
    logList.innerHTML = '<p class="log-empty">No entries yet. Select a mood to get started!</p>';
    return;
  }

  logList.innerHTML = log.map(entry => `
    <div class="log-entry">
      <div class="log-emoji">${getMoodEmoji(entry.mood)}</div>
      <div class="log-info">
        <div class="log-mood-name">${entry.label}</div>
        <div class="log-foods">Suggested: ${entry.foods}</div>
      </div>
      <div class="log-time">${entry.time}</div>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════
   12. HELPER — Get Emoji for Mood
   ══════════════════════════════════════════ */

function getMoodEmoji(mood) {
  const emojis = {
    happy: '😊', stressed: '😤', tired: '😴',
    sad: '😢', energetic: '⚡', anxious: '😰',
    focused: '🎯', sick: '🤒'
  };
  return emojis[mood] || '😐';
}


/* ══════════════════════════════════════════
   13. CLEAR LOG
   ══════════════════════════════════════════ */

clearLogBtn.addEventListener('click', function () {
  localStorage.removeItem('moodEatsLog');
  renderLog();
  showToast('Log cleared!');
});


/* ══════════════════════════════════════════
   14. TOAST NOTIFICATION
   ══════════════════════════════════════════ */

function showToast(message) {
  // Create or reuse toast element
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.classList.add('toast');
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => toast.classList.remove('show'), 2500);
}


/* ══════════════════════════════════════════
   15. INIT — Run on page load
   ══════════════════════════════════════════ */

function init() {
  renderLog(); // Load previous log from localStorage
}

init();
