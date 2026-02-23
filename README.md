# 📚 AluLivros - Sistema de Aluguel de Livros

O **AluLivros** é uma aplicação web interativa desenvolvida para gerenciar o aluguel de títulos literários de forma dinâmica. O projeto foi adaptado de um sistema original de games para um catálogo focado em obras da literatura, como *Mistborn* e *Devoradores de Estrelas*.

## 🎯 Propósito da Aplicação

O objetivo principal aprender  e treinar javascript, enquanto cria uma pag capaz de oferecer uma interface amigável onde o usuário possa visualizar a disponibilidade de livros e gerenciar o status de aluguel (alugar ou devolver) em tempo real, utilizando manipulação do DOM (Document Object Model) via JavaScript.

## 🛠️ Funcionalidades Principais

* **Gestão de Status Dinâmica**: O sistema identifica se um livro está disponível ou alugado, alterando visualmente o botão e a imagem de capa.
* **Feedback Visual Interativo**: Livros alugados recebem uma camada visual escura (overlay) na capa para facilitar a identificação.
* **Interface Moderna**: Layout construído com CSS Flexbox e fontes personalizadas para uma experiência imersiva.

## ⚙️ Explicação das Principais Funções

O núcleo da interatividade do projeto reside no arquivo `app.js`. Abaixo, detalho a lógica implementada:

### `alterarStatus(id)`

Esta é a função principal, acionada pelo clique nos botões "Alugar" ou "Devolver" no HTML.

1. **Captura de Elementos**: A função recebe o `id` do livro e localiza no documento os elementos correspondentes: a `div` do item, a imagem, o botão e o nome do título.
2. **Verificação de Estado**: Utiliza a propriedade `classList.contains` para verificar se o livro já possui a classe de alugado (`dashboard__item__img--rented`).
3. **Lógica de Devolução**:
* Se o livro estiver alugado, um `confirm()` solicita a confirmação do usuário exibindo o nome do livro.
* Caso confirmado, as classes de estilo de aluguel são removidas e o texto do botão volta para "Alugar".


4. **Lógica de Aluguel**:
* Se disponível, o sistema solicita confirmação para alugar.
* Após o "OK", a classe visual de alugado é adicionada e o botão muda para "Devolver".



## 🆕 Minhas Implementações e Melhorias

### 1. Transição Temática

Refatorei o projeto original (focado em games) para o nicho literário:

* Substituição de textos, títulos e alt-tokens para referências a livros.
* Ajuste de imagens para capas de livros em formatos PNG/JPG.

### 2. Confirmação de Segurança

Adicionei janelas de diálogo nativas para evitar ações acidentais:

* **`confirm()`**: Retorna um valor booleano, garantindo que a alteração de status só ocorra com a concordância do usuário.
* **`alert()`**: Exibe mensagens personalizadas de feedback caso o usuário cancele a operação (ex: "Continue Lendo" ou "Deseja alugar o livro ...").

### 3. Contagem de livros alugados no momento

Adicionei uma função `contagem()` que conta quantos livros estão alugados no momento: 

* Adicionado trecho no código que identifica ao iniciar se há um livro alugado no momento pela classe `'.dashboard__item__img--rented'`.

## 💻 Tecnologias Utilizadas

* **HTML5**: Estruturação semântica.
* **CSS3**: Estilização com variáveis, Flexbox e efeitos de estado.
* **JavaScript**: Lógica de controle de estados e manipulação dinâmica de classes.

---

### Como rodar o projeto

1. Clone este repositório.
2. Certifique-se de que a estrutura de pastas `img/`, `js/` e `css/` está preservada.
3. Abra o arquivo `index.html` em seu navegador de preferência.

---

**Dica:** Ficou ótimo! Precisa que eu adicione uma seção de "Créditos" ou "Licença" no final?
