import { useState } from 'react'

import { Navbar } from './components/Navbar/Navbar.jsx'

import { SectionMain } from './components/SectionMain/SectionMain.jsx'
import { Text } from './components/SectionMain/Text.jsx'
import { CVContact } from './components/SectionMain/CVContact.jsx'
import { DivideLine } from './components/SectionMain/DivideLine.jsx'

import { SectionAboutMe } from './components/SectionAboutMe/SectionAboutMe.jsx'
import { AboutMeTxt } from './components/SectionAboutMe/AboutMeTxt.jsx'
import { Photo } from './components/SectionAboutMe/Photo.jsx'

import { SectionSkills } from './components/SectionSkills/SectionSkills.jsx'
import { SkillCard } from './components/SectionSkills/SkillCard.jsx'

import { SectionProjects } from './components/SectionProjects/SectionProjects.jsx'
import { ProjectCard } from './components/SectionProjects/ProjectCard.jsx'

import { SectionContactMe } from './components/SectionContactMe/SectionContactMe.jsx'
import { ContactForm } from './components/SectionContactMe/ContactForm.jsx'

import {Footer} from './components/Footer/Footer.jsx'

import { PortfolioBody } from './components/PortfolioBody.jsx'
import { Title } from './components/Title.jsx'

import { LinkedinBtn } from './components/SocialMediaBtns/LinkedinBtn.jsx'
import { InstagramBtn } from './components/SocialMediaBtns/InstagramBtn.jsx'
import { GithubBtn } from './components/SocialMediaBtns/GithubBtn.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const taskProjecImgs = [
    "/public/TasksProjImgs/TasksImg1.png",
    "/public/TasksProjImgs/TasksImg2.png",
    "/public/TasksProjImgs/TasksImg3.png",
    "/public/TasksProjImgs/TasksImg4.png",
    "/public/TasksProjImgs/TasksImg5.png",
  ]
  const rsRestaurantImgs = [
    "/public/RestaurantProjImgs/RestaurantImg1.png",
    "/public/RestaurantProjImgs/RestaurantImg2.png",
    "/public/RestaurantProjImgs/RestaurantImg3.png",
    "/public/RestaurantProjImgs/RestaurantImg4.png",
    "/public/RestaurantProjImgs/RestaurantImg5.png",
  ]

  const rsRestaurantTech = [
    "/public/TecnologiesImgs/csharp.svg",
    "/public/TecnologiesImgs/dotnet.jpg",
    "/public/TecnologiesImgs/html.svg",
    "/public/TecnologiesImgs/microsoft-sql-server.svg",
  ]

  const taskProjectTech = [
    "/public/TecnologiesImgs/html.svg",
    "/public/TecnologiesImgs/css.svg",
    "/public/TecnologiesImgs/javascript.svg",
    "/public/TecnologiesImgs/react-2.svg",
  ]

  return (
    <>
      <Navbar/>
      <SectionMain
        navbar = <Navbar/>
      >
        <Text
          divideLine = <DivideLine/>
          cvContact = <CVContact/>
        >
        </Text>
      </SectionMain>
      <PortfolioBody>
        <SectionAboutMe
          title = <Title titleText={"About Me"}/>
          photo = <Photo/>
          aboutMeTxt = <AboutMeTxt
                          linkedinBtn = <LinkedinBtn/>
                          instagramBtn = <InstagramBtn/>
                          githubBtn = <GithubBtn/>
                        />
        >  
        </SectionAboutMe>
        <SectionSkills
          title = <Title titleText={"Skills"}/>
          skillCard1 = <SkillCard urlImg={"/public/TecnologiesImgs/javascript.svg"} skillName={"JavaScript"}/>
          skillCard2 = <SkillCard urlImg={"/public/TecnologiesImgs/html.svg"} skillName={"HTML"}/>
          skillCard3 = <SkillCard urlImg={"/public/TecnologiesImgs/css.svg"} skillName={"CSS"}/>
          skillCard4 = <SkillCard urlImg={"/public/TecnologiesImgs/csharp.svg"} skillName={"C#"}/>
          skillCard5 = <SkillCard urlImg={"/public/TecnologiesImgs/dotnet.jpg"} skillName={"Microsoft .NET"}/>
          skillCard6 = <SkillCard urlImg={"/public/TecnologiesImgs/microsoft-sql-server.svg"} skillName={" SQL Server"}/>
          skillCard7 = <SkillCard urlImg={"/public/TecnologiesImgs/git.svg"} skillName={"Git"}/>
          skillCard8 = <SkillCard urlImg={"/public/TecnologiesImgs/mariadb.svg"} skillName={"MariaDB"}/>
          skillCard9 = <SkillCard urlImg={"/public/TecnologiesImgs/php.svg"} skillName={"PHP"}/>
          skillCard10 = <SkillCard urlImg={"/public/TecnologiesImgs/bootstrap.svg"} skillName={"Bootstrap"}/>
        >

        </SectionSkills>
        <SectionProjects
          title = <Title titleText={"My Projects"}/>
          project1 = <ProjectCard  
                        projectName={"Tasks Project"} 
                        description={"This is a website where you can create, delete, filter and mark your tasks as done or not. This project is built with React and uses LocalStorage to store the data."}
                        images = {taskProjecImgs}
                        techImages = {taskProjectTech}
                        urlCode={""}
                        urlDemo={"https://voluble-crostata-2422c4.netlify.app/"}
                        />
          project2 = <ProjectCard  
                        projectName={"RS Restaurant"} 
                        description={"Web project developed with .NET technologies, this project is a CRUD system for a restaurant. The frontend was developed with .NET technology using the MVC architecture pattern and an ORM was used for data management. For the API a Restfull API was developed using ASP.NET core."}
                        images = {rsRestaurantImgs}
                        techImages = {rsRestaurantTech}
                        urlCode={"https://github.com/Randys04/RS-Restaurant"}
                        urlDemo={""}
                        />
        >

        </SectionProjects>
        <SectionContactMe
          title = <Title titleText={"Contact Me"}/>
          form = <ContactForm/>
        >

        </SectionContactMe>
        <Footer/>
      </PortfolioBody>
      
    </>
  )
}

export default App
