<h1>ORM com Node.js: Avançando nas Funcionalidades do Sequelize</h1>

<h2>Descrição do Projeto</h2>
<p>Este projeto utiliza o Sequelize como ORM para facilitar a interação com o banco de dados no Node.js, implementando funcionalidades como soft delete, validações, associações, operadores e transações.</p>

<h2>Funcionalidades</h2>
<ul>
    <li><strong>Soft Delete:</strong> Implementação de exclusão lógica.</li>
    <li><strong>Escopo de Modelo e Validações:</strong> Estruturação e validação dos modelos de dados.</li>
    <li><strong>Escopo de Associação:</strong> Configuração das relações entre os modelos.</li>
    <li><strong>Operadores e Agregadores:</strong> Uso de operadores de comparação para consultas e manipulação de dados.</li>
    <li><strong>Transações:</strong> Garantia da integridade das operações feitas em bancos de dados através do uso de transações.</li>
    <li><strong>Query Params:</strong> Utilização de parâmetros de consulta para trafegar dados em requisições.</li>
    <li><strong>Finders:</strong> Métodos finders do Sequelize, como <code>findAndCountAll</code>, e consultas SQL diretas.</li>
    <li><strong>Mixin:</strong> Continuação do trabalho com métodos “mixin” gerados a partir das associações entre modelos.</li>
    <li><strong>Escopos de Associação:</strong> Criação de escopos de associação padrão e específicos.</li>
    <li><strong>Validações:</strong> Uso de métodos built-in de validação do Sequelize e refinamento com funções validadoras.</li>
    <li><strong>Organização do Código:</strong> Separação de responsabilidades utilizando helper functions e escopos para abstração de lógicas comuns.</li>
    <li><strong>Migrações:</strong> Criação de novas migrações para fazer alterações específicas em tabelas.</li>
</ul>

<h2>Estrutura do Projeto</h2>
<pre>
API Rest - Sequelize - Express
│   ├── src
│      ├── app.js
│      ├── controllers
│      │   ├── CategoriaController.js
│      │   ├── Controller.js
│      │   ├── CursoController.js
│      │   ├── MatriculaController.js
│      │   └── PessoaController.js
│      ├── database
│      │   ├── config
│      │   ├── migrations
│      │   ├── models
│      │   ├── seeders
│      │   └── storage
│      ├── routes
│      │   ├── categoriasRoutes.js
│      │   ├── cursosRoutes.js
│      │   └── pessoasRoutes.js
│      ├── services
│      │   ├── CategoriaServices.js
│      │   ├── CursoServices.js
│      │   ├── MatriculaServices.js
│      │   └── PessoaServices.js
│      └── utils
│          ├── conversorDeStringHelper.js
│          └── validaCPFHelper.js
├── .sequelizerc
├── package-lock.json
├── package-lock
├── README.MD
└── server.js
</pre>

<h2>Como Executar o Projeto</h2>
<ol>
    <li>Clone este repositório: <code>git clone <URL_DO_REPOSITORIO></code></li>
    <li>Instale as dependências: <code>npm install</code></li>
    <li>Configure o banco de dados no arquivo de configuração.</li>
    <li>Execute as migrações: <code>npx sequelize-cli db:migrate</code> ou utilize SQL puro para inserção/modificação dos dados.</li>
    <li>Inicie o servidor: <code>npm start</code></li>
    <li>Acesse a aplicação em <code>http://localhost:3000</code> (ou a porta configurada) para testar.</li>
</ol>

<h2>Configurações Adicionais</h2>
<ul>
    <li>É necessário ter o <strong>SQL Tools</strong> instalado.</li>
    <li>Para ativar o SQLite, pressione <code>Ctrl + Shift + P</code> e selecione <strong>SQLite: Open Database</strong>.</li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>Sequelize</li>
    <li>SQLite</li>
</ul>
