import React from "react";
import {Box, CircularProgress} from "@mui/material";

const Loader = () =>{
    return(
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100vw'} height={'100vh'}>
                <CircularProgress/>
            </Box>
        </>
    );
};

export default Loader;
