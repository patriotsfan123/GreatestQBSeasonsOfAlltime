// DOM Elements
const searchInput = document.getElementById('searchInput');
const playerFilter = document.getElementById('playerFilter');
const eraFilter = document.getElementById('eraFilter');
const leaderFilter = document.getElementById('leaderFilter');
const formulaToggle = document.getElementById('formulaToggle');
const formulaDetails = document.getElementById('formulaDetails');
const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const statsGrid = document.getElementById('statsGrid');
const seasonStatsGrid = document.getElementById('seasonStatsGrid');

// Initialize
let selectedSeason = null;

// Sort and rank all seasons once at startup
const rankedSeasons = [...allSeasons].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    
    const aBonuses = (a.ydsLeader ? 1 : 0) + (a.tdLeader ? 1 : 0) + 
                    (a.rushYdsLeader ? 1 : 0) + (a.rushTdLeader ? 1 : 0);
    const bBonuses = (b.ydsLeader ? 1 : 0) + (b.tdLeader ? 1 : 0) + 
                    (b.rushYdsLeader ? 1 : 0) + (b.rushTdLeader ? 1 : 0);
    if (bBonuses !== aBonuses) return bBonuses - aBonuses;
    
    return a.player.localeCompare(b.player);
}).map((season, index) => ({
    ...season,
    actualRank: index + 1
}));

// Populate player filter
function populatePlayerFilter() {
    const players = ['All', ...new Set(rankedSeasons.map(s => s.player))].sort((a, b) => {
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
}

// Get medal/award icon HTML
function getMedalIcon(rank) {
    const svg = '<svg class="medal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">';
    if (rank === 1) {
        return svg + '<circle cx="12" cy="8" r="6"></circle><path d="m15.5 13.4 2.5 4.6-3-1-3 1 2.5-4.6"></path><path d="m8.5 13.4-2.5 4.6 3-1 3 1-2.5-4.6"></path></svg>';
    } else if (rank === 2) {
        return '<svg class="medal-icon medal-silver" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"></circle><path d="m15.5 13.4 2.5 4.6-3-1-3 1 2.5-4.6"></path><path d="m8.5 13.4-2.5 4.6 3-1 3 1-2.5-4.6"></path></svg>';
    } else if (rank === 3) {
        return '<svg class="medal-icon medal-bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"></circle><path d="m15.5 13.4 2.5 4.6-3-1-3 1 2.5-4.6"></path><path d="m8.5 13.4-2.5 4.6 3-1 3 1-2.5-4.6"></path></svg>';
    } else if (rank <= 10) {
        return '<svg class="award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>';
    }
    return '';
}

// Get row class based on MVP finish
function getRowClass(mvpFinish) {
    if (mvpFinish === '1st') return 'mvp-1st';
    if (mvpFinish === '2nd') return 'mvp-2nd';
    if (mvpFinish === '3rd' || mvpFinish.includes('~')) return 'mvp-3rd';
    return 'mvp-other';
}

// Get MVP text class
function getMvpTextClass(mvpFinish) {
    if (mvpFinish === '1st') return 'mvp-1st-text';
    if (mvpFinish === '2nd') return 'mvp-2nd-text';
    return 'mvp-3rd-text';
}

// Render bonuses
function renderBonuses(season) {
    let html = '';
    if (season.ydsLeader) html += '<span class="bonus-badge bonus-yds">YDS</span>';
    if (season.tdLeader) html += '<span class="bonus-badge bonus-td">TD</span>';
    if (season.rushYdsLeader) html += '<span class="bonus-badge bonus-rush-yds">R-YDS</span>';
    if (season.rushTdLeader) html += '<span class="bonus-badge bonus-rush-td">R-TD</span>';
    if (season.rushYds500Plus) html += '<span class="bonus-badge bonus-500">500+</span>';
    return html;
}

// Calculate bonus points
function calculateBonusPoints(season) {
    let total = 0;
    if (season.ydsLeader) total += 10;
    if (season.tdLeader) total += 10;
    if (season.rushYdsLeader) total += 5;
    if (season.rushTdLeader) total += 2.5;
    if (season.rushYds500Plus) total += 2.5;
    return total;
}

// Filter seasons
function filterSeasons() {
    const searchTerm = searchInput.value.toLowerCase();
    const playerValue = playerFilter.value;
    const eraValue = eraFilter.value;
    const leaderValue = leaderFilter.value;
    
    return rankedSeasons.filter(season => {
        // Search filter
        const matchesSearch = season.player.toLowerCase().includes(searchTerm) ||
                             season.season.includes(searchTerm) ||
                             season.team.toLowerCase().includes(searchTerm);
        
        // Player filter
        const matchesPlayer = playerValue === 'All' || season.player === playerValue;
        
        // Era filter
        const seasonYear = parseInt(season.season);
        const matchesEra = eraValue === 'All' ||
                          (eraValue === '2020s' && seasonYear >= 2020) ||
                          (eraValue === '2010s' && seasonYear >= 2010 && seasonYear < 2020) ||
                          (eraValue === '2000s' && seasonYear >= 2000 && seasonYear < 2010) ||
                          (eraValue === '1990s' && seasonYear >= 1990 && seasonYear < 2000) ||
                          (eraValue === '1980s' && seasonYear >= 1980 && seasonYear < 1990) ||
                          (eraValue === '1970s' && seasonYear >= 1970 && seasonYear < 1980);
        
        // Leader category filter
        const matchesLeaderCategory = leaderValue === 'All' ||
                                      (leaderValue === 'Pass Yards Leader' && season.ydsLeader) ||
                                      (leaderValue === 'Pass TD Leader' && season.tdLeader) ||
                                      (leaderValue === 'Rush Yards Leader' && season.rushYdsLeader) ||
                                      (leaderValue === 'Rush TD Leader' && season.rushTdLeader);
        
        return matchesSearch && matchesPlayer && matchesEra && matchesLeaderCategory;
    });
}

// Render table
function renderTable() {
    const filtered = filterSeasons();
    
    tableBody.innerHTML = '';
    
    filtered.forEach(season => {
        const row = document.createElement('tr');
        row.className = getRowClass(season.mvpFinish);
        row.onclick = () => openModal(season);
        
        row.innerHTML = `
            <td>
                <div class="rank-cell">
                    ${getMedalIcon(season.actualRank)}
                    <span class="rank-number">#${season.actualRank}</span>
                </div>
            </td>
            <td><span class="score-value">${season.score.toFixed(1)}</span></td>
            <td><span class="player-name">${season.player}</span></td>
            <td>${season.season}</td>
            <td>${season.team}</td>
            <td><span class="${getMvpTextClass(season.mvpFinish)}">${season.mvpFinish}</span></td>
            <td><div class="bonuses-cell">${renderBonuses(season)}</div></td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Open modal
function openModal(season) {
    selectedSeason = season;
    modalTitle.textContent = `${season.player} - ${season.season}`;
    modalSubtitle.textContent = `${season.team} | MVP: ${season.mvpFinish}`;
    
    // Render index stats
    statsGrid.innerHTML = `
        <div class="stat-card stat-card-anya">
            <p class="stat-label">Adjusted Net Yards/Attempt</p>
            <p class="stat-value">${season.anyaPlus}</p>
            <p class="stat-name">ANY/A+</p>
        </div>
        <div class="stat-card stat-card-cmp">
            <p class="stat-label">Completion Percentage</p>
            <p class="stat-value">${season.cmpPlus}</p>
            <p class="stat-name">Cmp%+</p>
        </div>
        <div class="stat-card stat-card-td">
            <p class="stat-label">Touchdown Percentage</p>
            <p class="stat-value">${season.tdPlus}</p>
            <p class="stat-name">TD%+</p>
        </div>
        <div class="stat-card stat-card-int">
            <p class="stat-label">Interception Percentage</p>
            <p class="stat-value">${season.intPlus}</p>
            <p class="stat-name">INT%+</p>
        </div>
        <div class="stat-card stat-card-rate">
            <p class="stat-label">Passer Rating</p>
            <p class="stat-value">${season.ratePlus}</p>
            <p class="stat-name">Rate+</p>
        </div>
        <div class="stat-card stat-card-bonus">
            <p class="stat-label">League Leader Bonuses</p>
            ${renderBonuses(season) ? `
                <div class="bonus-badges">${renderBonuses(season).replace(/bonus-badge/g, 'bonus-badge-modal')}</div>
                <p class="stat-value">+${calculateBonusPoints(season).toFixed(1)}</p>
            ` : `
                <p class="stat-value">—</p>
            `}
            <p class="stat-name">Bonus Points</p>
        </div>
    `;
    
    // Render season stats
    seasonStatsGrid.innerHTML = `
        <div class="season-stat-card ${season.ydsLeader ? 'leader' : ''}">
            <p class="season-stat-label">Passing Yards</p>
            <p class="season-stat-value">${season.passYds || 'N/A'}</p>
            <p class="season-stat-name">YDS</p>
        </div>
        <div class="season-stat-card ${season.tdLeader ? 'leader' : ''}">
            <p class="season-stat-label">Passing TDs</p>
            <p class="season-stat-value">${season.passTd || 'N/A'}</p>
            <p class="season-stat-name">TD</p>
        </div>
        <div class="season-stat-card">
            <p class="season-stat-label">Interceptions</p>
            <p class="season-stat-value">${season.passInt || 'N/A'}</p>
            <p class="season-stat-name">INT</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

// Close modal
function closeModal() {
    modal.classList.add('hidden');
    selectedSeason = null;
}

// Event Listeners
searchInput.addEventListener('input', renderTable);
playerFilter.addEventListener('change', renderTable);
eraFilter.addEventListener('change', renderTable);
leaderFilter.addEventListener('change', renderTable);

formulaToggle.addEventListener('click', () => {
    formulaDetails.classList.toggle('hidden');
    formulaToggle.textContent = formulaDetails.classList.contains('hidden') 
        ? 'Show Formula Details' 
        : 'Hide Formula Details';
});

modalClose.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Initialize
populatePlayerFilter();
renderTable();