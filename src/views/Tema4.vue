<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normativa de la seguridad de la información

    .row.justify-content-center
      .col-lg-3.justify-content-center(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema4/t4-1.svg', alt='Texto que describa la imagen').animacion-flotante
      .col-lg-9.col-xs-6.mt-3
        p Según la plataforma de Función Pública, Colombia (2020), una de las materias primas más importantes para la administración, control y toma de decisiones que se tiene es la información generada, almacenada y gestionada por ella misma, por lo que, es vital instaurar políticas entendibles y concluyentes para su recolección, almacenamiento, administración y entrega. Es de gran relevancia tener en cuenta estas normativas al momento de gestionar comunidades virtuales.

    .row.justify-content-center.mt-5
      .col-lg-4          
        figure
          img(src='@/assets/curso/temas/tema4/t4-2.svg', alt='')
      .col-lg-8      
        AcordionA(tipo="b" clase-tarjeta="tarjeta acordeonA").mt-5
          .row(titulo="La tecnología, la materia prima más importante para la buena administración").p-3
            p Esta se va desarrollando, creciendo y evolucionando veloz y constantemente, solicitando instaurar normas de seguridad que disminuyan las alteraciones, escape o no disponibilidad de los datos durante las fases de producción, creación y ejecución de las herramientas, inclusive durante su uso. Es por esto que la misma busca: primero, la definición de normas, revisiones, roles y compromisos para la dirección de la información; segundo, administrar lo mejor posible las amenazas que puedan tener los sistemas informativos de revisión y administración; y, tercero, restringir la posibilidad de ataques que violenten y den mala utilidad a los datos. 
          
          .row(titulo="Lineamientos en seguridad").p-3
            p Función Pública (2020) fortalece en un documento los lineamientos que garantizan la privacidad, rectitud, disponibilidad, no rechazo y acatamiento de los deberes en cuanto al uso de datos personales, el buen tratamiento y seguridad de la información, además del funcionamiento apropiado de las herramientas tecnológicas disponibles para los beneficiarios.
            
          .row(titulo="La Política de Seguridad de la Información Institucional").p-3
            p Intenta resguardar los activos de datos (información, grupos de valor, procedimientos, TI como #[em software] y #[em hardware]), a través de la instauración de normas generales para aplicar la seguridad informativa en la administración de los procedimientos al interior de las empresas, según el contexto del Modelo Integrado de Planeación y Gestión. La normativa de seguridad informativa se robustece a través de los procesos, consejos, instructivos, divulgaciones, revisiones tecnológicas y administrativas, además de la determinación de roles y compromisos.

          .row(titulo="Algunos de los objetivos específicos de esta normativa").p-3
            ul.lista-ul
              li 
                i.fas.fa-check.vineta-fuscia
                | Optimizar de forma continua las destrezas y experticias requeridas en funcionarios públicos con el fin de lograr la identificación, reporte y gestión de los peligros de seguridad digital a través de acciones de capacitación y aprendizaje. 
              li 
                i.fas.fa-check.vineta-fuscia
                | Realizar, conservar y perfeccionar cada año el grupo de revisiones de seguridad informativa que se recomiendan por el método de privacidad y seguridad informativa a través del empleo del plan de privacidad y seguridad informativa institucional, para conservar en porcentajes admisibles los peligros excedentes de seguridad digital.
              li 
                i.fas.fa-check.vineta-fuscia
                | Fortalecer de manera continua la ocupación institucional a través de la ejecución, transmisión y optimización continua del método de privacidad y seguridad informativa para perfeccionar la credibilidad de los actores interesados en la responsabilidad institucional de resguardar de forma adecuada la privacidad, integridad y disposición de los datos con el compromiso de la entidad.

          .row(titulo="Las normas de Seguridad de la Información").p-3
            p Se aplican a los actores de Función Pública, como todos los funcionarios públicos, asistentes y contratistas que administran y/o gestionan datos de la entidad, comprendidas las operaciones de compilación, estudio, proceso, disposición, protección, mantenimiento y rescate de la información. 

          .row(titulo="La norma ISO 27001").p-3
            p Internacionalmente es la que rige y, es legítima y reconocida en casi todos los países como modelo que instaura cómo una empresa puede desarrollar su procedimiento de gestión de seguridad informática. Esta admite que las empresas evalúen el peligro y la aplicación de los exámenes requeridos para atenuarlos o excluirlos. Los requerimientos se contienen en una distribución de 10 capítulos, que como las demás Normas ISO (por ejemplo, ISO 9001 o la ISO 14001), goza de excelente aprobación por parte de las compañías. Es por esto que se hace bastante simple para una empresa efectuar una unificación en su procedimiento de gestión que acumule las exigencias habituales y específicas de cada norma, por ejemplo.

    .row.justify-content-center
      p Para conocer más sobre la Norma ISO 27001 que rige para Colombia, consulte el siguiente documento complementario. Leer documento

    .row.justify-content-center.mt-5
      .col-lg-10
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-11.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco  #[strong Leer documento.]
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://img1.wsimg.com/blobby/go/b653c9ee-535c-4528-a9c5-bb00166ad0dc/downloads/1cd65ml0r_919353.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color1.p-4
          p De acuerdo con lo anterior, en la siguiente infografía encontrará información sobre el marco normativo.

    h3(data-aos="fade-left").mt-5 Marco normativo

    .row.justify-content-center
      p La mayor parte de actividades y trabajos realizados por las empresas crea una alta cantidad de datos confidenciales recogidos a través de diferentes documentos, como lo son, facturas, órdenes de compra, órdenes de pago y nómina, entre otros. Es vital implementar medidas de seguridad de la información para poder desarrollar trabajos de manera oportuna y, además, para poder cumplir con las leyes actuales relacionadas con la protección de los datos.

    .row.justify-content-center
      .col-lg-10.mt-5
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/t4-3.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="10%" y="30%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Exámenes de ingreso a la información más estricta
              p Limitar el acceso a los datos es una importante medida de seguridad. Mientras menos personas accedan a los datos, menos será el peligro. Por eso, se requiere del implante de un sistema que imposibilite el ingreso a la información por parte de usuarios, empleados, clientes, etc.

          .tarjeta.color-acento-botones.p-3(x="30%" y="30%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Ejecutar copias de seguridad
              p Tener un sistema de #[em back ups] (copias de seguridad) frecuentemente, admite que el negocio certifique que puede rescatar la información ante eventos desastrosos, imposibilitando la pérdida de los datos y consintiendo la restauración de la normalidad hacia el interior de la empresa en unos instantes.

          .tarjeta.color-acento-botones.p-3(x="50%" y="30%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Usar claves seguras
              p  El ingreso a las diferentes plataformas que usa la marca, como, por ejemplo, el #[em eMail], el servidor de #[em back ups], las redes sociales, los ecosistemas digitales, etc., debe ser realizado usando contraseñas de seguridad seguras, que imposibiliten ser descubiertas por piratas informáticos. La utilización de claves seguras es una medida básica de seguridad informática relevante que puede tener cualquier negocio.  

          .tarjeta.color-acento-botones.p-3(x="70%" y="30%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Proteger el correo electrónico
              p Actualmente, muchas de las comunicaciones empresariales se realizan usando el #[em eMail]. Por eso, una medida de seguridad de la información importante es usar sistemas de encriptado de mensajes y filtros anti #[em spam], que aseguren el amparo y la intimidad de todos los datos.
          .tarjeta.color-acento-botones.p-3(x="90%" y="30%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Contratar un #[em software] integral de seguridad
              p Lo ideal es lograr la protección de la información en la #[em web] y la mejor forma de hacerlo es a través del contrato de un equipo de seguridad integral que agrupe anti virus, anti espías, anti #[em malware, firewall], etc., y que proteja los datos ante posibles ataques cibernéticos provenientes del exterior por medio de la red.      

          .tarjeta.color-acento-botones.p-3(x="20.3%" y="68.5%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Monitorización continua y respuesta inmediata.
              p En toda empresa se debe instaurar un sistema que permita el monitoreo de la administración de la información para poder detectar los posibles errores o acciones que no son correctas. Es un sistema de control que permite actuar de manera rápida para solucionar cualquier problema y disminuir las consecuencias.  

          .tarjeta.color-acento-botones.p-3(x="40.3%" y="68.5%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Incluir a toda la empresa en la seguridad
              p Para tener buenas medidas de seguridad de la información empresarial, se deben incluir en todas las áreas para que participen de la misma, conteniendo a los actores externos como lo son el público objetivo, proveedores, distribuidores, aliados, etc. Frecuentemente, las empresas implantan sistemas de seguridad oportunos, pero, puede estar cuando se relaciona con un tercero que no posee medidas de seguridad correctas.

          .tarjeta.color-acento-botones.p-3(x="60.3%" y="68.5%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Trabajar en la nube
              p Permite contar con sistemas de seguridad informática que tiene el proveedor del servicio. Además, el proveedor del servicio es quien se responsabiliza de su seguridad.

          .tarjeta.color-acento-botones.p-3(x="80.3%" y="68.5%" tooltip="" numero="")
            .row.justify-content-center
              h4.mb-4.text-center Usar programas de Prevención de Pérdidas de Datos (DLP)
              p Estos programas se pueden implementar como medida de seguridad empresarial para controlar que ningún beneficiario copie o comparta datos que no están permitidos.                                                

    .row.justify-content-center.mt-5
      p Para conocer más sobre el marco normativo se deja el siguiente enlace que lleva al documento de ‘Seguridad de la Información’ de Función Pública para Colombia:
      .col-lg-10.mt-3
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-11.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco  #[strong Leer documento.]
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/documents/418537/36701283/politica-de-seguridad-de-la-informacion.pdf.pdf/325019e5-a92f-0b44-3676-2356bd71240c?t=1586355315672" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    h3(data-aos="fade-left").mt-5 Protocolos básicos de seguridad informática

    .row.justify-content-center.mt-3
      p En cuanto a los protocolos de seguridad de la información, revise los contenidos dispuestos en el anexo 7. ‘Protocolos básicos de seguridad informática.’
      .col-lg-10.mt-3
        .tarjeta.color-descarga.p-4
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/t1-11.svg").icono
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco  #[strong Anexo 7 - Protocolos básicos de seguridad informática]
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_7_Protocolo_basicos_de_seguridad_informatica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download      

    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color1.p-4
          p.text-center De acuerdo con lo anterior, es hora de mirar la síntesis de este componente formativo.

</template>

<script>
export default {
  name: 'Tema4',
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
