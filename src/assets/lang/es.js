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
  },
  LangPicker: {
    langs: ['Español', 'English', 'Italiano'],
  },
  Main: {
    title: 'Flavio Gragnolati',
    hireBtnText: 'Contratame!',
    type: [
      'Fullstack Web Developer, ',
      'aunque tambien Ingeniero Químico...',
      'y tambien, Ingeniero Industrial',
    ],
  },
  About: {
    descriptionTitle: 'Un poco sobre mi...',
    description:
      //I love clean code, learning new things, strong engineering culture,
      'Soy Full stack web developer con un fuerte cultura ingenieril que esta siempre aprendiendo. Trabajo orientado a objetivos, estoy preparado para trabajar bajo presión y en entornos de cambios constantes. Me gusta desarrollar aplicaciones con código escalable, mantenible, limpio y debuggeable. ',
    aboutCards: [
      {
        title: 'Trabajo en equipo',
        icon: 'team',
        text: 'Con experiencia dirigiendo equipos multidiciplinarios',
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
        text: 'Comunicación Bilingüe fluida y clara',
      },
      {
        title: 'Resolución de problemas',
        icon: 'problem',
        text: 'Resolución de analítica de problemas',
      },
      {
        title: 'Compromiso',
        icon: 'responsible',
        text: 'Responsable y comprometido con los objetivos',
      },
    ],
    stackTitle: 'Mi stack de soluciones preferidas',
    stackSubTitle: '(sin miedo de aprender nuevas tecnologias)',
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
        description: 'Fullstack web developer bootcamp basado en Node y React',
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
        school: 'University of Michigan - Coursera',
        title: 'Applied Machine Learning in Python',
        type: 'Curso',
        icon: 'course',
        date: ['2020'],
        description: '',
      },
      {
        school: 'Centro REDES - CONICET',
        title: 'Procesamiento de imagenes Satelitales con QGIS',
        type: 'Curso',
        icon: 'course',
        date: ['2020'],
        description: '',
      },
      {
        school: 'UTN FRTDF',
        title: 'Ingeniero Químico',
        type: 'Carrera de Grado',
        icon: 'university',
        date: ['2011', '2018'],
        description: '',
        gpa: '9.32',
        gpa_oof: '10',
      },
      {
        school: 'Academia Nacional de Ingeniería',
        title: 'Premio a los mejores egresados de Ingeniería de Argentina',
        type: 'Premio',
        icon: 'award',
        date: ['2011'],
        description: '',
      },
      {
        school: 'UTN FRTDF',
        title: 'Ingeniero Industrial',
        type: 'Carrera de Grado',
        icon: 'university',
        date: ['2006', '2011'],
        description: '',
        gpa: '8.80',
        gpa_oof: '10',
      },
    ],
    work: [
      {
        company: 'Quasar Analytic',
        sector: 'Tecnologia y Ciencia de Datos',
        website: 'www.quasaranalytic.com',
        position: 'Fundador',
        icon: 'tech',
        date: ['03/2019', 'Present'],
        description: '',
      },
      {
        company: 'Agua del Fagnano',
        sector: 'Empresa productora de agua mineral',
        website: 'www.aguadelfagnano.com',
        position: 'Director Tecnico',
        icon: 'chem',
        date: ['08/2018', '03/2019'],
        description:
          'Responsable de la calidad del producto final y del proceso productivo. Encargado del laboratorio interno y externo.',
        highlight:
          'Rediseño del proceso productivo con el ojetivo de incrementar la eficiencia productivar y diminuir costos de producción',
      },
      {
        company: 'Tecnomyl',
        sector: 'Empresa productora de fitosanitarios',
        website: 'www.tecnomyl.com',
        position: 'Coordinador de I+D',
        icon: 'chem',
        date: ['01/2017', '08/2018'],
        description:
          'Desarrollo de nuevas formulaciones & refoluacion de productos fitosanitarios, reingeniería de productos de competencia. Seguimiento de estudios de campo, análisis de envases y efectividad de formulaciones. Caracterizacion de propiedades fisicoquímicas mediante análisis cuantitativo instrumental.',
        highlight: '',
      },
      {
        company: 'Total Austral',
        sector: 'Empresa operadora de petróleo y gas',
        website: 'www.total.com',
        position: 'Ingeniero Well Performance',
        icon: 'oil',
        date: ['11/2015', '01/2017'],
        description:
          'Monitoreo de parámetros de produccion y análisis de posibles escenarios para anticipar el comportamiento del pozo. Análisis PVT, con curas de eficiencia y manejo de arenas de producción. Ensayos de integridad de las instalaciones.',
        highlight:
          'Coordinación y ejecución de operaciones de SlickLine, WireLine, CoiledTubing, Acidizing, Fracking & Stimulation',
      },
      {
        company: 'Total Austral',
        sector: 'Empresa operadora de petróleo y gas',
        website: 'www.total.com',
        position: 'Responsable Operaciones Especiales',
        icon: 'oil',
        date: ['02/2013', '11/2015'],
        description:
          'Elaboración de procedimientos operaciones para ejecución de tareas únicas y rutinarias. Planificación, coordinación y ejecución de tareas de optiomización de operaciones de interveción e inspección de equipos.',
        highlight:
          'Commiisioning y start-up en diversos proyectos de ingeniería EPCC.',
      },
      {
        company: 'BGH',
        sector: 'Empresa productora de electronica de consumo',
        website: 'www.bgh.com.ar',
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
    subtitle:
      'Algunas de las tecnologías y herramientas con las que he trabajado...',
    langSpecificSkills: [
      //Soft Skills
      {
        text: 'Project Management',
        value: 70,
      },
      {
        text: 'Comunicacion eficaz',
        value: 60,
      },
      {
        text: 'Liderazgo',
        value: 60,
      },
      {
        text: 'Aprendizaje rapido',
        value: 80,
      },
    ],
  },
  Projects: {
    subtitle: 'Estos son algunos de los proyectos en los que he trabajado',
    endphrase:
      'Si te interesa algún proyecto y queres saber mas respecto de algun proyecto no dudes en contactarme',
    projectStatus: {
      0: 'Prototipo',
      1: 'Desarrollo',
      2: 'Produccion',
      3: 'Finalizado',
      4: 'Cancelado',
    },
    tooltip: {
      statusTooltip: 'Estado',
      techStackMoreTooltip: '??',
      codeTooltip: 'Ver código en Github',
      webTooltip: 'Ver versión en vivo',
      previewTooltip: 'Ver breve demo del proyecto',
    },
    card: {
      statusHeading: 'Estado',
      techStackHeading: 'Tecnologias',
      previewHeading: 'Vista Previa',
      dateHeading: 'Fecha',
    },
    projects: [
      {
        img: '',
        title: 'quizApp',
        subtitle: 'App de quizzes',
        description:
          'Aplicacion web y móvil para la gestion de quizzes. Herramienta para las instituciones educativas tercericen sus examenes',
        status: 2,
        tech: {
          backend: [
            'express',
            'sequelize',
            'passport',
            'oAuth',
            'postgres',
            'nodemailer',
          ],
          frontend: ['react', 'redux', 'formik', 'material-ui', 'axios'],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2020',
      },
      {
        img: '',
        title: 'wineStore',
        subtitle: 'e-commerce de vinos',
        description: 'Sitio web para la venta de vinos.',
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
        description: 'Lading page con formulario de contacto',
        status: 0,
        tech: {
          backend: [
            'django',
            'postgres',
            'django-rest-framework',
            'php',
            'php-pear',
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
    subtitle: 'Estemos en contacto?',
    sideText: 'No te gustan los formularios? Enviame un <email>👋',
    socialText: '...O encontrame en las redes sociales',
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
      subject: 'Hola!',
    },
  },
  Tooltips: {
    langBtn: 'Cambiar lenguaje',
    hireBtn: 'Contratame',
    social: {
      linkedin: 'Ir a mi LinkedIn',
      git: 'Ver mi repositorio de GitHub',
      mail: 'Enviarme un email',
    },
  },
};

export default ES;
