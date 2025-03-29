import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Button } from '@mui/material';
import { Link } from 'react-scroll';

function Header(){

    return <>
      <div className='header' id='home'>
          <div className='pagination'>
            <Link to="home" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="projects" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="education" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="socialmedia" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>
            <Link to="contactinfo" smooth={true} duration={500}><FiberManualRecordIcon></FiberManualRecordIcon></Link>

          </div>
      
        <div className='container' >
          <h1>About Me</h1>
          <span>I am a dedicated Full-Stack Developer with expertise in ASP.NET Core, JavaScript, React, SQL Server, and Entity Framework. Passionate about creating modern, functional, and responsive web applications, I focus on delivering high-quality digital solutions with secure authentication, database integration, and interactive UI components.
  
    Beyond coding, I have a strong leadership background, having organized community-driven activities such as hiking expeditions, creating new trails, and environmental clean-ups. This experience has shaped me into a team player, problem solver, and fast learner who thrives in dynamic environments.
  
    Currently, I offer website development and video editing services, helping individuals and businesses bring their ideas to life with sleek designs and seamless functionality.
  
    I'm always open to new challenges and opportunities—let’s build something amazing together!</span>
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