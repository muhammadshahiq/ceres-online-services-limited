import React, { useState } from 'react'
import AppLabel from '../app.label/app.label'
import ExpandableView from '../expandable.view/expandable.view'
import AppLabelV2 from '../app.label.v2/app.label.v2'
import { Button, Typography } from '@mui/material'
import ContactDetail from '../contact.detail/contact.detail'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ContentDialog from '../content.dialog/content.dialog'
import ContactUs from '../contact.us/contact.us'

const OverviewSection = (props) => {
    const [state, setState] = useState({
        isContactDialogOpen: false
    })
    const hideContactDialog = () => {
        setState({ ...state, isContactDialogOpen: false })
    }
    const showContactDialog = () => {
        setState({ ...state, isContactDialogOpen: true })
    }

    const data = [
        {
            label: 'Price',
            value: `$91,025658`
        },
        {
            label: 'Beds',
            value: `5`
        },
        {
            label: 'Baths',
            value: `4`
        },
        {
            label: 'Property size',
            value: `31,210`
        }
    ]

    return (
        <div id='Overview'>
            <AppLabel
                label='OVERVIEW'
            />
            <div>
                <ExpandableView name='PROPERTY DETAILS'>
                    {data && data.map((data, index) => {
                        return <div key={index}>
                            <AppLabelV2 label={data.label} value={data.value} />
                        </div>
                    })}
                    <div className='w-100 d-flex justify-content-center pt-3'>
                        <Button>
                            View Flyer
                        </Button>
                    </div>
                </ExpandableView>
                <ExpandableView name='CONTACT'>
                    <ContactDetail name='Miri Glasser' email='realtormiri@gmail.com' mobileNo='(818) 825-1969' />
                    <div className='w-100 d-flex justify-content-center pt-3'>
                        <Button onClick={showContactDialog}>
                            Contact
                        </Button>
                    </div>
                </ExpandableView>
                <ExpandableView name='NEIGHBORHOOD'>
                    <div className='w-100 d-flex justify-content-center align-items-center flex-column pt-2'>
                        <Button variant='outlined' className='w-75 pt-2 pb-2 mt-2 mb-2 gap-10 d-flex justify-content-center align-items-center'>
                            <LazyLoadImage
                                effect="blur"
                                className='d-flex justify-content-center align-items-center'
                                height='22px'
                                width='22px'
                                alt="arrow-icon2"
                                src={`${process.env.PUBLIC_URL}/assets/images/users-solid.svg`}
                            />
                            <Typography variant="body2" className='text-transform-none d-flex justify-content-center align-items-center'>
                                View Neighborhood
                            </Typography>
                        </Button>
                        <Button variant='outlined' className='w-75 pt-2 pb-2 mt-2 mb-2 gap-10 d-flex justify-content-center align-items-center'>
                            <LazyLoadImage
                                effect="blur"
                                className='d-flex justify-content-center align-items-center'
                                height='22px'
                                width='22px'
                                alt="arrow-icon2"
                                src={`${process.env.PUBLIC_URL}/assets/images/location-dot-solid.svg`}
                            />
                            <Typography variant="body2" className='text-transform-none d-flex justify-content-center align-items-center'>
                                View Location on Map
                            </Typography>
                        </Button>
                    </div>
                </ExpandableView>
            </div>
            <ContentDialog
                isDialogOpen={state.isContactDialogOpen}
                maxWidth='sm'
                hideContactDialog={hideContactDialog}
                dividers={false}
                showContactDialog={showContactDialog}
                title={
                    <div className='w-100 text-right' onClick={hideContactDialog}>
                        <LazyLoadImage
                            effect="blur"
                            className='cursor-pointer'
                            height='32px'
                            width='32px'
                            alt="arrow-icon2"
                            src={`${process.env.PUBLIC_URL}/assets/images/close-icon.svg`}
                        />
                    </div>
                }
                content={<div className='w-100 h-100'>
                    <ContactUs />
                </div>}
            >
            </ContentDialog>
        </div>
    )
}

export default OverviewSection