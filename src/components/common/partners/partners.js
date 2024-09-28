// import React from 'react'
// import { Container, Grid } from '@mui/material'

// const Partners = () => {
//     const partnersData = [
//         {
//             image: `${process.env.PUBLIC_URL}/assets/images/pt-2.png`
//         },
//         {
//             image: `${process.env.PUBLIC_URL}/assets/images/pt-1.png`
//         },

//         {
//             image: `${process.env.PUBLIC_URL}/assets/images/pt-3.png`
//         },
//         {
//             image: `${process.env.PUBLIC_URL}/assets/images/pt-4.png`
//         }
//     ]
//     return (
//         <div>
//             <Container maxWidth='lg' className='pt-5 pb-5'>
//                 <Grid container columnSpacing={5} rowSpacing={5} rowGap={5} className='d-flex justify-content-center align-items-center pt-3 pb-3'>
//                     {
//                         partnersData && partnersData.map((data, i) => {
//                             return <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
//                                 <img
//                                     height='100%'
//                                     width='100%'
//                                     src={data.image}
//                                 ></img>
//                             </Grid>
//                         })
//                     }
//                 </Grid>
//             </Container>
//         </div>
//     )
// }

// export default Partners