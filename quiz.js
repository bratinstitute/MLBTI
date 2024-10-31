let answerPath = [];

function nextQuestion(currentId, nextId) {
  // Hide the current question
  document.getElementById(currentId).classList.remove('active');

  // Add the current question to answerPath before navigating
  if (!nextId.startsWith("team-")) {
    answerPath.push(currentId);
  }

  // Check if nextId is a final result (starts with 'team-')
  if (nextId.startsWith('team-')) {
    showFinalResult(nextId);
  } else {
    // Normal navigation to the next question
    const nextElement = document.getElementById(nextId);
    if (nextElement) {
      nextElement.classList.add('active');
    }
  }
}

function goBack() {
  // Retrieve the last question from the path
  const lastQuestionId = answerPath.pop();

  // Hide the current question (the one that's active)
  const currentActive = document.querySelector(".question.active");
  if (currentActive) {
    currentActive.classList.remove("active");
  }

  // Show the previous question
  const previousQuestion = document.getElementById(lastQuestionId);
  if (previousQuestion) {
    previousQuestion.classList.add("active");
  }
}

function showFinalResult(teamId) {
  // Map final result IDs to team names
  const teamMappings = {
    "team-diamondbacks": "Arizona Diamondbacks",
    "team-mariners": "Seattle Mariners",
    "team-braves": "Atlanta Braves",
    "team-redsox": "Boston Red Sox",
    "team-rangers": "Texas Rangers",
    "team-cubs": "Chicago Cubs",
    "team-giants": "San Francisco Giants",
    "team-guardians": "Cleveland Guardians",
    "team-nationals": "Washington Nationals",
    "team-reds": "Cincinnati Reds",
    "team-yankees": "New York Yankees",
    "team-cardinals": "St. Louis Cardinals",
    "team-mets": "New York Mets",
    "team-tigers": "Detroit Tigers",
    "team-astros": "Houston Astros",
    "team-angels": "Los Angeles Angels",
    "team-marlins": "Miami Marlins",
    "team-padres": "San Diego Padres",
    "team-rays": "Tampa Bay Rays",
    "team-dodgers": "Los Angeles Dodgers",
    "team-twins": "Minnesota Twins",
    "team-bluejays": "Toronto Blue Jays",
    "team-athletics": "Athletics",
    "team-orioles": "Baltimore Orioles",
    "team-whitesox": "Chicago White Sox",
    "team-rockies": "Colorado Rockies",
    "team-phillies": "Philadelphia Phillies",
    "team-brewers": "Milwaukee Brewers",
    "team-pirates": "Pittsburgh Pirates",
    "team-royals": "Kansas City Royals",
  };
  
  // Set the final result text based on the teamId
  document.getElementById("team-result").innerText = teamMappings[teamId] || "Unknown Team";

  // Ensure final-result is displayed
  const finalResultElement = document.getElementById("final-result");
  finalResultElement.classList.add("active");
  finalResultElement.style.display = "block"; // JavaScript fallback for visibility

  // Clear answerPath so they can't go back from the final result
  answerPath = [];
}