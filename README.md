# Codexa

Site institucional com página de login/cadastro, desenvolvido em HTML, CSS e JavaScript puro.

## 📋 Sobre o projeto

O Codexa é um projeto front-end que simula a plataforma de uma empresa de tecnologia, contendo:

- **Login / Cadastro** (`index.html`) — tela de autenticação com alternância animada entre os formulários de entrar e criar conta.
- **Sobre** (`sobre.html`) — história, estatísticas e valores da empresa.
- **Serviços** (`servicos.html`) — cards com os serviços oferecidos.
- **Contato** (`contato.html`) — informações de contato e formulário de mensagem.

## ✨ Funcionalidades

- Alternância entre os formulários de **Entrar** e **Cadastrar** sem recarregar a página.
- Botão de mostrar/ocultar senha.
- Validação simples de formulários (nome, e-mail, senha e campos obrigatórios).
- Feedback visual de sucesso/erro ao enviar os formulários (demonstração, sem back-end).
- Layout responsivo para desktop e mobile.

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript** (vanilla)
- [Boxicons](https://boxicons.com/) — ícones
- [Google Fonts](https://fonts.google.com/) — fonte Poppins

## 📁 Estrutura do projeto

```
├── index.html          # Página de login/cadastro
├── sobre.html           # Página sobre a empresa
├── servicos.html        # Página de serviços
├── contato.html         # Página de contato
├── style/
│   └── style.css        # Estilos do projeto
├── js/
│   └── script.js        # Scripts (validação, menu, toggle de senha)
└── images/              # Ícones e imagens do site
```

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/codexa.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd codexa
   ```
3. Abra o arquivo `index.html` no navegador, ou utilize uma extensão como o **Live Server** (VS Code) para melhor experiência.

Não é necessário instalar dependências — o projeto é 100% estático.

## ⚠️ Observação

Os formulários são apenas para demonstração: não há back-end conectado, então nenhum dado é enviado ou salvo de fato.

## 📄 Licença

Este projeto está sob a licença especificada no arquivo `LICENSE`.
