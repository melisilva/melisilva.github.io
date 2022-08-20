import React from 'react';
import './Toggle.css';
import { ThemeContext } from './themeContext';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  
  return (
    <div className='toggle mt-3' onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>
    <Moon/>
    <Sun/>
    <div className='t-button' style={theme==="dark"? {left:'2px'}:{right:'2px'}}></div>
  </div>
  );
};

export default Toggle;