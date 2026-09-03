# Alaya Crafts Public Website — Cross-Page Coherence Review

Status: Initial coherence pass complete  
Review baseline: approved polished studies through Contact  
Pages in scope: Homepage, CIE Professional, For Organizations, Ideas, Contact

## Overall read

The five pages belong to one Alaya family without collapsing into one repeated template. The editorial typography, ivory and olive palette, quiet pacing, evidence-oriented language, restrained interaction model, and resistance to conventional consulting-site patterns are coherent across the set.

The remaining work is primarily shared-system work: mobile navigation, route behavior, navigation order, footer naming, and consolidating repeated study markup into production components. Page-specific narrative and visual variation should be preserved.

## Findings

### 1 — Homepage mobile navigation overflows at a real narrow viewport

Severity: Blocker  
Status: Closed

At a real 390px viewport, the Homepage polished study continues to display its full desktop navigation. The navigation extends beyond the visible page and is clipped. Unlike the later studies, the Homepage does not currently expose the `Explore` mobile-navigation pattern through a real viewport breakpoint.

This is the same failure class previously caught in the Organizations and Ideas studies: a reviewer-controlled mobile simulation cannot substitute for responsive rules driven by the actual viewport.

Required resolution:

- Apply the established `Explore` / `Close` mobile navigation behavior at the real breakpoint.
- Keep the full desktop navigation hidden while the mobile menu is closed.
- Reflow the opened navigation vertically within the viewport.
- Verify at 390px without using the study's Desktop/Mobile controls.
- Recheck every Homepage layout section at the real breakpoint, not only the header.

Verification: confirmed at a real 390px viewport. The closed navigation is hidden, `Explore` is visible, the opened navigation remains within the viewport, the control changes to `Close`, all mobile layout rules activate without the study toggle, and page `scrollWidth` equals `clientWidth`.

### 2 — Navigation order changes on CIE Professional

Severity: Major coherence issue  
Status: Closed

Homepage, For Organizations, Ideas, and Contact use:

`The Alaya Idea · CIE Professional · For Organizations · Ideas · Contact`

CIE Professional moves itself to the first position:

`CIE Professional · The Alaya Idea · For Organizations · Ideas · Contact`

The active page should be indicated visually without changing the visitor's spatial model of the site. Production should use one stable navigation order on every page.

Recommended canonical order:

`The Alaya Idea · CIE Professional · For Organizations · Ideas · Contact`

### 3 — Footer contents and labels are inconsistent

Severity: Major coherence issue  
Status: Closed

- The Homepage footer omits `Ideas`.
- Most footers use `Organizations`, while headers use `For Organizations`.
- CIE Professional reorders its footer links to place itself first.

Recommended resolution: use the same link set, order, and public label everywhere:

`The Alaya Idea · CIE Professional · For Organizations · Ideas · Contact`

### 4 — The production site needs one shared header and footer implementation

Severity: Production checkpoint  
Status: Open by design

The studies currently repeat their own header, footer, responsive CSS, and menu behavior. That was appropriate for independent design studies, but it is the reason earlier defects and small naming differences have recurred across pages.

Production should introduce one shared header and one shared footer component with:

- one canonical item order and label set;
- an active-page state that does not reorder items and exposes `aria-current="page"` on the current route;
- one real responsive breakpoint;
- one keyboard- and screen-reader-usable mobile menu;
- semantic links rather than non-interactive text spans;
- one brand-lockup implementation;
- one source of truth for routes.

### 5 — Contact behavior should converge on the approved Contact page

Severity: Major production checkpoint  
Status: Resolved for V1

The dedicated Contact page is now the approved general contact destination. The Homepage still contains an older embedded contact surface, while study navigation and several contextual paths are not yet real links.

Production should:

- route global `Contact` navigation to the dedicated Contact page;
- route the Ideas `Share something you've written` path to that same general contact mechanism;
- preserve article-level contextual connections as editorial links, not contact prompts;
- avoid maintaining a second Homepage-only contact experience;
- retain `curious@alayacrafts.com` as the direct human contact address.

Study correction: the Homepage's duplicate `.contact-page` surface and all `data-contact-open` / `data-contact-close` behavior have been removed. Because routing remains intentionally deferred to the production shared navigation, the Contact label and quiet Homepage invitation remain non-routing study elements rather than simulating a second contact flow.

### 6 — “The Alaya Idea” needs an explicit route contract

Severity: Routing decision  
Status: Resolved for V1

The approved set contains five pages, but `The Alaya Idea` is a persistent navigation item rather than a separately approved sixth page. Before implementation, define whether it:

- returns to the Homepage at its opening;
- links to a named section within the Homepage; or
- will eventually become a separate page.

For V1, the Homepage is `The Alaya Idea` and both the brand lockup and navigation item resolve to `/`. The complete route decision is recorded in `design/direction/public-site-route-contract-v1.md`.

### 7 — Brand-lockup implementation differs in CIE Professional

Severity: Cleanup note  
Status: Open for production

CIE Professional retains an embedded raster brand asset in its study source, while the later pages use the established typographic lockup with the line rendered consistently in the approved palette. The visible family resemblance is sound, but production should use one lightweight, shared brand-lockup implementation and remove unused embedded image data.

## Confirmed coherent elements

- The ivory, olive, sage, and restrained amber palette reads as one system.
- Editorial serif display type and quiet sans-serif metadata remain consistent.
- Active navigation states are understated and legible.
- The pages avoid dark corporate hero treatments, transformation slogans, service-card marketing, and schedule-a-call-first composition.
- Dark surfaces are used selectively as page-specific emphasis rather than as the default Alaya identity.
- CIE Professional feels like a product expression of Alaya without making the public site look like an application interface.
- For Organizations remains grounded in capability and work rather than consulting theater.
- Ideas remains an editorial body of thought rather than a content-marketing funnel.
- Contact is compact, direct, and human, with no form, chatbot, qualification flow, or scheduling ambush.

## Recommended next sequence

1. Repair and re-verify the Homepage at real mobile widths.
2. Normalize navigation and footer order, naming, and routes across all five studies or document these as production-only corrections.
3. Resolve the V1 route contract for `The Alaya Idea`.
4. Define the production URL map and connect every navigation and contextual path.
5. Build the shared production header, footer, brand lockup, and mobile menu once.
6. Run a final cross-page desktop/mobile/accessibility pass before implementation sign-off.
