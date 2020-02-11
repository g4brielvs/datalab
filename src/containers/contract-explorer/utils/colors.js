export default function appendColors(sunData) {
  const colors = ['#7A2149', '#61344A', '#4E4861', '#3F566E', '#3C596A', '#2F6567', '#38705F', '#517852', '#88923D',
    '#AE933D', '#D39248', '#EA8052'];
  let agencies = sunData.tree.filter(node => node.type === 'agency');
  const agenciesColors = {};

  agencies = agencies.map(x => x.name);
  agencies = [...new Set([agencies])];
  agencies = agencies.length > 0 ? agencies[0] : null;

  agencies.forEach(function(item, index) {
    agenciesColors[item] = colors[index % colors.length]
  });

  sunData.tree.forEach(function(item, index) {
    if(index === 0) {
      sunData.tree[index]['colorHex'] = '#fff';
    } else {
      sunData.tree[index]['colorHex'] = agenciesColors[item.agency];
    }
  });

  return sunData;
};