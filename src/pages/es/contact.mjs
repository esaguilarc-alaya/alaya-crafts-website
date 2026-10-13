import { renderLayout } from "../../shared/layout.mjs";

const body = `
<section class="contact-hero"><div class="contact-inner">
  <div class="contact-intro"><p class="eyebrow">Contacto</p><h1>Inicie una conversación.</h1></div>
  <div class="contact-copy"><p class="invitation">Alaya es un cuerpo de trabajo en evolución. Si algo de lo que encuentra aquí conecta con una pregunta que está explorando, una idea que está desarrollando o un trabajo que intenta comprender, puede comunicarse con nosotros directamente.</p><span class="write-label">Escríbale a Alaya</span><a class="contact-email" href="mailto:curious@alayacrafts.com">curious@alayacrafts.com</a><p class="human-note">Su mensaje será leído y respondido por una persona.</p></div>
  <div class="contact-trace" aria-hidden="true"></div>
</div></section>`;

export const contactPageEs = {
  outputPath: "es/contact",
  render: (basePath) => renderLayout({ title: "Contacto — Alaya Crafts", description: "Escríbale directamente a Alaya. Una persona leerá y responderá su mensaje.", activeRoute: "contact", body, pageClass: "contact-page", pageStyles: "/assets/contact.css", basePath, lang: "es", pagePath: "/es/contact/" }),
};
