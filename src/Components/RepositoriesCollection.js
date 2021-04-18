import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const RepositoriesCollection = ({repos}) => {
    const columnDefs = [
        {field: "owner.login", headerName: "Owner Name", sortable: true, filter: true, resizable: true},
        {field: "name", headerName: "Name", sortable: true, filter: true, resizable: true},
        {field: "description", headerName: "Description", sortable: true, filter: true, resizable: true},
        {field: "stargazers_count", headerName: "Stars", sortable: true, filter: true, resizable: true},
        {field: "open_issues_count", headerName: "Open Issues", sortable: true, filter: true, resizable: true},
        {field: "watchers_count", headerName: "Watchers", sortable: true, filter: true, resizable: true}
    ];
    return (
        <div 
            className="ag-theme-balham" 
            style={{
                height: '325px',
                width: '58%',
                textAlign: 'left',
                margin: 'auto'
            }}>
            <AgGridReact
                columnDefs = {columnDefs}
                rowData = {repos}
                rowSelection = "multiple"
                pagination = "true"
                paginationPageSize = {10}
            />
        </div>
    );
}

export default RepositoriesCollection;