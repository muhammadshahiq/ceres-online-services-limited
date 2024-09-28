import { Container, Grid } from '@mui/material'
import React from 'react'
import ContactUs from '../contact.us/contact.us'
import ExpandableView from '../expandable.view/expandable.view'

const FaqsAndContactSection = () => {
    return (
        <div>
            <Container maxWidth='lg' className='pt-5 pb-5'>
                <Grid container columnSpacing={2} className='d-flex justify-content-center align-items-start pt-3 pb-3'>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <ExpandableView />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={7}>
                        <ContactUs />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FaqsAndContactSection