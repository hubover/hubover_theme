import React, { useEffect } from 'react';
import {
  Header,
  Slider,
  ClipBoard,
  Features,
  FeatureLayout,
  Partners,
  Contact,
  Footer
} from './components';

const App = () => {
  useEffect(() => {
    document.title = 'Hubover'
  })

  return (
    <React.Fragment>
      <Header />
      <Slider />
      <ClipBoard />
      <Features />
      <FeatureLayout />
      <Partners />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}


export default App;
