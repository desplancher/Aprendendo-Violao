// --- DADOS DOS ACORDES ---

// 1. Maiores (Mantenha igual)
const majorChords = [
    { name: "C", fullName: "Dó Maior", positions: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
    { name: "D", fullName: "Ré Maior", positions: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2] },
    { name: "E", fullName: "Mi Maior", positions: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
    { name: "F", fullName: "Fá Maior", positions: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 1, min: 0, max: 5 } },
    { name: "G", fullName: "Sol Maior", positions: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3] },
    { name: "A", fullName: "Lá Maior", positions: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0] },
    { name: "B", fullName: "Si Maior", positions: [-1, 2, 4, 4, 4, 2], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 2, min: 1, max: 5 } }
];

// 2. Menores (Mantenha igual)
const minorChords = [
    { name: "Cm", fullName: "Dó Menor", positions: [-1, 3, 5, 5, 4, 3], fingers: [0, 1, 3, 4, 2, 1], barre: { fret: 3, min: 1, max: 5 } },
    { name: "Dm", fullName: "Ré Menor", positions: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
    { name: "Em", fullName: "Mi Menor", positions: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
    { name: "Fm", fullName: "Fá Menor", positions: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 1, min: 0, max: 5 } },
    { name: "Gm", fullName: "Sol Menor", positions: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 3, min: 0, max: 5 } },
    { name: "Am", fullName: "Lá Menor", positions: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
    { name: "Bm", fullName: "Si Menor", positions: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1], barre: { fret: 2, min: 1, max: 5 } }
];

// 3. Sustenidos (Mantenha igual)
const sharpChords = [
    { name: "C#", fullName: "Dó Sustenido", positions: [-1, 4, 6, 6, 6, 4], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 4, min: 1, max: 5 } },
    { name: "D#", fullName: "Ré Sustenido", positions: [-1, 6, 8, 8, 8, 6], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 6, min: 1, max: 5 } },
    { name: "F#", fullName: "Fá Sustenido", positions: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 2, min: 0, max: 5 } },
    { name: "G#", fullName: "Sol Sustenido", positions: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, min: 0, max: 5 } },
    { name: "A#", fullName: "Lá Sustenido", positions: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1], barre: { fret: 1, min: 1, max: 5 } }
];

// 4. Bemois (NOVOS)
const flatChords = [
    {
        name: "Db", fullName: "Ré Bemol",
        // Mesmo desenho do C# (Pestana casa 4)
        positions: [-1, 4, 6, 6, 6, 4], fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 4, min: 1, max: 5 }
    },
    {
        name: "Eb", fullName: "Mi Bemol",
        // Mesmo desenho do D# (Pestana casa 6)
        positions: [-1, 6, 8, 8, 8, 6], fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 6, min: 1, max: 5 }
    },
    {
        name: "Gb", fullName: "Sol Bemol",
        // Mesmo desenho do F# (Pestana casa 2)
        positions: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 2, min: 0, max: 5 }
    },
    {
        name: "Ab", fullName: "Lá Bemol",
        // Mesmo desenho do G# (Pestana casa 4)
        positions: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1],
        barre: { fret: 4, min: 0, max: 5 }
    },
    {
        name: "Bb", fullName: "Si Bemol",
        // Mesmo desenho do A# (Pestana casa 1)
        positions: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1],
        barre: { fret: 1, min: 1, max: 5 }
    }
];

const app = document.getElementById('app');
const btnMajor = document.getElementById('btn-major');
const btnMinor = document.getElementById('btn-minor');
const btnSharp = document.getElementById('btn-sharp');
const btnFlat = document.getElementById('btn-flat'); // Novo botão

// --- FUNÇÃO DE CONTROLE DAS ABAS ---
function loadChords(type) {
    app.innerHTML = '';

    // Reseta todos os botões
    btnMajor.classList.remove('active');
    btnMinor.classList.remove('active');
    btnSharp.classList.remove('active');
    btnFlat.classList.remove('active');

    if (type === 'major') {
        btnMajor.classList.add('active');
        majorChords.forEach(c => createChordCard(c));
    } else if (type === 'minor') {
        btnMinor.classList.add('active');
        minorChords.forEach(c => createChordCard(c));
    } else if (type === 'sharp') {
        btnSharp.classList.add('active');
        sharpChords.forEach(c => createChordCard(c));
    } else if (type === 'flat') {
        btnFlat.classList.add('active');
        flatChords.forEach(c => createChordCard(c));
    }
}

// --- FUNÇÃO DE DESENHO (Mantida igual, com a lógica do número lateral) ---
function createChordCard(chord) {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('div');
    title.className = 'chord-name';
    title.innerText = chord.name;

    const board = document.createElement('div');
    board.className = 'fretboard';

    // 1. CALCULAR DESLOCAMENTO (SHIFT)
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

    // 2. DESENHAR A PESTANA
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

    // Identificar Tônica
    let rootIndex = -1;
    for (let i = 0; i < 6; i++) {
        if (chord.positions[i] !== -1) { rootIndex = i; break; }
    }

    // 3. GERAR CORDAS E BOLINHAS
    for (let i = 0; i < 6; i++) {
        const string = document.createElement('div');
        string.className = 'string';
        string.style.left = `${(i * 20) + 10}px`;
        board.appendChild(string);

        const realPos = chord.positions[i];
        const visualPos = getVisualPos(realPos);
        const finger = chord.fingers[i];

        // Marcadores
        const m = document.createElement('div');
        m.className = 'marker';
        m.style.left = `${(i * 20) + 10}px`;

        if (realPos === -1) {
            m.innerText = 'x'; m.classList.add('muted');
        } else {
            if (i === rootIndex) m.classList.add('root');
            else m.classList.add('played');
        }
        board.appendChild(m);

        // Bolinhas
        const isHiddenUnderBarre = chord.barre &&
            i >= chord.barre.min &&
            i <= chord.barre.max &&
            realPos === chord.barre.fret;

        if (realPos > 0 && !isHiddenUnderBarre) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = `${(i * 20) + 10}px`;
            dot.style.top = `${(visualPos * 28) - 14}px`;
            dot.innerText = finger;
            board.appendChild(dot);
        }
    }

    // Trastes
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
    app.appendChild(card);
}

loadChords('major');