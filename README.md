# Portal Infinito — MVP de Aprovação Editorial

Este repositório agora contém a **estrutura técnica mínima executável** do MVP descrito na conversa original:

1. **Fila de aprovação**
2. **Tela de revisão / preview da publicação**

## Stack escolhida

Para garantir que o MVP rode mesmo em ambientes restritos, a primeira versão foi montada com:

- **HTML**
- **CSS**
- **JavaScript (ES Modules)**
- **Dados mockados locais**

## Estrutura do projeto

```text
.
├── app.js
├── index.html
├── styles.css
├── README.md
└── chat-Assistant-1773813315411.md
```

## Como rodar localmente

### Opção recomendada

```bash
python3 -m http.server 4173
```

Depois abra:

```text
http://localhost:4173
```

### Opção alternativa

Você também pode abrir `index.html` diretamente no navegador, mas o servidor local é a forma mais segura para desenvolvimento.

## O que já está implementado

- Dashboard com a fila de publicações prontas para revisão.
- Página de preview com conteúdo renderizado.
- Painel editorial com ações de decisão humana.
- Dados mockados para validação rápida da UX.

## Próximos passos recomendados

- Persistir publicações, status e feedback em banco de dados.
- Adicionar autenticação de revisores.
- Registrar trilha de auditoria.
- Migrar para framework (por exemplo React/Next) quando o fluxo estiver validado.
