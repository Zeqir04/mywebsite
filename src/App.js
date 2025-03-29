import './App.css';
import Accordion from './Accordion';
import Education from './Education';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
import ContactInfo from './ContactInfo';

const projects = [
  {
    title: "HTML, CSS & JS Project",
    text: "I built a responsive website using HTML, CSS, and JavaScript with Flexbox and Grid for layout. It includes interactive elements like smooth scrolling, a modal, and a toggleable navbar.",
    Btext: "HTML Project",
    URL: "https://zeqir04.github.io/OOPBuildingPlatformerGame/"
  },
  {
    title: "PHP Project",
    text: "Full Stack Project",
    Btext: "PHP Project",
    URL: "https://zeqir04.github.io/SH.B.TETOVA/"
  },
  {
    title: "React Project",
    text: "Front End Development",
    Btext: "React Project",
    URL: "https://zeqir04.github.io/SH.B.TETOVA/"
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
