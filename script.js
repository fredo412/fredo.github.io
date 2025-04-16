function repeatText() {
    // Récupère les valeurs des inputs
    const text = document.getElementById('text').value;
    const repeat = parseInt(document.getElementById('repeat').value);
    const output = document.getElementById('output');

    // Vérifie si les champs sont remplis
    if (!text || isNaN(repeat)) {
        output.textContent = "Veuillez remplir tous les champs !";
        return;
    }

    // Génère le texte répété
    let result = "";
    for (let i = 0; i < repeat; i++) {
        result += text + "\n"; // Ajoute un saut de ligne à chaque répétition
    }

    // Affiche le résultat
    output.textContent = result;
}