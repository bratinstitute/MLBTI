let answerPath = [];

function nextQuestion(currentId, nextId) {
  document.getElementById(currentId).classList.remove('active');
  
  // Check if nextId is a final result (starts with 'team-')
  if (nextId.startsWith('team-')) {
    showFinalResult(nextId);
  } else {
    // Normal navigation to the next question
    const nextElement = document.getElementById(nextId);
    answerPath.push(nextId);
    
    if (nextElement) {
      nextElement.classList.add('active');
    }
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
    // Add more mappings as needed for each team result
  };

  // Display the final result
  document.getElementById("final-result").classList.add("active");
  document.getElementById("team-result").innerText = teamMappings[teamId] || "Unknown Team";
}
