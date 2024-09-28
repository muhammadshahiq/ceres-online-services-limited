import React from 'react'
import ContactDetail from '../contact.detail/contact.detail'
import AppLabel from '../app.label/app.label'

const PresentedBySection = () => {
    return (
        <div className='pt-4 pb-5'>
            <AppLabel
                label='PRESENTED BY'
            />
            <ContactDetail name='Miri Glasser' email='realtormiri@gmail.com' mobileNo='(818) 825-1969' />
        </div>
    )
}

export default PresentedBySection