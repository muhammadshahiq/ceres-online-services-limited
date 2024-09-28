import React from 'react'
import AppLabel from '../app.label/app.label'
import VideoGallery from '../video.gallery/video.gallery'

const VideosSection = () => {
    return (
        <div id='Videos'>
            <AppLabel
                label='VIDEOS'
            />
           
            <VideoGallery />
        </div>
    )
}

export default VideosSection