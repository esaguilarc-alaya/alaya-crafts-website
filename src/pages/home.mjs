import { renderLayout } from "../shared/layout.mjs";
import { hrefFor } from "../shared/routes.mjs";

const body = (basePath) => `
<div class="idea-body"><div class="wrap">
  <div class="hero">
    <p class="eb">Capability intelligence</p>
    <h1>Capability, read from the work itself.</h1>
    <p>Capability is the hardest thing in any organization to see, and the easiest thing to claim. Alaya reads it from accounts of work that was actually done — in a person and in an organization — <b>so that it can be seen, cultivated and given a direction.</b></p>
  </div>

  <!-- PROBLEM -->
  <section id="what">
    <p class="eb">The problem nobody is solving</p>
    <h2>The hardest thing to see is what people can already do.</h2>
    <p>Ask a capable professional what they are good at and you will get job titles and adjectives. Not because they are hiding anything &mdash; because the moment that would tell them, the one where they say <i>I had not thought of that as something I did</i>, only happens when somebody asks properly and with genuine interest, and almost no one ever does.</p>
    <p>Ask an organization what it can do and you get an org chart and an inventory of declared departments and skills. The same gap, one floor up, with a larger budget behind it.</p>

    <div class="pull">
      <p>Both sides are guessing about the same thing from opposite ends, and neither has an instrument.</p>
    </div>

    <p><b>The cost of that is quiet, which is why it survives.</b> Development budget aimed at capability that was already there. People hired from outside for work somebody inside had done twice. Projects not attempted because nobody knew the company could do them. Projects launched that do not move forward as expected. The explanation and possible fixes don&rsquo;t seem to show anywhere, because the thing that would have made them visible has never existed.</p>
    <p>The evidence exists &mdash; it is in what people did last quarter and the quarter before. It has simply never been captured consistently, so it could become an instrument that gives the guidance needed to match the intended direction, for professionals and organizations alike.</p>
  </section>

  <!-- WHAT IT DOES -->
  <section>
    <p class="eb">What Alaya does</p>
    <h2>Capability is cultivated, not counted.</h2>
    <p>It is not a stock sitting in a warehouse waiting to be inventoried. It grows through craft &mdash; practice done deliberately, repeatedly, under real conditions. Naming it does nothing for it. Scoring it does less.</p>

    <div class="pull">
      <p>But understanding the landscape provides you the visibility to cultivate, grow and direct capability towards your objectives.</p>
    </div>

    <div class="landscape" aria-label="The living capability landscape"><picture><source srcset="${hrefFor("/assets/alaya-05-living-field-mobile.svg", basePath)}" media="(max-width: 820px)"><img class="field-svg" src="${hrefFor("/assets/alaya-05-living-field-desktop.svg", basePath)}" alt="" aria-hidden="true"></picture><p class="field-label capability">Capability <small>The living terrain.</small></p><p class="field-label experience">Experience <small>Where capability is developed and exercised.</small></p><p class="field-label practice">Practice <small>How capability is cultivated and renewed.</small></p><p class="field-label contribution">Contribution <small>Capability expressed through work that creates value.</small></p><p class="field-label knowledge">Knowledge <small>Preserves and carries forward what is learned.</small></p><p class="field-label curiosity">Curiosity <small>Keeps the field developing.</small></p></div>

    <h2 class="sub">How Alaya sees capability.</h2>
    <p>So Alaya reads accounts of work that was actually done, <b>on two axes at once</b>.</p>
    <div class="ax2">
      <div class="axc">
        <div class="t">Where &mdash; seven practices</div>
        <h3>What the act changed</h3>
        <div class="row"><b>Inquiry</b><span>What is known.<span class="d">Finding out what was not yet known: a cause traced, a question answered, a possibility tested.</span></span></div>
        <div class="row"><b>Direction</b><span>What is settled.<span class="d">Turning an open question into a decision others can build on: a choice made, a priority set, a path agreed.</span></span></div>
        <div class="row"><b>Creation</b><span>What exists.<span class="d">Bringing into being something that was not there: a system built, a process designed, a document written.</span></span></div>
        <div class="row"><b>Transition</b><span>An arrangement.<span class="d">Moving something from one arrangement to another: a migration, a handover, a rollout, a restructure.</span></span></div>
        <div class="row"><b>Assurance</b><span>What is accepted.<span class="d">Establishing that something can be relied on: a test passed, a risk examined, a result verified.</span></span></div>
        <div class="row"><b>Stewardship</b><span>A person's capability.<span class="d">Leaving another person able to do what they could not: teaching, coaching, handing over a skill.</span></span></div>
        <div class="row odd"><b>Operation</b><span>Nothing &mdash; it holds a state against pressure.<span class="d">Keeping something running or intact while forces push against it: an incident held, a service kept up under strain.</span></span></div>
      </div>
      <div class="axc">
        <div class="t">How &mdash; five dimensions</div>
        <h3>The way it showed</h3>
        <div class="row"><b>Reasoning</b><span>What they worked out that did not follow from what was in front of them.</span></div>
        <div class="row"><b>Perception</b><span>What they noticed that was there for anyone and attended to by no one.</span></div>
        <div class="row"><b>Relational</b><span>How they got the agreement, decision or effort of someone they could not direct.</span></div>
        <div class="row"><b>Steadying</b><span>How they kept another person able to carry on.</span></div>
        <div class="row"><b>Execution</b><span>What they actually pulled off, where it could have failed.</span></div>
      </div>
    </div>

    <p>Practices are not job titles &mdash; a practice is classified by what the act changed. One piece of work usually belongs to several at once, and is allowed to. Dimensions are the same everywhere; what changes with the craft is the practice they show up in.</p>

    <div class="pull">
      <p>Capability is what sits at the intersection. Neither axis can tell the whole story, and a rating means less than either.</p>
    </div>

    <p><b>That intersection is what makes it usable.</b> A score gives nobody anything to do. Knowing that someone's strength shows up in the reasoning and relational aspects of work that changes what is settled &mdash; and thins out where the work is about holding something steady &mdash; tells a person where to push next and tells an organization what to develop, where to deploy, and where it is exposed.</p>
    <p>And every reading stays anchored to the exact sentence in the account that supports it. No sentence, no reading.</p>
  </section>

  <!-- DIFFERENT -->
  <section id="different">
    <p class="eb">The gap, measured</p>
    <h2>The problem is documented. The market is aimed somewhere else.</h2>
    <p>None of what follows is our research. It is what the industry reports about itself &mdash; and read together it describes an organization that cannot see what it already has, and a person whose capability goes unread inside it.</p>

    <div class="stats">
      <div class="sx hl">
        <div class="v">412<em>%</em></div>
        <p><b>more applications per recruiter</b> between 2022 and 2025, while recruiters per organization fell <b>56%</b>. Time-to-fill went <b>up 37%</b> anyway &mdash; five times the volume, half the people, and slower.</p>
      </div>
      <div class="sx">
        <div class="v">38<em>%</em></div>
        <p>of organizations across <b>72 countries</b> maintain <b>a single enterprise-wide skills library</b>. The other 62% cannot answer what they have in one place.</p>
      </div>
      <div class="sx">
        <div class="v">11<em>%</em></div>
        <p>of <b>organizations</b> take <b>a long-term view of workforce planning</b>. Capability is a long-horizon asset being managed on a short horizon.</p>
      </div>
      <div class="sx hl">
        <div class="v">66<em>/</em>7</div>
        <p><b>66% of C-suite leaders</b> say their traditional functions must fundamentally change to stay competitive. <b>7%</b> report meaningful progress. Across 9,000+ leaders in 89 countries.</p>
      </div>
      <div class="sx">
        <div class="v"><span class="nu">75</span><em>/</em><span class="de">43</span></div>
        <p><b>75% of executives</b> say their organization has a clear learning strategy for the next one to two years. Only <b>43%</b> of individual contributors agree.</p>
      </div>
      <div class="sx">
        <div class="v">26<em>%</em></div>
        <p>of applicants <b>trust that AI will evaluate them fairly</b>, while 52% believe it is already screening them. The instrument is losing the room.</p>
      </div>
    </div>
    <p class="src">Sources: <a href="https://www.greenhouse.com/recruiting-benchmarks">Greenhouse, The Hire Standard: Hiring Benchmarks 2026</a> &middot; <a href="https://www.mercer.com/insights/talent-and-transformation/skill-based-talent-management/rebuilding-reward-and-career-frameworks-based-on-skills/">Mercer, Skills Snapshot Survey 2025/26</a> (72 countries) &middot; <a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/hr-monitor">McKinsey, HR Monitor 2026</a> &middot; <a href="https://action.deloitte.com/insight/5005/2026-talent-acquisition-technology-trends-the-new-imperative">Deloitte, 2026 Human Capital &amp; TA Technology Trends</a> &middot; <a href="https://go.perceptyx.com/state-of-learning-and-development-2026-web-report#executive-summary">&ldquo;The State of Learning and Development&rdquo; First Annual 2026</a> &middot; <a href="https://www.gartner.com/en/newsroom/press-releases/2025-07-31-gartner-survey-shows-just-26-percent-of-job-applicants-trust-ai-will-fairly-evaluate-them">Gartner applicant trust survey</a> (n=2,918).</p>

    

    <h2 style="font-size:clamp(24px,3.4vw,32px);margin-top:48px">The difference is not speed. It is where the instrument points.</h2>
    <p>Almost all the money and engineering of the last few years went to the front door &mdash; matching, screening, sorting, scheduling. That is a real problem and it is being worked on hard. It is also not the one the numbers above describe.</p>
    <p>What an organization actually buys to see <i>the people it already has</i> is far older and far thinner: a skills inventory filled in by self-assessment, a competency matrix, a manager's recollection at a talent review. That is the shelf Alaya sits on.</p>

    <div class="cmp">
      <div class="hd">What organizations buy today</div>
      <div class="hd b">What Alaya does</div>

      <div class="c">A skills inventory, filled in by self-assessment and manager tagging.</div>
      <div class="c b">Reads <b>an account of one bounded piece of work that was actually done</b>.</div>

      <div class="c">A rating. Advanced, Level 4, seven out of ten.</div>
      <div class="c b">Evidence <b>with the action attached</b>, mounting evidence provides the insight.</div>

      <div class="c">A statement someone is a strong communicator.</div>
      <div class="c b">Shows <b>four times they moved someone who started out against them</b>, and what each of those people wanted instead.</div>

      <div class="c">A framework the company owns, which the person is rarely shown.</div>
      <div class="c b"><b>A record built with the professionals, which they keep and maintain.</b></div>

      <div class="c">A complete-looking grid, where a blank cell means nothing in particular.</div>
      <div class="c b">Separates <b>established</b>, <b>emerging</b>, and <b>unknown</b>. Most of an honest profile is the third.</div>
    </div>

    <p style="margin-top:26px">No scores, no rankings, no personality words, no recommendation about a human being. Each one costs something obvious and buys something less obvious: a system that cannot be used against the people feeding it is a system people will tell the truth to. Everything downstream depends on that.</p>
  </section>

  <!-- WHY NOW -->
  <section id="now">
    <p class="eb">Why there is a market</p>
    <h2>The flood is the reason, not the obstacle.</h2>
    <p>Many funded companies claim to help fix this problem, for organizations and professionals both &mdash; automating the writing of r&eacute;sum&eacute;s on one side, automating the parsing of them on the other, and matching skills matrices to job descriptions in between.</p>
    <p>What almost none of them touch is <b>the thing being written and parsed</b>. AI is being applied, very fast and very well, to a faulty process and to three unusually thin representations: <b>the r&eacute;sum&eacute;, the job description, and the skills matrix</b>. Not one of those was ever a decent description of what a person can do. Automating them in both directions does not make them one &mdash; it makes the same thin thing arrive sooner, in greater quantity, from both sides at once.</p>

    <p><b>Applying intelligence to a thin representation returns a thin answer faster.</b> The representation was the problem.</p>

    <p><b>When a signal becomes free to produce, it stops being a signal.</b> The only thing that recovers is something more expensive to fake. Constructing a whole situation &mdash; what it was like before, who objected, what it cost &mdash; is not something anyone does by accident.</p>
    <p><b>And the inward problem is larger than the hiring one and much less served.</b> Organizations are building internal skills inventories at a serious rate, and the research behind that trend reports more libraries and more mapped jobs. It does not show the visibility gap closing: mapping to individuals still rests mostly on job roles (73%) and manager-validated self-assessment (71%), and 53% of organizations don&rsquo;t manage proficiency at all. Cataloging declared skills faster does not tell a company who can actually do the work. It is the r&eacute;sum&eacute; problem again, indoors, with a bigger budget behind it.</p>
    <p>Meanwhile the question <i>do we already have someone who can do this</i> has become expensive to get wrong. Hiring externally for capability that already exists inside is a cost nobody can see, because the thing that would make it visible has never existed.</p>
    </section>

  <!-- SERVICES -->
  <section id="services">
    <p class="eb">The engine</p>
    <h2>CIE &mdash; the Capability Intelligence Engine.</h2>
    <p>CIE is the engine that allows this to be possible at scale, in the hands of an organization or a professional: it gathers accounts of work that was actually done, then recognizes the capability in them. It has two parts, shown below, and the line between them is the whole design.</p>

    <div class="eng">
      <div class="ec">
        <div class="n">One &middot; the conversation</div>
        <h3>An AI instance, on a short leash</h3>
        <p>It asks about work that was actually done &mdash; a situation, what the person did, how it ended &mdash; and chases the specifics people skip past without noticing: what it was like before, how many, what made it hard, who had to agree.</p>
        <p><b>Its scope is deliberately bounded.</b> It cannot ask anyone to rate themselves, and it cannot ask anyone to agree with an interpretation. It gathers. It does not judge.</p>
      </div>
      <div class="ec">
        <div class="n">Two &middot; the reading</div>
        <h3>A backend that recognizes a landscape</h3>
        <p>What comes out of the conversation is read against a capability landscape Alaya built: <b>practices</b>, which describe where capability is exercised, and <b>dimensions</b>, which describe how it shows when it is.</p>
        <p>Every reading is anchored to a quoted sentence from the account, or it returns nothing. Nothing is inferred about a person that cannot be pointed at.</p>
        <p>The conversation only gathers and never asks anyone to agree. What comes out of the reading is shown to the person afterward, and only what they confirm joins their record.</p>
      </div>
    </div>

  </section>


</div></div>
<section class="section epilogue"><div class="section-inner"><p class="eyebrow">Epilogue</p><p class="craft-words">Curiosity. <span>Understanding.</span> Learning. <span>Contribution.</span> Reflection.</p><p>These are the crafts.</p><h2>Technology evolves. Crafts endure.</h2></div></section>
<section class="section paths"><div class="section-inner"><p class="eyebrow">Open paths</p><div class="contact-invitation"><p>If something here connects with a question you’re exploring, start a conversation.</p><a href="./contact/">Write to Alaya</a></div><nav class="open-paths" aria-label="Continue exploring"><a href="./cie-professional/">Explore CIE Professional</a><a href="./for-organizations/">For Organizations</a><a href="./ideas/">Follow the Ideas</a></nav></div></section>
`;

export const homePage = {
  outputPath: "/",
  render: (basePath) => renderLayout({ title: "Alaya Crafts — Capability is the enduring asset", description: "Alaya Crafts cultivates lasting capability through crafts, knowledge, and technology.", activeRoute: "home", body: body(basePath), pageClass: "home-page", pageStyles: "/assets/home.css", basePath, pagePath: "/" }),
};
