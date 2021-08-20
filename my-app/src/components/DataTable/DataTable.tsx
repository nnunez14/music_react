import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { MusicForm } from '../../components/MusicForm';
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'name', headerName: 'Instrument name', width: 130 },
    { field: 'description', headerName: 'Description', width: 130 },
    {
    field: 'price',
    headerName: 'Price',
    type: 'string',
    width: 90,
    }
];
interface gridData{
    id?: string;
}
export const DataTable = () => {
    let {musicData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({id:''});
    let handleOpen = () =>{
        setOpen(true)
    };
    let handleClose = () =>{
        setOpen(false)

    };
    let handleCheckbox = (id:GridRowModel) =>{
        if(id[0] === undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
    }

    let deleteData = () =>{
      server_calls.delete(gridData.id!)
      getData()
    }

    return (
      <div style={{ height: 400, width: '100%' }}>
        <h2>Instruments In Inventory</h2>
        <DataGrid rows={musicData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange = { handleCheckbox } />
{/* Updated Code Below This point */ }
      <Button onClick={handleOpen}>Update</Button>
      <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/*Dialog Pop Up begin */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Instrument</DialogTitle>
        <DialogContent>
          <DialogContentText>Update Instrument</DialogContentText>
            <MusicForm id={gridData.id!}/>
        </DialogContent>
        <DialogActions>
          <Button onClick = {handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color = "primary">Done</Button> 
        </DialogActions>
      </Dialog>
      </div>
    );
}