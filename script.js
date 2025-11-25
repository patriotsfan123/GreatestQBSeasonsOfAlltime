// QB Seasons Data
const sortedSeasons = [
  { rank: 1, score: 369.5, player: "Peyton Manning", season: "2004", team: "Colts", mvpFinish: "1st", anyaPlus: 153, cmpPlus: 127, tdPlus: 168, intPlus: 120, ratePlus: 151 },
  { rank: 2, score: 369.0, player: "Tom Brady", season: "2007", team: "Patriots", mvpFinish: "1st", anyaPlus: 142, cmpPlus: 129, tdPlus: 153, intPlus: 126, ratePlus: 148 },
  { rank: 3, score: 360.5, player: "Dan Marino", season: "1984", team: "Dolphins", mvpFinish: "1st", anyaPlus: 150, cmpPlus: 127, tdPlus: 148, intPlus: 115, ratePlus: 141 },
  { rank: 4, score: 356.5, player: "Steve Young", season: "1994", team: "49ers", mvpFinish: "1st", anyaPlus: 141, cmpPlus: 138, tdPlus: 147, intPlus: 115, ratePlus: 147 },
  { rank: 5, score: 353.0, player: "Peyton Manning", season: "2013", team: "Broncos", mvpFinish: "1st", anyaPlus: 139, cmpPlus: 125, tdPlus: 145, intPlus: 120, ratePlus: 137 },
  { rank: 6, score: 351.5, player: "Aaron Rodgers", season: "2011", team: "Packers", mvpFinish: "1st", anyaPlus: 147, cmpPlus: 127, tdPlus: 153, intPlus: 127, ratePlus: 149 },
  { rank: 7, score: 348.5, player: "Joe Montana", season: "1989", team: "49ers", mvpFinish: "1st", anyaPlus: 141, cmpPlus: 152, tdPlus: 132, intPlus: 123, ratePlus: 149 },
  { rank: 8, score: 347.0, player: "Aaron Rodgers", season: "2020", team: "Packers", mvpFinish: "1st", anyaPlus: 135, cmpPlus: 127, tdPlus: 146, intPlus: 126, ratePlus: 140 },
  { rank: 9, score: 345.5, player: "Steve Young", season: "1992", team: "49ers", mvpFinish: "1st", anyaPlus: 139, cmpPlus: 129, tdPlus: 130, intPlus: 126, ratePlus: 142 },
  { rank: 10, score: 342.5, player: "Lamar Jackson", season: "2024", team: "Ravens", mvpFinish: "2nd", anyaPlus: 147, cmpPlus: 107, tdPlus: 151, intPlus: 127, ratePlus: 143 },
  { rank: 11, score: 342.0, player: "Drew Brees", season: "2011", team: "Saints", mvpFinish: "2nd", anyaPlus: 132, cmpPlus: 137, tdPlus: 131, intPlus: 111, ratePlus: 133 },
  { rank: 12, score: 341.0, player: "Ken Stabler", season: "1976", team: "Raiders", mvpFinish: "2nd", anyaPlus: 138, cmpPlus: 142, tdPlus: 148, intPlus: 94, ratePlus: 140 },
  { rank: 13, score: 339.5, player: "Daunte Culpepper", season: "2004", team: "Vikings", mvpFinish: "2nd", anyaPlus: 132, cmpPlus: 133, tdPlus: 136, intPlus: 120, ratePlus: 138 },
  { rank: 14, score: 336.0, player: "Kurt Warner", season: "1999", team: "Rams", mvpFinish: "1st", anyaPlus: 134, cmpPlus: 130, tdPlus: 143, intPlus: 109, ratePlus: 136 },
  { rank: 15, score: 335.0, player: "Joe Montana", season: "1987", team: "49ers", mvpFinish: "3rd", anyaPlus: 127, cmpPlus: 139, tdPlus: 138, intPlus: 110, ratePlus: 136 },
  { rank: 16, score: 334.0, player: "Roger Staubach", season: "1971", team: "Cowboys", mvpFinish: "2nd", anyaPlus: 139, cmpPlus: 125, tdPlus: 128, intPlus: 132, ratePlus: 144 },
  { rank: 17, score: 333.5, player: "Randall Cunningham", season: "1998", team: "Vikings", mvpFinish: "2nd", anyaPlus: 140, cmpPlus: 140, tdPlus: 141, intPlus: 112, ratePlus: 134 },
  { rank: 18, score: 333.5, player: "Brett Favre", season: "1995", team: "Packers", mvpFinish: "1st", anyaPlus: 130, cmpPlus: 117, tdPlus: 135, intPlus: 115, ratePlus: 130 },
  { rank: 19, score: 330.5, player: "Matt Ryan", season: "2016", team: "Falcons", mvpFinish: "1st", anyaPlus: 141, cmpPlus: 128, tdPlus: 133, intPlus: 119, ratePlus: 140 },
  { rank: 20, score: 329.5, player: "Tom Brady", season: "2010", team: "Patriots", mvpFinish: "1st", anyaPlus: 128, cmpPlus: 117, tdPlus: 135, intPlus: 129, ratePlus: 130 },
  { rank: 21, score: 329.0, player: "Kurt Warner", season: "2001", team: "Rams", mvpFinish: "1st", anyaPlus: 130, cmpPlus: 133, tdPlus: 136, intPlus: 87, ratePlus: 132 },
  { rank: 22, score: 329.0, player: "Drew Brees", season: "2009", team: "Saints", mvpFinish: "2nd", anyaPlus: 131, cmpPlus: 133, tdPlus: 131, intPlus: 111, ratePlus: 132 },
  { rank: 23, score: 328.5, player: "Bert Jones", season: "1976", team: "Colts", mvpFinish: "1st", anyaPlus: 141, cmpPlus: 124, tdPlus: 127, intPlus: 127, ratePlus: 118 },
  { rank: 24, score: 328.0, player: "Warren Moon", season: "1990", team: "Oilers", mvpFinish: "3rd", anyaPlus: 127, cmpPlus: 121, tdPlus: 119, intPlus: 120, ratePlus: 129 },
  { rank: 25, score: 325.5, player: "Joe Burrow", season: "2024", team: "Bengals", mvpFinish: "6th", anyaPlus: 118, cmpPlus: 122, tdPlus: 127, intPlus: 117, ratePlus: 127 },
  { rank: 26, score: 325.0, player: "Ken Anderson", season: "1981", team: "Bengals", mvpFinish: "1st", anyaPlus: 136, cmpPlus: 123, tdPlus: 123, intPlus: 131, ratePlus: 137 },
  { rank: 27, score: 325.0, player: "Ken Stabler", season: "1974", team: "Raiders", mvpFinish: "2nd", anyaPlus: 132, cmpPlus: 117, tdPlus: 137, intPlus: 113, ratePlus: 131 },
  { rank: 28, score: 325.0, player: "Dan Marino", season: "1986", team: "Dolphins", mvpFinish: "3rd", anyaPlus: 128, cmpPlus: 121, tdPlus: 132, intPlus: 105, ratePlus: 124 },
  { rank: 29, score: 325.0, player: "Drew Brees", season: "2018", team: "Saints", mvpFinish: "2nd", anyaPlus: 131, cmpPlus: 141, tdPlus: 122, intPlus: 122, ratePlus: 134 },
  { rank: 30, score: 324.5, player: "Joe Montana", season: "1984", team: "49ers", mvpFinish: "6th", anyaPlus: 138, cmpPlus: 128, tdPlus: 125, intPlus: 124, ratePlus: 134 },
  { rank: 31, score: 324.5, player: "Tom Brady", season: "2016", team: "Patriots", mvpFinish: "2nd", anyaPlus: 138, cmpPlus: 119, tdPlus: 125, intPlus: 134, ratePlus: 133 },
  { rank: 32, score: 323.5, player: "Dan Fouts", season: "1981", team: "Chargers", mvpFinish: "2nd", anyaPlus: 134, cmpPlus: 111, tdPlus: 115, intPlus: 122, ratePlus: 125 },
  { rank: 33, score: 323.5, player: "Steve Young", season: "1993", team: "49ers", mvpFinish: "3rd", anyaPlus: 132, cmpPlus: 130, tdPlus: 133, intPlus: 99, ratePlus: 133 },
  { rank: 34, score: 323.0, player: "Lamar Jackson", season: "2019", team: "Ravens", mvpFinish: "1st", anyaPlus: 125, cmpPlus: 106, tdPlus: 143, intPlus: 114, ratePlus: 128 },
  { rank: 35, score: 322.5, player: "Patrick Mahomes", season: "2018", team: "Chiefs", mvpFinish: "1st", anyaPlus: 136, cmpPlus: 109, tdPlus: 144, intPlus: 105, ratePlus: 131 },
  { rank: 36, score: 322.5, player: "Brock Purdy", season: "2023", team: "49ers", mvpFinish: "4th", anyaPlus: 146, cmpPlus: 124, tdPlus: 137, intPlus: 96, ratePlus: 142 },
  { rank: 37, score: 321.5, player: "Steve Young", season: "1998", team: "49ers", mvpFinish: "2nd", anyaPlus: 125, cmpPlus: 123, tdPlus: 130, intPlus: 112, ratePlus: 128 },
  { rank: 38, score: 321.0, player: "Roger Staubach", season: "1973", team: "Cowboys", mvpFinish: "3rd", anyaPlus: 121, cmpPlus: 133, tdPlus: 135, intPlus: 100, ratePlus: 133 },
  { rank: 39, score: 320.5, player: "Peyton Manning", season: "2000", team: "Colts", mvpFinish: "6th", anyaPlus: 127, cmpPlus: 118, tdPlus: 122, intPlus: 111, ratePlus: 123, ydsLeader: true, tdLeader: true, rushYdsLeader: false, rushTdLeader: false },
  { rank: 40, score: 320.0, player: "Jim Kelly", season: "1990", team: "Bills", mvpFinish: "5th", anyaPlus: 131, cmpPlus: 126, tdPlus: 134, intPlus: 114, ratePlus: 135 },
  { rank: 41, score: 320.0, player: "Steve Young", season: "1997", team: "49ers", mvpFinish: "2nd", anyaPlus: 128, cmpPlus: 142, tdPlus: 114, intPlus: 122, ratePlus: 134 },
  { rank: 42, score: 319.5, player: "Aaron Rodgers", season: "2014", team: "Packers", mvpFinish: "1st", anyaPlus: 135, cmpPlus: 113, tdPlus: 132, intPlus: 127, ratePlus: 132 },
  { rank: 43, score: 319.5, player: "Patrick Mahomes", season: "2022", team: "Chiefs", mvpFinish: "1st", anyaPlus: 129, cmpPlus: 112, tdPlus: 124, intPlus: 110, ratePlus: 124 },
  { rank: 44, score: 319.5, player: "Dak Prescott", season: "2023", team: "Cowboys", mvpFinish: "2nd", anyaPlus: 121, cmpPlus: 125, tdPlus: 126, intPlus: 118, ratePlus: 129 },
  { rank: 45, score: 319.0, player: "Tony Romo", season: "2014", team: "Cowboys", mvpFinish: "4th", anyaPlus: 128, cmpPlus: 130, tdPlus: 138, intPlus: 108, ratePlus: 134 },
  { rank: 46, score: 318.5, player: "Drew Brees", season: "2004", team: "Chargers", mvpFinish: "6th", anyaPlus: 129, cmpPlus: 120, tdPlus: 132, intPlus: 125, ratePlus: 131 },
  { rank: 47, score: 317.5, player: "Peyton Manning", season: "2006", team: "Colts", mvpFinish: "3rd", anyaPlus: 131, cmpPlus: 116, tdPlus: 118, intPlus: 124, ratePlus: 126 },
  { rank: 48, score: 317.5, player: "Rich Gannon", season: "2002", team: "Raiders", mvpFinish: "1st", anyaPlus: 126, cmpPlus: 130, tdPlus: 104, intPlus: 127, ratePlus: 128 },
  { rank: 49, score: 317.0, player: "Jim Kelly", season: "1991", team: "Bills", mvpFinish: "2nd", anyaPlus: 123, cmpPlus: 126, tdPlus: 136, intPlus: 100, ratePlus: 129 },
  { rank: 50, score: 316.5, player: "Philip Rivers", season: "2008", team: "Chargers", mvpFinish: "3rd", anyaPlus: 128, cmpPlus: 114, tdPlus: 134, intPlus: 110, ratePlus: 127 },
  { rank: 51, score: 316.5, player: "Ken Anderson", season: "1975", team: "Bengals", mvpFinish: "5th", anyaPlus: 129, cmpPlus: 122, tdPlus: 113, intPlus: 122, ratePlus: 127 },
  { rank: 52, score: 316.0, player: "Fran Tarkenton", season: "1975", team: "Vikings", mvpFinish: "1st", anyaPlus: 118, cmpPlus: 133, tdPlus: 116, intPlus: 120, ratePlus: 125 },
  { rank: 53, score: 315.5, player: "Donovan McNabb", season: "2004", team: "Eagles", mvpFinish: "2nd", anyaPlus: 130, cmpPlus: 115, tdPlus: 130, intPlus: 125, ratePlus: 131 },
  { rank: 54, score: 315.0, player: "Peyton Manning", season: "2003", team: "Colts", mvpFinish: "1st", anyaPlus: 125, cmpPlus: 124, tdPlus: 113, intPlus: 124, ratePlus: 124 },
  { rank: 55, score: 314.5, player: "Brett Favre", season: "2009", team: "Vikings", mvpFinish: "2nd", anyaPlus: 123, cmpPlus: 125, tdPlus: 126, intPlus: 123, ratePlus: 129 },
  { rank: 56, score: 314.5, player: "Vinny Testaverde", season: "1998", team: "Jets", mvpFinish: "5th", anyaPlus: 129, cmpPlus: 120, tdPlus: 129, intPlus: 122, ratePlus: 129 },
  { rank: 57, score: 314.0, player: "Roger Staubach", season: "1979", team: "Cowboys", mvpFinish: "5th", anyaPlus: 133, cmpPlus: 111, tdPlus: 121, intPlus: 131, ratePlus: 132 },
  { rank: 58, score: 313.0, player: "Brett Favre", season: "2009", team: "Vikings", mvpFinish: "2nd", anyaPlus: 123, cmpPlus: 125, tdPlus: 126, intPlus: 123, ratePlus: 129, ydsLeader: false, tdLeader: false, rushYdsLeader: false, rushTdLeader: false },
  { rank: 59, score: 313.0, player: "Mark Rypien", season: "1991", team: "Washington", mvpFinish: "1st", anyaPlus: 141, cmpPlus: 108, tdPlus: 132, intPlus: 115, ratePlus: 130, ydsLeader: false, tdLeader: false, rushYdsLeader: false, rushTdLeader: false },
  { rank: 60, score: 312.0, player: "Terry Bradshaw", season: "1978", team: "Steelers", mvpFinish: "1st", anyaPlus: 127, cmpPlus: 111, tdPlus: 143, intPlus: 97, ratePlus: 126, ydsLeader: false, tdLeader: true, rushYdsLeader: false, rushTdLeader: false },
  { rank: 61, score: 312.0, player: "Fran Tarkenton", season: "1973", team: "Vikings", mvpFinish: "5th", anyaPlus: 122, cmpPlus: 130, tdPlus: 112, intPlus: 128, ratePlus: 132, ydsLeader: false, tdLeader: false, rushYdsLeader: false, rushTdLeader: false },
  { rank: 62, score: 312.0, player: "Peyton Manning", season: "2005", team: "Colts", mvpFinish: "2nd", anyaPlus: 130, cmpPlus: 125, tdPlus: 124, intPlus: 116, ratePlus: 129, ydsLeader: false, tdLeader: false, rushYdsLeader: false, rushTdLeader: false },
  { rank: 63, score: 311.0, player: "Aaron Rodgers", season: "2021", team: "Packers", mvpFinish: "1st", anyaPlus: 123, cmpPlus: 117, tdPlus: 124, intPlus: 130, ratePlus: 128, ydsLeader: false, tdLeader: false, rushYdsLeader: false, rushTdLeader: false }
];

// Create reference to allSeasons for the rest of the code
const allSeasons = sortedSeasons;

// Initialize filters
function initializeFilters() {
    const playerFilter = document.getElementById('playerFilter');
    const eraFilter = document.getElementById('eraFilter');
    const leaderFilter = document.getElementById('leaderFilter');

    // Populate player filter
    const players = ['All', ...new Set(allSeasons.map(s => s.player))].sort((a, b) => {
        if (a === 'All') return -1;
        if (b === 'All') return 1;
        return a.localeCompare(b);
    });
    players.forEach(player => {
        const option = document.createElement('option');
        option.value = player;
        option.textContent = player;
        playerFilter.appendChild(option);
    });

    // Populate era filter
    const eras = ['All', '2020s', '2010s', '2000s', '1990s', '1980s', '1970s'];
    eras.forEach(era => {
        const option = document.createElement('option');
        option.value = era;
        option.textContent = era;
        eraFilter.appendChild(option);
    });

    // Populate leader filter
    const leaderCategories = ['All', 'Pass Yards Leader', 'Pass TD Leader', 'Rush Yards Leader', 'Rush TD Leader'];
    leaderCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        leaderFilter.appendChild(option);
    });
}

// Filter seasons
function filterSeasons() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const playerFilter = document.getElementById('playerFilter').value;
    const eraFilter = document.getElementById('eraFilter').value;
    const leaderFilter = document.getElementById('leaderFilter').value;

    return allSeasons.filter(season => {
        const matchesSearch = season.player.toLowerCase().includes(searchTerm) ||
                            season.season.includes(searchTerm) ||
                            season.team.toLowerCase().includes(searchTerm);
        const matchesPlayer = playerFilter === 'All' || season.player === playerFilter;
        const seasonYear = parseInt(season.season);
        const matchesEra = eraFilter === 'All' ||
                          (eraFilter === '2020s' && seasonYear >= 2020) ||
                          (eraFilter === '2010s' && seasonYear >= 2010 && seasonYear < 2020) ||
                          (eraFilter === '2000s' && seasonYear >= 2000 && seasonYear < 2010) ||
                          (eraFilter === '1990s' && seasonYear >= 1990 && seasonYear < 2000) ||
                          (eraFilter === '1980s' && seasonYear >= 1980 && seasonYear < 1990) ||
                          (eraFilter === '1970s' && seasonYear >= 1970 && seasonYear < 1980);
        const matchesLeaderCategory = leaderFilter === 'All' ||
                                    (leaderFilter === 'Pass Yards Leader' && season.ydsLeader) ||
                                    (leaderFilter === 'Pass TD Leader' && season.tdLeader) ||
                                    (leaderFilter === 'Rush Yards Leader' && season.rushYdsLeader) ||
                                    (leaderFilter === 'Rush TD Leader' && season.rushTdLeader);
        return matchesSearch && matchesPlayer && matchesEra && matchesLeaderCategory;
    });
}

// Render table
function renderTable() {
    const filteredSeasons = filterSeasons();
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    filteredSeasons.forEach(season => {
        const tr = document.createElement('tr');
        tr.className = `mvp-${season.mvpFinish.replace(/[^a-z0-9]/gi, '')}`;
        tr.onclick = () => openModal(season);

        // Rank cell
        const rankTd = document.createElement('td');
        const rankDiv = document.createElement('div');
        rankDiv.className = 'rank-cell';
        
        if (season.rank <= 3) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('medal-icon');
            if (season.rank === 1) svg.classList.add('medal-gold');
            if (season.rank === 2) svg.classList.add('medal-silver');
            if (season.rank === 3) svg.classList.add('medal-bronze');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.setAttribute('fill', 'none');
            svg.setAttribute('stroke', 'currentColor');
            svg.setAttribute('stroke-width', '2');
            svg.innerHTML = '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>';
            rankDiv.appendChild(svg);
        } else if (season.rank <= 10) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('award-icon');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.setAttribute('fill', 'none');
            svg.setAttribute('stroke', 'currentColor');
            svg.setAttribute('stroke-width', '2');
            svg.innerHTML = '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>';
            rankDiv.appendChild(svg);
        }
        
        const rankSpan = document.createElement('span');
        rankSpan.textContent = `#${season.rank}`;
        rankDiv.appendChild(rankSpan);
        rankTd.appendChild(rankDiv);
        tr.appendChild(rankTd);

        // Score cell
        const scoreTd = document.createElement('td');
        scoreTd.innerHTML = `<span class="score">${season.score.toFixed(1)}</span>`;
        tr.appendChild(scoreTd);

        // Player cell
        const playerTd = document.createElement('td');
        playerTd.innerHTML = `<span class="player-name">${season.player}</span>`;
        tr.appendChild(playerTd);

        // Season cell
        const seasonTd = document.createElement('td');
        seasonTd.textContent = season.season;
        tr.appendChild(seasonTd);

        // Team cell
        const teamTd = document.createElement('td');
        teamTd.textContent = season.team;
        tr.appendChild(teamTd);

        // MVP cell
        const mvpTd = document.createElement('td');
        mvpTd.innerHTML = `<span class="mvp-finish-${season.mvpFinish.replace(/[^a-z0-9]/gi, '')}">${season.mvpFinish}</span>`;
        tr.appendChild(mvpTd);

        // Bonuses cell
        const bonusesTd = document.createElement('td');
        const bonusesDiv = document.createElement('div');
        bonusesDiv.className = 'bonuses';
        if (season.ydsLeader) bonusesDiv.innerHTML += '<span class="bonus-badge bonus-yds">YDS</span>';
        if (season.tdLeader) bonusesDiv.innerHTML += '<span class="bonus-badge bonus-td">TD</span>';
        if (season.rushYdsLeader) bonusesDiv.innerHTML += '<span class="bonus-badge bonus-rush-yds">R-YDS</span>';
        if (season.rushTdLeader) bonusesDiv.innerHTML += '<span class="bonus-badge bonus-rush-td">R-TD</span>';
        if (season.rushYds500Plus) bonusesDiv.innerHTML += '<span class="bonus-badge bonus-rush-500">500+</span>';
        bonusesTd.appendChild(bonusesDiv);
        tr.appendChild(bonusesTd);

        tbody.appendChild(tr);
    });
}

// Open modal
function openModal(season) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const statsGrid = document.getElementById('statsGrid');
    const seasonStats = document.getElementById('seasonStats');

    modalTitle.textContent = `${season.player} - ${season.season}`;
    modalSubtitle.textContent = `${season.team} | MVP: ${season.mvpFinish}`;

    // Stats grid
    statsGrid.innerHTML = `
        <div class="stat-card stat-card-anya">
            <p class="stat-card-title">Adjusted Net Yards/Attempt</p>
            <p class="stat-card-value">${season.anyaPlus}</p>
            <p class="stat-card-label">ANY/A+</p>
        </div>
        <div class="stat-card stat-card-cmp">
            <p class="stat-card-title">Completion Percentage</p>
            <p class="stat-card-value">${season.cmpPlus}</p>
            <p class="stat-card-label">Cmp%+</p>
        </div>
        <div class="stat-card stat-card-td">
            <p class="stat-card-title">Touchdown Percentage</p>
            <p class="stat-card-value">${season.tdPlus}</p>
            <p class="stat-card-label">TD%+</p>
        </div>
        <div class="stat-card stat-card-int">
            <p class="stat-card-title">Interception Percentage</p>
            <p class="stat-card-value">${season.intPlus}</p>
            <p class="stat-card-label">INT%+</p>
        </div>
        <div class="stat-card stat-card-rate">
            <p class="stat-card-title">Passer Rating</p>
            <p class="stat-card-value">${season.ratePlus}</p>
            <p class="stat-card-label">Rate+</p>
        </div>
       <div class="stat-card stat-card-bonus">
            <p class="stat-card-title">League Leader Bonuses</p>
            ${(season.ydsLeader || season.tdLeader || season.rushYdsLeader || season.rushTdLeader || season.rushYds500Plus) ? `
                <div class="bonus-badges-modal">
                    ${season.ydsLeader ? '<span class="bonus-badge-modal">YDS</span>' : ''}
                    ${season.tdLeader ? '<span class="bonus-badge-modal">TD</span>' : ''}
                    ${season.rushYdsLeader ? '<span class="bonus-badge-modal">R-YDS</span>' : ''}
                    ${season.rushTdLeader ? '<span class="bonus-badge-modal">R-TD</span>' : ''}
                    ${season.rushYds500Plus ? '<span class="bonus-badge-modal">500+</span>' : ''}
                </div>
                <p class="stat-card-value">+${((season.ydsLeader ? 10 : 0) + (season.tdLeader ? 10 : 0) + (season.rushYdsLeader ? 5 : 0) + (season.rushTdLeader ? 2.5 : 0) + (season.rushYds500Plus ? 2.5 : 0)).toFixed(1)}</p>
            ` : `
                <p class="stat-card-value">—</p>
            `}
            <p class="stat-card-label">Bonus Points</p>
        </div>
    `;

    // Season statistics with actual data
    const passYds = getPassingYards(season.player, season.season);
    const passTDs = getPassingTDs(season.player, season.season);
    const ints = getInterceptions(season.player, season.season);

    seasonStats.innerHTML = `
        <div class="season-stat ${season.ydsLeader ? 'season-stat-leader' : ''}">
            <p class="season-stat-label">Passing Yards</p>
            <p class="season-stat-value">${passYds}</p>
            <p class="season-stat-sublabel">YDS</p>
        </div>
        <div class="season-stat ${season.tdLeader ? 'season-stat-leader' : ''}">
            <p class="season-stat-label">Passing TDs</p>
            <p class="season-stat-value">${passTDs}</p>
            <p class="season-stat-sublabel">TD</p>
        </div>
        <div class="season-stat">
            <p class="season-stat-label">Interceptions</p>
            <p class="season-stat-value">${ints}</p>
            <p class="season-stat-sublabel">INT</p>
        </div>
    `;

    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Helper functions to get actual stats
function getPassingYards(player, season) {
    const statsMap = {
        "Peyton Manning-2004": "4,557",
        "Tom Brady-2007": "4,806",
        "Dan Marino-1984": "5,084",
        "Steve Young-1994": "3,969",
        "Peyton Manning-2013": "5,477",
        "Aaron Rodgers-2011": "4,643",
        "Joe Montana-1989": "3,521",
        "Aaron Rodgers-2020": "4,299",
        "Steve Young-1992": "3,465",
        "Lamar Jackson-2024": "4,172",
        "Drew Brees-2011": "5,476",
        "Joe Burrow-2024": "4,918"
        // Add more as needed
    };
    return statsMap[`${player}-${season}`] || "N/A";
}

function getPassingTDs(player, season) {
    const statsMap = {
        "Peyton Manning-2004": "49",
        "Tom Brady-2007": "50",
        "Dan Marino-1984": "48",
        "Steve Young-1994": "35",
        "Peyton Manning-2013": "55",
        "Aaron Rodgers-2011": "45",
        "Joe Montana-1989": "26",
        "Aaron Rodgers-2020": "48",
        "Steve Young-1992": "25",
        "Lamar Jackson-2024": "41",
        "Drew Brees-2011": "46",
        "Joe Burrow-2024": "43"
        // Add more as needed
    };
    return statsMap[`${player}-${season}`] || "N/A";
}

function getInterceptions(player, season) {
    const statsMap = {
        "Peyton Manning-2004": "10",
        "Tom Brady-2007": "8",
        "Dan Marino-1984": "17",
        "Steve Young-1994": "10",
        "Peyton Manning-2013": "10",
        "Aaron Rodgers-2011": "6",
        "Joe Montana-1989": "8",
        "Aaron Rodgers-2020": "5",
        "Steve Young-1992": "7",
        "Lamar Jackson-2024": "4",
        "Drew Brees-2011": "14",
        "Joe Burrow-2024": "9"
        // Add more as needed
    };
    return statsMap[`${player}-${season}`] || "N/A";
}

// Toggle formula display
function toggleFormula() {
    const formula = document.getElementById('formulaDetails');
    const button = document.getElementById('formulaButton');
    if (formula.style.display === 'none') {
        formula.style.display = 'block';
        button.textContent = 'Hide Formula Details';
    } else {
        formula.style.display = 'none';
        button.textContent = 'Show Formula Details';
    }
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', renderTable);
document.getElementById('playerFilter').addEventListener('change', renderTable);
document.getElementById('eraFilter').addEventListener('change', renderTable);
document.getElementById('leaderFilter').addEventListener('change', renderTable);
document.getElementById('formulaButton').addEventListener('click', toggleFormula);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('closeModalButton').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    renderTable();
});
