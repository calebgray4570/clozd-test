import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';

const columns = [
    {field: 'id', hide: true},
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 400,
    },
    {
      field: 'location',
      headerName: 'City / Country',
      flex: 0.8,
    },
]


const Table = ({page, setPage}) => {
    const classes = useStyles();
    const [selectionModel, setSelectionModel] = useState([]);
    const history = useHistory();
    const rows = useSelector(state => state.users.results ? state.users.results.map((user, i) => {
        return {
            id: user.login.uuid,
            name: `${user.name.title} ${user.name.first} ${user.name.last}`,
            email: user.email,
            location: `${user.location.city} / ${user.location.country}`
        }
    }) : null );
    
    const handlePageChange = (params) => {
        setPage(params.page);
    };

    const handleSelected = (uuid) => {
        setSelectionModel(uuid);
        history.push(`/${uuid}`)
    }
    return (
        !rows ? <CircularProgress/> : (
        <div className={classes.gridWrap}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={100}
                rowCount={7000}
                paginationMode="server"
                page={page}
                onPageChange={handlePageChange}
                onSelectionModelChange={(newSelection) => {
                    handleSelected(newSelection.selectionModel);
                }}
                selectionModel={selectionModel}
            />
        </div>
        )
    )
}

const useStyles = makeStyles({
    gridWrap: {
      borderRadius: 5,
      backgroundColor: 'white',
      height: 450, 
      width: '100%'
  
    }
});

export default Table;