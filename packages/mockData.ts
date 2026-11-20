import type { IFrontPage, IProduct, Item, ProductVideo, IAbout } from '@mi-app/types';

export const frontPage: IFrontPage[] = [
  {
    id: 'htoakMVKCc71zV1i5Qkr',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2FimagenBack.webp?alt=media&token=db21120f-9e90-4fbd-8a8f-84bef65225c9',
    title: 'Antorrg | Desarrollo web en Node.js para negocios modernos',
    metaDescription:
      'Antorrg servicios web. Creamos páginas web y servidores personalizados en Node.js. Servicios rápidos, seguros y escalables para su negocio digital.',
    description:
      'Ofrezco desarrollo de páginas web y servidores modernos, listos para crecer con tu proyecto.\nRápidos, seguros y hechos a medida en Node.js.\nMire mis trabajos y descubra cómo puedo ayudarle.',
    enabled: true,
    productsPreview: [
      {
        id: '7luOevvxPv2oMNS1Fl14',
        title: 'RickAndMorty 2024',
        shortDescription: 'Una breve descripcion del producto Rick and Morty',
        logo: 'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Flogo.webp?alt=media&token=d45971ee-9f60-4ab3-b6f8-857b3187efc1',
        enabled: true,
      },
      {
        id: 'llfnudY3xeKn46R3ldKg',
        title: 'Gameworld e-commerce',
        shortDescription: 'Una breve descripcion del producto Gameworld e-commerce',
        logo: 'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fgamelogo.webp?alt=media&token=719748b4-608f-498c-b21f-558ed769e410',
        enabled: true,
      },
      {
        id: 'DUppO5fQH2DKx1JwC5pM',
        title: 'Boscarol Hnos',
        shortDescription: 'Una breve descripcion del producto Boscarol Hnos',
        logo: 'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2FlogoBoscarol.webp?alt=media&token=72678db6-fde6-46ad-876a-c8a953c59146',
        enabled: true,
      },
    ],
  },
];

export const product: IProduct[] = [
  {
    id: '7luOevvxPv2oMNS1Fl14',
    title: 'RickAndMorty 2024',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fproyecto%20carrusel1.webp?alt=media&token=dad374be-c8d0-4f8b-acc9-ec134c968827',
    logo: 'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Flogo.webp?alt=media&token=d45971ee-9f60-4ab3-b6f8-857b3187efc1',
    metaDescription: 'Este es mi primer proyecto realizado en Henry, entre y vea mas detalles.',
    shortDescription: 'Una breve descripcion del producto Rick and Morty',
    description:
      'Este proyecto presentacional fue desarrollado como parte del bootcamp "Soy Henry", en el se volcaron todas las tecnologias aprendidas alli, ademas de eso, lo complementé con implementaciones y librerías que fui aprendiendo despues, es decir, al momento de subirlo fue el resumen de lo aprendido por mi',
    isActive: false,
    url: 'https://rick-and-morty2024.vercel.app/',
    enabled: true,
    items: [
      {
        id: 'k8zBPxnNzLarN1spp43q',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick1.webp?alt=media&token=ba460e59-4827-4828-965e-80953ea0e840',
        text: 'Esta es la pagina principal',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
      {
        id: 'PLki91bYVVmhHKU809zk',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick9.webp?alt=media&token=dac24286-1459-432c-8548-f22ee8479c17',
        text: 'Este es el detalle, al hacer click en una card (este en su cuenta o simplemente como invitado) será redirigido a esta ventana adonde verá alguno de los detalles disponibles del personaje, el boton volver lo regresará a la pagina principal nuevamente.',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
      {
        id: 'aYzte71cyVcx6Tw04LA5',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick5.webp?alt=media&token=f1d4173d-c2ed-4eac-8a25-f29e6e93d5f0',
        text: 'Aqui estamos en el login, al hacer click en "login" sera redirigido a esta ventana donde podra ingresar su usuario y contraseña para entrar en su cuenta. ¿No tiene una cuenta? Sientase libre de crearse una; esta misma ventana a traves del botón "registrarse" puede hacerlo.',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
      {
        id: 'kEkpL20S1LPTuhLVXpjB',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick6.webp?alt=media&token=f04541e1-11ec-4398-9f10-08ad0f2388f2',
        text: 'Aqui tenemos el formulario de Registro, donde podemos crear una nueva cuenta, no olvide que luego de crear su cuenta, debera iniciar sesión.',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
      {
        id: 'wCT48HlKoOAJMTdXtwWN',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick8.webp?alt=media&token=9725afff-1324-494b-9139-73b5f598b9bc',
        text: 'Esta es la vista de "home" luego de iniciar sesión. Aqui tenemos las mismas funcionalidades con la diferencia de que en lugar de un carrusel contamos con un paginado por medio del cual podemos acceder a nuestro gusto a las diversas card, cada pagina cuenta con 20 caracteres, tambien cuenta con una seccion de favoritos, adonde podemos guardar aquellos personajes que nos gustan (haciendo click en el corazon de la card) el cual está blanco y se pondra rojo indicando aquellos elegidos, la manera de borrarlos de nuestro favorito es de la misma manera que para elegirlos, hacer click en el corazón.',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
      {
        id: 'ccvsUOwA8ulWLXPT2sZq',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick8.webp?alt=media&token=9f352ead-b6a2-44f7-b343-74a9d3a9da7b',
        text: 'Esta es la seccion de favoritos donde contamos tambien con un paginado y ademas tenemos funcionalidades de: ordenamiento por orden alfabetico y filtrado por genero.',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
      {
        id: 'UkuzSBwsIG3qHmV6Rpbf',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick4.webp?alt=media&token=d8af9770-d49d-4410-bf4e-e47182f063c2',
        text: 'Esta es la seccion "acerca de" adonde hago una breve descripcion de mi persona como del proyecto y lo que representa',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
      {
        id: 'rDlWyK6Zr22nxqTji56N',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick10.webp?alt=media&token=2ad8efa0-a254-48be-9c33-6d9a85d78456',
        text: 'Y esta es la funcion de suspensión de pantalla o suspensión de inactividad ("Idle Timeout" o "Screen Timeout), al trabajar continuamente con un carrusel que consume recursos para mostrar todas las imagenes esta implementacion suspende la aplicacion y su consumo al transcurrir quince minutos de inactividad, para activar nuevamente basta con mover el mouse o ( en el caso de un movil) tocar la pantalla.',
        productId: '7luOevvxPv2oMNS1Fl14',
        enabled: true,
      },
    ],
  },
  {
    id: 'llfnudY3xeKn46R3ldKg',
    title: 'Gameworld e-commerce',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fproyecto%20carrusel2.webp?alt=media&token=8419025c-ac22-4e89-8f06-9836878e2d4b',
    logo: 'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fgamelogo.webp?alt=media&token=719748b4-608f-498c-b21f-558ed769e410',
    metaDescription: 'Un eccomerce de videojuegos tanto virtuales como físicos',
    shortDescription: 'Una breve descripcion del producto Gameworld e-commerce',
    description:
      "Esta es la pagina web creada como para el proyecto final del bootcamp 'Soy Henry'. En ella participaron 7 estudiantes a lo largo de un mes. La misma está contruida con React.js con Vite en el front y express.js con sequelize y base de datos PostgreSQL en el back",
    isActive: true,
    url: 'https://gameworldeccomerce.vercel.app/',
    enabled: true,
    items: [
      {
        id: 'e8tUrk1v9sKZzyEOefkq',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fimg7.webp?alt=media&token=ddee43db-5883-462a-80af-c9698f661c39',
        text: 'Esta es la landing page o página principal, la que primero ve el visitante, adonde muestra un carrusel con videojuegos y tambien una referencia a los creadores de la misma',
        productId: 'llfnudY3xeKn46R3ldKg',
        enabled: true,
      },
      {
        id: '1fDwoUcdsFPlwUbMx2Ev',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fgame4.png?alt=media&token=48d79aba-a777-4ac2-8ab5-dc8cef9f1ced',
        text: 'Esta es la vista "Home" tal como la veria un visitante, luego veremos tambien que cuenta con modo "dark" pero eso esta disponible solo para usuarios con cuenta.',
        productId: 'llfnudY3xeKn46R3ldKg',
        enabled: true,
      },
      {
        id: 'afeH5jiMM0EvTmmNXh3l',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fgame5.png?alt=media&token=e210e298-2b8c-474f-b70d-b2c379266fe2',
        text: 'Este es el detalle del videojuego seleccionado, donde se puede observar el genero, la plataforma en el que se puede ejecutar, si es virtual o fisico, el precio, y una breve descripcion.',
        productId: 'llfnudY3xeKn46R3ldKg',
        enabled: true,
      },
      {
        id: 'ywdgflJCBkHQau0dVZzG',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fimg6.webp?alt=media&token=91e29ca4-429e-4aca-a9c0-909d39330d35',
        text: 'La aplicacion cuenta con autenticacion por medio de auth0 como tambien con usuario y contraseña tradicionales, los usuarios con cuenta tiene acceso a su panel de configuracion, compras realizadas, carrito, calificaciones, etc. Ademas tambien para ellos esta disponible la opcion del cambio de tema (ligth/dark).',
        productId: 'llfnudY3xeKn46R3ldKg',
        enabled: true,
      },
    ],
  },
  {
    id: 'DUppO5fQH2DKx1JwC5pM',
    title: 'Boscarol Hnos',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fproyecto%20carrusel3.webp?alt=media&token=1fbc3ca3-0097-410d-8159-abcfeb25ba7c',
    logo: 'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2FlogoBoscarol.webp?alt=media&token=72678db6-fde6-46ad-876a-c8a953c59146',
    metaDescription: 'Landing page y administracion de vehiculos y clientes para un taller mecanico',
    shortDescription: 'Una breve descripcion del producto Boscarol Hnos',
    description:
      'Esta pagina web fue creada primero como una landing page con react.js y vite y en el transcurso del desarrollo se implementó una base de datos e historial para el usuario asi como registro de usuarios, automotores y servicios para el taller',
    isActive: true,
    url: 'https://deployprueba.vercel.app/',
    enabled: true,
    items: [
      {
        id: '0VWzICgqyC6WjQyFdxq5',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fbosca1.webp?alt=media&token=f187de64-c28e-4832-9475-b7523ae090ce',
        text: 'Esta es la landing page, en su primera vista vemos una barra de navegacion con los diversos links que nos señalan sus divisiones, tambien tenemos la posibilidad (si ya tenemos una cuenta en el taller) de hacer login para entrar a nuestro espacio.',
        productId: 'DUppO5fQH2DKx1JwC5pM',
        enabled: true,
      },
      {
        id: '1rRU7gvZf2mqrutmNfBI',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fbosca2.webp?alt=media&token=116c8eee-f0b8-4f3c-890b-fb47f811b147',
        text: 'Las diversas partes de la landing page informan al visitante acerca de la historia de los dueños del taller, su visión, ademas de algunos consejos generales.',
        productId: 'DUppO5fQH2DKx1JwC5pM',
        enabled: true,
      },
      {
        id: 'oWc037GhfnFYZ4gTl37F',
        picture:
          'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fbosca3.webp?alt=media&token=dc01e086-954d-4a61-a171-593ea3bcbdde',
        text: 'Aqui continua la landing, y en esta seccion se ofrecen consejos utiles al usuario, asi como novedades o noticias que los propietarios editan a su gusto.',
        productId: 'DUppO5fQH2DKx1JwC5pM',
        enabled: true,
      },
    ],
  },
];

export const variants: Item[] = [
  {
    id: 'k8zBPxnNzLarN1spp43q',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick1.webp?alt=media&token=ba460e59-4827-4828-965e-80953ea0e840',
    text: 'Esta es la pagina principal',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'PLki91bYVVmhHKU809zk',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick9.webp?alt=media&token=dac24286-1459-432c-8548-f22ee8479c17',
    text: 'Este es el detalle, al hacer click en una card (este en su cuenta o simplemente como invitado) será redirigido a esta ventana adonde verá alguno de los detalles disponibles del personaje, el boton volver lo regresará a la pagina principal nuevamente.',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'aYzte71cyVcx6Tw04LA5',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick5.webp?alt=media&token=f1d4173d-c2ed-4eac-8a25-f29e6e93d5f0',
    text: 'Aqui estamos en el login, al hacer click en "login" sera redirigido a esta ventana donde podra ingresar su usuario y contraseña para entrar en su cuenta. ¿No tiene una cuenta? Sientase libre de crearse una; esta misma ventana a traves del botón "registrarse" puede hacerlo.',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'kEkpL20S1LPTuhLVXpjB',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick6.webp?alt=media&token=f04541e1-11ec-4398-9f10-08ad0f2388f2',
    text: 'Aqui tenemos el formulario de Registro, donde podemos crear una nueva cuenta, no olvide que luego de crear su cuenta, debera iniciar sesión.',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'wCT48HlKoOAJMTdXtwWN',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick8.webp?alt=media&token=9725afff-1324-494b-9139-73b5f598b9bc',
    text: 'Esta es la vista de "home" luego de iniciar sesión. Aqui tenemos las mismas funcionalidades con la diferencia de que en lugar de un carrusel contamos con un paginado por medio del cual podemos acceder a nuestro gusto a las diversas card, cada pagina cuenta con 20 caracteres, tambien cuenta con una seccion de favoritos, adonde podemos guardar aquellos personajes que nos gustan (haciendo click en el corazon de la card) el cual está blanco y se pondra rojo indicando aquellos elegidos, la manera de borrarlos de nuestro favorito es de la misma manera que para elegirlos, hacer click en el corazón.',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'ccvsUOwA8ulWLXPT2sZq',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick8.webp?alt=media&token=9f352ead-b6a2-44f7-b343-74a9d3a9da7b',
    text: 'Esta es la seccion de favoritos donde contamos tambien con un paginado y ademas tenemos funcionalidades de: ordenamiento por orden alfabetico y filtrado por genero.',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'UkuzSBwsIG3qHmV6Rpbf',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick4.webp?alt=media&token=d8af9770-d49d-4410-bf4e-e47182f063c2',
    text: 'Esta es la seccion "acerca de" adonde hago una breve descripcion de mi persona como del proyecto y lo que representa',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'rDlWyK6Zr22nxqTji56N',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Frick10.webp?alt=media&token=2ad8efa0-a254-48be-9c33-6d9a85d78456',
    text: 'Y esta es la funcion de suspensión de pantalla o suspensión de inactividad ("Idle Timeout" o "Screen Timeout), al trabajar continuamente con un carrusel que consume recursos para mostrar todas las imagenes esta implementacion suspende la aplicacion y su consumo al transcurrir quince minutos de inactividad, para activar nuevamente basta con mover el mouse o ( en el caso de un movil) tocar la pantalla.',
    productId: '7luOevvxPv2oMNS1Fl14',
    enabled: true,
  },
  {
    id: 'e8tUrk1v9sKZzyEOefkq',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fimg7.webp?alt=media&token=ddee43db-5883-462a-80af-c9698f661c39',
    text: 'Esta es la landing page o página principal, la que primero ve el visitante, adonde muestra un carrusel con videojuegos y tambien una referencia a los creadores de la misma',
    productId: 'llfnudY3xeKn46R3ldKg',
    enabled: true,
  },
  {
    id: '1fDwoUcdsFPlwUbMx2Ev',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fgame4.png?alt=media&token=48d79aba-a777-4ac2-8ab5-dc8cef9f1ced',
    text: 'Esta es la vista "Home" tal como la veria un visitante, luego veremos tambien que cuenta con modo "dark" pero eso esta disponible solo para usuarios con cuenta.',
    productId: 'llfnudY3xeKn46R3ldKg',
    enabled: true,
  },
  {
    id: 'afeH5jiMM0EvTmmNXh3l',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fgame5.png?alt=media&token=e210e298-2b8c-474f-b70d-b2c379266fe2',
    text: 'Este es el detalle del videojuego seleccionado, donde se puede observar el genero, la plataforma en el que se puede ejecutar, si es virtual o fisico, el precio, y una breve descripcion.',
    productId: 'llfnudY3xeKn46R3ldKg',
    enabled: true,
  },
  {
    id: 'ywdgflJCBkHQau0dVZzG',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fimg6.webp?alt=media&token=91e29ca4-429e-4aca-a9c0-909d39330d35',
    text: 'La aplicacion cuenta con autenticacion por medio de auth0 como tambien con usuario y contraseña tradicionales, los usuarios con cuenta tiene acceso a su panel de configuracion, compras realizadas, carrito, calificaciones, etc. Ademas tambien para ellos esta disponible la opcion del cambio de tema (ligth/dark).',
    productId: 'llfnudY3xeKn46R3ldKg',
    enabled: true,
  },
  {
    id: '0VWzICgqyC6WjQyFdxq5',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fbosca1.webp?alt=media&token=f187de64-c28e-4832-9475-b7523ae090ce',
    text: 'Esta es la landing page, en su primera vista vemos una barra de navegacion con los diversos links que nos señalan sus divisiones, tambien tenemos la posibilidad (si ya tenemos una cuenta en el taller) de hacer login para entrar a nuestro espacio.',
    productId: 'DUppO5fQH2DKx1JwC5pM',
    enabled: true,
  },
  {
    id: '1rRU7gvZf2mqrutmNfBI',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fbosca2.webp?alt=media&token=116c8eee-f0b8-4f3c-890b-fb47f811b147',
    text: 'Las diversas partes de la landing page informan al visitante acerca de la historia de los dueños del taller, su visión, ademas de algunos consejos generales.',
    productId: 'DUppO5fQH2DKx1JwC5pM',
    enabled: true,
  },
  {
    id: 'oWc037GhfnFYZ4gTl37F',
    picture:
      'https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/imagesApi%2Fbosca3.webp?alt=media&token=dc01e086-954d-4a61-a171-593ea3bcbdde',
    text: 'Aqui continua la landing, y en esta seccion se ofrecen consejos utiles al usuario, asi como novedades o noticias que los propietarios editan a su gusto.',
    productId: 'DUppO5fQH2DKx1JwC5pM',
    enabled: true,
  },
];

export const productVideos: ProductVideo[] = [
  {
    id: 'vid-7luOevvxPv2oMNS1Fl14',
    productId: '7luOevvxPv2oMNS1Fl14',
    title: 'Videos demostrativos del proyecto',
    productTitle: 'RickAndMorty 2024',
    description: 'Recorrido en video por las principales funcionalidades de la aplicación RickAndMorty 2024.',
    enabled: true,
    videos: [
      {
        id: 'v1',
        name: 'Presentación general',
        youtubeId: 'dQw4w9WgXcQ',
      },
    ],
  },
];

export const aboutData: IAbout[] = [
  {
    id: 'about-main',
    title: 'Acerca de mí',
    text: '<p>Soy desarrollador web full-stack especializado en Node.js, React y TypeScript. Creo soluciones modernas, rápidas y escalables adaptadas a cada negocio.</p>',
    enabled: true,
  },
];

