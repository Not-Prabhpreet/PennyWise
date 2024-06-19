import React from 'react';
import {Button} from '@/components/ui/button';

function Header() {
  console.log("Header component is rendering");

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <img src='/logo.svg' alt='Logo' width={140} height={90} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;


