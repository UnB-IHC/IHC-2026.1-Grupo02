# Linhas Não Atendidas nos Checklists de Acessibilidade — Home Magalu

Com base na análise combinada do **Lighthouse (pontuação 90)** e do **Accessibility Analyzer (relatório do Excel/OCR)**, esta página apresenta as diretrizes de acessibilidade que **NÃO devem ser marcadas como concluídas** (cumpridas) para a página inicial da Magazine Luiza.

Abaixo está o mapeamento detalhado de cada item falho por arquivo de checklist, com indicação do número da linha, identificador (`data-id`), texto do checklist e a justificativa técnica com base nas ferramentas.

---

## 1. Checklist: `Desenvolvimento Web.md`

Este checklist contém a maior quantidade de falhas estruturais e técnicas identificadas.

| Linha | ID (`data-id`) | Diretriz no Checklist | Justificativa da Falha (Evidências das Extensões) |
| :---: | :--- | :--- | :--- |
| **7** | `dev-imagem-1` | Imagens informativas, gráficos, mapas e botões-imagem possuem texto alternativo descritivo. [1] | No Lighthouse e Accessibility Analyzer, foi apontado que os botões com ícones de redes sociais (`Follow on Facebook`, etc.) e certos carrosséis não fornecem descrição textual apropriada de suas imagens e links associados. |
| **16** | `dev-video-1` | Vídeos possuem legendas sincronizadas para o conteúdo falado. [3] | O elemento `<video>` do banner de ofertas (`video.m-auto.rounded-md`) **não possui nenhum elemento `<track>`** com legendas (`kind="captions"`), violando a diretriz. |
| **19** | `dev-video-4` | Informações importantes do vídeo estão disponíveis para usuários que não podem vê-lo ou ouvi-lo. [2][3] | O `<video>` reproduzido na página inicial **não possui o atributo `controls`** nem alternativas textuais/audiodescrição para quem possui limitações auditivas ou visuais. |
| **24** | `dev-controles-1` | Links possuem destino válido e funcional. [4] | O Accessibility Analyzer acusou erro de `href attribute unavailable` para elementos `<a>` que agem como botão (`a data-testid="header-list-content-link" role="button"`), além de atributos `rel` inválidos em links de mídias sociais. |
| **27** | `dev-controles-4` | O texto dos links descreve claramente seu destino ou finalidade. [16] | Foram identificadas dezenas de ocorrências de **textos de link duplicados** para destinos diferentes (ex: links repetidos nos menus e rodapés) e links cujo texto é idêntico ao atributo `title`, gerando redundância confusa para leitores de tela. |
| **28** | `dev-controles-5` | Botões possuem texto ou descrição que identifica sua função. [4] | Reprovado no Lighthouse ("*Buttons do not have an accessible name*") e no Analyzer ("*Ensure that contextual text is provided to button element*"). Os botões de navegação do carrossel (`left-arrow`, `right-arrow`), indicadores de slides, botão de controle de áudio e fechar o menu lateral não possuem texto acessível. |
| **31** | `dev-controles-8` | Existe contraste adequado nos elementos interativos. [10] | O texto de links secundários e os badges/tags promocionais de produtos (`div.tag.font-2xsm-bold`) falharam no teste de contraste mínimo, possuindo taxa de contraste abaixo de 4.5:1. |
| **32** | `dev-controles-9` | Existe um atalho para acessar diretamente o conteúdo principal da página. [14] | Erro crítico apontado pelo Analyzer: o link de desvio para o conteúdo principal ("*Skip to Main Content*") **está ausente na página**. |
| **36** | `dev-formulario-1` | Cada campo possui um rótulo associado e claramente identificável. [25] | O campo de entrada de busca principal (`input#header-search-input`) **não possui nenhum elemento `<label>` associado** via atributo `for-id`. |
| **48** | `dev-semantica-1` | A página utiliza elementos HTML semânticos adequados (header, nav, main, footer, etc.). [4] | Reprovado no Lighthouse ("*Document does not have a main landmark*"). A página utiliza apenas as tags estruturais `header`, `section` e `footer`, **omitindo completamente o elemento semântico `<main>`**. |
| **52** | `dev-semantica-5` | Componentes e regiões da página possuem significado claro para tecnologias assistivas. [4] | Há múltiplos elementos `<nav>` e `<section>` na página que **não são diferenciados** através do atributo `aria-labelledby` ou `aria-label`. Além disso, os `<iframe>` incorporados não possuem atributo `title` descritivo. |
| **62** | `dev-texto-7` | O contraste entre texto e plano de fundo é adequado. [8] | Vários elementos de texto de tamanho pequeno (como as etiquetas promocionais verdes/laranjas em cima dos produtos) possuem taxa de contraste inferior a 4.5:1, dificultando a leitura por pessoas com baixa visão. |
| **66** | `dev-teclado-1` | Todas as funcionalidades podem ser utilizadas apenas com o teclado. [11] | Diversos elementos personalizados marcados com `role="button"` (como o botão de busca `span` e os links de departamento no menu lateral) **não possuem suporte ao acionamento via teclado** (falta de tratamento do evento de tecla espaço/spacebar). |
| **67** | `dev-teclado-2` | Componentes acionados por mouse também podem ser utilizados por teclado. [11] | Mesma falha técnica do item anterior: elementos interativos que simulam botões utilizam apenas eventos de clique do mouse, impossibilitando a ativação por foco do teclado. |
| **71** | `dev-teclado-6` | O primeiro elemento interativo permite acessar diretamente o conteúdo principal. [14] | O link de desvio de blocos repetitivos (skip link) não é o primeiro a receber foco porque ele simplesmente não existe na interface. |
| **78** | `dev-titulo-2` | Os títulos seguem uma hierarquia lógica (h1, h2, h3...). [17] | Erro de hierarquia apontado pelas extensões: a página salta diretamente do título principal `h1` para elementos de cabeçalho `h3` (ex: nos títulos de showcases de produtos), **pulando o nível `h2`**. |
| **79** | `dev-titulo-3` | Não existem saltos desnecessários entre níveis de títulos. [17] | Mesma quebra de estrutura e hierarquia lógica de cabeçalhos (`h1` -> `h3`). |

---

## 2. Checklist: `Ferramentas de Acessibilidade.md`

Este checklist foca nas ferramentas de validação manual e por tecnologias assistivas.

| Linha | ID (`data-id`) | Diretriz no Checklist | Justificativa da Falha (Evidências das Extensões) |
| :---: | :--- | :--- | :--- |
| **58** | `fer-teclado-1` | Todas as funcionalidades principais podem ser acessadas usando apenas o teclado. | A ausência de suporte à tecla de espaço em elementos com `role="button"` (barra de busca, links interativos) impede a navegação e execução de tarefas importantes apenas via teclado. |
| **67** | `fer-leitores-1` | A página possui estrutura de cabeçalhos organizada e compreensível. | Os leitores de tela interpretam a estrutura de headings de forma confusa devido aos saltos de nível detectados (ausência de `h2`). |
| **68** | `fer-leitores-2` | Botões, links e campos de formulário possuem nomes claros para leitores de tela. | O leitor de tela anunciará apenas "botão" ou "link" genérico em controles cruciais da interface (carrosséis, close sidebar, controle de vídeo e mídias sociais) porque falta texto contextual acessível. |
| **69** | `fer-leitores-3` | Imagens informativas possuem texto alternativo adequado. | O Lighthouse acusou problemas de atributos `alt` redundantes ou não-descritivos em imagens do tipo `img.h-full.object-contain`. |

---

## 3. Checklist: `Heuristica de Nielsen.md`

As heurísticas de usabilidade de Nielsen também possuem falhas relacionadas diretamente à acessibilidade do usuário.

| Linha | ID (`data-id`) | Diretriz no Checklist | Justificativa da Falha (Evidências das Extensões) |
| :---: | :--- | :--- | :--- |
| **26** | `heu-mundo-3` | Ícones e símbolos possuem significado claro ou são acompanhados de texto. | Os botões formados apenas por ícones (carrossel de banners, controle de volume, fechar menu, etc.) não trazem textos associados explícitos, impedindo o entendimento imediato de sua utilidade. |
| **27** | `heu-mundo-4` | As informações aparecem em uma ordem lógica para a realização da tarefa. | A quebra da hierarquia de títulos prejudica a ordem conceitual do documento, tornando o fluxo menos previsível para usuários que dependem de atalhos e saltos de cabeçalhos. |
| **62** | `heu-reconhecimento-3` | Formulários possuem labels, exemplos ou instruções quando necessário. | O campo de pesquisa não possui rótulo (`label`) vinculado, violando o princípio de reconhecimento imediato para o usuário no preenchimento de campos de formulário. |

