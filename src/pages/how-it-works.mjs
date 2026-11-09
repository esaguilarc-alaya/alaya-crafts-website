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
    <p>This example is illustrative. It shows the shape of a reading, not a real person&rsquo;s record.</p>
    <div class="ex">
      <div class="xr"><div class="xl">The account</div><div><p><q>Led the migration of a legacy billing service <mark>during a live customer launch</mark>. Coordinated engineering, finance and support, <mark>kept reporting continuous</mark>, and <mark>reduced failed payments after cutover</mark>.</q></p></div></div>
      <div class="xr"><div class="xl">The reading</div><div><p><b>Operational resilience</b></p><p>Kept something important running while it was under threat, and got it done despite a real obstacle.</p><p><b>Fits:</b> operational resilience &middot; service continuity</p></div></div>
      <div class="xr"><div class="xl">What it rests on</div><div><p><b>What had to keep running:</b> <q>kept reporting continuous</q></p><p><b>What put it at risk:</b> <q>during a live customer launch</q></p><p><b>What happened:</b> <q>reduced failed payments after cutover</q></p><p>Behind this reading: what the work changed &mdash; <b>Operation</b> &mdash; and how it happened &mdash; <b>Execution</b>.</p></div></div>
      <div class="xr"><div class="xl">One detail away</div><div><p>Whether the new billing service stayed in use after the launch. With that, this account would also show the work replacing one arrangement with another.</p></div></div>
      <div class="xr"><div class="xl">What the reading doesn&rsquo;t claim</div><div><p><q>Led the migration</q> says who was in charge, not what was decided or what others did as a result. So the reading doesn&rsquo;t credit the account with setting a course others followed &mdash; the practice called <b>Direction</b>. If the account said what the choice was, who made it, and how the teams took it up, it would.</p></div></div>
      <div class="xr st"><div class="xl">Status</div><div><p><b>Emerging.</b> One account shows this. It becomes established when it recurs &mdash; in three accounts across different years or roles. Where the work shows nothing, the reading says nothing.</p></div></div>
    </div>
  </section>

  <section>
    <p class="eb">The method</p>
    <h2>Not a score. Not a black box.</h2>
    <p>CIE does not produce a rating or ask anyone to trust an invisible judgment. Every reading is tied to the sentence in the account that supports it, so the evidence can be seen, reviewed or set aside.</p>
    <div class="pull"><p>Alaya does not ask you to trust the output. It shows you how it was reached.</p></div>
  </section>

  <section>
    <p class="eb">In practice</p>
    <h2>Three steps.</h2>
    <ol class="steps"><li><div class="n">One &middot; describe</div><p>A conversation about one piece of work that was actually done: the situation, what you did, how it ended.</p></li><li><div class="n">Two &middot; review</div><p>CIE proposes readings, each tied to the sentence that supports it. You review them, and you decide.</p></li><li><div class="n">Three &middot; keep</div><p>Only what you confirm joins your record. It is yours to keep and maintain.</p></li></ol>
  </section>

  <section>
    <p class="eb">What becomes possible</p>
    <h2>The same method, two ways in.</h2>
    <div class="eng">
      <div class="ec"><div class="n">Professionals</div><h3>Work you had not thought of as capability, made visible</h3><p>A record you keep and maintain, built from your real professional contributions, to use whenever you need it.</p><a class="more" href="${hrefFor("/cie-professional/", basePath)}">Explore CIE Professional</a></div>
      <div class="ec"><div class="n">Organizations</div><h3>What the organization has shown it can do</h3><p>Capability read from accounts of real work &mdash; and where it depends on too few people.</p><a class="more" href="${hrefFor("/for-organizations/", basePath)}">For Organizations</a></div>
    </div>
  </section>

  <section>
    <p class="eb">Questions</p>
    <h2>What people ask first.</h2>
    <dl class="faq"><dt>Does CIE decide whether someone is telling the truth?</dt><dd>No. It does not judge truth. It makes a claim that no work supports easier to notice, and a profile that claims more than the work demonstrates harder to build.</dd><dt>Can one impressive story create a capability?</dt><dd>No. One account is a reading worth examining. Whether a capability is established, emerging or unknown depends on whether it shows up across accounts of different situations.</dd><dt>Who owns the record?</dt><dd>The professional. Only what they confirm joins it.</dd><dt>What if the evidence does not support every capability?</dt><dd>A capability without supporting evidence is marked unknown. Nothing is filled in to make a profile look complete, and nothing is declared nonexistent: it simply shows as unknown.</dd><dt>Is CIE an AI product?</dt><dd>CIE uses AI to hold the conversation and to read the account. What it returns is never a verdict: each reading points at the sentence behind it, and a person confirms what joins their record.</dd></dl>
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
