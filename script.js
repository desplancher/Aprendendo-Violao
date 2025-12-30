// --- DADOS DOS ACORDES ---

const majorChords = [
    { name: "C", fullName: "Dó Maior", positions: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
    { name: "D", fullName: "Ré Maior", positions: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2] },
    { name: "E", fullName: "Mi Maior", positions: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
    { name: "F", fullName: "Fá Maior", positions: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 1, min: 0, max: 5 } },
    { name: "G", fullName: "Sol Maior", positions: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3] },
    { name: "A", fullName: "Lá Maior", positions: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0] },
    { name: "B", fullName: "Si Maior", positions: [-1, 2, 4, 4, 4, 2], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 2, min: 1, max: 5 } }
];

const minorChords = [
    { name: "Cm", fullName: "Dó Menor", positions: [-1, 3, 5, 5, 4, 3], fingers: [0, 1, 3, 4, 2, 1], barre: { fret: 3, min: 1, max: 5 } },
    { name: "Dm", fullName: "Ré Menor", positions: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
    { name: "Em", fullName: "Mi Menor", positions: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
    { name: "Fm", fullName: "Fá Menor", positions: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 1, min: 0, max: 5 } },
    { name: "Gm", fullName: "Sol Menor", positions: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 3, min: 0, max: 5 } },
    { name: "Am", fullName: "Lá Menor", positions: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
    { name: "Bm", fullName: "Si Menor", positions: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1], barre: { fret: 2, min: 1, max: 5 } }
];

const sharpChords = [
    { name: "C#", fullName: "Dó Sustenido", positions: [-1, 4, 6, 6, 6, 4], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 4, min: 1, max: 5 } },
    { name: "D#", fullName: "Ré Sustenido", positions: [-1, 6, 8, 8, 8, 6], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 6, min: 1, max: 5 } },
    { name: "F#", fullName: "Fá Sustenido", positions: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 2, min: 0, max: 5 } },
    { name: "G#", fullName: "Sol Sustenido", positions: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, min: 0, max: 5 } },
    { name: "A#", fullName: "Lá Sustenido", positions: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 1, min: 1, max: 5 } }
];

const flatChords = [
    { name: "Db", fullName: "Ré Bemol", positions: [-1, 4, 6, 6, 6, 4], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 4, min: 1, max: 5 } },
    { name: "Eb", fullName: "Mi Bemol", positions: [-1, 6, 8, 8, 8, 6], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 6, min: 1, max: 5 } },
    { name: "Gb", fullName: "Sol Bemol", positions: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 2, min: 0, max: 5 } },
    { name: "Ab", fullName: "Lá Bemol", positions: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, min: 0, max: 5 } },
    { name: "Bb", fullName: "Si Bemol", positions: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 1, min: 1, max: 5 } }
];

// Combinação de todos para o modo "Misturado"
const allChords = [...majorChords, ...minorChords, ...sharpChords, ...flatChords];

// Mapa para facilitar o acesso
const chordCollections = {
    major: majorChords,
    minor: minorChords,
    sharp: sharpChords,
    flat: flatChords,
    all: allChords
};

const app = document.getElementById('app');
let score = 0;
let currentQuizList = [];
let isQuizActive = false;

// --- NAVEGAÇÃO ---
function loadChords(type) {
    app.innerHTML = '';

    // Atualiza visual dos botões do topo
    document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${type}`).classList.add('active');

    if (type === 'quiz') {
        showQuizMenu(); // Mostra o menu de categorias
    } else {
        isQuizActive = false;
        const list = chordCollections[type];
        if (list) {
            list.forEach(c => app.appendChild(createChordCard(c)));
        }
    }
}

// --- MENU DO QUIZ ---
function showQuizMenu() {
    isQuizActive = false;
    app.innerHTML = `
        <div class="quiz-menu">
            <h3>Escolha o que quer treinar:</h3>
            <button class="btn-menu" onclick="startQuiz('major')">Apenas Maiores</button>
            <button class="btn-menu" onclick="startQuiz('minor')">Apenas Menores</button>
            <button class="btn-menu" onclick="startQuiz('sharp')">Apenas Sustenidos (#)</button>
            <button class="btn-menu" onclick="startQuiz('flat')">Apenas Bemóis (b)</button>
            <button class="btn-menu" onclick="startQuiz('all')"><strong>Tudo Misturado</strong></button>
        </div>
    `;
}

// --- INICIAR QUIZ ---
function startQuiz(category) {
    isQuizActive = true;
    currentQuizList = chordCollections[category];
    score = 0;
    nextQuestion();
}

function nextQuestion() {
    if (!isQuizActive) return;
    app.innerHTML = '';

    // 1. Sorteia o Acorde Alvo
    const targetIndex = Math.floor(Math.random() * currentQuizList.length);
    const targetChord = currentQuizList[targetIndex];

    // 2. Sorteia 3 opções erradas
    const options = [targetChord];
    while (options.length < 4) {
        const sourceList = currentQuizList.length < 4 ? allChords : currentQuizList;
        const randomChord = sourceList[Math.floor(Math.random() * sourceList.length)];

        if (!options.some(opt => opt.name === randomChord.name)) {
            options.push(randomChord);
        }
    }
    options.sort(() => Math.random() - 0.5);

    // 3. Cabeçalho
    const header = document.createElement('div');
    header.className = 'quiz-container';
    header.innerHTML = `
        <div class="quiz-score">Pontos: <span>${score}</span></div>
        <div class="quiz-question">Qual é o nome deste acorde?</div>
    `;

    // 4. Área de Jogo
    const gameArea = document.createElement('div');
    gameArea.className = 'quiz-game-area';

    // A CARTA PERGUNTA (Oculta detalhes inicialmente)
    const questionCard = createChordCard(targetChord, true);
    questionCard.classList.add('question-card'); // Classe que esconde o nome
    gameArea.appendChild(questionCard);

    // BOTÕES DE RESPOSTA
    const optionsGrid = document.createElement('div');
    optionsGrid.className = 'quiz-options-grid';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerText = opt.name;
        btn.onclick = () => checkAnswer(opt, targetChord, btn, optionsGrid);
        optionsGrid.appendChild(btn);
    });

    gameArea.appendChild(optionsGrid);

    // Feedback Container
    const feedback = document.createElement('div');
    feedback.id = 'feedback';
    feedback.className = 'feedback-msg';
    gameArea.appendChild(feedback);

    app.appendChild(header);
    app.appendChild(gameArea);
}

function checkAnswer(selected, target, btnElement, gridElement) {
    // Trava cliques nos botões
    const allBtns = gridElement.querySelectorAll('button');
    allBtns.forEach(b => b.onclick = null);

    const feedback = document.getElementById('feedback');

    if (selected.name === target.name) {
        // --- ACERTOU ---
        score++;
        btnElement.classList.add('correct');
        feedback.innerText = `Correto! É o ${target.name} (${target.fullName})`;
        feedback.style.color = "var(--success)";

        setTimeout(nextQuestion, 1500); // Dá tempo de ler o nome antes de trocar
    } else {
        // --- ERROU ---
        btnElement.classList.add('wrong');
        feedback.innerText = `Errado! Era o ${target.name} (${target.fullName})`;
        feedback.style.color = "var(--error)";

        // Mostra qual era o certo nos botões
        allBtns.forEach(b => {
            if (b.innerText === target.name) b.classList.add('correct');
        });
        setTimeout(nextQuestion, 2500);
    }
}

// --- DESENHO DA CARTA ---
function createChordCard(chord, hideFullName = false) {
    const card = document.createElement('div');
    card.className = 'card';
    if (hideFullName) card.classList.add('hide-name');

    const title = document.createElement('div');
    title.className = 'chord-name';
    title.innerText = chord.name;

    const board = document.createElement('div');
    board.className = 'fretboard';

    const activeFrets = chord.positions.filter(p => p > 0);
    const maxFret = Math.max(...activeFrets);
    const minFret = Math.min(...activeFrets);
    let startFret = 1;

    if (maxFret > 5) {
        startFret = minFret;
        board.classList.add('shifted');
        const number = document.createElement('div');
        number.className = 'fret-number';
        number.innerText = `${startFret}ª`;
        board.appendChild(number);
    }

    const getVisualPos = (realFret) => {
        if (realFret <= 0) return realFret;
        return realFret - startFret + 1;
    };

    if (chord.barre) {
        const barre = document.createElement('div');
        barre.className = 'barre';
        barre.innerText = chord.fingers[chord.barre.min];
        const width = (chord.barre.max - chord.barre.min) * 20 + 20;
        const left = (chord.barre.min * 20);
        const visualFret = getVisualPos(chord.barre.fret);
        const top = (visualFret * 28) - 14;
        barre.style.width = `${width}px`;
        barre.style.left = `${left}px`;
        barre.style.top = `${top}px`;
        board.appendChild(barre);
    }

    let rootIndex = -1;
    for (let i = 0; i < 6; i++) { if (chord.positions[i] !== -1) { rootIndex = i; break; } }

    for (let i = 0; i < 6; i++) {
        const string = document.createElement('div');
        string.className = 'string';
        string.style.left = `${(i * 20) + 10}px`;
        board.appendChild(string);

        const realPos = chord.positions[i];
        const visualPos = getVisualPos(realPos);
        const finger = chord.fingers[i];

        const m = document.createElement('div');
        m.className = 'marker';
        m.style.left = `${(i * 20) + 10}px`;
        if (realPos === -1) {
            m.innerText = 'x'; m.classList.add('muted');
        } else {
            if (i === rootIndex) m.classList.add('root'); else m.classList.add('played');
        }
        board.appendChild(m);

        const isHiddenUnderBarre = chord.barre && i >= chord.barre.min && i <= chord.barre.max && realPos === chord.barre.fret;
        if (realPos > 0 && !isHiddenUnderBarre) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = `${(i * 20) + 10}px`;
            dot.style.top = `${(visualPos * 28) - 14}px`;
            dot.innerText = finger;
            board.appendChild(dot);
        }
    }

    for (let i = 1; i <= 5; i++) {
        const fret = document.createElement('div');
        fret.className = 'fret';
        fret.style.top = `${i * 28}px`;
        board.appendChild(fret);
    }

    const sub = document.createElement('div');
    sub.className = 'controls';
    sub.innerText = chord.fullName;

    card.appendChild(title);
    card.appendChild(board);
    card.appendChild(sub);
    return card;
}

loadChords('major');