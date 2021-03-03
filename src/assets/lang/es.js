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
    header: 'Lenguaje',
    langs: ['Español', 'English', 'Italiano'],
  },
  Main: {
    title: 'Flavio Gragnolati',
    button: 'Contratame!',
    subtitle: 'Redes Sociales',
    typewritter: [
      'Fullstack Web Developer',
      'orientado a objetivos',
      'codigo limpio',
      'codigo DRY',
    ],
  },
  About: {
    descriptionTitle: 'Un poco sobre mi...',
    description:
      'Soy un Fullstack Web developer, que le gusta programar codigo limpio, eficiente y DRY. Estoy altamente motivado, y dispuesto a trabajar en ambientes de rápido cambio. Siempre orientado a trabajar en equipo y por objetivos, y sin miedo de resolver problemas bajo presión.',
    stackTitle: 'Mi stack de soluciones preferidas',
    stackSubTitle: '(sin miedo de aprender nuevas tecnologias)',
  },
  MoreAbout: {
    moreBtn: 'Mas acerca de mi',
    lessBtn: 'Menos acerca de mi',
    workTitle: 'Experiencia Laboral',
    educationTitle: 'Educación',
    subtitle: 'Mi experiencia previa y calificaciones',
    education: [
      {
        school: 'HENRY Bootcamp',
        title: 'Fullstack Developer',
        type: 'Bootcamp',
        date: ['10/2020', '02/2021'],
        description: '',
      },
      {
        school: 'University of Michigan - Coursera',
        title: 'Applied Plotting, Charting & Data Representastion in Python',
        type: 'Curso',
        date: ['2020'],
        description: '',
      },
      {
        school: 'University of Michigan - Coursera',
        title: 'Applied Machine Learning in Python',
        type: 'Curso',
        date: ['2020'],
        description: '',
      },
      {
        school: 'Centro REDES - CONICET',
        title: 'Procesamiento de imagenes Satelitales con QGIS',
        type: 'Curso',
        date: ['2020'],
        description: '',
      },
      {
        school: 'UTN FRTDF',
        title: 'Ingeniero Químico',
        type: 'Carrera de Grado',
        date: ['2011', '2018'],
        description: '',
        gpa: '9.32',
        gpa_oof: '10',
      },
      {
        school: 'UTN FRTDF',
        title: 'Ingeniero Industrial',
        type: 'Carrera de Grado',
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
        date: ['03/2019', 'Present'],
        description: '',
      },
      {
        company: 'Aghua del Fagnano',
        sector: 'Empresa productora de agua mineral',
        website: 'www.aguadelfagnano.com',
        position: 'Director Tecnico',
        date: ['08/2018', '03/2019'],
        description: '',
      },
      {
        company: 'Tecnomyl',
        sector: 'Empresa productora de fitosanitarios',
        website: 'www.tecnomyl.com',
        position: 'Coordinador de I+D',
        date: ['01/2017', '08/2018'],
        description: '',
      },
      {
        company: 'Total Austral',
        sector: 'Empresa operadora de petróleo y gas',
        website: 'www.total.com',
        position: 'Ingeniero Well Performance',
        date: ['11/2015', '01/2017'],
        description: '',
      },
      {
        company: 'Total Austral',
        sector: 'Empresa operadora de petróleo y gas',
        website: 'www.total.com',
        position: 'Responsable Operaciones Especiales',
        date: ['02/2013', '11/2015'],
        description: '',
      },
      {
        company: 'BGH',
        sector: 'Empresa productora de electronica de consumo',
        website: 'www.bgh.com.ar',
        position: 'Responsable de Proyectos RCM',
        date: ['02/2011', '02/2013'],
        tasks: [''],
      },
    ],
  },
  Projects: {
    subtitle: 'Estos son algunos de los proyectos en los que he trabajado',
    endphrase: 'Si queres saber mas respecto de algun proyecto contactame',
    projectStatus: {
      0: 'Prototipo',
      1: 'Desarrollo',
      2: 'Produccion',
      3: 'Finalizado',
      4: 'Cancelado',
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
          'Aplicacion web y movil para la gestion de quizzes. Herramienta para las instituciones educativas tercericen sus examenes',
        status: 2,
        tech: {
          backend: ['express', 'sequelize', 'passport', 'oAuth', 'postgres'],
          frontend: ['react', 'redux', 'formik', 'material-ui'],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2020',
      },
      {
        img: '',
        title: 'wineStore',
        subtitle: 'ecommrce de vinos',
        description: 'Vinoteca web',
        status: 1,
        tech: {
          backend: [
            'express',
            'sequelize',
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
        subtitle: 'ecommerce, blog y membership',
        description:
          'Aplicacion web y movil para la gestion de quizzes. Herramienta para las instituciones educativas tercericen sus examenes',
        status: 0,
        tech: {
          backend: ['django', 'postgres', 'django-rest-framework'],
          frontend: ['react', 'redux', 'formik', 'material-ui'],
        },
        git: 'www.github.com',
        website: 'www.website.com',
        preview: '',
        date: '2321',
      },
    ],
  },
  Contact: {
    title: 'Contacto',
    subtitle: 'Estemos en contacto?',
    sideText: 'No te gustan los formularios? Enviame un email!👋',
    socialText: '...O encontrame en las redes sociales',
    formModel: {
      name: {
        name: 'name',
        label: 'Nombre',
        requiredErrorMsg: 'Debe proveer un nombre',
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
        requiredErrorMsg: 'El cuerpo del mensaje es requerido',
        minErrorMsg: 'El mensaje es demasiado corto',
      },
      submit: {
        name: 'submit',
        label: 'Enviar',
      },
    },
  },
  Footer: { copy: 'Copyright 2021 FG' },
  Tooltips: {
    langBtn: 'Cambiar lenguaje',
    hireBtn: 'Contratame',
  },
};

export default ES;
