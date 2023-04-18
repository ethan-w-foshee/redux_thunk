import React from 'react';
import { useState } from 'react';

import { Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Import = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [deleteRow, setDeleteRow] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e, index) => {
        setAnchorEl(e.target);
        setDeleteRow(index);
    };

    const handleClose = () => {
        props.deleteMakes(deleteRow);
        setAnchorEl(null);
        setDeleteRow(null);
    };

    return (
        <Container fixed>
            <Button
                variant="contained"
                onClick={props.fetchMakes}
            >Import</Button>
            <h1>Count: {props.makes.length}</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Make</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{row.MakeId}
                            </TableCell>
                            <TableCell align="center">{row.MakeName}
                            </TableCell>
                            <TableCell align="center">
                                <MoreVert
                                    onClick={(event) => handleClick(event, index)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}>
                    <MenuItem onClick={handleClose}> Delete </MenuItem>
                </Menu>
            </Table>
        </Container>
    )
}

export default Import