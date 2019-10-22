import csvData from "../../../../data/contract-explorer/awards_contracts_FY18_v2.csv";

function convertCsvToJson() {
  let id = 1, items = [], existingItem;
  let tree = [{
    "id": id,
    "name": "flare"
  }];

  const wedgeColors = ['#881e3d', '#daa200', '#D25d15', '#082344', '#004c40'];

  const agencies = [
    "Department of Defense",
    "Department of Veterans Affairs",
    "Department of Energy",
    "National Aeronautics and Space Administration",
    "Department of Health and Human Services",
    "Agency for International Development",
    "Department of State",
    "Department of Transportation",
    "Department of Agriculture",
    "General Services Administration",
    "Department of Homeland Security",
    "Office of Personnel Management",
    "Department of the Treasury",
    "Department of Justice",
    "Department of Commerce",
    "Department of the Interior",
    "Social Security Administration",
    "National Science Foundation",
    "Department of Education",
    "Department of Housing and Urban Development",
    "Department of Labor",
    "The Judicial Branch",
    "Environmental Protection Agency",
    "Smithsonian Institution",
    "Peace Corps",
    "Broadcasting Board of Governors",
    "Nuclear Regulatory Commission",
    "Securities and Exchange Commission",
    "Small Business Administration",
    "National Gallery of Art",
    "National Archives and Records Administration",
    "Pension Benefit Guaranty Corporation",
    "Executive Office of the President",
    "Government Accountability Office",
    "Equal Employment Opportunity Commission",
    "Consumer Financial Protection Bureau",
    "Federal Trade Commission",
    "Commodity Futures Trading Commission",
    "Consumer Product Safety Commission",
    "Federal Communications Commission",
    "Millennium Challenge Corporation",
    "Overseas Private Investment Corporation",
    "Court Services and Offender Supervision Agency",
    "Export-Import Bank of the United States",
    "Railroad Retirement Board",
    "United States Trade and Development Agency",
    "Corporation for National and Community Service",
    "National Labor Relations Board",
    "Armed Forces Retirement Home",
    "International Trade Commission",
    "Denali Commission",
    "Federal Election Commission",
    "National Transportation Safety Board",
    "Inter-American Foundation",
    "Federal Mediation and Conciliation Service",
    "National Endowment for the Arts",
    "Selective Service System",
    "Federal Mine Safety and Health Review Commission",
    "Surface Transportation Board",
    "Merit Systems Protection Board",
    "United States Chemical Safety Board",
    "Institute of Museum and Library Services",
    "National Endowment for the Humanities",
    "Morris K. Udall and Stewart L. Udall Foundation",
    "Office of Special Counsel",
    "Election Assistance Commission",
    "Access Board",
    "Federal Labor Relations Authority",
    "Occupational Safety and Health Review Commission",
    "Federal Maritime Commission",
    "Defense Nuclear Facilities Safety Board",
    "Committee for Purchase from People Who Are Blind or Severely Disabled",
    "U.S. Postal Service",
    "Privacy and Civil Liberties Oversight Board",
    "The Council of the Inspectors General on Integrity and Efficiency",
    "Gulf Coast Ecosystem Restoration Council",
    "National Mediation Board",
    "Federal Housing Finance Agency",
    "Office of Government Ethics",
    "Advisory Council on Historic Preservation",
    "Library of Congress",
    "American Battle Monuments Commission",
    "Administrative Conference of the U.S.",
    "Northern Border Regional Commission",
    "The Legislative Branch",
    "Commission of Fine Arts",
    "U.S. Tax Court"];

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

        const colorIndex = agencies.indexOf(row['agency']) % 5;

        const newObj = {
          "id": id,
          "name": row[key],
          "type": key,
          "size": row['obligation'] ? parseInt(row['obligation']) : 0,
          "parent": null,
          "agency": row['agency'],
          "colorHex": colorIndex >= 0 ? wedgeColors[colorIndex] : wedgeColors[0]
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
