export default {
  global: {
    componenteFormativo: 'Gestión de comunidades virtuales',
    descripcionCurso:
      'La gestión de comunidades virtuales implica un conocimiento sobre el ecosistema digital, de tal forma que se puedan usar los canales de comunicación digitales de manera oportuna, según las características de cada empresa. Es necesario crear parrillas de contenidos digitales que organicen las publicaciones diarias, tener en cuenta la propiedad intelectual y conocer la normativa de seguridad de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ecosistemas digitales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Parrilla de contenidos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Propiedad intelectual (PI)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normativa de la seguridad de la información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ecosistemas digitales',
      referencia:
        'Duplica más (2020) <em>Cómo funciona el ecosistema digital</em> [video] YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XyB2CAbMGTw&t=47s',
    },
    {
      tema: 'Parrilla de contenidos digitales',
      referencia:
        'Guzmán, L. (2021) <em>Organiza el contenido de tus redes sociales en una parrilla de contenidos</em>. [video] YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TM795AkMnCg',
    },
    {
      tema: 'Propiedad Intelectual (PI)',
      referencia:
        'Organización Mundial de la Propiedad Intelectual –OMPI y Organización Mundial del Turismo - OMT (2021) <em>Promover el desarrollo del turismo mediante la propiedad intelectual.</em>',
      tipo: 'Publicación electrónica',
      link: 'https://www.wipo.int/edocs/pubdocs/es/wipo_pub_1054.pdf',
    },
    {
      tema: 'Normativa de Seguridad de la Información',
      referencia:
        'Ministerio de Medio Ambiente y Desarrollo Sostenible -Minambiente (2021) <em>Manual de seguridad de la información.</em>',
      tipo: 'Manual',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/06/Manual-de-seguridad-de-la-informacion-M-E-GET-01.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Contenidos digitales',
      significado:
        'son cualquier publicación informativa que una marca puede compartir en medios digitales y que tienen diferentes posibilidades en formatos, como, por ejemplo, texto, imagen, audio, video, infografía, multimedia, mapas mentales, etc.',
    },
    {
      termino: 'Conversión',
      significado:
        'es el porcentaje de individuos que terminan realizando la acción que una marca desea que hagan, como, por ejemplo, comprar, suscribirse, registrarse, dar <em>likes</em>, entre otras. ',
    },
    {
      termino: 'Derechos de autor',
      significado:
        'grupo de reglamentos jurídicos y normas que certifican los derechos patrimoniales y morales que la ley otorga a los creadores, por haber sido los autores de un trabajo artístico, literario, científico, musical o didáctico, sin importar si se ha publicado o es inédito.',
    },
    {
      termino: 'Ecosistema digital',
      significado:
        'grupo de TI que se hallan interrelacionadas unas con otras. Se refiere a todas las herramientas que usa una empresa para administrar sus proyectos.',
    },
    {
      termino: '<em>Landing Page</em>',
      significado:
        'página web a la que un individuo llega luego de dar clic en un hipervínculo, que puede estar ubicado en un <em>blog</em>, portal, <em>banner</em>, red social, correo electrónico o anuncio publicitario.',
    },
    {
      termino: 'Parrilla de contenidos',
      significado:
        'herramienta que sirve para organizar inteligentemente las diferentes publicaciones que una marca desea compartir con su público objetivo a través de los diferentes medios digitales, como, por ejemplo, redes sociales, <em>blog, landing page</em> y correo electrónico.',
    },
    {
      termino: 'Patente',
      significado:
        'grupo de derechos distintivos que se conceden por un país al creador de un nuevo producto o tecnología, con el fin de explotarse de manera comercial por una etapa limitada de tiempo, a cambio de la promoción de la creación.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'tiene que ver con un bien cultural y económico que contiene productos tangibles e intangibles, que se reconocen en la mayoría de lineamientos de los países y que se pueden explotar económicamente por parte de los dueños legales.',
    },
    {
      termino: 'Tecnologías de la Comunicación y la Información',
      significado:
        'son tecnologías que usan las telecomunicaciones, informática y microelectrónica para desarrollar novedosas maneras de comunicación a partir de herramientas tecnológicas y comunicacionales, con el objetivo de facilitar la transferencia, acceso y uso de la información.',
    },
    {
      termino: 'Tráfico',
      significado:
        'es el porcentaje de individuos que visitan el sitio web de una marca en especial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Documento electrónico: Función Pública. (2020). <em>Políticas de Operación Proceso de Tecnologías de la Información</em>',
      link:
        'https://www.funcionpublica.gov.co/documents/418537/36701283/politica-de-seguridad-de-la-informacion.pdf.pdf/325019e5-a92f-0b44-3676-2356bd71240c?t=1586355315672',
    },
    {
      referencia:
        'Libro: Martín, D. C. (2018). SEO. Curso práctico. RA-MA Editorial',
      link: '',
    },
    {
      referencia:
        'Libro: Nespral, D., y Hergueta, R. (2021). <em>El modelo descentralizado hacia la economía digital</em>. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Sitio web: Organización Mundial de la Propiedad Intelectual - OMPI. (s.f.) <em>OMPI</em>.',
      link: 'https://www.wipo.int/portal/es/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
