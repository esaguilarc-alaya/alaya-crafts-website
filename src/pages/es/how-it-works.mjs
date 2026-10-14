import { renderLayout } from "../../shared/layout.mjs";
import { hrefFor } from "../../shared/routes.mjs";

const body = (basePath) => `
<div class="idea-body"><div class="wrap">
  <div class="hero">
    <p class="eb">Cómo funciona</p>
    <h1>Vea cómo se hace una lectura.</h1>
    <p>Un profesional describe una pieza de trabajo. CIE la lee, vincula cada lectura con una oración citada y dice con claridad qué está establecido, qué es emergente y qué sigue siendo desconocido.</p>
    <div class="hero-cta"><a class="btn" href="mailto:curious@alayacrafts.com?subject=Acceso%20anticipado">Solicitar acceso anticipado</a></div>
  </div>

  <section>
    <p class="eb">Una pieza de trabajo, leída</p>
    <h2>Un ejemplo, del relato a la lectura.</h2>
    <p>Este ejemplo es ilustrativo. Muestra la forma de lo que CIE devuelve, no el registro de una persona real.</p>
    <div class="ex">
      <div class="xr"><div class="xl">El relato</div><div><p><q>Lideré la migración de un servicio de facturación heredado durante un lanzamiento con clientes en vivo. <mark>Coordiné a ingeniería, finanzas y soporte</mark>, mantuve la continuidad de los reportes y <mark>reduje los pagos fallidos después del cambio</mark>.</q></p></div></div>
      <div class="xr"><div class="xl">La lectura</div><div><p><b>Práctica &mdash; Transición.</b> El trabajo llevó algo de un arreglo a otro.</p><p><b>Relacional.</b> Anclada en: <q>Coordiné a ingeniería, finanzas y soporte</q></p><p><b>Ejecución.</b> Anclada en: <q>reduje los pagos fallidos después del cambio</q></p></div></div>
      <div class="xr st"><div class="xl">Estado</div><div><p><b>Emergente.</b> Un relato respalda esta lectura. Merece examinarse; no es un veredicto. Donde el trabajo no muestra nada, la lectura sigue siendo <b>desconocida</b>.</p></div></div>
    </div>
  </section>

  <section>
    <p class="eb">El método</p>
    <h2>No es un puntaje. No es una caja negra.</h2>
    <p>CIE no produce una calificación ni pide confiar en un juicio invisible. Cada lectura está vinculada con la oración del relato que la respalda, de modo que la evidencia puede verse, revisarse y dejarse de lado.</p>
    <div class="pull"><p>Alaya no pide que se confíe en el resultado. Muestra cómo se llegó a él.</p></div>
  </section>

  <section>
    <p class="eb">En la práctica</p>
    <h2>Tres pasos.</h2>
    <ol class="steps"><li><div class="n">Uno &middot; describir</div><p>Una conversación sobre una pieza de trabajo que realmente se hizo: la situación, lo que se hizo y cómo terminó.</p></li><li><div class="n">Dos &middot; revisar</div><p>CIE propone lecturas, cada una vinculada con la oración que la respalda. Usted las ve y usted decide.</p></li><li><div class="n">Tres &middot; conservar</div><p>Solo lo que usted confirma pasa a su registro. Es suyo para conservarlo y mantenerlo.</p></li></ol>
  </section>

  <section>
    <p class="eb">Lo que se vuelve posible</p>
    <h2>El mismo método, dos formas de entrar.</h2>
    <div class="eng">
      <div class="ec"><div class="n">Profesionales</div><h3>Trabajo que no se había pensado como capacidad, hecho visible</h3><p>Un registro que usted conserva y mantiene, construido con lo que realmente hizo, y al que puede señalar.</p><a class="more" href="${hrefFor("/es/cie-professional/", basePath)}">Explore CIE Professional</a></div>
      <div class="ec"><div class="n">Organizaciones</div><h3>Lo que la organización ha demostrado que puede hacer</h3><p>Capacidad leída a partir de relatos de trabajo real, y dónde depende de muy pocas personas.</p><a class="more" href="${hrefFor("/es/for-organizations/", basePath)}">Para Organizaciones</a></div>
    </div>
  </section>

  <section>
    <p class="eb">Preguntas</p>
    <h2>Lo que se pregunta primero.</h2>
    <dl class="faq"><dt>¿CIE decide si una persona dice la verdad?</dt><dd>No. No juzga la verdad. Hace más fácil notar una afirmación que ningún trabajo respalda.</dd><dt>¿Un solo relato impresionante puede crear una capacidad?</dt><dd>No. Un relato es una lectura que merece examinarse. Que una capacidad quede establecida depende de que aparezca en relatos de situaciones distintas.</dd><dt>¿Quién es dueño del registro?</dt><dd>El profesional. Solo lo que él o ella confirma pasa a formar parte de él.</dd><dt>¿Y si falta evidencia?</dt><dd>La capacidad se marca como desconocida. Nada se rellena para que un perfil parezca completo.</dd><dt>¿CIE es un producto de IA?</dt><dd>CIE usa IA para sostener la conversación y para leer el relato. Lo que devuelve nunca es un veredicto: cada lectura señala la oración que la respalda, y una persona confirma lo que pasa a su registro.</dd></dl>
  </section>

  <section>
    <p class="eb">Acceso anticipado</p>
    <h2>Sea de los primeros.</h2>
    <p>CIE se está construyendo con los primeros profesionales y organizaciones que lo usen. Escríbanos y le diremos en qué consiste el acceso anticipado.</p>
    <div class="hero-cta"><a class="btn" href="mailto:curious@alayacrafts.com?subject=Acceso%20anticipado">Solicitar acceso anticipado</a></div>
  </section>
</div></div>
`;

export const howItWorksPageEs = {
  outputPath: "es/how-it-works",
  render: (basePath) => renderLayout({ title: "Cómo funciona — Alaya Crafts", description: "Vea cómo CIE lee la capacidad a partir de un relato de trabajo real: anclada en una oración citada, con lo establecido, lo emergente y lo desconocido por separado.", activeRoute: "how", body: body(basePath), pageClass: "home-page", pageStyles: "/assets/home.css", basePath, lang: "es", pagePath: "/es/how-it-works/" }),
};
