import React from 'react'
import { Container, Grid } from '@mui/material'
import ContactUs from '../contact.us/contact.us'
import ExpandableView from '../expandable.view/expandable.view'
import CircularImageCard from '../circular.image.card/circular.image.card'
import VideoSection from '../video.section/video.section'

const VideoContentSection = () => {
    return (
        <div>
            <Container maxWidth='lg' className='pt-5 pb-5'>
                <Grid container columnSpacing={2} className='d-flex justify-content-center align-items-start pt-3 pb-3'>
                    <Grid item xs={12} sm={12} md={6} lg={5} className='bg-info h-100'>
                        <VideoSection />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={7}>
                        <CircularImageCard
                            // tag={item && item.tag}
                            // time={item && item.time}
                            // author={item && item.author}
                            // date={item && item.date}
                            // image={item && item.image}
                            title="STORIES THAT INSPIRE action & connection"
                            description="There are a thousand stories to be told, but none like yours.We prides ourselves with our authentic and humanistic approach to storytelling that brings you to life, ultimately inspiring prospects and sparking action."
                            buttontextCard="Learn More"
                        // selected={item && item.selected}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default VideoContentSection