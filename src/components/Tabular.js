
import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {dataReducer, sortingReducer} from '../actions/index';
import {useSelector, useDispatch} from 'react-redux';


export default function Tabular() {  
  const stl = {
    btn: {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      cursor:"pointer",
      outline:"none"
  }
  };
  const findData = useSelector(state => state.findData);
  const dispatch = useDispatch(); 
  const sortData = useSelector(state => state.sortData);
  const sort_rows = (event) => {
    let sorter = event.target.value;
    let new_data = [...findData.sales];
    if (sortData) {
      new_data.sort((a, b) => (a[sorter] > b[sorter] ? 1 : -1));
    } else {
      new_data.sort((a, b) => (a[sorter] > b[sorter] ? -1 : 1));
    }
    dispatch(sortingReducer());
    dispatch(dataReducer({...findData, sales:new_data}))

  };
return (
    <>
      <Table size="large" stickyHeader aria-label="sticky table">
        <TableHead>
        <TableRow key={0} style={{ padding: "0px" }}>
              {Object.keys(findData.sales[0]).map((key, index) => (
                <TableCell
                  key={index}
                >
                  <input
                    key={index}
                    style={stl.btn}
                    type="button"
                    onClick={(event) => {
                      sort_rows(event);
                    }}
                    value={key}
                  />
                </TableCell>
              ))}
            </TableRow>
        </TableHead>
        <TableBody>
          {findData.sales.map((row,index) => (
            <TableRow key={index}>
              <TableCell>{row.weekEnding}</TableCell>
              <TableCell>{row.retailSales}</TableCell>
              <TableCell>{row.wholesaleSales}</TableCell>
              <TableCell>{row.unitsSold}</TableCell>
              <TableCell>{row.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}


// onClick={() => props.sortBy("retailerMargin")}

// let sortedProducts = [...products];
//   if (sortedField !== null) {
//     sortedProducts.sort((a, b) => {
//       if (a[sortedField] < b[sortedField]) {
//         return -1;
//       }
//       if (a[sortedField] > b[sortedField]) {
//         return 1;
//       }
//       return 0;
//     });
//   }