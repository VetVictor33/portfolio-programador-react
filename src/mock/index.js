const unaProjectsMock = [
    {
        id: 1,
        imgSrc: "./src/assets/projects/curriculo-web.png",
        title: "Currículo Web",
        description: "Primeiro projeto realizado para sedimentar os conhecimentos em HTML5 e CSS3, além de arriscar um pouco de JavaScript",
        link: "https://github.com/VetVictor33/curriculo-web",
        mobile: false
    },
    {
        id: 2,
        imgSrc: "./src/assets/projects/portfolio-escritor.png",
        title: "Portfólio de Escritor",
        description: "Utilizei HTML5, CSS3 e um pouco de JavaScript para apresentar alguns dos textos que produzi para um projeto pessoal relacionado à produção de crônicas e contos.",
        link: "https://github.com/VetVictor33/portfolio-escritor",
        mobile: false
    },
    {
        id: 3,
        imgSrc: "./src/assets/projects/duolingo-clone.png",
        title: "Clone da home page do Duolingo",
        description: "Uma forma que encontrei de treinar como seria atender a uma demanda de um designer ao reproduzir a página do site de ensino de idiomas. Ainda não adicionei responsividade, porém planejo fazê-lo no futuro.",
        link: "https://github.com/VetVictor33/clone-duolingo",
        mobile: false
    },
    {
        id: 4,
        imgSrc: "./src/assets/projects/desafio-portfolio.png",
        title: "Portfólio",
        description: "Nesse projeto criei um portfólio fictício com base em um layout do figma como forma de avaliação de um curso. As tecnologias utilizadas foram CSS e HTML.",
        link: "https://github.com/VetVictor33/desafio-portfolio",
        mobile: false
    },
    {
        id: 5,
        imgSrc: "./src/assets/projects/form-signup.png",
        title: "Formulário de inscrição",
        description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento de um formulário de inscrição em vestibular. Foi utilizado HTML, CSS e JavaScript para validar os dados.",
        link: "https://github.com/VetVictor33/formulario-inscricao",
        mobile: false
    },
    {
        id: 6,
        imgSrc: "./src/assets/projects/form.png",
        title: "Formulário para Login",
        description: "Projeto passado como exercício de um curso no qual foi proposto o desenvolvimento do Front End de login e sign in de um site fictício com base em um layout do figma. Foi utilizado HTML, CSS e JavaScript para validar os dados e adicionar comportamento ao site.",
        link: "https://github.com/VetVictor33/desafio-02",
        mobile: false
    },
    {
        id: 7,
        imgSrc: "./src/assets/projects/tech-store.png",
        title: "Tech Store",
        description: "Loja de produtos eletrônicos feita baseada em um curso da Skillshare. As technologias utilizadas foram HTML, CSS e JavaScript. Lancei mão da criação de novos elementos da DOM por meio do script para dar comportamento ao site, permitindo selecionar itens específicos, relizar filtragem por preço, categoria, além de busca pelo nome do produto, tudo isso sem necessidade de trocar a página. Também brinquei um pouco com Local Storage de forma a salvar os item selecionados pelo usuário e colocá-los no carrinho de compras.",
        link: "https://github.com/VetVictor33/tech-store-skillshare",
        mobile: true
    },
    {
        id: 8,
        imgSrc: "./src/assets/projects/gourmet-burger.png",
        title: "Gourmet Burger",
        description: "Site que apresenta uma franquia de restaurantes baseado num curso da Skillshare. Todo o projeto foi feito utilizando o framework Bootstrap para estilizar a páginas e adicionar comportamentamento. As características mais interessantes do projeto são a responsividade, a presença do carousel, de um menu dropdown e de um modal.",
        link: "https://github.com/VetVictor33/skillshare-gourmet-burger",
        mobile: true
    },
    {
        id: 9,
        imgSrc: "./src/assets/projects/music-app.png",
        title: "Music App",
        description: "Projeto que consome a API do iTunes para exibir 30 segundos de música. Esse foi meu primeiro consumo de API",
        link: "https://github.com/VetVictor33/skillshare-music-api",
        mobile: true
    },
    {
        id: 10,
        imgSrc: "./src/assets/projects/rick-morty.png",
        title: "Rick and Morty",
        description: "Projeto realizado durante a jornada fullstack da Samsung Ocean. Estoi foi meu primeiro contato com a biblioteca React.js e com o Express.js.",
        link: "https://github.com/VetVictor33/ocean-fullstack-express-react",
        mobile: false
    },
    {
        id: 11,
        imgSrc: './src/assets/projects/desafio-modulo3.png',
        title: 'Cubos Flix',
        description: 'Desafio realizado para o curso de desenvolvimento fullstack da Cubos Academy no qual há o consumo de uma API de filmes.',
        link: "https://github.com/VetVictor33/desafio-modulo3",
        mobile: false
    },
    {
        id: 12,
        imgSrc: "./src/assets/projects/lets-travel.png",
        title: "Let's Travel!",
        description: "Essa aplicação simula um site de reserva de hotéis ao redor do mundo. É possível criar um usuário e fazer reservas que ficarão salvos no banco de dados. Se o usuário for um admin, é possível cadastrar novos hotéis ou deletá-los, visualizar e deletar pedidos de usuários comuns. O backend foi criado utilizando o framework Express, diversos pacotes do node foram adicionados para implementar as funcionalidades do site, como o bcrypt para encryptar a senha dos usuários antes de salvar no banco de dados, que no caso foi o mongoDB, além do pacote express-validator para validação dos dados fornecidos pelo usuário.",
        link: "https://github.com/VetVictor33/skillshare-hotelpage-full-stack",
        mobile: true
    },
    {
        id: 13,
        imgSrc: "./src/assets/projects/portfolio-antigo.png",
        title: "Portfólio Antigo",
        description: "Este portfólio desenvolvido em vanila js. Há muita repetição de código HTML, porém o site cumpre o propósito de maneira aceitável. Procurei implementar o conceito de mobile first, por isso iniciei o design focado em dispositivos móveis.",
        link: "https://github.com/VetVictor33/portfolio-programador",
        mobile: true
    }
]

const unaCompEduMock = [
    {
        id: 1,
        title: "Python para Data Science(Alura)",
        date: "2021",
        description: "Princípios de Dada Science e Python com uso de Anaconda e Júpiter. Introdução à análise de dados"
    },
    {
        id: 2,
        title: "Programação em Android básica pts1, 2 e 3(Alura)",
        date: "2021",
        description: "Princípios da programação mobile com uso de Kotlin e Android Studio"
    },
    {
        id: 3,
        title: "Java e Orientação a Objetos(Alura)",
        date: "2021",
        description: "Princípios da orientação a objetos e bases de Java com uso de Eclipse IDE"
    },
    {
        id: 4,
        title: "Iniciante em Programação(Alura)",
        date: "2021",
        description: "Princípios da lógica de programação, introdução a HTML, CSS e JavaScript"
    },
    {
        id: 5,
        title: "CS50’s Introduction to Computer Science (Harvard University)",
        date: 2022,
        description: "O curso CS50's Introduction to Computer Science da Harvard é uma introdução abrangente à ciência da computação. O curso cobre uma ampla gama de tópicos, incluindo programação em C, Python e JavaScript, estruturas de dados, algoritmos, desenvolvimento web e segurança cibernética."
    },
    {
        id: 6,
        title: "Prototipação no-code soluções digitais (Samsung Ocean)",
        date: 2023,
        description: "O curso ensina a criação de protótipos funcionais de soluções digitais sem programação, utilizando a ferramenta no-code Figma para criar interfaces de usuário e fluxos de navegação."
    },
    {
        id: 7,
        title: "Jornada FullStack (Samsung Ocean)",
        date: 2023,
        description: "Programa de capacitação que abrange 8 aulas, totalizando 24 horas de duração. Durante o programa, os participantes aprendem habilidades em tecnologias web, como HTML, CSS, JavaScript, Node.js com Express e React, além do uso do banco de dados MongoDB, preparando-os para atuar como desenvolvedores Fullstack."
    },
    {
        id: 8,
        title: 'Fullstack Web Development (SkillShare)',
        date: 2023,
        description: 'O curso Fullstack Web Development abrange quatro cursos que ensinam habilidades em tecnologias web, incluindo HTML, CSS, JavaScript, Node.js com Express, além do framework Bootstrap. O projeto final permite que os participantes apliquem suas habilidades em um contexto real e desenvolvam uma aplicação fullstack, com tecnologias como Express, Pug, MongoDB e Cloudinary. É uma ótima opção para quem busca aprender a desenvolver aplicações web completas, com ênfase em tecnologias modernas e populares como Node.js e Express.'
    },

]

export function getMobileSrc(id) {
    const project = projectsMock.find((project) => project.id == id);
    const src = project.imgSrc;
    let srcMobile = src.slice(0, -4);
    srcMobile += `-mobile.png`;
    return srcMobile
}

export const projectsMock = unaProjectsMock.reverse();
export const compEduMock = unaCompEduMock.reverse();