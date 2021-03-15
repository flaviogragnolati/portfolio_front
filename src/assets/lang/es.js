const ES = {
  Sidebar: {
    logo: 'FG',
    index: [
      { text: 'Inicio', icon: 'home', id: 'home' },
      { text: 'Acerca de mi', icon: 'about', id: 'about' },
      { text: 'Habilidades', icon: 'services', id: 'skills' },
      { text: 'Proyectos', icon: 'projects', id: 'projects' },
      { text: 'Contacto', icon: 'contact', id: 'contact' },
    ],
    langTooltip: 'Cambiar lenguaje',
    themeTooltip: {
      dark: 'Demasiado oscuro?',
      light: 'Demasiado claro?',
    },
  },
  Main: {
    title: 'Flavio Gragnolati',
    hireBtnText: 'Contratame!',
    type: [
      'Fullstack Web Developer, ',
      'tambien...Ingeniero Químico...',
      'y además, Ingeniero Industrial',
    ],
  },
  About: {
    descriptionTitle: 'Un poco sobre mi...',
    description:
      //I love clean code, learning new things, strong engineering culture,
      'Full stack developer proactivo y eficiente, rápido para adquirir nuevos conomientos, que puede adaptarse facilmente a entornos de cambios constantes y sin miedo para trabajar bajo presión. Listo para integrarse en equipos multidisciplinarios y trabajar bajo metodologias agiles orientadas hacia objetivos. Me gusta escribir código claro, escalable y DRY.',
    aboutCards: [
      {
        title: 'Trabajo en equipo',
        icon: 'team',
        text:
          'Con experiencia trabajando en, y dirigiendo, equipos multidiciplinarios',
      },
      {
        title: 'Aprendizaje',
        icon: 'learn',
        text: 'Dispuesto a aprender nuevas tecnologías',
      },
      {
        title: 'Experiencia Laboral',
        icon: 'work',
        text: 'Con ámplia experiencia en diferentes industrias',
      },
      {
        title: 'Comunicación',
        icon: 'communication',
        text: 'Comunicador fluido tanto en inglés como en español',
      },
      {
        title: 'Resolución de problemas',
        icon: 'problem',
        text:
          'Fuerte cultura ingenieril con resolución de analítica de problemas',
      },
      {
        title: 'Compromiso',
        icon: 'responsible',
        text: 'Responsable y comprometido con los objetivos',
      },
    ],
    stackTitle: 'Mi stack de soluciones preferidas',
    stackSubTitle: 'sin miedo de aprender nuevas tecnologias',
    stackTooltip: {
      mongo: 'MongoDB',
      pg: 'PostgreSQL',
      js: 'JavaScript(ES6+)',
      py: 'Python 3+',
      ex: 'Express',
      dj: 'Django',
      react: 'React',
    },
    downloadCVBtn: 'Descargar CV',
    viewCVBtn: 'Ver CV',
  },
  MoreAbout: {
    moreBtn: 'Mas acerca de mi',
    lessBtn: 'Menos acerca de mi',
    subtitle: 'Mi experiencia previa y calificaciones',
    workTitle: 'Experiencia Laboral',
    educationTitle: 'Educación',
    moreTooltip:
      'Más información sobre mi experiencia laboral y formación académica previa.',
    education: [
      {
        school: 'HENRY Bootcamp',
        title: 'Fullstack Developer',
        icon: 'bootcamp',
        type: 'Bootcamp',
        date: ['10/2020', '02/2021'],
        description:
          'Bootcamp teorico practico de 700+ horas enfocado en avaScript ES+6, React, Redux, Express, Sequelize, Node, PostgreSQL y RESTful API. Finalizando con el desarrollo de diversos proyectos `reales` bajo metodologias ágiles',
        certificate:
          'https://s3-sa-east-1.amazonaws.com/certs.henry/cert?id=e3f5335c-ecb5-4c0e-8ae2-651a457b0810',
      },
      {
        school: 'University of Michigan - Coursera',
        title: 'Applied Plotting, Charting & Data Representastion in Python',
        type: 'Curso',
        icon: 'course',
        date: ['2020'],
        description: '',
      },
      {
        school: 'Coursera - University of Michigan',
        title: 'Applied Data Science with Python',
        type: 'Curso',
        icon: 'course',
        date: ['2020'],
        description:
          'Especialización en Ciencia de Datos de 5 cursos, con Python, aplicado a machine learning, visualización de información, analisis de lenguaje y redes.',
        certificate:
          'https://www.coursera.org/account/accomplishments/specialization/257L7JGP5WX8',
      },
      {
        school: 'Centro REDES - CONICET',
        title: 'Procesamiento de imagenes satelitales con QGIS',
        type: 'Curso',
        icon: 'course',
        date: ['2020'],
        description: '',
      },
      {
        school: 'edX - TUDelftX',
        title: 'Industrial Biotechnology',
        type: 'Curso',
        icon: 'course',
        date: ['2016'],
        description:
          'Insights and tools for the design of biotechnology processes in a sustainable way. Sustainable processing for biobased products',
        certificate:
          'https://courses.edx.org/certificates/c169395352d04948b6f9e7b89b0ef2b5',
      },
      {
        school: 'UTN FRTDF',
        title: 'Ingeniería Química',
        type: 'Carrera de Grado',
        icon: 'university',
        date: ['2011', '2018'],
        description:
          'Tésis:  Diseño integral fotobioreactores, y planta de producción de Spirulina a granel.',
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
        title: 'Ingeniería Industrial',
        type: 'Carrea de grado',
        icon: 'university',
        date: ['2006', '2011'],
        description:
          'Tesis: Diseño integral de planta de tratamiento y valorización de la fracción orgánica de los RSU mediante la biometanizacion.',
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
        description: `Well monitoring and production studies, with PVT analysis, efficiency curves and sand management.
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
        tasks: [
          'Gestion integral de proyectos de manufactura de celulares para SONY, Motorola, Huawei y ZTE. Planificación anticipada de la calidad del producto, elaboración de FMEA y progrmaa de control estadístico de proceso.',
        ],
        highlight:
          'Coordinación simultena de 6 proyectos, incluyendo cálculo y diseño de los medios de producción, instalación y configuración de los medios de control.',
      },
    ],
  },
  Skills: {
    subtitle: "Some of the techonologies and tools I've worked with...",
    langSpecificSkills: [
      //Soft Skills
      {
        text: 'Project Management',
        value: 70,
      },
      {
        text: 'Efficent Communication?',
        value: 60,
      },
      {
        text: 'Leadership',
        value: 60,
      },
      {
        text: 'Fast Learner',
        value: 95,
      },
    ],
  },
  Projects: {
    subtitle: "Some of the projects I've worked on...",
    endphrase:
      'Si estas interesado en un proyecto, querés saber más sobre mi trabajo o estas buscando un desarrollador para un trabajo especial, sentite libre de contactarme',
    projectStatus: {
      0: 'Prototipo',
      1: 'Desarrollo',
      2: 'Producción',
      3: 'Finalizado',
      4: 'Cancelado',
    },
    tooltip: {
      statusTooltip: 'Estado del proyecto',
      techStackMoreTooltip: '',
      codeTooltip: 'Ver código en GitHub',
      webTooltip: 'Ver una versión de prueba en vivo',
      previewTooltip: 'Vista previa de la app',
    },
    card: {
      statusHeading: 'Estado',
      techStackHeading: 'Tecnologias',
      previewHeading: 'Vista previa',
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
    title: 'Contacto',
    sideText: 'No te gustan los formularios? Enviame un email👋',
    socialText: '...o encontrame en las redes sociales',
    formModel: {
      name: {
        name: 'name',
        label: 'Nombre',
        requiredErrorMsg: 'El nombre es necesario',
      },
      subject: {
        name: 'subject',
        label: 'Asunto',
      },
      email: {
        name: 'email',
        label: 'Email',
        requiredErrorMsg: 'El email es requerido',
        invalidadErrorMsg: 'El email es invalido',
      },
      message: {
        name: 'message',
        label: 'Mensaje',
        requiredErrorMsg: 'Es necesario escribir un mensaje',
        minErrorMsg: 'El mensaje es demasiado corto',
      },
      submit: {
        name: 'submit',
        label: 'Enviar',
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
      linkedin: 'Ir a mi LinkedIn',
      git: 'Ver mi repositorio de GitHub',
      mail: 'Enviarme un email',
    },
  },
};

export default ES;
