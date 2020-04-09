import React from 'react';
import { useStyles } from '../styles';
import TH from './TH';

const HeaderContainer = ({
  indexColumnText = '(index)',
  columns = [],
  sorted,
  sortIndexColumn,
  sortColumn,
  sortAscending,
  onTHClick,
  onIndexTHClick,
}) => {
  const styles = useStyles('TableInspectorHeaderContainer');
  const borderStyles = useStyles('TableInspectorLeftBorder');
  return (
    <div style={styles.base}>
      <table style={styles.table}>
        <tbody>
          <tr>
            
            {columns.map(column => (
              <TH
                borderStyle={borderStyles.solid}
                key={column}
                sorted={sorted && sortColumn === column}
                sortAscending={sortAscending}
                onClick={onTHClick.bind(null, column)}>
                {column}
              </TH>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeaderContainer;
