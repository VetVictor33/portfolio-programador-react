const projects = [
    {
        id: 1,
        imgSrc: "curriculo-web",
        title: "Currículo Web",
        description: "Primeiro projeto realizado para sedimentar os conhecimentos em HTML5 e CSS3, além de arriscar um pouco de JavaScript",
        link: "https://github.com/VetVictor33/curriculo-web",
        mobile: false,
        keywords: ["CSS", "HTML", "JavaScript"]
    },
    {
        id: 2,
        imgSrc: "portfolio-escritor",
        title: "Portfólio Escritor",
        description: "Utilizei HTML5, CSS3 e um pouco de JavaScript para apresentar alguns dos textos que produzi para um projeto pessoal relacionado à produção de crônicas e contos.",
        link: "https://github.com/VetVictor33/portfolio-escritor",
        mobile: false,
        keywords: ["CSS", "HTML", "JavaScript"]
    },
    {
        id: 3,
        imgSrc: "duolingo-clone",
        title: "Clone Duolingo",
        description: "Uma forma que encontrei de treinar como seria atender a uma demanda de um designer ao reproduzir a página do site de ensino de idiomas. Ainda não adicionei responsividade, porém planejo fazê-lo no futuro.",
        link: "https://github.com/VetVictor33/clone-duolingo",
        mobile: false,
        keywords: ["CSS", "HTML"]
    },
    {
        id: 4,
        imgSrc: "desafio-portfolio",
        title: "Portfólio",
        description: "Nesse projeto criei um portfólio fictício com base em um layout do figma como forma de avaliação de um curso. As tecnologias utilizadas foram CSS e HTML.",
        link: "https://github.com/VetVictor33/desafio-portfolio",
        mobile: false,
        keywords: ["CSS", "HTML"]
    },
    {
        id: 5,
        imgSrc: "form-signup",
        title: "Form de inscrição",
        description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento de um formulário de inscrição em vestibular. Foi utilizado HTML, CSS e JavaScript para validar os dados.",
        link: "https://github.com/VetVictor33/formulario-inscricao",
        mobile: false,
        keywords: ["CSS", "HTML", "JavaScript"]
    },
    {
        id: 6,
        imgSrc: "form",
        title: "Form de Login",
        description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento do Front End de login e sign in de um site fictício com base em um layout do figma. Foi utilizado HTML, CSS e JavaScript para validar os dados e adicionar comportamento ao site.",
        link: "https://github.com/VetVictor33/desafio-02",
        mobile: false,
        keywords: ["CSS", "HTML", "JavaScript"]
    },
    {
        id: 7,
        imgSrc: "tech-store",
        title: "Tech Store",
        description: "Loja de produtos eletrônicos feita baseada em um curso da Skillshare. As technologias utilizadas foram HTML, CSS e JavaScript. Lancei mão da criação de novos elementos da DOM por meio do script para dar comportamento ao site, permitindo selecionar itens específicos, relizar filtragem por preço, categoria, além de busca pelo nome do produto, tudo isso sem necessidade de trocar a página. Também brinquei um pouco com Local Storage de forma a salvar os item selecionados pelo usuário e colocá-los no carrinho de compras.",
        link: "https://github.com/VetVictor33/tech-store-skillshare",
        mobile: true,
        keywords: ["CSS", "HTML", "JavaScript"]
    },
    {
        id: 8,
        imgSrc: "gourmet-burger",
        title: "Gourmet Burger",
        description: "Site que apresenta uma franquia de restaurantes baseado num curso da Skillshare. Todo o projeto foi feito utilizando o framework Bootstrap para estilizar a páginas e adicionar comportamentamento. As características mais interessantes do projeto são a responsividade, a presença do carousel, de um menu dropdown e de um modal.",
        link: "https://github.com/VetVictor33/skillshare-gourmet-burger",
        mobile: true,
        keywords: ["CSS", "HTML", "Bootstrap"]
    },
    {
        id: 9,
        imgSrc: "music-app",
        title: "Music App",
        description: "Projeto que consome a API do iTunes para exibir 30 segundos de música. Esse foi meu primeiro consumo de API",
        link: "https://github.com/VetVictor33/skillshare-music-api",
        mobile: true,
        keywords: ["CSS", "HTML", "JavaScript", "API"]
    },
    {
        id: 10,
        imgSrc: "rick-morty",
        title: "Rick and Morty",
        description: "Projeto realizado durante a jornada fullstack da Samsung Ocean. Estoi foi meu primeiro contato com a biblioteca React.js e com o Express.js.",
        link: "https://github.com/VetVictor33/ocean-fullstack-express-react",
        mobile: false,
        keywords: ["CSS", "JavaScript", "Node", "Express", "React", "MongoDB"]
    },
    {
        id: 11,
        imgSrc: 'desafio-modulo3',
        title: 'Cubos Flix',
        description: 'Desafio realizado para o twrceiro módulo do curso de desenvolvimento fullstack da Cubos Academy no qual há o consumo de uma API de filmes. Os elementos HTML são criados dinamicamente, após a conexão com a API atravésdo Axios, e adicionados do document. Outro ponto interessante deste projeto são os recursos de estilo, é possível fazer a troca entre tema claro e escuro, além disso os cards dos filmes deslizam para a lateral conforme o usuário muda a exibição do carrossel.',
        link: "https://github.com/VetVictor33/desafio-modulo3",
        deploy: 'https://vetvictor33.github.io/desafio-modulo3/',
        mobile: false,
        keywords: ["CSS", "HTML", "JavaScript", "API"]
    },
    {
        id: 12,
        imgSrc: "lets-travel",
        title: "Let's Travel!",
        description: "Essa aplicação simula um site de reserva de hotéis ao redor do mundo. É possível criar um usuário e fazer reservas que ficarão salvos no banco de dados. Se o usuário for um admin, é possível cadastrar novos hotéis ou deletá-los, visualizar e deletar pedidos de usuários comuns. O backend foi criado utilizando o framework Express, diversos pacotes do node foram adicionados para implementar as funcionalidades do site, como o bcrypt para encryptar a senha dos usuários antes de salvar no banco de dados, que no caso foi o mongoDB, além do pacote express-validator para validação dos dados fornecidos pelo usuário.",
        link: "https://github.com/VetVictor33/skillshare-hotelpage-full-stack",
        mobile: true,
        keywords: ["CSS", "Pug", "JavaScript", "Node", "Express", "MongoDB", "Cloudinary"]
    },
    {
        id: 13,
        imgSrc: "portfolio-antigo",
        title: "Portfólio Vanilla JS",
        description: "Este portfólio, só que desenvolvido em Vanilla JavaScript, e por isso há muita repetição de código HTML, porém o site cumpre o propósito de maneira aceitável. Procurei implementar o conceito de mobile first no CSS, então o design foi iniciado com foco em dispositivos móveis. Utilizei a manipulação da DOM para adicionar itens dinamicamente tendo como referência um array de objetos que simula um JSON coletado de uma API ou backend",
        link: "https://github.com/VetVictor33/portfolio-programador",
        deploy: 'https://vetvictor33.github.io/portfolio-programador/',
        mobile: true,
        keywords: ["CSS", "HTML", "JavaScript"]
    },
    {
        id: 14,
        imgSrc: "matching-game",
        title: "Matching Game",
        description: "Joguinho feito utilizando React como exercício da Cubos Academy. Foi excelente para praticar useState()!",
        link: "https://github.com/VetVictor33/cubos-matching-game/blob/main/README.md",
        deploy: "https://matching-game-idng.onrender.com/",
        mobile: true,
        keywords: ["CSS", "JavaScript", "React"]

    },
    {
        id: 15,
        imgSrc: "api-rest-aulas",
        title: "API Rest - Aulas",
        description: "API criada como proposta de exercício na Cubos Academy. A aplicação manipula um banco de dados mockado que representa uma coleção de aulas e uma de professores. Apliquei o CRUD completo, utilizando os métodos POST, GET, PUT, PATCH e DELETE, além de validar os dados e devolver mensagens amigáveis. Mais detalhes e imagens no README do projeto no GitHub.",
        link: "https://github.com/VetVictor33/API---Rest",
        mobile: false,
        keywords: ["JavaScript", "Node", "Express"]

    }
]

export default projects;