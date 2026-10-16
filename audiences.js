const audienceCopy = {
  suppliers: {
    title: 'Tracerr for suppliers — Explain every settlement outcome',
    description: 'Trace optimiser actions, exchanged data and settlement outcomes in one shared record for suppliers.',
    copy: {
      'hero-title': 'Know what optimisers changed.',
      'hero-emphasis': 'Know what it means for you.',
      'hero-lead': 'Optimiser actions shape the data suppliers receive, the positions they manage and the settlement they must explain. Tracerr connects each action, exchange and revision in one transparent record, so supplier teams can trace the impact, reconcile differences and respond with evidence.',
      'support-title': 'Don’t inherit an unexplained settlement result.',
      'support-body': 'When optimiser inputs are late, incomplete or revised, suppliers still have to reconcile the outcome. Tracerr shows what arrived, who owns it and where a difference began.',
      'outcomes-title': 'One settlement story, from optimiser action to final run.',
      'outcomes-body': 'See revenue estimates, data received from optimisers and later settlement in the same history. Trace differences to their source and move questions between parties with the evidence attached.',
      'outcomes-step-1': 'Check optimiser activity and the data received.',
      'outcomes-step-2': 'Reconcile positions against each settlement run.',
      'outcomes-step-3': 'Resolve customer questions with source evidence.',
      'coordination-title': 'Make every optimiser handoff explainable.',
      'coordination-body': 'Tracerr validates incoming data, records corrections and keeps questions with the shared record. Supplier teams can see which optimiser action led to a result instead of reconstructing the chain across inboxes.',
      'verticals-intro': 'For suppliers, optimiser activity must become accurate market positions, account allocations and charges they can reconcile and explain.',
      'uk-body': 'BSC roles and revisions make optimiser activity hard to translate into supplier positions. Tracerr connects VLP, VTP and asset-level flows to the data you reconcile and the revenues you explain.',
      'eu-body': 'Asset-level activity rolls into BRP and BSP accounts. Tracerr shows how each asset connects to those accounts and to settlement outcomes, so supplier teams can verify allocations.',
      'grid-body': 'Grid fees affect costs suppliers need to forecast and explain. Tracerr shows which charges apply, how they were modelled and how estimates compare with actual fees.',
      'close-title': 'One shared record for every settlement question.'
    }
  },
  'asset-owners': {
    title: 'Tracerr for asset owners — Verify every outcome',
    description: 'Verify optimiser actions, asset revenue estimates, grid fees and final settlement with shared evidence.',
    copy: {
      'hero-title': 'Know what your optimiser did.',
      'hero-emphasis': 'See what your assets earned.',
      'hero-lead': 'Your optimiser’s decisions affect asset performance, market revenue and the charges you ultimately see. Tracerr connects actions, estimates, exchanged data and final settlement, so you can verify each outcome with evidence and spot surprises early.',
      'support-title': 'No surprises between asset action and payment.',
      'support-body': 'Expected revenue can shift as market data, fees and settlement are revised. Tracerr shows which optimiser action and input contributed to each change, making it easier to ask the right question before the final result arrives.',
      'outcomes-title': 'One asset story, from action to settled revenue.',
      'outcomes-body': 'Compare expected asset revenue with actual settlement. Trace optimiser actions, data changes and fees in one place, with the evidence ready to inspect and query.',
      'outcomes-step-1': 'See asset actions and expected revenue.',
      'outcomes-step-2': 'Compare charges and later settlement with estimates.',
      'outcomes-step-3': 'Ask about differences with the evidence attached.',
      'coordination-title': 'Make optimiser actions visible.',
      'coordination-body': 'Tracerr links the optimiser’s decisions to asset-level data, revenue estimates and settlement. Owners can inspect each link, understand deviations and raise questions against the same evidence their partners use.',
      'verticals-intro': 'For asset owners, visibility means checking both the revenue an optimiser captured and the charges that shape the final outcome.',
      'uk-body': 'BSC rules can make it hard to verify what flexibility actions should earn. Tracerr shows the data flows, checks and expected revenues behind your optimiser’s UK activity.',
      'eu-body': 'When asset data rolls into BRP and BSP accounts, your asset’s share can be hard to follow. Tracerr shows how each asset connects to those accounts and to settlement.',
      'grid-body': 'Know which grid fees apply to each asset and how they affect net revenue. Tracerr keeps charges and assumptions visible from estimate to actual.',
      'close-title': 'See the outcome. Understand every step behind it.'
    }
  }
};

const requestedAudience = new URLSearchParams(window.location.search).get('for');
const audience = Object.hasOwn(audienceCopy, requestedAudience) ? requestedAudience : 'optimisers';

document.querySelectorAll('[data-audience-link]').forEach((link) => {
  if (link.dataset.audienceLink === audience) link.setAttribute('aria-current', 'page');
  else link.removeAttribute('aria-current');
});

if (audience !== 'optimisers') {
  const variant = audienceCopy[audience];
  for (const [key, value] of Object.entries(variant.copy)) {
    document.querySelector(`[data-copy="${key}"]`).textContent = value;
  }
  document.title = variant.title;
  document.querySelector('meta[name="description"]').content = variant.description;
}
