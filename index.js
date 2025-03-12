(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const loadingScreen = document.getElementById("loading");
        const progressBar = document.getElementById("progress-bar");
        const conteudo = document.getElementById("content");
        const anoAtual = document.getElementById("anoAtual");

        // Função para obter o ano atual
        const getCurrentYear = () => new Date().getFullYear();

        // Atualiza o ano no rodapé
        if (anoAtual) {
            anoAtual.textContent = getCurrentYear();
        }

        // Simula carregamento progressivo
        let startTime = null;
        const durationInMilliseconds = 2000; // 2 segundos

        const updateProgress = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min((elapsed / durationInMilliseconds) * 100, 100);
            progressBar.value = progress;

            if (elapsed < durationInMilliseconds) {
                requestAnimationFrame(updateProgress);
            } else {
                loadingScreen.classList.add("hidden");
                conteudo.style.opacity = "1";
                document.body.style.overflow = "auto";
            }
        };

        const typingText = document.getElementById("typing-text");
        const text = "Carregando...";
        let index = 0;

        const typeEffect = () => {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        };

        typeEffect();

        requestAnimationFrame(updateProgress);
    });
})();