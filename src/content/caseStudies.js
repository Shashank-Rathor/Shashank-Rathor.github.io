// Order here is the order on the home page, and drives prev/next on detail pages.
export const caseStudies = [
  {
    slug: 'acquisition',
    number: '01',
    kicker: 'Case study 01 · Acquisition',
    title: "The category wasn't an ecommerce category.",
    hand: 'nobody buys a wheelchair from a product page',
    hook:
      "The site was built to sell products. Every actual sale came through a conversation — a walk-in, or a referral from a physio. There was no ad spend, no conversion tracking, and no way to tell whether digital could produce a lead worth having. I built the channel and the measurement that proved it, at the same time.",
    subtitle:
      "Not a leaky funnel — no funnel. Zero spend, zero tracking, and a business running entirely on walk-ins and referral partnerships.",
    role: 'Growth, performance marketing, build',
    timeline: 'June 2021 — ongoing',
    company: 'Rehamo — rehab & mobility equipment',

    metrics: [
      { label: 'Monthly digital leads', value: '0 → 400+' },
      { label: 'Lead → sale', value: '~25%' },
      { label: 'ROAS, closed-loop', value: '4–5×' },
      { label: 'Time to 400+/mo', value: '<1 year' },
    ],

    shortVersion:
      'Rehamo sold rehab and mobility equipment through walk-ins and physio referrals. The website existed, took around 500–1,000 sessions a month, and produced nothing measurable — no conversion tracking, no internal traffic filter, no ad spend. The real question was not how to get more traffic. It was whether a digital lead could ever be worth as much as a doctor sending someone through the door. I built the acquisition channel and the measurement to answer that, and within the first year it was running at 400+ leads a month closing at roughly 25%.',

    situation: [
      'The site took roughly 500–1,000 sessions a month, and that number was inflated — there was no internal traffic filter in place, so staff activity counted as visits. There were no conversion events, no GA4 configuration worth the name, and no way to say what any visitor did next. The honest baseline was not a low number. It was no number.',
      'Meanwhile the business was working. Sales came from walk-ins and from formal referral partnerships with physiotherapists and doctors — a channel built on trust, where someone qualified has already told the customer what to buy. Nothing about a product page replicates that.',
      'Nobody had proposed spending on digital, so there was no failure to point at. I proposed it, and management approved the budget.',
    ],

    decision: {
      body:
        "Stop treating the website as a shop and start treating it as the top of a consultative funnel — the same conversation a physio referral starts, opened by an ad instead. That meant measuring a qualified enquiry as the conversion rather than a transaction, and counting every route a real customer actually uses: the form, WhatsApp, and the phone.",
      tradeoff:
        "Digital leads close harder than walk-ins. A referred customer arrives already convinced; a digital one needs real follow-up before they buy. I took that trade knowingly — the channel produces volume the referral network can't, but it added follow-up load on the sales team, and the ~25% close rate reflects that.",
    },

    test: {
      intro:
        "There was no clean before-and-after here, and I won't pretend otherwise. Tracking and the first campaigns went live together, and the early data was messy while the instrumentation settled. What I could do was keep the first commitment small and the read honest.",
      steps: [
        'Search only to start. Known intent, controllable, and readable — I could see the query that produced the lead, which is the whole point when you are establishing whether a channel works at all.',
        'Filter internal traffic in GA4 and build conversion events for every route a customer actually uses — form submission, WhatsApp click, phone tap — before drawing conclusions from any of it.',
        'Judge the channel on closed sales matched back through billing, not on platform-reported conversions. If the leads did not turn into revenue, the campaigns were not working, whatever Google Ads said.',
      ],
    },

    built: {
      body:
        "I wrote the enquiry flow myself: a custom React enquiry form, a WhatsApp CTA wired for the customers who prefer messaging, email notifications plus a custom admin dashboard so the sales team saw leads immediately rather than in a weekly export. On the measurement side I configured GTM, built conversion events for each enquiry route, and set the internal traffic filter in GA4 so the numbers meant something. Attribution runs closed-loop — revenue from the billing system, reconciled against CRM records and customer feedback, rather than the figure the ad platform reports about itself.",
      image: 'images/acquisition-funnel.svg',
      imageAlt: 'The enquiry flow, from ad to qualified lead',
    },

    results: [
      { metric: 'Monthly digital leads', before: '0', after: '400+' },
      { metric: 'Lead → sale conversion (all digital leads)', before: 'Not measured', after: '~25%' },
      { metric: 'ROAS (billing-matched, not platform-reported)', before: 'No spend', after: '4–5×' },
      { metric: 'Conversion tracking', before: 'None', after: 'Form, WhatsApp and call events in GA4' },
      { metric: 'Internal traffic filtering', before: 'None — sessions inflated', after: 'Configured' },
    ],

    differently:
      "I would have got the tracking clean before spending a rupee. Running both at once meant the first months of data were only good enough to steer by, not good enough to learn from, and I cannot now reconstruct what the early campaigns really did. I would also have killed PMax sooner — I gave it time to prove itself on the assumption that the targeting would settle, when the real problem was that I could not see or control who it was reaching. Shopping got cut back for the same reason. For a considered purchase in a referral-driven category, channels that hide the audience from you are the wrong tool, and I could have reasoned my way to that before spending on it.",

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
