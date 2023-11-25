import { useEffect, useRef } from 'react';
import { Head } from '~/components/shared/Head';
import Hero from './Hero';
import BorderBox from '~/components/misc/BorderBox';

function Index() { 
  return (
    <>
    
      <Head title="Home" />
      <Hero/>
    </>
  );
}

export default Index;
