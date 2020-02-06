import * as _ from "lodash"

export default function filterSunburst(sunData, selectedArc) {
  const flare = sunData;
  const { agency, name, depth } = selectedArc;
  let recipientSubAgencyIds, recipients, subagencies, subAgencyIds, agencyNames;

  if (depth === 2) {
    subagencies = _.filter(flare.tree, { 'name': name, 'type': 'subagency' });
    agencyNames = _.map(subagencies, 'agency');
    agencyNames = _.uniqBy(agencyNames);
    subAgencyIds = _.map(subagencies, 'id');

  } else if (depth === 3) {
    recipients = _.filter(flare.tree, { 'name': name, 'type': 'recipient' });
    agencyNames = _.map(recipients, 'agency');
    agencyNames = _.uniqBy(agencyNames);
    recipientSubAgencyIds = _.map(recipients, 'parent');

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