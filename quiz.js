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
    "team-diamondbacks": "AZ, which makes your team the Arizona Diamondbacks",
    "team-mariners": "SEA, which makes your team the Seattle Mariners",
    "team-braves": "ATL, which makes your team the Atlanta Braves",
    "team-redsox": "BOS, which makes your team the Boston Red Sox",
    "team-rangers": "TEX, which makes your team the Texas Rangers",
    "team-cubs": "CHC, which makes your team the Chicago Cubs",
    "team-giants": "SF, which makes your team the San Francisco Giants",
    "team-guardians": "CLE, which makes your team the Cleveland Guardians",
    "team-nationals": "WAS, which makes your team the Washington Nationals",
    "team-reds": "CIN, which makes your team the Cincinnati Reds",
    "team-yankees": "NYY, which makes your team the New York Yankees",
    "team-cardinals": "STL, which makes your team the St. Louis Cardinals",
    "team-mets": "NYM, which makes your team the New York Mets",
    "team-tigers": "DET, which makes your team the Detroit Tigers",
    "team-astros": "HOU, which makes your team the Houston Astros",
    "team-angels": "LAA, which makes your team the Los Angeles Angels",
    "team-marlins": "MIA, which makes your team the Miami Marlins",
    "team-padres": "SD, which makes your team the San Diego Padres",
    "team-rays": "TB, which makes your team the Tampa Bay Rays",
    "team-dodgers": "LAD, which makes your team the Los Angeles Dodgers",
    "team-twins": "MIN, which makes your team the Minnesota Twins",
    "team-bluejays": "TOR, which makes your team the Toronto Blue Jays",
    "team-athletics": "OAK, which makes your team the Athletics",
    "team-orioles": "BAL, which makes your team the Baltimore Orioles",
    "team-whitesox": "CWS, which makes your team the Chicago White Sox",
    "team-rockies": "COL, which makes your team the Colorado Rockies",
    "team-phillies": "PHI, which makes your team the Philadelphia Phillies",
    "team-brewers": "MIL, which makes your team the Milwaukee Brewers",
    "team-pirates": "PIT, which makes your team the Pittsburgh Pirates",
    "team-royals": "KC, which makes your team the Kansas City Royals",
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