const timelineView = () => {
    let dadosCarregados = [];

    const getData = async function () {
        try {
            const response = await fetch('../data.json');
            const data = await response.json();
            dadosCarregados = data;
        } catch (error) {
            console.error('Erro ao carregar os dados.', error);
        }
    };

    const criarElementoComTexto = (tag, texto) => {
        const elemento = document.createElement(tag);
        elemento.textContent = texto;
        return elemento;
    };

    const criarListaEspecificacoes = (especificacoes) => {
        const ul = document.createElement('ul');
        ul.classList.add('era-specs');
        especificacoes.forEach((especificacao) => {
            for (const chave in especificacao) {
                if (especificacao.hasOwnProperty(chave)) {
                    const li = document.createElement('li');

                    const rawLabel = chave === 'preco' ? 'preço' : chave;
                    const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);

                    li.textContent = `${label}: ${especificacao[chave]}`;
                    ul.appendChild(li);
                }
            }
        });
        return ul;
    };

    const exibirDados = () => {
        const container = document.getElementById('timeline-container');

        dadosCarregados.forEach((item) => {
            const article = document.createElement('article');
            article.classList.add('era-card');

            const title = criarElementoComTexto('h2', item.title);
            const description = criarElementoComTexto('p', item.descricao);
            const ul = criarListaEspecificacoes(item.especificacoes);

            article.appendChild(title);
            article.appendChild(description);
            article.appendChild(ul);
            container.appendChild(article);
        });
    };

    const inicializar = async () => {
        await getData();
        exibirDados();
    }

    return {
        inicializar
    }
}

export default timelineView;