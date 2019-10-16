import csvData from "../../../unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv";

function convertCsvToJson() {
  let id = 1, items = [], existingItem;
  let tree = [{
    "id": id,
    "name": "flare"
  }];

  csvData.forEach(function (row) {
    Object.keys(row).forEach(function(key) {

      existingItem = _.filter(tree, _.matches({ 'name' : row[key], 'type' : key}));

      if(key === 'obligation') {
        return;
      }

      if (existingItem.length > 0) {
        // get the id of the existing item
        // check if the item exists
        // if exists, add to the sum

        const index = tree.indexOf(existingItem[0]);
        tree[index]['size'] += parseInt(row['obligation']);

      } else {
        // if doesn't exist add the item

        items.push({
          id: ++id,
          key: row[key]
        });

        const newObj = {
          "id": id,
          "name": row[key],
          "type": key,
          "size": row['obligation'] ? parseInt(row['obligation']) : 0,
          "parent": null
        };


        // Set parent id
        switch (key) {
          case 'agency':
            newObj.parent = 1;
            break;
          case 'subagency':
            const tempSubAgencyParent = _.filter(tree, _.matches({ 'name' : row['agency'], 'type' : 'agency'}));
            const tempSubAgencyParentId = tempSubAgencyParent && tempSubAgencyParent[0] ? tempSubAgencyParent[0]['id'] : -1;
            newObj.parent = tempSubAgencyParentId;
            break;
          case 'recipient':
            const tempRecipientParent = _.filter(tree, _.matches({ 'name' : row['subagency'], 'type' : 'subagency'}));
            const tempRecipientParentId = tempRecipientParent && tempRecipientParent[0] ? tempRecipientParent[0]['id'] : -1;
            newObj.parent = tempRecipientParentId;
            break;
          case 'obligation':
            break;
        }

        tree.push(newObj);

      }
    });
  });

  return tree;

}

export default convertCsvToJson;
