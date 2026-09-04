import { renderLayout } from "../shared/layout.mjs";

const body = `
<section class="contact-hero"><div class="contact-inner">
  <div class="contact-intro"><p class="eyebrow">Contact</p><h1>Start a conversation.</h1></div>
  <div class="contact-copy"><p class="invitation">Alaya is an evolving body of work. If something here connects with a question you're exploring, an idea you're developing, or work you're trying to understand, you can reach us directly.</p><span class="write-label">Write to Alaya</span><a class="contact-email" href="mailto:curious@alayacrafts.com">curious@alayacrafts.com</a><p class="human-note">Your message will be read and answered by a person.</p></div>
  <div class="contact-trace" aria-hidden="true"></div>
</div></section>`;

export const contactPage = {
  outputPath: "contact",
  render: (basePath) => renderLayout({ title: "Contact — Alaya Crafts", description: "Write to Alaya directly. Your message will be read and answered by a person.", activeRoute: "contact", body, pageClass: "contact-page", pageStyles: "/assets/contact.css", basePath }),
};
