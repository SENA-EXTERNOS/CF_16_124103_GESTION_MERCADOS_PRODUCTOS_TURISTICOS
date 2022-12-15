<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-10.justify-content-center
        .row.justify-content-center.mb-3
          .col-lg-3.justify-content-center(data-aos="flip-up")
            figure
              img(src='@/assets/curso/temas/intro.svg', alt='Texto que describa la imagen').animacion-flotante
          .col-lg-9.col-xs-6.mt-2
            p.mt-3 Estimado aprendiz, bienvenido a este recurso educativo. Al finalizar este recurso se espera que logre manejar contenido en una #[strong comunidad virtual] de acuerdo con estrategias de #[em marketing] y comunicación digital, con el fin de que, a futuro, pueda estructurarla de acuerdo con técnicas de #[em marketing] digital y tipo de negocio. Con los recursos que aprenda aquí, podrá usar los canales de comunicación digitales de manera oportuna, según las características de cada empresa. Es necesario crear parrillas de contenidos digitales que organicen las publicaciones diarias, tener en cuenta la propiedad intelectual y conocer la normativa de seguridad de la información.

    .row.justify-content-center
      p En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo.
      p.text-bold ¡Muchos éxitos en este proceso de aprendizaje!

      .row.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption VIDEO

      .row.justify-content-center.mt-5
        .col-lg-8
          .cajon.color1.p-4
            p Para ampliar la información descrita anteriormente, mire la siguiente infografía

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
