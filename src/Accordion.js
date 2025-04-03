import { useState } from 'react';
import { Button } from '@mui/material';


function Accordion({data}){
    return(
      <div className='layout' id='projects'> 
      <h3>My Personal Projects</h3>
        {data.map((el,i) => (
          <AccordionItem title={el.title} text={el.text} num={i} key={el.title} Btext={el.Btext} URL={el.URL} />
          
        ))}
      </div>
    )
  }
  
  function AccordionItem({num,title,text,Btext,URL}){
    const [isOpen,setIsOpen] = useState(false);
  
    function handleToggle(){
      setIsOpen((isOpen) => !isOpen)
    }
  
    return(
      <div className={`item ${isOpen} ? "open" : ""`} >
        <p className='number'>{num < 9 ? `0${num+1}` : num + 1}</p>
        <p className='title'>{title}</p>
        <p className='icon' onClick={handleToggle}>{isOpen ? "-" : "+"}</p>
        
        {isOpen && (
        <div className='content-box'>
          <p>{text}</p>
          <Button variant="contained" color="primary" href={URL} target="_blank" rel="noopener noreferrer" className="button">
            {Btext}
          </Button>
        </div>
      )}
        
      </div>
    )
  }

  export default Accordion;