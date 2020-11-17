import React from 'react';
import MUIDataTable from "mui-datatables";

const DataTable = ({item}) => {
    
    const columns = item[0] && Object.keys(item[0]);
    var eadings = item[0] && columns.map((heading) => heading);
    var body = item.map((row)=> columns.map((column)=>row[column]));
    const options = {
        filterType: 'checkbox',
      };
    return (
        <div>
         {(item == Array(0)) ?  null : <MUIDataTable
//   title={"Employee List"}
  data={body}
  columns={eadings}
  options={options} 
/>  }
            
        </div>
    )
}

export default DataTable
