import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function Breadcrumb() {
    return (
        <div className='p-6 ml-14'>
            <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' }}>
                <Link underline="hover" color="white" href="/">
                    Home
                </Link>
                <Link
                    underline="hover"
                    color="white"
                    href="/material-ui/getting-started/installation/"
                >
                    Hotel
                </Link>
                <Typography color="white">Brits Hotel Legian </Typography>
            </Breadcrumbs>

        </div>
    )
}
