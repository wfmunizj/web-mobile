import loadingView from './loadingView.js';
import timelineView from './timeline.js';

document.addEventListener("DOMContentLoaded", () => {
    const anoAtual = document.getElementById("anoAtual");

    // Função para obter o ano atual
    const getCurrentYear = () => new Date().getFullYear();

    // Atualiza o ano no rodapé
    if (anoAtual) {
        anoAtual.textContent = getCurrentYear();
    }

    const loader = loadingView();
    loader.updateProgress(performance.now()); // Exemplo de uso
    loader.typeEffect(); // Exemplo de uso

    const timeline = timelineView();
    timeline.inicializar();
});
