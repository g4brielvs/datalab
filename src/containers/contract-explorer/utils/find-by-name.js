export default function findArcByName(sunData, d) {
  // if depth is 0, the item flare will be selected
  return sunData.tree.find(node => node.depth === d.depth && node.name === d.name);
}

