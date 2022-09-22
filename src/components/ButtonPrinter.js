import React from 'react'
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ButtonPrinter() {

    function printCoco() {
        document.getElementById("coco").innerHTML = "🥥 COCONUTS 🥥";
    }

    function deleteCoco() {
        document.getElementById("coco").innerHTML = "";

    }

    return (
        <>
            <Button
                variant="contained"
                sx={{
                    color: "aqua",
                }}
                onClick={() => { printCoco() }}
            >Print Coconuts 🥥</Button>

            <IconButton
                aria-label='delete'
                sx={{
                    color: 'rgb(24, 203, 144)'
                }}
                onClick={() => { deleteCoco() }}
            ><DeleteIcon /></IconButton>

            <div id='box'>
                <div id='coco'></div>
            </div>
        </>
    )
}
