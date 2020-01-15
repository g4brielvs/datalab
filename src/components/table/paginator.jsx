import React from 'react';
import { Button } from 'semantic-ui-react';
import './data-table.scss';
import Grid from "@material-ui/core/Grid/Grid";


const BetweenButton = () => <Button content='...' style={{ cursor: 'default' }} />

const Paginator = ({ currentPage, onPageChange, range = 3, pageCount, itemCount }) => {
  const renderedPages = [...Array(range * 2 + 1).keys()]
    .map(i => currentPage - range + i)
    .filter(i => i > 0 && i <= pageCount)

  const showStart = currentPage - range > 1
  const showEnd = currentPage + range < pageCount
  const pageStart = (currentPage - 1) * 10 + 1
  const pageEnd = currentPage * 10 < itemCount ? currentPage * 10 : itemCount

  return (<>
    <Grid
      container>
      <Grid item xs={4}>
        <div>Showing  {pageStart} to {pageEnd} of {itemCount} entries</div>
      </Grid>
      <Grid item xs={8}
            style={{ textAlign: 'right' }}>
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
