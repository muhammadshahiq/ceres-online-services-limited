import './App.scss';
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { appTheme } from './container/material.theme/app.theme/app.material.theme';
import CssBaseline from '@mui/material/CssBaseline';
import PageNotFound from './container/not.found.page/not.found.page';
import Footer from './components/common/footer/footer';
import AppNavbar from './components/common/app.navbar/app.navbar';
import AboutUs from './container/about.us.page/about.us.page';
import BlogsPage from './container/blogs.page/blogs.page';
import ServicesPage from './container/services.page/services.page';
import TherapeuticAreasPage from './container/therapeutic.areas.page/therapeutic.areas.page';
import CareerPage from './container/career.page/career.page';
import MedicalWritingForGeneTheraphyPage from './container/medical-writing-for-gene-theraphy-page/medical-writing-for-gene-theraphy-page';
// import Loadable from 'react-loadable';
// const HomePage = Loadable({
//   loader: () => import(/*webpackChunkName:"UPM "*/'./container/home.page/home.page'),
//   loading: () => <div className="loadings">  </div>
// });
const HomePage = lazy(() => import('./container/home.page/home.page'));

function App() {

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Suspense fallback={<div className='w-100 min-h-100-vh d-flex justify-content-center align-items-center opacity-4'>
            {/* <LazyLoadImage
              alt="loader-icon"
              height='57.6px'
              effect="blur"
              width='57.6px'
              src={`${process.env.PUBLIC_URL}/assets/images/loader.gif`}
            />  */}
            <p className='text-white w-100 h-100'>Loading....</p>
          </div>}>
            <Router>
              <div>
                <AppNavbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/therapeutic-areas" element={<TherapeuticAreasPage />} />
                  <Route path="/career" element={<CareerPage />} />
                  <Route path="/medical-writing-gene-theraphy" element={<MedicalWritingForGeneTheraphyPage />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
              </div>
            </Router >
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
    </div >

  );
}

export default App;
