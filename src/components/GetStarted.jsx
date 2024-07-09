import React from 'react'
import { 
    Box,
    Grid,
    styled, Button,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';
import howto from "../assets/file.png"

const GetStarted = () => {

    const CustomWrapper = styled(Box) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: "center",
        padding: '20px'
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
        <CustomWrapper>
        <Typography
                variant='h4'
                component='h1'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#000', 
                }}
                >
                  How Do I &nbsp;
                   <span style={{fontWeight: '600', color:'#1973e9'}}>
                    Refer?
                    </span> 
                </Typography>
            <img src={howto} />
</CustomWrapper>
    )
}

export default GetStarted;