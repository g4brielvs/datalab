export default function findArcById(sunData, id) {
  const depth = id.substring(0, 1);
  const name = id.substring(1);
  let selectedArc;

  switch(depth) {
    case 'a':
      selectedArc = sunData.tree.find(node => node.name === name && node.depth === 1);
      break;
    case 's':
      selectedArc = sunData.tree.find(node => node.name === name && node.depth === 2);
      break;
    case 'r':
      selectedArc = sunData.tree.find(node => node.name === name && node.depth === 3);
      break;
  }

  return selectedArc;
}