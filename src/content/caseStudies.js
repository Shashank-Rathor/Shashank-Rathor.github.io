// Order here is the order on the home page, and drives prev/next on detail pages.
export const caseStudies = [
  {
    slug: 'acquisition',
    number: '01',
    kicker: 'Case study 01 · Acquisition',
    title: "The category wasn't an ecommerce category.",
    hand: 'nobody buys a wheelchair from a product page',
    hook:
      "The site had traffic and almost no leads. Rehab and mobility equipment isn't bought from a product page — it's bought after a conversation. I rebuilt the funnel around a qualified enquiry instead of a cart, and tested the change in two days before moving any budget.",
    subtitle:
      "Traffic was arriving and leaving. The fix wasn't a better ad account — it was admitting the funnel was the wrong shape for the category.",
    role: 'Growth, performance marketing, build',
    timeline: '[START] – [END]',
    company: 'Rehamo — rehab & mobility equipment',

    // shown on the teaser card and as the taped strip on the detail page
    metrics: [
      { label: 'Monthly digital leads', value: '0 → 400+' },
      { label: 'Lead → sale', value: '~25%' },
      { label: 'ROAS', value: '4–5×' },
      { label: 'Time to validate', value: '2 days' },
    ],

    shortVersion:
      'The site was built to sell products. The category sells decisions — a physio, a caregiver and a family member all touch the same purchase. I replaced the cart-shaped funnel with a qualified-enquiry funnel, proved it with a two-day landing test before moving budget, then rebuilt acquisition around it.',

    situation: [
      '[TRAFFIC / SESSIONS AT THE TIME] sessions a month and effectively no qualified leads. Spend was going to shopping and product-page traffic; add-to-cart was rare and abandoned when it happened.',
      '[WHAT THE SALES TEAM WAS SEEING — the calls that did convert, and where they came from.]',
    ],

    decision: {
      body:
        'Stop optimising the checkout. Treat the product page as the top of a consultative funnel and measure a qualified enquiry as the conversion, not a transaction.',
      tradeoff:
        '[WHAT THIS COST — e.g. losing direct ecommerce revenue reporting, or adding load on the sales team.]',
    },

    test: {
      intro: 'Two days, before any budget shift.',
      steps: [
        '[STEP — a single enquiry-first landing page for one high-intent category.]',
        '[STEP — the traffic source and the small budget used to read it.]',
        '[STEP — the threshold that would have killed the idea.]',
      ],
    },

    built: {
      body:
        '[THE BUILD — enquiry flow, lead routing, tracking, whatever shipped. Say which parts you wrote yourself.]',
      image: null, // e.g. 'images/acquisition-funnel.png' in /public
      imageAlt: 'Funnel diagram for the enquiry-first flow',
    },

    results: [
      { metric: 'Monthly digital leads', before: '0', after: '400+' },
      { metric: 'Lead → sale conversion', before: '[BEFORE]', after: '~25%' },
      { metric: 'ROAS', before: '[BEFORE]', after: '4–5×' },
      { metric: 'Cost per qualified lead', before: '[BEFORE]', after: '[AFTER]' },
    ],

    differently:
      "[THE HONEST ONE. What took too long, what you'd instrument earlier, what you over-built.]",

    documents: [
      { label: '[DOCUMENT NAME] — PRD', href: 'documents/acquisition-prd.pdf' },
      { label: '[DOCUMENT NAME] — measurement plan', href: 'documents/acquisition-measurement.pdf' },
    ],
  },

  {
    slug: 'case-management',
    number: '02',
    kicker: 'Case study 02 · Product',
    title: 'Building a CRM, then replacing it.',
    hand: 'the build was the research',
    hook:
      "I built a minimal CRM to find out what we should actually buy. A year of real usage showed the problem wasn't sales tracking at all — it was six teams handing the same case to each other with no shared timeline. The build paid for itself as discovery.",
    subtitle:
      'The cheapest way to write the requirements was to ship something wrong on purpose and watch how it got used.',
    role: 'Product, discovery, build',
    timeline: '[START] – [END]',
    company: 'Rehamo — rehab & mobility equipment',

    metrics: [
      { label: 'Teams on one case timeline', value: '6' },
      { label: 'Usage before the buy decision', value: '12 months' },
      { label: 'Requirements written from real use', value: '[N]' },
      { label: 'Outcome', value: 'Build → buy' },
    ],

    shortVersion:
      '[THE SHORT VERSION — two or three sentences that give away the whole story, so a recruiter who reads nothing else still gets it.]',

    situation: [
      '[WHAT THE SALES AND SERVICE TEAMS WERE ACTUALLY DOING — spreadsheets, WhatsApp, whatever it was.]',
      '[WHY BUYING A CRM BLIND WOULD HAVE BEEN A GUESS.]',
    ],

    decision: {
      body:
        '[THE DECISION — build the smallest thing that would generate real usage data, rather than run a vendor evaluation on paper.]',
      tradeoff: '[WHAT THIS COST — your time, and the risk of the team settling for the stopgap.]',
    },

    test: {
      intro: '[HOW YOU KNEW IT WAS WORKING — or not.]',
      steps: ['[STEP]', '[STEP]', '[STEP]'],
    },

    built: {
      body: '[WHAT SHIPPED — lead capture, assignment, follow-up, and what you deliberately left out.]',
      image: null,
      imageAlt: 'Internal CRM case timeline',
    },

    results: [
      { metric: 'Teams sharing one case timeline', before: '[BEFORE]', after: '6' },
      { metric: 'Time to first response', before: '[BEFORE]', after: '[AFTER]' },
      { metric: 'Requirements written from real use', before: '0', after: '[N]' },
    ],

    differently: '[THE HONEST ONE.]',

    documents: [
      { label: '[DOCUMENT NAME] — PRD', href: 'documents/crm-prd.pdf' },
    ],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

export const getAdjacent = (slug) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? caseStudies[i - 1] : null,
    next: i < caseStudies.length - 1 ? caseStudies[i + 1] : null,
  };
};
