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
    hireBtnText: 'Contrátame!',
    type: [
      'Full Stack Web Developer, ',
      'también...Ingeniero Químico...',
      'y además, Ingeniero Industrial',
    ],
  },
  About: {
    descriptionTitle: 'Un poco sobre mi...',
    description:
      //I love clean code, learning new things, strong engineering culture,
      'Full Stack developer proactivo y eficiente, rápido para adquirir nuevos conocimientos, que puede adaptarse fácilmente a entornos de cambios constantes y sin miedo para trabajar bajo presión. Listo para integrarse en equipos multidisciplinarios y trabajar bajo metodologías agiles orientadas hacia objetivos. Me gusta escribir código claro, escalable y DRY.',
    aboutCards: [
      {
        title: 'Trabajo en equipo',
        icon: 'team',
        text:
          'Con experiencia trabajando en, y dirigiendo, equipos multidisciplinarios',
      },
      {
        title: 'Aprendizaje',
        icon: 'learn',
        text: 'Dispuesto a aprender nuevas tecnologías',
      },
      {
        title: 'Experiencia Laboral',
        icon: 'work',
        text: 'Con amplia experiencia en diferentes industrias',
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
    stackSubTitle: 'sin miedo de aprender nuevas tecnologías',
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
          'Bootcamp teórico practico de 800+ horas enfocado en JavaScript ES+6, React, Redux, Express, Sequelize, Node, PostgreSQL y RESTful API. Finalizando con el desarrollo de diversos proyectos `reales` bajo metodologías ágiles',
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
          'Especialización en Ciencia de Datos, con Python, de 5 cursos, aplicado a machine learning, visualización de información, análisis de lenguaje y redes.',
        certificate:
          'https://www.coursera.org/account/accomplishments/specialization/257L7JGP5WX8',
      },
      {
        school: 'Centro REDES - CONICET',
        title: 'Procesamiento de imágenes satelitales con QGIS',
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
          'Herramientas y criterios para el diseño de procesos biotecnológicos de manera sustentable. Obtención y procesamiento de bioproductos.',
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
        title: 'Premio a los mejores egresados de Argentina',
        type: 'Award',
        icon: 'award',
        date: ['2011'],
        description:
          'Premio (Ing. Isidoro Martín) entregado anualmente a los mejores egresados de Ingenieria de Argentina.',
      },
      {
        school: 'UTN FRTDF',
        title: 'Ingeniería Industrial',
        type: 'Carrea de grado',
        icon: 'university',
        date: ['2006', '2011'],
        description:
          'Tesis: Diseño integral de planta de tratamiento y valorización de la fracción orgánica de los RSU mediante la biometanización.',
        gpa: '8.80',
        gpa_oof: '10',
      },
    ],
    work: [
      {
        company: 'Quasar Analytic',
        sector: 'Tech and Data Science',
        website: 'https://quasaranalytic.com/',
        position: 'Co-Founder',
        icon: 'tech',
        date: ['03/2019', 'Present'],
        description: '',
      },
      {
        company: 'Agua del Fagnano',
        sector: 'Producción de agua mineral',
        website: 'http://www.aguadelfagnano.com/',
        position: 'Director Técnico',
        icon: 'chem',
        date: ['08/2018', '03/2019'],
        description: `Jefe de laboratorio de producción y calidad. Responsable de la calidad del producto y el proceso.
        Responsable de la implementación de sistema de gestión de calidad integral.`,
        highlight: `Encargado de proyecto para el rediseño del proceso productivo, con el objetivo de mejorar la capacidad productiva, reduciendo los tiempos de parada y minimizando los riesgos de contaminacion y no conformidades.`,
      },
      {
        company: 'Tecnomyl',
        sector: 'Producción de fitosanitarios',
        website: 'https://tecnomyl.com.ar/',
        position: 'Coordinador de I+D',
        icon: 'chem',
        date: ['01/2017', '08/2018'],
        description: `Investigación y desarrollo de nuevos productos fitosanitarios, y además reingeniería de productos de competencia.
        Caracterización de propiedades fisicoquímica de productos mediante análisis cuantitativo instrumental(HPLC, GC & SP).`,
        highlight: `Rediseño de formulaciones existentes, para reducir costos de producción, mejorar los tiempos de manufactura e incrementar la eficiencia del producto.`,
      },
      {
        company: 'Total Austral',
        sector: 'Operada Oil&Ga',
        website: 'https://www.total.com.ar/',
        position: 'Ingeniero Well Performance',
        icon: 'oil',
        date: ['11/2015', '01/2017'],
        description: `Monitoreo de pozos y estudios de productividad, con análisis PVT, curvas de eficiencia y manejo de arenas de producción.
        Ensayos de integridad de instalaciones, equipos y accesorios, de seguridad y proceso subterráneos y de superficie.`,
        highlight:
          'Coordinación y ejecución de operaciones de SlickLine, Wireline, CoiledTubing, cidizing, fracking & estimulación.',
      },
      {
        company: 'Total Austral',
        sector: ' Operada Oil&Ga',
        website: 'https://www.total.com.ar/',
        position: 'Responsable Operaciones Especiales',
        icon: 'oil',
        date: ['02/2013', '11/2015'],
        description: `Elaboración de procedimientos operacionales de producción para la ejecución de tareas únicas y rutinarias.
        Planificación, coordinación y ejecución de operaciones de intervención e inspección de equipos e instalaciones productivas.`,
        highlight:
          'Commissioning y start-up de diversos proyectos de ingeniería (incremento de capacidad de compresión, ampliación de planta de tratamiento de petróleo, puesta en marcha de plataforma Vega Pleyade, etc.)',
      },
      {
        company: 'BGH',
        sector: 'Producción de electrónica de consumo',
        website: 'https://bgh.com.ar/',
        position: 'Responsable de Proyectos RCM',
        icon: 'factory',
        date: ['02/2011', '02/2013'],
        tasks: [
          'Gestión integral de proyectos de manufactura de celulares para SONY, Motorola, Huawei y ZTE. Planificación anticipada de la calidad del producto, elaboración de FMEA y programa de control estadístico de proceso.',
        ],
        highlight:
          'Coordinación simultanea de 6 proyectos, incluyendo cálculo y diseño de los medios de producción, instalación y configuración de los medios de control.',
      },
    ],
  },
  Skills: {
    subtitle: 'Alguna de las tecnologías con las que he trabajado…',
    langSpecificSkills: [
      //Soft Skills
      {
        text: 'Project Management',
        value: 70,
      },
    ],
  },
  Projects: {
    subtitle: 'Algunos proyectos en los cuales he trabajado…',
    endphrase:
      'Si estas interesado en un proyecto, queres saber más sobre mi trabajo o estás buscando un desarrollador para un trabajo especial, no dudes en contactarme',
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
      techStackHeading: 'Tecnologías',
      previewHeading: 'Vista previa',
      dateHeading: 'Date',
    },
    projects: [
      {
        img: '',
        title: 'quizApp',
        subtitle: 'App de quizzes',
        description:
          'Aplicación web y móvil para la gestión de cuestionarios. Una herramienta pensada y diseñada que instituciones educativas tercericen sus examinaciones, cuestionarios, etc. ',
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
        subtitle: 'Vinoteca online',
        description:
          'Una sencilla, pero elegante vinoteca web, con todas las funciones necesarias para vender online.',
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
        description:
          'Sitio web para negocio de Cerámica que incluye un e-commerce estándar con todas sus funciones, ya además un sistema de membresías. También, un blog para postear actualizaciones de productos, servicios, técnicas y más.',
        status: 0,
        tech: {
          backend: ['django', 'postgres', 'django-rest-framework'],
          frontend: ['react', 'redux', 'formik', 'material-ui', 'axios'],
        },
        git: 'https://github.com/flaviogragnolati/materia_ceramica',
        website: 'https://www.materia-ceramica.com/',
        preview: '',
        date: '2021',
      },
      {
        img: '',
        title: 'Quasar Analytic',
        subtitle: 'Landing Page',
        description:
          'Lading page simple con un formulario de contacto y un back office para la generación y administración de formularios.',
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
        website: 'www.quasaranalytic.com',
        preview: '',
        date: '2020',
      },
      // {
      //   img: '',
      //   title: 'SC2-API',
      //   subtitle: 'API',
      //   description: 'API del videjojuego Starcraft II.',
      //   status: 0,
      //   tech: {
      //     backend: ['django', 'postgres', 'django-rest-framework'],
      //     frontend: [''],
      //   },
      //   git: 'www.github.com',
      //   website: 'www.website.com',
      //   preview: '',
      //   date: '2021',
      // },
    ],
  },
  Contact: {
    title: 'Contacto',
    sideText: 'No te gustan los formularios? Envíame un email👋',
    socialText: '...o encontrame en las redes sociales',
    submitLoding: 'Enviando...',
    submitSuccess: 'Email Enviado!',
    submitError: 'Error...intente nuevamente',
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
    copy: '© 2021 FG',
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
