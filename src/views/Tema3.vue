<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Propiedad intelectual (PI)

    .row.justify-content-center
      figure
        img(src='@/assets/curso/temas/tema3/t3-1.svg', alt='Texto que describa la imagen').animacion-flotante

    .row.justify-content-center.mt-5.mb-0
      .col-lg-10
        .bloque-texto-1
          .bloque-texto-1__texto
            p Según la Organización Mundial de la Propiedad Intelectual (OMPI), la propiedad intelectual (PI) está relacionada con creaciones realizadas por el ser humano como, por ejemplo, innovaciones, invenciones, trabajos literarios y artísticos, signos, símbolos, nombres, sonidos, olores e imágenes que pueden ser usados a nivel comercial. En la gestión de comunidades virtuales se hace necesario tener en cuenta este tema.
            p.mb-0 Por eso, existe una reglamentación que salvaguarda la PI, por ejemplo, a través de normas como, patentes, derechos de autor y marcas, que admiten la obtención de reconocimiento o, incluso, dividendos económicos por los inventos realizados. Equilibrando los intereses de los creadores con los del público en general, el sistema de PI intenta promocionar un ambiente adecuado para proteger la innovación y la creación de nuevas ideas.

    .row.justify-content-center.mt-0
      .col-lg-10
        .bloque-texto-2
          .bloque-texto-2__texto
            p La PI hace referencia a toda creación realizada desde el intelecto humano, tales como: trabajos artísticos hasta inventos, innovaciones, <i>softwares</i>, marcas y demás símbolos comerciales.    

    .row.justify-content-center
      .col-lg-8
        .cajon.color1.p-4
          p De acuerdo a lo anterior, conozca los tipos de propiedad intelectual.

    h3(data-aos="fade-left").mt-5 Tipos de propiedad intelectual
    .row.justify-content-center
      p Los tipos de propiedad intelectual son derechos de autor, patentes y marcas, los cuales están detallados a continuación:
      TabsA.color-acento-contenido.mt-3
        .tarjeta.color-acento-contenido.p-3(style="background-color:#fee3e4" titulo="Tipos de PI")
          .row.justify-content-center.p-3
            .col-5.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/t3-2.svg', alt='')           

            .col-lg-9
              ul.lista-ul
                li 
                  i.fas.fa-check.vineta-fuscia
                  | Derechos de autor.
                li 
                  i.fas.fa-check.vineta-fuscia
                  | Patentes.
                li 
                  i.fas.fa-check.vineta-fuscia
                  | Marcas.
        
        .tarjeta.color-acento-contenido.p-3(style="background-color:#fee3e4" titulo="Derechos de autor")
          .row.justify-content-center.p-3
            .col-5.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/t3-3.svg', alt='')           

            .col-lg-9
              p Son la protección de una idea #[em (idea protection)]. Legalmente, esta expresión se usa para representar los derechos de los inventores sobre sus trabajos literarios y artísticos. Se refiere a obras que se protegen en esta modalidad y que pueden ir desde escultura, pintura, música, libros y películas, hasta los #[em softwares], símbolos, audios, olores, anuncios publicitarios, bases de datos, BD, dibujos técnicos y mapas.
              p La reglamentación no tiene una lista absoluta de las obras o trabajos que cobijan los derechos de autor. Sin embargo, las siguientes son algunas que habitualmente se protegen bajo esta legislación:
              ul.lista-ul.ps-5
                li 
                  i.fas.fa-check.vineta-fuscia
                  | Trabajos literarios como poemas, novelas, obras de referencia, escrituras escénicas, artículos de prensa, entre otras.
                li 
                  i.fas.fa-check.vineta-fuscia
                  span #[em Software] y BDs.
                li 
                  i.fas.fa-check.vineta-fuscia
                  | Películas, coreografías y composiciones musicales.    
                li 
                  i.fas.fa-check.vineta-fuscia
                  | Trabajos artísticos como esculturas, fotografías, dibujos, pinturas y cuadros.
                li 
                  i.fas.fa-check.vineta-fuscia
                  | Arquitectura, planos arquitectónicos, construcción.
                li 
                  i.fas.fa-check.vineta-fuscia
                  |	Publicidad, anuncios, campañas, dibujos técnicos, símbolos y mapas.  
              p Esta protección cobija solamente a las expresiones, no a los conceptos, operaciones, procesos, métodos de procedimiento o ideas matemáticas en sí. Los derechos de autor pueden proteger o no elementos como, titulares, lemas, eslóganes o distintivos visuales, dependiendo de que sea suficiente la concepción del trabajo.                    

        .tarjeta.color-acento-contenido.p-3(style="background-color:#fee3e4" titulo="Patentes")
          .row.justify-content-center.p-3
            .col-5.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/t3-4.svg', alt='')           

            .col-lg-9
              p Son un derecho exclusivo que se confiere sobre un invento. Generalmente, es un manifiesto que autoriza al dueño a definir si el invento puede ser usado por terceros y de qué manera. Como contrapeso, en la publicación del documento, el dueño brinda al público los datos técnicos relacionados con el invento.
              p Inicialmente, este posee el exclusivo derecho a imposibilitar que pueda ser patentado y se explote de forma comercial por terceros, con lo cual  quiere decir que a un invento no se le puede dar uso, ni de producción o distribución con un objetivo comercial, sin su aval.
              p Ahora bien, las patentes analizadas desde un aspecto territorial, generalmente, poseen exclusivos derechos que corresponden y son válidos únicamente en el país de origen donde se presentó la solicitud y se concedió el manifiesto, de conformidad con la reglamentación de esa región.

        .tarjeta.color-acento-contenido.p-3(style="background-color:#fee3e4" titulo="Marcas")
          .row.justify-content-center.p-3
            .col-5.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/t3-5.svg', alt='')           

            .col-lg-9
              p Es el Registro de Marca (copyright), que es un signo que sirve para observar las diferencias entre bienes o servicios existentes de un negocio a otro. Las marcas son derechos de PI que se encuentran amparados. A nivel regional o nacional, una marca se puede proteger registrándose, es decir, exhibiendo una solicitud para registrarla en la oficina de marcas y pagando el dinero correspondiente. A nivel global, hay dos elecciones: primero, mostrar la solicitud en la oficina de todos los países en donde se desee tener esta protección; o segundo, usar el Sistema de Madrid, que viene siendo una solución hábil y económica con la que se puede hacer registro y gestión de marcas a nivel internacional. Solo se requiere de la presentación de una sola solicitud y hacer un pago para pedirla en máximo 128 países. 
              p Inicialmente, el registro de marca es conferido al dueño, es decir, a quien posee los exclusivos derechos de uso. O sea, la marca puede ser usada únicamente por él, o a cambio de un dinero, puede ser conferida en licencia a un tercero. Es una estrategia que brinda seguridad legal y robustece la posición del dueño del exclusivo derecho.
              p El tiempo en el que el registro es válido varía, pero, por lo general, son diez años, que se pueden renovar de manera indefinida si se hace un pago adicional. Es un derecho privado donde el amparo se hace presente en los estrados judiciales.
              p Las marcas consisten en una palabra o varias palabras, cifras y letras. También consisten en símbolos, dibujos, particularidades tridimensionales, como la forma, el empaque y el envase de bienes; o también, en signos que no se ven, como, por ejemplo, sonidos, olores o colores usados como particularidades distintivas; por lo tanto, las opciones que se pueden tener para protegerlas son muy amplias.

    h3(data-aos="fade-left").mt-5 Derechos de la PI

    .row.justify-content-center
      p En cuanto a los derechos de la propiedad intelectual, revise los contenidos dispuestos en el anexo 5. ‘Derechos de la PI’.

    .row.justify-content-center.mt-3
      .col-lg-10
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-11.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco  #[strong Anexo 5 - Derechos de la PI]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_5-Derechos de la PI.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    h3(data-aos="fade-left").mt-5 Sujetos de la PI

    .row.justify-content-center
      p Revise los contenidos dispuestos en el anexo 6. ‘Sujetos de la PI’, para ampliar información de los sujetos de la propiedad intelectual.


    .row.justify-content-center.mt-3
      .col-lg-10
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-11.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco  #[strong Anexo 6 - Sujetos de la PI]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_6-Sujetos de la PI.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color1.p-4
          p.text-center Conozca a continuación sobre la normatividad de seguridad.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
