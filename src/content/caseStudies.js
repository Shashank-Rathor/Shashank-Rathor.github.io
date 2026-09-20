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
      imageAlt: 'The acquisition funnel: search ad through to sale, with the measurement layer beneath',
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
      { label: 'Lead Generation System — PRD', href: 'documents/Rehamo-LeadGen-PRD.pdf' },
    ],
  },

  {
    slug: 'case-management',
    number: '02',
    kicker: 'Case study 02 · Product',
    title: 'The problem was never sales tracking.',
    hand: 'the customer was our notification system',
    hook:
      "I built a minimal CRM to find out what we should actually buy. Two years of real usage showed the binding constraint wasn't sales record-keeping at all — it was six teams handing the same case down a chain with no shared record. The worst handoff wasn't broken. It didn't exist: service found out a case existed when the customer rang to complain.",
    subtitle:
      "Buy a CRM before you understand your process and you shape your process around the software. So I built the cheapest possible version first, and let a year of real use write the requirements.",
    role: 'Product, discovery, build',
    timeline: '2024 — build · operated ~2 years · 2026 — replace decision · Zoho rollout ongoing',
    company: 'Rehamo — rehab & mobility equipment',

    metrics: [
      { label: 'Teams in the case chain', value: '6' },
      { label: 'Usage before the buy decision', value: '~2 years' },
      { label: 'Features shipped — everything else refused', value: '4' },
      { label: 'Outcome', value: 'Build → buy' },
    ],

    shortVersion:
      "Case study 01 produced 400+ leads a month. A referred patient arrives already convinced; a digital lead needs chasing — so the volume landed as an operating change the business had no system to absorb. Rather than buy a CRM against a wishlist, I built four features and nothing else, ran them for two years, and let the usage tell me what to specify. It told me something I hadn't asked: the requests weren't coming from sales. They were coming from the five teams downstream who had no record at all.",

    situation: [
      'Sales ran on WhatsApp groups and personal spreadsheets. There was no shared record that two people would agree on, and follow-ups lived in whoever remembered them. Management assembled reporting by asking each rep individually.',
      "Everyone downstream of sales had nothing. Not a worse system — no system. A case moved inside sales, then through technical assessment, store, warehouse, delivery and finally service, and each handoff was a conversation or a message. Service typically learned a case existed when the customer called with a problem.",
      "The strain was visible long before I addressed it. I was the only developer, with a platform to run and an ad account to manage, and lead volume built gradually — so it became undeniable well after it became true. That gap is its own finding about doing growth work in a small business: the constraint isn't usually knowing what's broken.",
    ],

    decision: {
      body:
        "Build the smallest thing that would generate real usage data, and frame it internally as temporary from day one — it existed to tell us what to buy. Two conditions made that affordable: I was the sole developer, so the experiment cost my time rather than a budget line, and the team was small enough that four features were genuinely sufficient. Lead capture, status tracking, assignment, and follow-up reminders. Everything else was refused until usage justified it — no pipeline visualisation, no reporting dashboard, no email integration, no automation, no lead scoring, no custom fields.",
      tradeoff:
        "Refusing reporting was a mistake I made on purpose and got wrong. It went in around month eight; it should have been month three. Management were assembling numbers by hand for most of the first year while I waited for evidence I already had.",
    },

    test: {
      intro:
        "The tool was the research instrument. I wasn't measuring whether people liked it — I was watching where they went around it.",
      steps: [
        "Repeated status requests arriving from teams outside sales. Nobody predicted this, because the tool was never built for them. That signal reframed the whole project: the binding constraint was cross-team handoffs, not sales record-keeping.",
        "The team didn't want pipeline visibility — they wanted reminders. The feature every commercial CRM leads with was the least-used thing in ours. That's behaviour observed over two years, not an answer to a survey.",
        "Continued use of WhatsApp or a spreadsheet for a specific task meant that feature had failed. You cannot know upfront which tasks will keep leaking; you can only run the thing and watch.",
      ],
    },

    built: {
      body:
        "Four features in React and Node: one shared record for every inbound lead, a minimum state model that answered 'what happened to this?', one named owner per lead visible to everyone, and follow-up reminders. Reporting arrived at month eight. The build deliberately stopped there — every feature I didn't ship was a question I hadn't earned the right to answer yet. Two years later I could evaluate vendors against a requirements list I trusted, because it came from usage rather than a wishlist. Zoho won on multi-user roles, mobile-first access, off-the-shelf telephony and messaging integrations, Indian-market support at our scale, and cost.",
      image: 'images/case-chain.svg',
      imageAlt: 'The six-team case chain, and where handoffs failed',
    },

    results: [
      { metric: 'Shared record across the case chain', before: 'Sales only, informally', after: 'Six teams, one timeline (in rollout)' },
      { metric: 'Delivery → service handoff', before: 'Did not exist — customer reported the failure', after: 'Explicit stage in the workflow' },
      { metric: 'Validated capability areas for vendor selection', before: '0 — a wishlist', after: '4, from real usage' },
      { metric: 'Management reporting', before: 'Assembled by asking each rep', after: 'Built in' },
      { metric: 'Field access', before: 'Desktop-first internal tool', after: 'Mobile, carried into Zoho as a requirement' },
    ],

    differently:
      "Reporting at month three, not month eight. And I'd have instrumented the internal tool itself — I read adoption by noticing WhatsApp traffic and fielding status requests, which worked, but it was anecdote collected attentively rather than data. The same baseline gap I carry from the acquisition work: I can describe what happened and I can't re-measure it. The open risk now isn't whether the system is right — it's enablement. Parts of the team have limited familiarity with digital workflows generally, so the barrier isn't the tool's design, it's that using any tool is new. Process-flow PDFs and step-by-step video guides are in place, built with Zoho's support. Whether that holds once I'm not personally supporting it is the thing still to find out, and the measure is the same one that worked before: does the workaround come back.",

    documents: [
      { label: 'Case Management System — PRD', href: 'documents/Rehamo-CaseManagement-PRD.pdf' },
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
