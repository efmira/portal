const publications = [
  {
    id: 'PUB-001',
    title: 'Tesla reduz preço do Model Y e reacende disputa no mercado de elétricos',
    subtitle:
      'Ajuste de preço pressiona concorrentes e pode acelerar novas rodadas promocionais no segmento.',
    vertical: 'automoveis',
    mainSource: 'Reuters',
    enteredQueueAt: '2026-03-19 08:30 UTC',
    generatedAt: '2026-03-19 08:12 UTC',
    reviewerStatus: 'atenção',
    confidenceScore: 84,
    priority: 'alta',
    status: 'pronto_para_aprovacao',
    seoTitle: 'Tesla corta preço do Model Y e aumenta pressão no setor de elétricos',
    slug: 'tesla-reduz-preco-model-y',
    keyPoints: [
      'Corte de preço afeta a leitura de demanda e margens da Tesla.',
      'Montadoras rivais podem responder com incentivos agressivos.',
      'A mudança reforça o caráter competitivo do mercado de veículos elétricos.',
    ],
    content: [
      'A Tesla promoveu um novo ajuste de preço no Model Y, movimento que reposiciona o SUV em um intervalo mais competitivo e amplia a pressão sobre outras montadoras do setor elétrico.',
      'Para o leitor, o ponto central é entender que reduções sucessivas de preço não significam apenas promoção. Elas também sinalizam disputa por volume, capacidade industrial ociosa e necessidade de manter ritmo de entrega.',
      'No curto prazo, o tema tende a repercutir em estratégia comercial, percepção de demanda e acompanhamento de margens no setor.',
    ],
    references: ['Reuters', 'comunicado da Tesla', 'relatórios de mercado automotivo'],
    recommendedAction: 'solicitar ajustes',
    categories: ['conteúdo incompleto', 'risco editorial'],
  },
  {
    id: 'PUB-002',
    title: 'Bitcoin opera acima de US$ 90 mil após nova onda de entrada em ETFs',
    subtitle:
      'Fluxo institucional volta ao radar e sustenta leitura positiva para o curto prazo.',
    vertical: 'financas',
    mainSource: 'Bloomberg',
    enteredQueueAt: '2026-03-19 07:45 UTC',
    generatedAt: '2026-03-19 07:10 UTC',
    reviewerStatus: 'baixo risco',
    confidenceScore: 92,
    priority: 'alta',
    status: 'pronto_para_aprovacao',
    seoTitle: 'Bitcoin supera US$ 90 mil com apoio de ETFs e fluxo institucional',
    slug: 'bitcoin-acima-90-mil-etfs',
    keyPoints: [
      'A leitura de fluxo institucional voltou a ganhar força.',
      'ETFs reforçam legitimidade e liquidez para investidores tradicionais.',
      'Volatilidade segue alta apesar do viés positivo.',
    ],
    content: [
      'O bitcoin voltou a negociar acima de US$ 90 mil em meio à retomada de entradas líquidas em ETFs de cripto, movimento que reforça o apetite institucional por exposição ao ativo.',
      'A cobertura precisa equilibrar entusiasmo de preço com contexto de risco. Mesmo com a narrativa favorável, o mercado segue sujeito a correções bruscas e sensível a condições macroeconômicas.',
      'Para o MVP editorial, a página deve deixar claro o que é fato observado, o que é contexto e o que representa apenas inferência de mercado.',
    ],
    references: ['Bloomberg', 'dados públicos de ETFs', 'fechamento de mercado'],
    recommendedAction: 'aprovar',
    categories: ['seo ruim'],
  },
  {
    id: 'PUB-003',
    title: 'Apple prepara atualização de IA embarcada para ampliar recursos offline no iPhone',
    subtitle:
      'Estratégia busca melhorar experiência local e reduzir dependência de processamento remoto.',
    vertical: 'tecnologia',
    mainSource: 'The Information',
    enteredQueueAt: '2026-03-19 06:55 UTC',
    generatedAt: '2026-03-19 06:20 UTC',
    reviewerStatus: 'revisão crítica',
    confidenceScore: 71,
    priority: 'média',
    status: 'pronto_para_aprovacao',
    seoTitle: 'Apple deve ampliar IA offline no iPhone com nova atualização',
    slug: 'apple-ia-offline-iphone',
    keyPoints: [
      'Rumor precisa de rotulagem cuidadosa.',
      'Tema é relevante por privacidade, performance e custo de inferência.',
      'Sem confirmação oficial, o texto deve evitar tom categórico.',
    ],
    content: [
      'Relatos de bastidores indicam que a Apple estuda ampliar recursos de IA embarcada no iPhone, priorizando tarefas que possam rodar localmente.',
      'Como não há anúncio oficial, a versão editorial precisa marcar com clareza o grau de confirmação e a origem da informação.',
      'A oportunidade aqui é entregar contexto útil sem transformar rumor em fato consumado.',
    ],
    references: ['The Information', 'cobertura setorial', 'histórico recente da Apple'],
    recommendedAction: 'reprovar',
    categories: ['fonte insuficiente', 'erro factual'],
  },
];

const app = document.querySelector('#app');

const statusLabel = {
  draft: 'Draft',
  em_revisao_agente: 'Em revisão do agente',
  pronto_para_aprovacao: 'Pronto para aprovação',
  aprovado: 'Aprovado',
  reprovado: 'Reprovado',
  ajustes_solicitados: 'Ajustes solicitados',
  publicado: 'Publicado',
};

function getSelectedPublication() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  return publications.find((publication) => publication.id === id);
}

function renderDashboard() {
  const rows = publications
    .filter((publication) => publication.status === 'pronto_para_aprovacao')
    .map(
      (item) => `
        <tr>
          <td>${item.id}</td>
          <td>
            <strong>${item.title}</strong>
            <span>${item.enteredQueueAt}</span>
          </td>
          <td>${item.vertical}</td>
          <td>${item.mainSource}</td>
          <td><span class="pill priority-${item.priority}">${item.priority}</span></td>
          <td>${item.confidenceScore}</td>
          <td><span class="pill risk-${item.reviewerStatus.replace(/\s+/g, '-')}">${item.reviewerStatus}</span></td>
          <td><a class="button small" href="/?id=${item.id}">Revisar</a></td>
        </tr>
      `,
    )
    .join('');

  app.innerHTML = `
    <div class="page-shell">
      <header class="hero">
        <div>
          <p class="eyebrow">Passo 1 concluído</p>
          <h1>Estrutura técnica mínima do MVP editorial</h1>
          <p class="hero-copy">
            Base executável sem dependências, com fila, preview editorial e dados mockados para validar o fluxo.
          </p>
        </div>
        <div class="hero-panel">
          <div>
            <strong>${publications.length}</strong>
            <span>itens mockados para revisão</span>
          </div>
          <div>
            <strong>2</strong>
            <span>blocos do MVP</span>
          </div>
          <div>
            <strong>0</strong>
            <span>dependências externas para rodar</span>
          </div>
        </div>
      </header>

      <main class="layout-grid">
        <section class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Bloco 1</p>
              <h2>Fila de aprovação</h2>
            </div>
            <a class="button secondary" href="/?id=PUB-001">Abrir preview exemplo</a>
          </div>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Vertical</th>
                  <th>Fonte</th>
                  <th>Prioridade</th>
                  <th>Score</th>
                  <th>Status do agente</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </section>

        <section class="panel panel-secondary">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Bloco 2</p>
              <h2>Tela de revisão / preview</h2>
            </div>
          </div>

          <div class="checklist">
            <article>
              <h3>Escopo técnico mínimo</h3>
              <ul>
                <li>Aplicação estática em HTML, CSS e JavaScript.</li>
                <li>Lista de publicações prontas para aprovação.</li>
                <li>Preview editorial com conteúdo, referências e metadados.</li>
                <li>Painel final com Aprovar, Solicitar ajustes e Reprovar.</li>
              </ul>
            </article>
            <article>
              <h3>Próxima integração</h3>
              <ul>
                <li>Persistência de status e histórico em banco.</li>
                <li>Autenticação de revisores humanos.</li>
                <li>Auditoria de decisão com motivo e considerações.</li>
                <li>Conexão com o pipeline real de geração de conteúdo.</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderReview(publication) {
  const points = publication.keyPoints.map((point) => `<li>${point}</li>`).join('');
  const paragraphs = publication.content.map((paragraph) => `<p>${paragraph}</p>`).join('');
  const references = publication.references.map((reference) => `<li>${reference}</li>`).join('');
  const categories = publication.categories.map((category) => `<span class="tag">${category}</span>`).join('');

  app.innerHTML = `
    <div class="page-shell review-shell">
      <nav class="top-nav">
        <a class="button secondary" href="/">← Voltar para a fila</a>
        <span>${statusLabel[publication.status]}</span>
      </nav>

      <main class="review-layout">
        <article class="article-card">
          <p class="eyebrow">${publication.vertical} · ${publication.mainSource}</p>
          <h1>${publication.title}</h1>
          <p class="subtitle">${publication.subtitle}</p>

          <section>
            <h2>Pontos-chave</h2>
            <ul>${points}</ul>
          </section>

          ${paragraphs}

          <section>
            <h2>Referências rastreadas</h2>
            <ul>${references}</ul>
          </section>
        </article>

        <aside class="decision-card">
          <div>
            <p class="eyebrow">Painel editorial</p>
            <h2>Decisão humana final</h2>
          </div>

          <dl class="meta-grid">
            <div>
              <dt>ID</dt>
              <dd>${publication.id}</dd>
            </div>
            <div>
              <dt>Score</dt>
              <dd>${publication.confidenceScore}/100</dd>
            </div>
            <div>
              <dt>SEO title</dt>
              <dd>${publication.seoTitle}</dd>
            </div>
            <div>
              <dt>Slug</dt>
              <dd>${publication.slug}</dd>
            </div>
            <div>
              <dt>Gerado em</dt>
              <dd>${publication.generatedAt}</dd>
            </div>
            <div>
              <dt>Fonte principal</dt>
              <dd>${publication.mainSource}</dd>
            </div>
          </dl>

          <div>
            <h3>Recomendação do agente</h3>
            <p class="callout action-${publication.recommendedAction.replace(/\s+/g, '-')}">${publication.recommendedAction}</p>
          </div>

          <div>
            <h3>Motivos sugeridos</h3>
            <div class="tag-list">${categories}</div>
          </div>

          <form class="decision-form">
            <label>
              Motivo / feedback
              <textarea rows="6">Análise inicial para ${publication.id}: manter clareza factual, reforçar fontes e ajustar título se necessário.</textarea>
            </label>

            <label>
              Considerações para o time
              <textarea rows="5">Registrar a decisão final e devolver esse feedback para o pipeline editorial.</textarea>
            </label>

            <div class="actions">
              <button class="button success" type="button">Aprovar</button>
              <button class="button warning" type="button">Solicitar ajustes</button>
              <button class="button danger" type="button">Reprovar</button>
            </div>
          </form>
        </aside>
      </main>
    </div>
  `;
}

function render() {
  const selected = getSelectedPublication();
  if (selected) {
    renderReview(selected);
    return;
  }
  renderDashboard();
}

render();
