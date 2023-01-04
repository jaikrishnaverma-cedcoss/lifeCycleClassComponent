
import { useState } from 'react';
import './App.css';
import ConstructorComp from './pages/ConstructorComp';
import ThemeButton from './pages/ThemeButton';

function App() {
  const stack=['bg-primary fwhite','bg-success fwhite','bg-danger fwhite','bg-warning','bg-info','bg-link']
  const [theme,setTheme]=useState(0)
  const getDerivedStateFromProps=()=>{
(theme===5)?setTheme(0):setTheme(prev=>prev+1)
  }

  console.log("App.js component is renderd");
  return (
    <div className='container-fluid my-3 d-flex justify-content-center flex-wrap'>
      <div className={`p-4 d-flex col-10 justify-content-around ${stack[theme]}`}>
        <div className='col-4'>
        <label className='tasks'>Task</label>
        <p className='question text-secondary mb-0'>1. Constructor</p>
        <p className='question text-secondary mb-0'>2. getDerivedStateFromProps</p>
        <p className='question text-secondary mb-0'>3. render : Use this method to display HTML. </p>
        <p className='question text-secondary mb-0'>4. componentDidMount</p>
        <p className='question text-secondary mb-0'>5. getDerivedStateFromProps()</p>
        <p className='question text-secondary mb-0'>6. shouldComponentUpdate</p>
        <p className='question text-secondary mb-0'>7. getSnapshotBeforeUpdate</p>
        <p className='question text-secondary mb-0'>8. componentDidUpdate</p>
        <p className='question text-secondary mb-0'>9. componentWillUnmount()</p>
        
        </div>
        <div className='col-4'>
        <ConstructorComp darkMode={false} />
        <ThemeButton getDerivedStateFromProps={getDerivedStateFromProps} />
    
        </div>
          </div>




    </div>
  );
}

export default App;
