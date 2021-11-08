const EN = {
  Sidebar: {
    logo: 'FG',
    index: [
      { text: 'Home', icon: 'home', id: 'home' },
      { text: 'About', icon: 'about', id: 'about' },
      { text: 'Skills', icon: 'services', id: 'skills' },
      { text: 'Projects', icon: 'projects', id: 'projects' },
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
      'Full Stack Developer, ',
      'also...Chemical Engineer...',
      'and Industrial Engineer as well',
    ],
  },
  About: {
    descriptionTitle: 'A little about me...',
    description:
      //I love clean code, learning new things, strong engineering culture,
      'Proactive and efficient full stack developer, really fast learner that can easily adapt to rapid change work environments and not afraid of working under pressure. Ready to work with multidisciplinary teams under objective driven methodologies. I love clean, scalable and DRY code.',
    aboutCards: [
      {
        title: 'Team work',
        icon: 'team',
        text: 'A great deal of experience working in, and leading, multidisciplinary teams',
      },
      {
        title: 'Learning',
        icon: 'learn',
        text: 'Willing to learn new technologies',
      },
      {
        title: 'Work experience',
        icon: 'work',
        text: 'Plenty of experience in several industries of different sectors',
      },
      {
        title: 'Communication',
        icon: 'communication',
        text: 'Fluid communicator in both English and Spanish',
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
        website: 'https://www.soyhenry.com/',
        title: 'Full Stack Developer',
        icon: 'bootcamp',
        type: 'Bootcamp',
        date: ['10/2019', '02/2020'],
        description:
          '800+ hr. Theoretical & Practical Bootcamp with focus in JavaScript ES10, React, Redux, Express, Sequelize, Node, PostgreSQL and RESTful APIs. Concluding with the development of several real-life projects under Agile methodologies.',
        certificate:
          'https://s3-sa-east-1.amazonaws.com/certs.henry/cert?id=e3f5335c-ecb5-4c0e-8ae2-651a457b0810',
      },
      {
        school: 'Coursera - University of Michigan',
        website:
          'https://www.coursera.org/courses?query=university%20of%20michigan&page=1',
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
        website: 'http://www.centroredes.org.ar/',
        title: 'Satellite image processing with QGIS',
        type: 'Course',
        icon: 'course',
        date: ['2020'],
        description: '',
      },
      {
        school: 'edX - TUDelftX',
        website: 'https://www.edx.org/es/school/delftx',
        title: 'Industrial Biotechnology',
        type: 'Course',
        icon: 'course',
        date: ['2016'],
        description:
          'Insights and tools for the design of biotechnology processes in a sustainable way. Sustainable processing for bio-based products',
        certificate:
          'https://courses.edx.org/certificates/c169395352d04948b6f9e7b89b0ef2b5',
      },
      {
        school: 'UTN FRTDF',
        website: 'https://utn.edu.ar/es/',
        title: 'Chemical Engineer',
        type: 'Master’s degree',
        icon: 'university',
        date: ['2011', '2018'],
        description:
          'Thesis: Design of photobioreactors for the production of bulk Spirulina.',
        gpa: '9.32',
        gpa_oof: '10',
      },
      {
        school: 'Academia Nacional de Ingeniería',
        website: 'http://www.acadning.org.ar/premio_egresados.htm',
        title: 'Award to the best engineering graduates of Argentina',
        type: 'Award',
        icon: 'award',
        date: ['2011'],
        description:
          'Award (Ing. Isidoro Martín) bestowed annually to outstanding engineering graduates from Argentina.',
      },
      {
        school: 'UTN FRTDF',
        website: 'https://utn.edu.ar/es/',
        title: 'Industrial Engineer',
        type: 'Master’s degree',
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
        company: 'Steplix',
        sector: 'Software Factory',
        website: 'https://steplix.com/',
        position: 'SSr. Software Engineer',
        icon: 'tech',
        date: ['01/2020', 'Present'],
        description: 'Full stack developer working with Node, SQL & Next.js using Agile methodolgies and Continuous Development and Integration process.',
        highlight: 'Currently working in the development of a world class fintech app with 60+ microservices, and also developing a completely new trading platform.'
      },
      {
        company: 'Quasar Analytic',
        sector: 'Engineering & Tech',
        website: 'https://quasaranalytic.com/',
        position: 'Founder',
        icon: 'tech',
        date: ['03/2019', 'Present'],
        description: 'General Engineering consultant services.',
        highlight: 'Technical & economical feasibility analysis, EPCC project development, data discovery & analytics, software development and international certification assistance.'
      },
      {
        company: 'Agua del Fagnano',
        sector: 'Mineral Water manufacturer',
        website: 'http://www.aguadelfagnano.com/',
        position: 'Technical Director',
        icon: 'chem',
        date: ['08/2018', '03/2019'],
        description: `Production and quality assurance lab manager. Responsible for the product and process quality.
        Responsible for the implementation of integral quality management system.`,
        highlight:
          'Project Manager for the redesign of the production process, with the objective to improve production capacity, reducing downtimes and minimizing contamination risks.',
      },
      {
        company: 'Tecnomyl',
        sector: 'Phytosanitary manufacturer',
        website: 'https://tecnomyl.com.ar/',
        position: 'Senior R&D Engineer',
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
          'Coordination and execution of Slickline, Wireline, CoiledTubing, acidizing, fracking & well stimulation operations.',
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
        sector: 'Consumer electronics manufacturer',
        website: 'https://bgh.com.ar/',
        position: 'New Product Introduction Manager',
        icon: 'factory',
        date: ['02/2011', '02/2013'],
        description: `Engineering design and commissioning of complete production lines, including infrastructure, process flow and test equipment. 
        Implementation of advanced product quality planning, making of FMEAs and setup of a company framework for the application statistical process control.`,
        highlight:
          'Mobile phone manufacturing Project Management of up to 6 (six) simultaneous projects for Sony, Motorola, Huawei & ZTE.',
      },
    ],
  },
  Skills: {
    subtitle: 'Some of the technologies I’ve worked with…',
    langSpecificSkills: [
      //Soft Skills
      {
        text: 'Example',
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
      1: 'In Development',
      2: 'Production',
      3: 'MVP',
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
        img: 'quizApp.png',
        title: 'quizApp',
        subtitle: 'App for managing quizzes',
        description:
          'Web & mobile app for the management of quizzes. An admin web tool designed for education institutions to outsource their examinations. And a mobile version for taking the quizzes.',
        status: 3,
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
        git: 'https://github.com/flaviogragnolati/quiz_front',
        website: 'https://wizardly-chandrasekhar-bdea89.netlify.app/',
        preview: '',
        date: '2020',
      },
      {
        img: 'wineStore.png',
        title: 'wineStore',
        subtitle: 'Wine e-commerce',
        description:
          'A simple but sleek e-commerce designed for online selling of wines.',
        status: 3,
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
        git: 'https://github.com/flaviogragnolati/wine_store_front',
        website: 'https://laughing-cray-59015b.netlify.app/',
        preview: '',
        date: '2020',
      },
      {
        img: 'materia.png',
        title: 'Materia Ceramica',
        subtitle: 'e-commerce, blog y membership',
        description:
          'Web site for a Ceramic Shop, that includes the standard e-commerce with all its functionalities, with an included membership program. Also, a blog for posting updates on products, techniques and more.',
        status: 1,
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
        img: 'quasar.png',
        title: 'Quasar Analytic',
        subtitle: 'Landing Page',
        description:
          'Simple landing page with contact form, and back office for form generation and administration.',
        status: 2,
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
        git: 'https://github.com/flaviogragnolati/quasar',
        website: 'http://www.quasaranalytic.com',
        preview: '',
        date: '2020',
      },
    ],
  },
  Contact: {
    title: 'Contact',
    sideText: "Don't like forms? Send me and email👋",
    socialText: '...or find me at social networks',
    submitLoding: 'Sending...',
    submitSuccess: 'Email Sent!',
    submitError: 'Error...try again',
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
    copy: '© 2021 FG',
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
