import { renderLayout } from "../../shared/layout.mjs";
import { hrefFor } from "../../shared/routes.mjs";

const body = (basePath) => `
<div class="idea-body"><div class="wrap">
  <div class="hero">
    <p class="eb">Capability intelligence</p>
    <h1>La capacidad, leída desde el trabajo mismo.</h1>
    <p>La capacidad es lo más difícil de ver para cualquier organización y sin embargo lo más fácil de reivindicar. Alaya lee la capacidad a partir de relatos profesionales vinculados a una contribución completada y verificable —en una persona y en una organización— <b>para poder visibilizarla, cultivarla y darle una dirección.</b></p>
    <div class="hero-cta"><a class="btn" href="${hrefFor("/es/how-it-works/", basePath)}">Comenzar con CIE</a></div>
  </div>

  <!-- PROBLEM -->
  <section id="what">
    <p class="eb">El problema que nadie está resolviendo</p>
    <h2>Lo más difícil de ver es lo que las personas ya saben hacer.</h2>
    <p>Pregunte a un profesional capaz en qué es bueno y obtendrá títulos de puesto y adjetivos. No porque oculte algo, sino porque el momento en que lo recordaría y entendería el impacto de su trabajo solo ocurre cuando alguien pregunta bien, con interés genuino, y casi nadie lo hace.</p>
    <p>Pregunte a una organización qué puede hacer y obtendrá un organigrama y un inventario de departamentos y habilidades declaradas. La misma brecha, un piso más arriba, con un presupuesto mayor detrás.</p>

    <div class="pull">
      <p>Ambas partes adivinan lo mismo desde extremos opuestos, y ninguna tiene un instrumento adecuado.</p>
    </div>

    <p><b>El costo de eso es silencioso, y por eso persiste.</b> Presupuesto de desarrollo dirigido a una capacidad que ya existía. Personas contratadas afuera para un trabajo que alguien adentro ya había hecho dos veces. Proyectos que no se intentaron porque nadie sabía que la empresa podía hacerlos. Proyectos lanzados que no avanzan como se esperaba. La explicación y las posibles soluciones parecen no aparecer en ningún lado, porque lo que las habría hecho visibles nunca ha existido.</p>
    <p>La evidencia existe: está en lo que las personas hicieron el trimestre pasado y el anterior. Simplemente nunca se ha capturado de forma consistente, de modo que pudiera convertirse en un instrumento que dé la orientación necesaria para ir en la dirección deseada, tanto a profesionales como a organizaciones.</p>
  </section>

  <!-- WHAT IT DOES -->
  <section>
    <p class="eb">Lo que hace Alaya</p>
    <h2>La capacidad se cultiva, no se mide con números.</h2>
    <p>No es un inventario guardado en una bodega esperando ser contado. Crece mediante el oficio: práctica deliberada, repetida, en condiciones reales. Nombrarla no hace nada por ella. Darle una calificación hace aún menos.</p>

    <div class="pull">
      <p>Pero comprender el panorama provee la visibilidad para cultivar, hacer crecer y dirigir la capacidad hacia los objetivos deseados.</p>
    </div>

    <div class="landscape" aria-label="El panorama vivo de la capacidad"><picture><source srcset="${hrefFor("/assets/alaya-05-living-field-mobile.svg", basePath)}" media="(max-width: 820px)"><img class="field-svg" src="${hrefFor("/assets/alaya-05-living-field-desktop.svg", basePath)}" alt="" aria-hidden="true"></picture><p class="field-label capability">Capacidad <small>El terreno vivo.</small></p><p class="field-label experience">Experiencia <small>Donde la capacidad se desarrolla y se ejerce.</small></p><p class="field-label practice">Práctica <small>Cómo se cultiva y se renueva la capacidad.</small></p><p class="field-label contribution">Contribución <small>La capacidad expresada en trabajo que crea valor.</small></p><p class="field-label knowledge">Conocimiento <small>Conserva y lleva adelante lo aprendido.</small></p><p class="field-label curiosity">Curiosidad <small>Mantiene vivo el desarrollo del campo.</small></p></div>

    <h2 class="sub">Cómo ve Alaya la capacidad.</h2>
    <p>Por eso Alaya lee relatos profesionales de lo que realmente se hizo, <b>en dos ejes a la vez</b>.</p>
    <div class="ax2">
      <div class="axc">
        <div class="t">Dónde: siete prácticas</div>
        <h3>Lo que el acto cambió</h3>
        <div class="row"><b>Indagación</b><span>Lo que se sabe.<span class="d">Descubrir lo que aún no se sabía: una causa rastreada, una pregunta contestada, una posibilidad puesta a prueba.</span></span></div>
        <div class="row"><b>Dirección</b><span>Lo que queda decidido.<span class="d">Convertir una pregunta abierta en una decisión sobre la que otros pueden construir: una elección hecha, una prioridad fijada, un camino acordado.</span></span></div>
        <div class="row"><b>Creación</b><span>Lo que existe.<span class="d">Dar existencia a algo que no estaba: un sistema construido, un proceso diseñado, un documento escrito.</span></span></div>
        <div class="row"><b>Transición</b><span>Una disposición.<span class="d">Pasar algo de una disposición a otra: una migración, un traspaso, un despliegue, una reestructuración.</span></span></div>
        <div class="row"><b>Validación</b><span>Lo que se acepta.<span class="d">Establecer que algo es confiable: una prueba superada, un riesgo examinado, un resultado verificado.</span></span></div>
        <div class="row"><b>Formación</b><span>La capacidad de una persona.<span class="d">Dejar a otra persona en condiciones de hacer lo que antes no podía: enseñar, acompañar, transmitir una habilidad.</span></span></div>
        <div class="row odd"><b>Operación</b><span>Nada: mantiene un estado frente a la presión.<span class="d">Mantener algo funcionando o íntegro mientras ambientes impredecibles lo empujan en contra: un incidente contenido, un servicio sostenido bajo tensión.</span></span></div>
      </div>
      <div class="axc">
        <div class="t">Cómo: cinco dimensiones</div>
        <h3>La forma en que se manifestó</h3>
        <div class="row"><b>Razonamiento</b><span>Lo que dedujeron sin que se desprendiera de lo que tenían enfrente.</span></div>
        <div class="row"><b>Percepción</b><span>Lo que notaron, que estaba a la vista de cualquiera y que nadie atendía.</span></div>
        <div class="row"><b>Relacional</b><span>Cómo lograron el acuerdo, la decisión o el esfuerzo de alguien a quien no podían dirigir.</span></div>
        <div class="row"><b>Respaldo</b><span>Cómo mantuvieron a otra persona en condiciones de seguir adelante.</span></div>
        <div class="row"><b>Ejecución</b><span>Lo que realmente lograron, donde pudo haber fallado.</span></div>
      </div>
    </div>

    <p>Las prácticas no son puestos de trabajo: una práctica se clasifica por lo que el acto cambió. Una misma pieza de trabajo suele pertenecer a varias a la vez, y está permitido que así sea. Las dimensiones son las mismas en todas partes; lo que cambia con el oficio es la práctica en la que aparecen.</p>

    <div class="pull">
      <p>La capacidad es lo que está en la intersección. Ningún eje cuenta la historia completa, y una calificación dice menos que cualquiera de los dos.</p>
    </div>

    <p><b>Esa intersección es lo que la hace útil.</b> Un puntaje no señala una dirección. Saber que la fortaleza de alguien se manifiesta en los aspectos de razonamiento y relacionales del trabajo que cambia lo que queda decidido —y que se diluye donde el trabajo consiste en mantener algo estable— le dice a una persona hacia dónde empujar a continuación y le dice a una organización qué desarrollar, dónde desplegar y dónde está expuesta.</p>
    <p>Y cada lectura permanece anclada a la oración exacta del relato que la respalda. Sin evidencia, no hay lectura.</p>
  </section>

  <!-- DIFFERENT -->
  <section id="different">
    <p class="eb">La brecha, medida</p>
    <h2>El problema está documentado. El mercado apunta a otro lado.</h2>
    <p>Nada de lo que sigue es investigación nuestra. Es lo que la industria reporta sobre sí misma, y leído en conjunto describe organizaciones que no pueden ver lo que ya tienen, y a personas cuya capacidad pasa desapercibida dentro de ellas.</p>

    <div class="stats">
      <div class="sx hl">
        <div class="v">412<em>%</em></div>
        <p><b>más solicitudes por reclutador</b> entre 2022 y 2025, mientras que los reclutadores por organización bajaron <b>56%</b>. El tiempo para cubrir una vacante <b>subió 37%</b>: cinco veces el volumen, la mitad de las personas y más lento.</p>
      </div>
      <div class="sx">
        <div class="v">38<em>%</em></div>
        <p>de las organizaciones en <b>72 países</b> mantienen <b>una única biblioteca de habilidades para toda la empresa</b>. El otro 62% no puede decir en un solo lugar lo que tiene.</p>
      </div>
      <div class="sx">
        <div class="v"><span class="nu">75</span><em>/</em><span class="de">43</span></div>
        <p><b>75% de los ejecutivos</b> dicen que su organización tiene una estrategia de aprendizaje clara para el próximo año o dos. Solo <b>43%</b> de los colaboradores individuales coinciden.</p>
      </div>
    </div>
    <p class="src">Fuentes: <a href="https://www.greenhouse.com/recruiting-benchmarks">Greenhouse, The Hire Standard: Hiring Benchmarks 2026</a> &middot; <a href="https://www.mercer.com/insights/talent-and-transformation/skill-based-talent-management/rebuilding-reward-and-career-frameworks-based-on-skills/">Mercer, Skills Snapshot Survey 2025/26</a> (72 países) &middot; <a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/hr-monitor">McKinsey, HR Monitor 2026</a> &middot; <a href="https://action.deloitte.com/insight/5005/2026-talent-acquisition-technology-trends-the-new-imperative">Deloitte, 2026 Human Capital &amp; TA Technology Trends</a> &middot; <a href="https://go.perceptyx.com/state-of-learning-and-development-2026-web-report#executive-summary">&ldquo;The State of Learning and Development&rdquo; First Annual 2026</a></p>

    

    <h2 style="font-size:clamp(24px,3.4vw,32px);margin-top:48px">La diferencia no es la velocidad. Es hacia dónde apunta el instrumento.</h2>
    <p>Casi todo el capital y la ingeniería de los últimos años se fue a la puerta de entrada: emparejar, filtrar, ordenar, programar. Es un problema real y se está trabajando con ahínco. Pero no es el que describen las cifras anteriores.</p>
    <p>Lo que una organización realmente compra para ver a <i>las personas que ya tiene</i> es mucho más antiguo y mucho más delgado: un inventario de habilidades llenado por autoevaluación, una matriz de competencias, el recuerdo de un jefe en una revisión de talento. Ese es el estante en el que se ubica Alaya.</p>

    <div class="cmp">
      <div class="hd">Lo que las organizaciones compran hoy</div>
      <div class="hd b">Lo que hace Alaya</div>

      <div class="c">Un inventario de habilidades, llenado por autoevaluación y etiquetado de jefaturas.</div>
      <div class="c b">Lee <b>el relato de una pieza de trabajo acotada que realmente se hizo</b>.</div>

      <div class="c">Una calificación. Avanzado, Nivel 4, siete de diez.</div>
      <div class="c b">Evidencia <b>con la acción adjunta</b>; la evidencia acumulada aporta la comprensión.</div>

      <div class="c">Una afirmación de que alguien es un buen comunicador.</div>
      <div class="c b">Muestra <b>cuatro ocasiones en que logró mover a alguien que empezó en su contra</b>, y lo que cada una de esas personas quería inicialmente.</div>

      <div class="c">Un marco que pertenece a la empresa y que a la persona rara vez se le muestra.</div>
      <div class="c b"><b>Un registro que se construye con los profesionales y que ellos mismos conservan y mantienen.</b></div>

      <div class="c">Una tabla completa, donde una celda en blanco no significa nada en particular.</div>
      <div class="c b">Distingue entre lo <b>establecido</b>, lo <b>emergente</b> y lo <b>desconocido</b>. La mayor parte de un perfil honesto es lo desconocido.</div>
    </div>

    <p style="margin-top:26px">Sin puntajes, sin clasificaciones, sin juicios de personalidad, sin recomendaciones sobre un ser humano. Cada una de estas decisiones cuesta algo evidente y compra algo menos evidente: un sistema que no puede usarse en contra de quienes lo alimentan es un sistema al que las personas le dirán la verdad. Todo lo demás depende de eso.</p>
  </section>

  <!-- WHY NOW -->
  <section id="now">
    <p class="eb">Por qué hay un mercado</p>
    <h2>La cantidad es la razón, no el obstáculo.</h2>
    <p>Muchas empresas afirman ayudar a resolver este problema, tanto para organizaciones como para profesionales: automatizan la redacción de currículums por un lado, su análisis por el otro, y en el medio emparejan matrices de habilidades con descripciones de puesto.</p>
    <p>Lo que casi ninguna toca son <b>los artefactos que se están escribiendo y analizando</b>. La IA se aplica, muy rápido y muy bien, a un proceso defectuoso y a tres representaciones inusualmente pobres: <b>el currículum, la descripción de puesto y la matriz de habilidades</b>. Ninguna de ellas fue nunca una descripción decente de lo que una persona puede hacer. Automatizarlas en ambas direcciones no las convierte en una: hace que el mismo resultado deficiente llegue antes, en mayor cantidad, desde ambos lados a la vez.</p>


    <p><b>Cuando una señal se vuelve gratis de producir, deja de ser una señal.</b> Lo único que se recupera es algo más caro de falsificar. Construir una situación completa —cómo era antes, quién objetó, cuánto costó— no es algo que nadie haga por accidente.</p>
    <p><b>Y el problema hacia adentro es mayor que el de la contratación y está mucho menos atendido.</b> Las organizaciones están construyendo inventarios internos de habilidades a un ritmo considerable, y la investigación detrás de esa tendencia reporta más bibliotecas y más puestos mapeados. No muestra que la brecha de visibilidad se esté cerrando: el mapeo a nivel individual sigue apoyándose sobre todo en los puestos de trabajo (73%) y en la autoevaluación validada por jefaturas (71%), y 53% de las organizaciones no gestiona la competencia en absoluto. Catalogar habilidades declaradas más rápido no le dice a una empresa quién puede realmente hacer el trabajo. Es el problema del currículum otra vez, puertas adentro, con un presupuesto mayor detrás.</p>
    <p>Mientras tanto, la pregunta <i>¿ya tenemos a alguien que pueda hacer esto?</i> se ha vuelto costosa cuando se contesta mal. Contratar afuera una capacidad que ya existe adentro es un costo que nadie puede ver, porque lo que lo haría visible nunca ha existido.</p>
    </section>

  <!-- SERVICES -->
  <section id="services">
    <p class="eb">El motor</p>
    <h2>CIE — the Capability Intelligence Engine.</h2>
    <p>CIE es el motor que hace posible esto a escala, en manos de una organización o de un profesional: reúne relatos profesionales de lo que realmente se hizo y luego reconoce en ellos la capacidad. Tiene dos partes, que se muestran abajo, y la línea que las separa es el diseño.</p>

    <div class="eng">
      <div class="ec">
        <div class="n">Uno · la conversación</div>
        <h3>Una instancia de IA, con correa corta</h3>
        <p>Pregunta por trabajo que realmente se hizo —una situación, lo que la persona hizo, cómo terminó— y persigue los detalles que las personas pasan por alto sin darse cuenta: cómo era antes, cuántos, qué lo hizo difícil, quién tenía que estar de acuerdo.</p>
        <p><b>Su alcance está deliberadamente limitado.</b> No puede pedirle a nadie que se califique a sí mismo ni que esté de acuerdo con una interpretación. Recolecta. No juzga.</p>
      </div>
      <div class="ec">
        <div class="n">Dos · la lectura</div>
        <h3>Un sistema interno que reconoce un panorama</h3>
        <p>El resultado de la conversación se lee frente a un panorama de capacidad construido por Alaya: las <b>prácticas</b>, que describen dónde se ejerce la capacidad, y las <b>dimensiones</b>, que describen cómo se manifiesta cuando se ejerce.</p>
        <p>Toda lectura está anclada a una oración citada del relato, o no devuelve nada. No se infiere nada sobre una persona que no pueda señalarse.</p>
        <p>La conversación solo reúne y nunca le pide a nadie que esté de acuerdo. Lo que sale de la lectura se le muestra después a la persona, y solo lo que ella confirma pasa a formar parte de su registro.</p>
      </div>
    </div>

  </section>


</div></div>
<section class="section epilogue"><div class="section-inner"><p class="eyebrow">Epílogo</p><p class="craft-words">Curiosidad. <span>Comprensión.</span> Aprendizaje. <span>Contribución.</span> Reflexión.</p><p>Estos son los oficios.</p><h2>La tecnología evoluciona. Los oficios perduran.</h2></div></section>
<section class="section paths"><div class="section-inner"><div class="contact-invitation"><p>Si algo de lo que aquí se dice se conecta con una pregunta que usted está explorando, inicie una conversación.</p><a href="./contact/">Escríbale a Alaya</a></div></div></section>
`;

export const homePageEs = {
  outputPath: "es",
  render: (basePath) => renderLayout({ title: "Alaya Crafts — La capacidad es el activo que perdura", description: "Alaya Crafts cultiva la capacidad duradera a través de los oficios, el conocimiento y la tecnología.", activeRoute: "home", body: body(basePath), pageClass: "home-page", pageStyles: "/assets/home.css", basePath, lang: "es", pagePath: "/es/" }),
};
