# Redux Test

Esta aplicação tem como principal objetivo me ajudar a entender o funcionamento do Redux :D

Para tal, criei um dashboard que consome minha api de teste do Sequelize. Neste dashboard, é possível visualizar uma lista de alunos cadastrados, e criar, editar e excluir estes alunos.

## Páginas

A aplicação é constituída de 6 páginas:

- **Login:** A página inicial da aplicação, onde um usuário pode fazer login. Ao logar, seus dados são salvos no store do Redux, para que seus dados fiquem disponíveis em toda a aplicação.
- **Register:** A página de cadastro da aplicação, onde o usuário pode criar sua conta. A mesma página também serve para a edição de dados do usuário, caso ele já esteja logado (reutilizando o formulário).
- **StudentList:** É uma página que lista todos os alunos cadastrados, mostrando seu nome e sua foto. A partir dela, é possível excluir um aluno ou ir até a página de edição/criação do mesmo.
- **Student:** A página de criação de um novo aluno, e também a página de edição de um aluno cadastrado. Um simples formulário para enviar os dados à API. Se o aluno existir, sua foto será mostrada, e é possível ir até a página de edição de foto para alterá-la.
- **Pictures:** Esta página é responsável por atualizar a foto de perfil de um aluno. Nela, é ao realizar o upload de uma imagem, esta é automaticamente enviada à API e a foto de perfil é atualizada.
- **Not Found:** Uma simples página mostrada quando o usuário entra em uma URL inexistente.

## Outras Pastas

Uma breve explicação das outras seções da aplicação, dentro da pasta _src_:

- **Config:** Esta pasta contém arquivos de configuração da aplicação. Neste caso, há apenas um arquivo _colors_, que define as cores do tema usado.
- **Components:** Esta pasta contém os componentes funcionais reutilizáveis usados na aplicação.
- **Routes:** Aqui está o nosso arquivos de rotas e o componente que define rotas privadas.
- **Services:** Aqui estão os arquivos responsáveis por se comunicar com serviços externos, neste caso, as configurações do Axios.
- **Styles:** O arquivo global de estilos e os componentes estilizados ficam salvos aqui.

## Bibliotecas Utilizadas

- **Axios:** Biblioteca utilizada para realizar as requisições HTTP à API.
- **History:** Uma biblioteca que permite criar histórico de navegação fora de um roteador. Usado para integrar a navegação sem um hook ou componente React.
- **Lodash:** Biblioteca com diversas funções interessantes. Usada aqui somente pela função _get_.
- **React Icons:** Biblioteca com componentes React que reúne diversas bibliotecas de ícones conhecidas, como Feather Icons, Font Awesome, Material Icons e etc.
- **React Redux:** Biblioteca que disponibiliza hooks e outras ferramentas para integrar o Redux com o React.
- **React Router Dom:** Biblioteca para roteamento de páginas SPA com React.
- **React Toastify:** Biblioteca com componentes para lançar feedback visual de eventos para o usuário de uma aplicação.
- **Redux:** Biblioteca de gerenciamentos de estados globais, muito utilizada por aí.
- **Redux-persist:** Biblioteca que automatiza o gerenciamento de estados Redux através do localStorage.
- **Redux-saga:** Biblioteca para dar mais controle aos fluxos de estados do Redux, criando middlewares para interceptar eventos.
- **Styled Components:** Biblioteca que permite criar componentes estilizáveis, usando sintaxe de CSS e variáveis JavaScript.
