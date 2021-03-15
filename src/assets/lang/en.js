const EN = {
  Sidebar: {
    logo: 'FG',
    index: [
      { text: 'Home', icon: 'home', id: 'home' },
      { text: 'About', icon: 'about', id: 'about' },
      { text: 'Skills', icon: 'services', id: 'skills' },
      { text: 'Proyects', icon: 'projects', id: 'projects' },
      { text: 'Contact', icon: 'contact', id: 'contact' },
    ],
    langTooltip: 'Change Language',
    themeTooltip: {
      dark: 'Too dark?',
      light: 'Too bright?',
    },
  },
  Main: {
    title: 'Flavio Gragnolati',
    hireBtnText: 'Hire Me!',
    type: [
      'Fullstack Developer, ',
      'also...Chemical Engineer...',
      'and Industrial Engineer as well',
    ],
  },
  About: {
    descriptionTitle: 'A little about me...',
    description:
      //I love clean code, learning new things, strong engineering culture,
      'Proactive and efficient full stack developer, really fast learner that can adapt easily to rapid change work environments and not afraid of working under pressure. Ready to work with multidisciplinary teams under objective driven methodologies. I love clean, scalable and DRY code.',
    aboutCards: [
      {
        title: 'Team work',
        icon: 'team',
        text:
          'A great deal of experience working in, and leading, multidisciplinary teams',
      },
      {
        title: 'Learning',
        icon: 'learn',
        text: 'Willing to learn new techonologies',
      },
      {
        title: 'Work experience',
        icon: 'work',
        text: 'Plenty of experience in several industries of different sectors',
      },
      {
        title: 'Communication',
        icon: 'communication',
        text: 'Fluid communicator in both english and spanish',
      },
      {
        title: 'Problem Solving',
        icon: 'problem',
        text: 'Strong Engineering culture and analytical problem solving',
      },
      {
        title: 'Compromise',
        icon: 'responsible',
        text: 'Responsible and fully committed to achieving the objectives',
      },
    ],
    stackTitle: 'My preferred solution stack',
    stackSubTitle: 'not afraid of learning new stuff',
    stackTooltip: {
      mongo: 'MongoDB',
      pg: 'PostgreSQL',
      js: 'JavaScript(ES6+)',
      py: 'Python 3+',
      ex: 'Express',
      dj: 'Django',
      react: 'React',
    },
    downloadCVBtn: 'Download CV',
    viewCVBtn: 'View CV',
  },
  MoreAbout: {
    moreBtn: 'More about me',
    lessBtn: 'Less about me',
    subtitle: 'My previous experience and qualifications',
    workTitle: 'Work Experience',
    educationTitle: 'Education',
    moreTooltip:
      'More information about my work experience and academic formation',
    education: [
      {
        school: 'HENRY Bootcamp',
        title: 'Fullstack Developer',
        icon: 'bootcamp',
        type: 'Bootcamp',
        date: ['10/2020', '02/2021'],
        description:
          '700+ hr Theoretical & Practical Bootcamp with focus in JavaScript ES+6, React, Redux, Express, Sequelize, Node, PostgreSQL and RESTful API. Concluding with the development of several real life projects under Agile methodologies.',
        certificate:
          'https://s3-sa-east-1.amazonaws.com/certs.henry/cert?id=e3f5335c-ecb5-4c0e-8ae2-651a457b0810',
      },
      {
        school: 'University of Michigan - Coursera',
        title: 'Applied Plotting, Charting & Data Representastion in Python',
        type: 'Course',
        icon: 'course',
        date: ['2020'],
        description: '',
      },
      {
        school: 'Coursera - University of Michigan',
        title: 'Applied Data Science with Python',
        type: 'Course',
        icon: 'course',
        date: ['2020'],
        description:
          '5 course specialization to data science through python, applied to machine learning, information visualization, natural language analysis, and social network analysis.',
        certificate:
          'https://www.coursera.org/account/accomplishments/specialization/257L7JGP5WX8',
      },
      {
        school: 'Centro REDES - CONICET',
        title: 'Satelite image processing with QGIS',
        type: 'Course',
        icon: 'course',
        date: ['2020'],
        description: '',
      },
      {
        school: 'edX - TUDelftX',
        title: 'Industrial Biotechnology',
        type: 'Course',
        icon: 'course',
        date: ['2016'],
        description:
          'Insights and tools for the design of biotechnology processes in a sustainable way. Sustainable processing for biobased products',
        certificate:
          'https://courses.edx.org/certificates/c169395352d04948b6f9e7b89b0ef2b5',
      },
      {
        school: 'UTN FRTDF',
        title: 'Chemical Engineer',
        type: 'Masters degree',
        icon: 'university',
        date: ['2011', '2018'],
        description:
          'Thesis: Design of photobioreactors for the production of bulk Spirulina.',
        gpa: '9.32',
        gpa_oof: '10',
      },
      {
        school: 'Academia Nacional de Ingeniería',
        title: 'Award to the best engineering graduates of Argentina',
        type: 'Award',
        icon: 'award',
        date: ['2011'],
        description:
          'Award (Ing. Isidoro Martín) bestowed annually to outstanding engineering graduates from Argentina.',
      },
      {
        school: 'UTN FRTDF',
        title: 'Industrial Engineer',
        type: 'Masters degree',
        icon: 'university',
        date: ['2006', '2011'],
        description:
          'Thesis: Design of a municipal solid waste treatment plant with recovery of the organic fraction through biomethanization.',
        gpa: '8.80',
        gpa_oof: '10',
      },
    ],
    work: [
      {
        company: 'Quasar Analytic',
        sector: 'Terch and Data Science',
        website: 'https://quasaranalytic.com/',
        position: 'Co-Founder',
        icon: 'tech',
        date: ['03/2019', 'Present'],
        description: '',
      },
      {
        company: 'Agua del Fagnano',
        sector: 'Mineral Water manufacturer',
        website: 'http://www.aguadelfagnano.com/',
        position: 'Techincal Director',
        icon: 'chem',
        date: ['08/2018', '03/2019'],
        description: `Production and quality assurance lab manager. Responsible for the product and process quality.
        Responsible for the implementation of integral quality management system.`,
        highlight:
          'Project Manager for the redesign of the production process, with the objective to improve production capacity, reducing downtimes and minimizing contamination risks.',
      },
      {
        company: 'Tecnomyl',
        sector: 'Pythosanitary manufacturer',
        website: 'https://tecnomyl.com.ar/',
        position: 'Coordinador de I+D',
        icon: 'chem',
        date: ['01/2017', '08/2018'],
        description: `Research and development of new phytosanitary products, with Reverse Engineering of competitors products.
        Physical and chemical product characterization with quantitative instrumental analysis (HPLC, GC & SP).`,
        highlight:
          'Redesign of existing product formulations, to reduce production cost, improve manufacturing times or enhance product efficiency.',
      },
      {
        company: 'Total Austral',
        sector: 'Oil&Gas upstream operator',
        website: 'https://www.total.com.ar/',
        position: 'Well Performance Engineer',
        icon: 'oil',
        date: ['11/2015', '01/2017'],
        description: `Well monitoring and productivity studies, with PVT analysis, efficiency curves and sand management.
        Well integrity tests for surface and subsurface security and process equipment and accessories.
        `,
        highlight:
          'Coordination and execution of Slickline, Wireline, CoiledTubing, cidizing, fracking & well stimulation operations.',
      },
      {
        company: 'Total Austral',
        sector: 'Oil&Gas upstream operator',
        website: 'https://www.total.com.ar/',
        position: 'Special Operations Responsible',
        icon: 'oil',
        date: ['02/2013', '11/2015'],
        description: `Writing of operational procedures for the execution of special and unique tasks, as well as routine work, within the production facilities.
        Planification, coordination and execution of inspections and interventions of production equipment.
        `,
        highlight:
          'Commissioning and start-up of several engineering projects (increase of compression capacity, oil treatment plant extension, setup of Vega Pleyade rig, etc.)',
      },
      {
        company: 'BGH',
        sector: 'Consumer electronis manufacturer',
        website: 'https://bgh.com.ar/',
        position: 'Responsable de Proyectos RCM',
        icon: 'factory',
        date: ['02/2011', '02/2013'],
        description: `Diseño de ingenieria y commissioning de lineas de producción, incluyendo infraestructura, equipamiento y flujo de producción.
        Implementación de planificación anticipada de la calidad del producto, con FMEAs y el desarrollo de un sistema de trabajo para la aplicación de conrol estadistico de procesos.`,
        highlight:
          'Gestión de hasta 6 (seis) proyectos, en simultáneo, de manufactura de celulares para Sony, Motorola, Huawei & ZTE.',
      },
    ],
  },
  Skills: {
    subtitle: 'Algunas de las tecnologias con las que he trabajado...',
    langSpecificSkills: [
      //Soft Skills
      {
        text: 'Gestión de proyectos',
        value: 70,
      },
    ],
  },
  Projects: {
    subtitle: "Some of the projects I've worked on...",
    endphrase:
      "If you're interested in a project, want to know more about my work or you are looking for a custom job...feel free to contact me",
    projectStatus: {
      0: 'Prototype',
      1: 'Development',
      2: 'Production',
      3: 'Finished',
      4: 'Cancelled',
    },
    tooltip: {
      statusTooltip: 'Project status',
      techStackMoreTooltip: '',
      codeTooltip: 'View code in GitHub',
      webTooltip: 'View a live test version',
      previewTooltip: 'A brief preview of the app',
    },
    card: {
      statusHeading: 'Status',
      techStackHeading: 'Tech Stack',
      previewHeading: 'Preview',
      dateHeading: 'Date',
    },
    projects: [
      {
        img: '',
        title: 'quizApp',
        subtitle: 'App de quizzes',
        description:
          'Web & mobile app for the management of quizzes. A tool designed for education institutions to outsource their examinations.',
        status: 2,
        tech: {
          backend: [
            'express',
            'postgres',
            'sequelize',
            'passport',
            'oAuth',
            'nodemailer',
          ],
          frontend: ['react', 'ionic', 'redux', 'formik', 'material-ui'],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2020',
      },
      {
        img: '',
        title: 'wineStore',
        subtitle: 'Wine e-commerce',
        description:
          'A simple but sleek e-commerce designed for online selling of wines.',
        status: 1,
        tech: {
          backend: [
            'express',
            'sequelize',
            'mercadopago',
            'passport',
            'oAuth',
            'postgres',
            'nodemailer',
          ],
          frontend: [
            'react',
            'redux',
            'formik',
            'material-ui',
            'styled-components',
            'axios',
            'notistack',
          ],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2020',
      },
      {
        img: '',
        title: 'Materia Ceramica',
        subtitle: 'e-commerce, blog y membership',
        description: 'Sitio web para emprendimiento de cerámica.',
        status: 0,
        tech: {
          backend: ['django', 'postgres', 'django-rest-framework'],
          frontend: ['react', 'redux', 'formik', 'material-ui', 'axios'],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2021',
      },
      {
        img: '',
        title: 'Quasar Analytic',
        subtitle: 'Landing Page',
        description:
          'Simple landing page with contact form, and back office for form generation and administration.',
        status: 0,
        tech: {
          backend: [
            'django',
            'postgres',
            'django-rest-framework',
            'php',
            'pear-php',
          ],
          frontend: ['bootstrap', 'jQuery'],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2021',
      },
      {
        img: '',
        title: 'SC2-API',
        subtitle: 'API',
        description: 'API del videjojuego Starcraft II.',
        status: 0,
        tech: {
          backend: ['django', 'postgres', 'django-rest-framework'],
          frontend: [''],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2021',
      },
    ],
  },
  Contact: {
    title: 'Contact',
    sideText: "Don't like forms? Send me and email👋",
    socialText: '...or find me at social networks',
    formModel: {
      name: {
        name: 'name',
        label: 'Name',
        requiredErrorMsg: 'Name is required',
      },
      subject: {
        name: 'subject',
        label: 'Subject',
      },
      email: {
        name: 'email',
        label: 'Email',
        requiredErrorMsg: 'Email is required',
        invalidadErrorMsg: 'Email is invalid',
      },
      message: {
        name: 'message',
        label: 'Message',
        requiredErrorMsg: 'You need to write something...',
        minErrorMsg: 'Message is too short',
      },
      submit: {
        name: 'submit',
        label: 'Send',
      },
    },
  },
  Footer: {
    copy: 'Copywrite 2021 FG',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/flavio-gragnolati/',
      github: 'https://github.com/flaviogragnolati',
      mail: 'flavio.gragnolati@gmail.com',
      subject: 'Hello!',
    },
    socialTooltips: {
      linkedin: 'Go to my LinkedIn',
      git: 'View my GitHub repo',
      mail: 'Send me an email',
    },
  },
};

export default EN;
