import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Button } from '@mui/material';
import { Link } from 'react-scroll';

function Header(){

    return <>
      <div className='header' id='home'>
          {/* <div className='pagination'>
            <Link to="home" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="projects" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="education" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="socialmedia" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="contactinfo" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>

          </div> */}
      
        <div className='container' >
          <h1>About Me</h1>
         <span> I am a passionate and dedicated front-end developer with a strong foundation in web development.
           I have a keen eye for design and a commitment to creating user-friendly interfaces. 
           My skills include HTML, CSS, JavaScript, React, and Vite.
           I am always eager to learn and stay updated with the latest trends in web development. 
           Also I'm familiar with back-end development using Node.js and C#, and I have experience working with databases like PostreSQL. 
           </span>
    <span>
    <Button variant="contained" href="https://drive.google.com/file/d/15-IaT6V16L3YTna4HPkwzyTwmtVayIt9/view?usp=sharing" target='_blank' rel="noopener noreferrer" className="button">
  Resume
</Button>
    </span>
        </div>
      </div>
    </>
  }

  export default Header;