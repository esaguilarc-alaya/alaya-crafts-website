# Alaya Crafts Public Website — V1 Route Contract

Status: Approved coherence baseline for implementation

## Canonical routes

| Public label | V1 route | Purpose |
|---|---|---|
| Alaya Crafts | `/` | Brand link; returns to the top of the Homepage |
| The Alaya Idea | `/` | The Homepage is the public expression of the Alaya idea in V1 |
| How it works | `/how-it-works/` | Plain-language explanation of what the product does and how to start |
| CIE Professional | `/cie-professional/` | Public CIE Professional page |
| For Organizations | `/for-organizations/` | Public organizational-scale page |
| Ideas | `/ideas/` | Ideas index |
| Contact | `/contact/` | Quiet general contact page |

## Spanish routes

The Spanish site mirrors every route under `/es/` (for example `/es/` and `/es/how-it-works/`). The language switch lives in the header only, outside the navigation list, and links to the same page in the other language. The navigation order above is unchanged in Spanish.

## Ideas routes

The launch article uses:

`/ideas/the-rule-we-had-to-keep-re-learning-while-building-cie/`

Future pieces follow the same `/ideas/{slug}/` pattern.

## Navigation contract

Every page uses this stable order:

`The Alaya Idea · How it works · CIE Professional · For Organizations · Ideas · Contact`

The current page is indicated visually and with `aria-current="page"` on its navigation link. It is never moved to a different position.

The Alaya Crafts brand lockup always links to `/`.

## Contact contract

- Global `Contact` links route to `/contact/`.
- The Contact page exposes `mailto:curious@alayacrafts.com` as the direct contact action.
- The Ideas invitation `Share something you've written` routes to `/contact/`; no separate contributor form is introduced.
- Contextual article connections remain editorial links to the relevant Alaya page and are not converted into contact prompts.
- The Homepage uses a quiet link to the dedicated Contact page rather than maintaining a second embedded contact experience in production.

## Production implementation note

These routes and labels should be supplied to one shared header and footer implementation. The independent HTML studies remain design artifacts; their repeated markup is not the production component architecture.
