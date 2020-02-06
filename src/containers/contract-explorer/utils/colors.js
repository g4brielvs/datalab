import * as _ from "lodash"

export default function appendColors(sunData, colors) {
  let agencies = _.filter(sunData.tree, { 'type': 'agency' });
  const agenciesColors = {};

  agencies = _.map(agencies, 'name');
  agencies = _.uniqBy(agencies);

  for (let i = 0; i < agencies.length; i++) {
    agenciesColors[agencies[i]] = colors[i % colors.length];
  }

  sunData.tree[0]['colorHex'] = '#fff';

  for (let i = 1; i < sunData.tree.length; i++) {
    sunData.tree[i]['colorHex'] = agenciesColors[sunData.tree[i].agency];
  }

  return sunData;
};