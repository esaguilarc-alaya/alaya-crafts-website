import { renderLayout } from "../shared/layout.mjs";
import { hrefFor } from "../shared/routes.mjs";

const body = (basePath) => `
<div class="idea-body"><div class="wrap">
  <div class="hero">
    <p class="eb">How it works</p>
    <h1>See how a reading is made.</h1>
    <p>A professional describes one piece of work. CIE reads it, ties every reading to a quoted sentence, and says plainly what is established, what is emerging and what is still unknown.</p>
    <div class="hero-cta"><a class="btn" href="mailto:curious@alayacrafts.com?subject=Early%20access">Request early access</a></div>
  </div>

  <section>
    <p class="eb">One piece of work, read</p>
    <h2>An example, from account to reading.</h2>
    <p>This example is illustrative. It shows the shape of what CIE returns, not a real person&rsquo;s record.</p>
    <div class="ex">
      <div class="xr"><div class="xl">The account</div><div><p><q>Led the migration of a legacy billing service during a live customer launch. <mark>Coordinated engineering, finance and support</mark>, kept reporting continuous, and <mark>reduced failed payments after cutover</mark>.</q></p></div></div>
      <div class="xr"><div class="xl">The reading</div><div><p><b>Practice &mdash; Transition.</b> The work moved something from one arrangement to another.</p><p><b>Relational.</b> Anchored to: <q>Coordinated engineering, finance and support</q></p><p><b>Execution.</b> Anchored to: <q>reduced failed payments after cutover</q></p></div></div>
      <div class="xr st"><div class="xl">Status</div><div><p><b>Emerging.</b> One account supports this reading. It is worth examining, not a verdict. Where the work shows nothing, the reading stays <b>unknown</b>.</p></div></div>
    </div>
  </section>

  <section>
    <p class="eb">The method</p>
    <h2>Not a score. Not a black box.</h2>
    <p>CIE does not produce a rating or ask anyone to trust an invisible judgment. Every reading is tied to the sentence in the account that supports it, so the evidence can be seen, reviewed and set aside.</p>
    <div class="pull"><p>Alaya does not ask you to trust the output. It shows you how it was reached.</p></div>
  </section>

  <section>
    <p class="eb">In practice</p>
    <h2>Three steps.</h2>
    <ol class="steps"><li><div class="n">One &middot; describe</div><p>A conversation about one piece of work that was actually done: the situation, what you did, how it ended.</p></li><li><div class="n">Two &middot; review</div><p>CIE proposes readings, each tied to the sentence that supports it. You see them, and you decide.</p></li><li><div class="n">Three &middot; keep</div><p>Only what you confirm joins your record. It is yours to keep and maintain.</p></li></ol>
  </section>

  <section>
    <p class="eb">What becomes possible</p>
    <h2>The same method, two ways in.</h2>
    <div class="eng">
      <div class="ec"><div class="n">Professionals</div><h3>Work you had not thought of as capability, made visible</h3><p>A record you keep and maintain, built from what you actually did, that you can point to.</p><a class="more" href="${hrefFor("/cie-professional/", basePath)}">Explore CIE Professional</a></div>
      <div class="ec"><div class="n">Organizations</div><h3>What the organization has shown it can do</h3><p>Capability read from accounts of real work &mdash; and where it depends on too few people.</p><a class="more" href="${hrefFor("/for-organizations/", basePath)}">For Organizations</a></div>
    </div>
  </section>

  <section>
    <p class="eb">Questions</p>
    <h2>What people ask first.</h2>
    <dl class="faq"><dt>Does CIE decide whether someone is telling the truth?</dt><dd>No. It does not judge truth. It makes a claim that no work supports easier to notice.</dd><dt>Can one impressive story create a capability?</dt><dd>No. One account is a reading worth examining. Whether a capability is established depends on whether it shows up across accounts of different situations.</dd><dt>Who owns the record?</dt><dd>The professional. Only what they confirm joins it.</dd><dt>What if the evidence is missing?</dt><dd>The capability is marked unknown. Nothing is filled in to make a profile look complete.</dd><dt>Is CIE an AI product?</dt><dd>CIE uses AI to hold the conversation and to read the account. What it returns is never a verdict: each reading points at the sentence behind it, and a person confirms what joins their record.</dd></dl>
  </section>

  <section>
    <p class="eb">Early access</p>
    <h2>Be among the first.</h2>
    <p>CIE is being built with the first professionals and organizations who use it. Write to us, and we will tell you what early access looks like.</p>
    <div class="hero-cta"><a class="btn" href="mailto:curious@alayacrafts.com?subject=Early%20access">Request early access</a></div>
  </section>
</div></div>
`;

export const howItWorksPage = {
  outputPath: "how-it-works",
  render: (basePath) => renderLayout({ title: "How it works — Alaya Crafts", description: "See how CIE reads capability from an account of real work: anchored to a quoted sentence, with established, emerging and unknown kept apart.", activeRoute: "how", body: body(basePath), pageClass: "home-page", pageStyles: "/assets/home.css", basePath, pagePath: "/how-it-works/" }),
};
