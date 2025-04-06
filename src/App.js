import './App.css';
import Accordion from './Accordion';
import Education from './Education';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
import ContactInfo from './ContactInfo';
import BackToTopButton from './BackToTopButton';

const projects = [
  {
    title: "Platformer Game",
    text: "This is a simple platformer game built with JavaScript and HTML5 Canvas. The game features a character that can jump and move left or right, avoiding obstacles and collecting coins. It showcases basic game mechanics and physics.",
    Btext: "JavaScript Game",
    URL: "https://github.com/ZeQ1R/OOPBuildingPlatformerGame"
  },
  {
    title: "Mountain Climbing Site",
    text: "This is a simple website built with HTML, CSS, and JavaScript. It showcases a mountain climbing site with information about different climbing routes, tips for climbers, and a gallery of climbing photos. The site is responsive and user-friendly.",
    Btext: "HTML/CSS/JS Project",
    URL: "https://github.com/ZeQ1R/SH.B.TETOVA"
  },
  {
    title: "ToDo List Project",
    text: "This is a simple ToDo List application built with React + Vite. It allows users to add, delete, and mark tasks as completed. The app uses local storage to persist data. It features a clean and user-friendly interface, making it easy to manage tasks efficiently.",
    Btext: "React + Vite Project",
    URL: "https://github.com/ZeQ1R/ToDoList"
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
      <BackToTopButton/>
      <Footer />
    </div>
  );
}
export default App;
