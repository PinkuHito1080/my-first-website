// Define Scores and Logic
const personalityScores = {
  red: 4,     // Red (x): High Urgency/Demand
  blue: 1,    // Blue (j): Low Assertiveness/Reserved
  green: 2.5, // Green (i): Moderate/Balanced
  yellow: 3   // Yellow (y): High Sociability/Expressive
};

const HIGH_FRICTION_THRESHOLD = 2;
const LOW_ENERGY_THRESHOLD = 4;

/* Core logic: Calculates score and determines the outcome. */
function modelInteractionAdvanced(person1, person2) {
  const score1 = personalityScores[person1];
  const score2 = personalityScores[person2];

  if (score1 === undefined || score2 === undefined) {
    return "Error: Invalid selection.";
  }

  const totalEnergy = score1 + score2;
  const scoreDifference = Math.abs(score1 - score2);

  let outcomeMessage;
  let detailMessage;

  // Scenario A: High Friction (Clash)
  if (scoreDifference >= HIGH_FRICTION_THRESHOLD) {
    outcomeMessage = "🚨 Unsatisfactory Conversation (Clash)";
    detailMessage = `Potential clash: ${person1.toUpperCase()} and ${person2.toUpperCase()} are not very level with each other.`;
  }
  // Scenario B: Low Energy (Stagnation)
  else if (totalEnergy <= LOW_ENERGY_THRESHOLD) {
    outcomeMessage = "⚪ Neutral Conversation (Stagnation)";
    detailMessage = `Potential stagnation: Conversation may be too passive or dull.`;
  }
  // Scenario C: Balanced (Harmony)
  else {
    outcomeMessage = "✅ Good Conversation (Harmony)";
    detailMessage = `Potential harmony: Balanced energy and low friction.`;
  }

  // Format the output string for display in the HTML
  return `
  Outcome: ${outcomeMessage}

  --- Interaction Details ---
  Person 1 (${person1.toUpperCase()}): ${score1}
  Person 2 (${person2.toUpperCase()}): ${score2}

  Total Energy (Sum): ${totalEnergy.toFixed(1)}
  Friction (Difference): ${scoreDifference.toFixed(1)}

  Analysis: ${detailMessage}
  `;
}

// Simulate Interaction button logic
function runSimulation() {
  // Get selected values from the HTML dropdowns (select elements)
  const person1 = document.getElementById('person1').value;
  const person2 = document.getElementById('person2').value;

  // Run the simulation logic
  const outputText = modelInteractionAdvanced(person1, person2);

  // Display the output in the designated HTML element
  document.getElementById('output').innerHTML = outputText;
}

// I crawled into the industry. A saturated circus, manipulating like Hillary.
