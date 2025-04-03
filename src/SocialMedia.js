import linkedin from './images/linkedin.png';
import github from './images/github.png';

function SocialMedia(){
    return(
      <div className='layout' id='socialmedia'>
        <h3>My Social Media</h3>
        <div className='item'>
          <p className='number'>LinkedIn</p>
          <p className='title'>
            <a href='https://www.linkedin.com/in/zeqirxheladini/'>
            <img src={linkedin} alt="LinkedIn" style={{ marginRight: "17px" }} />
            </a>
          </p>
      </div>
      <div className='item'>
          <p className='number'>GitHub</p>
          <p className='title'>
            <a href='https://github.com/ZeQ1R'>
            <img src={github} alt='GitHub' /></a>
          </p>
      </div>
      </div>
    )
  }

  export default SocialMedia;