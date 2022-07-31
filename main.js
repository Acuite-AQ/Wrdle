// Morceau de code afin d'intégrer la date dans l'élément H1 de la page Web
date = new Date().toLocaleString();
const datehtml = document.getElementById('date');
datehtml.innerHTML= date;

/**
 * Fonction pour démarrer la création des cases/box où apparaissent les lettres
 * @param {*} container 
 * @param {int} row 
 * @param {int} col 
 * @param {string} letter 
 * @returns Une nouvelle box
 */
function drawBox(container, row, col, letter='') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;
    
    container.appendChild(box);
    return box;
}

/**
 * Fonction pour dessiner la Grille/grid qui servira de plateau de jeu/board pour la partie
 * Utilisation d'une boucle avec i = lignes et j = colonnes
 * @param {*} container 
 */
function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            drawBox(grid, i, j); 
        }
    }

    container.appendChild(grid);
}

/**
 * Fonction qui démarre la partie (non-terminée à l'heure actuelle)
 */
function start() {
    const game = document.getElementById('game');
    drawGrid(game);
}

start();