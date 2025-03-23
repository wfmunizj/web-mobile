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

    const exibirDados = () => {
        const container = document.getElementById('timeline-container');

        dadosCarregados.forEach((item) => {
            const article = document.createElement('article');
            article.classList.add('era-card');

            const title = document.createElement('h2');
            title.textContent = item.title;

            const description = document.createElement('p');
            description.textContent = item.descricao;


            const ul = document.createElement('ul');
            ul.classList.add('era-specs');
            item.especificacoes.forEach((especificacao) => {
                for (const chave in especificacao) {
                    if (especificacao.hasOwnProperty(chave)) {
                        const li = document.createElement('li');

                        const rawLabel = chave === 'preco' ? 'preço' : chave;
                        const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);

                        li.textContent = `${label}: ${especificacao[chave]}`;
                        ul.appendChild(li);
                    }
                }
            }
            );

            article.appendChild(title);
            article.appendChild(description);
            article.appendChild(ul);
            container.appendChild(article);
        });

        const title = document.createElement('h2');
        title.textContent
    }

    const inicializar = async () => {
        await getData();
        exibirDados();
    }

    return {
        inicializar
    }
}

export default timelineView;