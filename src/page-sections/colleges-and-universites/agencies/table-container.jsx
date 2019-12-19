import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import DataTable from "../../../components/table/data-table";
import formatNumber from "../../../utils/number-formatter";
import { graphql, useStaticQuery } from "gatsby";


const AgenciesTableContainer = (props) => {

  const _data = useStaticQuery(graphql`
    query {
      allCuBubbleChartTableV2Csv {
        nodes {
          Recipient
          agency
          subagency
          family
          type
          obligation
        }
      }
    }
  `);

  const tableColumnTitles = [{title: 'Recipient'}, {title: 'Agency'}, {title: 'SubAgency'}, {title:'Family'}, {title: 'Type'}, {title: 'Obligation'}];
  const tableData = _data.allCuBubbleChartTableV2Csv.nodes.map(n => [n.Recipient, n.agency, n.subagency, n.family, n.type, parseInt(n.obligation)]);

  if(props.display) {
    return(<>
      <Grid item>
        <Grid container>
          <Grid item xs={10}>
            <DataTable
              idName={'agenciesTable'}
              columnTitles={tableColumnTitles}
              data={tableData}
            />
          </Grid>
        </Grid>
      </Grid>
    </>)
  } else {
    return null;
  }

}

export default AgenciesTableContainer;