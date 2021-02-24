const ES = {
  Sidebar: {
    content: [
      { text: 'Inicio', icon: 'home', id: 'home' },
      { text: 'Acerca de mi', icon: 'about', id: 'about' },
      { text: 'Habilidades', icon: 'services', id: 'skills' },
      { text: 'Proyectos', icon: 'projects', id: 'projects' },
      { text: 'Contacto', icon: 'contact', id: 'contact' },
    ],
    logo: 'FG',
  },
  LangPicker: {
    header: 'Lenguaje',
    langs: ['Español', 'English'],
  },
  Hero: {
    title: 'Flavio Gragnolati',
    button: 'Contratame!',
    subtitle: 'Redes Sociales',
    type: ' ',
  },
  Main: { title: '', tabs: '' },
  Projects: {},
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
  Footer: {},
  Test: {
    title: 'Titul ode test',
    body: '[ES]loremipsum loremipsum loremipsum loremipsum [ES]',
  },
  Tooltips: {
    langBtn: 'Cambiar lenguaje',
    hireBtn: 'Contratame',
  },
};

export default ES;
