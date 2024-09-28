import React, { useState } from 'react'
import AppLabel from '../app.label/app.label'
import SiteLabelTextField from '../site.label.textfield/site.label.textfield'
import { useStyle } from './contact.us.style'
import { isFormDetails } from './validator';
import { Button, Container, Grid, Typography } from '@mui/material';
import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import clsx from 'clsx';

const ContactUs = () => {
    const classes = useStyle()
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        validationResult: {
            isValidFirstName: true,
            isValidLastName: true,
            isValidEmail: true,
            isValidMobileNo: true,
            isMobileNoNotEmpty: true,
        },

    })

    const SendFormData = (e) => {
        e.preventDefault();
        const validationResult = isFormDetails(state);
        setState({ ...state, validationResult: validationResult });
        if (validationResult.allValid) {
            //api call here
            // props.getAppVersion({
            //   login_id: state.email,
            //   password: state.password,
            // });
        }
    };

    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }
    return (
        <div id='Contact' className={clsx(classes.contactForm, 'pt-5 pb-4 pl-3 pr-3 w-100 d-flex flex-column justify-content-center align-items-start')}>
            <Container maxWidth='sm'>
                <Typography variant={clsx(!(mobileWidth || tabletWidth) && 'h4', (mobileWidth || tabletWidth) && 'h6')} className={clsx(classes.textStyle, 'font-weight-bold')}>
                    <b className='text-white'> ASK US </b>ANYTHING
                </Typography>
                <Grid container rowSpacing={2} spacing={5} className={clsx(!mobileWidth && 'mt-2 mb-2', mobileWidth && 'mt-2 mb-2')}>
                    <Grid item xs={12} sm={12} md={12} lg={6} className='d-flex flex-column justify-content-start'>
                        <div className='mt-1 mb-1'>
                            <SiteLabelTextField
                                topAdornment="First Name"
                                placeholder="Your First Name"
                                showSteric={true}
                                value={state.firstName}
                                onChange={(e) => onChange("firstName", e.target.value)}
                                error={!state.validationResult.isValidFirstName ? 'First Name field is required' : ''}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} className='d-flex flex-column justify-content-start'>
                        <div className='mt-1 mb-1'>
                            <SiteLabelTextField
                                topAdornment="Last Name"
                                placeholder="Enter Your Name"
                                showSteric={true}
                                value={state.lastName}
                                onChange={(e) => onChange("lastName", e.target.value)}
                                error={!state.validationResult.isValidLastName ? 'Last Name field is required' : ''}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} className='d-flex flex-column justify-content-start'>
                        <div className='mt-1 mb-1'>
                            <SiteLabelTextField
                                topAdornment="Email"
                                placeholder="Email Address"
                                value={state.email}
                                showSteric={true}
                                onChange={(e) => onChange("email", e.target.value)}
                                error={!state.validationResult.isValidEmail ? 'Email field is required' : ''}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} className='d-flex flex-column justify-content-start'>
                        <div className='mt-1 mb-1'>
                            <SiteLabelTextField
                                maxLength="15"
                                maskChar=""
                                mask="+99 999 9999999"
                                topAdornment="Phone"
                                placeholder="Mobile Number"
                                value={state.mobileNumber}
                                showSteric={false}
                                onChange={(e) => onChange("mobileNumber", e.target.value)}
                                error={!state.validationResult.isMobileNoNotEmpty ? 'Please Enter Phone No' : !state.validationResult.isValidMobileNo ? "Phone No is not valid" : ''}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='d-flex flex-column justify-content-start'>
                        <div className='mt-1 mb-1'>
                            <SiteLabelTextField
                                topAdornment="Message"
                                // placeholder="18"
                                // showSteric={true}
                                value={state.message}
                                multiline={true}
                                // validationType='NUMERIC'
                                onChange={(e) => onChange("message", e.target.value)}
                                // error={!state.validationResult.isValidMessage ? 'Message field is required' : ''}
                            // disabled={state.isDisabledTokenDecimal}
                            // message='The decimal precision for the token (usually 18).'
                            />
                        </div>
                        <div className='d-flex justify-content-start width-max-content pt-4 pb-3'>
                            <Button onClick={SendFormData} className={clsx(classes.btnForm, 'text-transform-uppercase w-100 pt-2 pb-2 pl-4 pr-4')}>
                                Submit Request
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}

export default ContactUs