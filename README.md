# 🛠️ CP3 - Manipulação de DOM

## 🚀 Desafio de Desenvolvimento Web

Este projeto foi desenvolvido como parte do CP3 da disciplina de Desenvolvimento Web, ministrada pelo professor Caio Oliveira. O objetivo é criar uma página de cadastro de produtos utilizando manipulação de DOM e validações em JavaScript puro.

## 👨‍💻 Alunos

-   **Eduardo Duran Del Ciel** - RM: 562017
-   **Henrique Castro de Matos** - RM: 564560

## 📜 Descrição do Desafio

Criar uma página de cadastro de produtos que contenha:

-   📝 Um formulário com:

    -   **Nome do produto** (input texto)
    -   **Preço** (input numérico)
    -   **Categoria** (select com pelo menos 3 opções, sendo obrigatórias: _Tecnologia_ e _Alimentos_)
    -   **Botão de "Cadastrar Produto"**

-   📋 Uma área de exibição dos produtos cadastrados em formato de lista.

## 🔥 Funcionalidades Obrigatórias

-   ✅ **Validação dos campos:**

    -   Nenhum campo pode estar vazio.
    -   O preço deve ser maior que zero e formatado com **duas casas decimais**.
    -   Caso alguma validação falhe, uma mensagem de erro será exibida e o produto **não será cadastrado**.

-   ✅ **Manipulação de DOM no cadastro:**

    -   Produtos válidos são exibidos na lista com formatação, exemplo:

        ```
        Produto: Caneca • R$ 25,00 • Categoria: Cozinha
        ```

-   ✅ **Limpeza do formulário:**

    -   Após um cadastro bem-sucedido, todos os campos do formulário são automaticamente limpos.

-   ✅ **Destaque por categoria:**

    -   Se a categoria for **Tecnologia**, o produto aparece em **negrito**.
    -   Se for **Alimentos**, aparece com **fundo amarelo**.
    -   Outras categorias são exibidas normalmente.

## 🎯 Tecnologias Utilizadas

-   HTML5
-   CSS3
-   JavaScript (Manipulação de DOM)
