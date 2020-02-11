export default function filterSunburst(sunData, selectedArc) {
  const flare = sunData;
  const { agency, name, depth } = selectedArc;
  let recipientSubAgencyIds, recipients, subagencies, subAgencyIds, agencyNames;

  if (depth === 2) {
    subagencies = flare.tree.filter(node => node.name === name && node.type === 'subagency');
    agencyNames = subagencies.map(x => x.agency);
    agencyNames = [...new Set([agencyNames])];
    agencyNames = agencyNames.length > 0 ? agencyNames[0] : null;
    subAgencyIds = subagencies.map(x => x.id);

  } else if (depth === 3) {
    recipients = flare.tree.filter(node => node.name === name && node.type === 'recipient');
    agencyNames = recipients.map(x => x.agency);
    agencyNames = [...new Set([agencyNames])];
    agencyNames = agencyNames.length > 0 ? agencyNames[0] : null;
    recipientSubAgencyIds = recipients.map(x => x.parent);
  }

  const filtered = flare.tree.filter(function (arc) {
    if(arc.id === 1) {
      return true;
    }

    if(depth === 1) {
      return arc.agency === agency;

    } else if (depth === 2) {
      switch (arc.depth) {
        case 1:
          return agencyNames.includes(arc.name);

        case 2:
          return arc.name === name;

        case 3:
          return subAgencyIds.includes(arc.parent);

      }

    } else if (depth === 3) {
      switch (arc.depth) {
        case 1:
          return agencyNames.includes(arc.name);

        case 2:
          return recipientSubAgencyIds.includes(arc.id);

        case 3:
          return arc.name === name;

      }
    }
  });

  return filtered;

}