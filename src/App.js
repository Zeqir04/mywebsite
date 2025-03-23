import './App.css';
import Accordion from './Accordion';
import Education from './Education';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
import ContactInfo from './ContactInfo';

const projects = [
  {
    title: "React Project",
    text: "In this project i implemented React ..."
  },
  {
    title : "C# Project",
    text : "Full Stack Project "
  },
  {
    title : "Html,CSS & JS",
    text : "Front End Development"
  }
];

const education = [
  {
    institution: "SEEU University", //South East European University
    degree: "Bachelor of Computer Science",
    year: "2023-2027"
  },
  {
    institution: "Digital School",
    degree: "Front End Development",
    year: "2020-2021"
  },
  {
    institution: "Digital School",
    degree: "Back End Development",
    year: "2021-2022"
  }
]

const contacts = [
  {
    contact: "Phone",
    info: "+38971431800"
  },
  {
    contact: "Email",
    info: "zeqirxheladini21@gmail.com"
  },
  {
    contact: "Address",
    info: "Tetovo, North Macedonia"
  }
]



function App() {
  
  return (
    <div className="App">
      <Header />
      <Accordion data={projects} />
      <Education education={education}/>
      <SocialMedia/>
      <ContactInfo contact={contacts}/>
      <Footer />
    </div>
  );
}
export default App;
