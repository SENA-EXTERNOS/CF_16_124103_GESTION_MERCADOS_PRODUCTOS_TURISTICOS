<template lang="pug">
.curso-main-container.pb-3
  BannerInterno()
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-puzzle-piece
      h1 Actividad didáctica    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .titulo-segundo.color-acento-contenido
        h2 Gestión de comunidades virtuales 
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-frase.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9

        p.mb-4 No olvide desarrollar la actividad interactiva que le permitirá conocer lo aprendido durante el desarrollo de este componente formativo.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar la frase
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
