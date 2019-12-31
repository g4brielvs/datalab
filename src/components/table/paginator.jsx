import React from 'react';
import { Button } from 'semantic-ui-react';
import './data-table.scss';
import Grid from "@material-ui/core/Grid/Grid";


const BetweenButton = () => <Button content='...' style={{ cursor: 'default' }} />

const Paginator = ({ currentPage, onPageChange, range = 3, pageCount }) => {
  const renderedPages = [...Array(range * 2 + 1).keys()]
    .map(i => currentPage - range + i)
    .filter(i => i > 0 && i <= pageCount)

  const showStart = currentPage - range > 1
  const showEnd = currentPage + range < pageCount

  console.log(currentPage);
  console.log(pageCount);
  console.log(range);
  console.log(showStart);
  console.log(showEnd);

  return (<>
    <Grid
      container>
      <Grid item xs={4}>
        <div>Showing  {(currentPage - 1) * 10 + 1} to {currentPage * 10} of {pageCount} entries</div>
      </Grid>
      <Grid item xs={8}
            style={{ 'text-align': 'right' }}>
        <Button.Group compact>
          {showStart && (
            [
              <Button content={1} onClick={() => onPageChange(1)} />,
              <BetweenButton />
            ]
          )}
          {renderedPages.map(page => (
            <Button
              key={page}
              onClick={() => onPageChange(page)}
              content={page}
              primary={currentPage === page}
            />
          ))}
          {showEnd && (
            [
              <BetweenButton />,
              <Button content={pageCount} onClick={() => onPageChange(pageCount)} />
            ]
          )}
        </Button.Group>
      </Grid>
    </Grid>
  </>)
}

export default Paginator