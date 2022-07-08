import React from 'react';
// import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function TableHeader (props){
  // const createSortHandler = property => event => {
  //   props.onRequestSort(event, property);
  // };

  // const { order, orderBy } = props;

  return (
    <TableHead>
      <TableRow>
        {props.headers.map(
          row => (
            <TableCell
              key={row.id}
              align={row.numeric ? 'right' : 'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              style={{fontWeight: 'bold', background: "#e0e0e0"}}
              // sortDirection={orderBy === row.id ? order : false}
            >
                {row.label}
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
}

//TableHeader.propTypes = {
  // onRequestSort: PropTypes.func.isRequired,
  // order: PropTypes.string.isRequired,
  // orderBy: PropTypes.string.isRequired,
//};

export default TableHeader;
