import * as _ from "lodash"

export default function appendColors(sunData) {
  const colors = ['#7A2149', '#61344A', '#4E4861', '#3F566E', '#3C596A', '#2F6567', '#38705F', '#517852', '#88923D',
    '#AE933D', '#D39248', '#EA8052'];
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