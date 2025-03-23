function EducationItem({institution,degree,year}){
    return(
      <div className='item' >
        <p className='number'>{institution}</p>
        <p className='title'>{degree}</p>
        <p className='icon'>{year}</p>
      </div>
    )
  }
  
  function Education({education}){
    return(
      <div className='layout' id='education'>
        <h3>My Education</h3>
        {education.map((el,i) => (
          <EducationItem institution={el.institution} degree={el.degree} year={el.year} key={el.institution} />
        ))}
      </div>
    )
  }

  export default Education;