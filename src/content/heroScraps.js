/**
 * The pinned scraps around the hero headline.
 * Each is positioned by `pos` (absolute, within the hero's relative box) and
 * only rendered at >=1280px — below that the hero is just the headline stack.
 * Keep the text short; these are glanced at, not read.
 */
export const heroScraps = {
  // torn ticket: "6 / years owning acquisition"
  stub: { value: '6', label: ['years owning', 'acquisition'] },

  // yellow sticky notes — the two case study hooks, in handwriting
  notes: [
    { id: 'n1', text: 'the site had traffic and no leads', kicker: 'case study 01', pos: { left: 0, top: 54 }, tilt: -4 },
    { id: 'n2', text: 'built a CRM to find out what to buy', kicker: 'case study 02', pos: { right: 0, bottom: 96 }, tilt: -3 },
  ],

  // white card with the leads sparkline
  chart: {
    label: 'monthly digital leads',
    value: '0 → 400+',
    points: '4,50 40,46 76,38 112,26 148,16 204,4',
    pos: { left: 14, bottom: 84 },
    tilt: 2.5,
  },

  // white card with the three-stage funnel
  funnel: {
    label: 'the funnel, redrawn',
    stageLabel: 'enquiry',
    pos: { right: 6, top: 42 },
    tilt: 3,
  },

  // dark terminal scrap — evidence of "sole developer"
  code: {
    caption: 'rehamo.com · I wrote this',
    line1: "router.post('/enquiry',",
    line2: 'qualify, route, track)',
    pos: { left: 0, top: 286 },
    tilt: -2,
  },

  // dashed rubber stamp
  stamp: {
    top: 'certified',
    lines: ['GA4', 'HubSpot'],
    foot: 'UVA product mgmt',
    pos: { right: 40, top: 300 },
    tilt: -11,
  },

  // the AI project, led by its constraint
  project: {
    text: "an AI that reads my ad accounts — and can't touch them",
    kicker: 'project · command center',
    pos: { right: 0, top: 452 },
    tilt: 2,
  },
};
