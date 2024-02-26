import { useState } from 'react'

import { SectionMain } from './components/SectionMain/SectionMain.jsx'
import { Text } from './components/SectionMain/Text.jsx'
import { CVContact } from './components/SectionMain/CVContact.jsx'
import { DivideLine } from './components/SectionMain/DivideLine.jsx'

import { SectionAboutMe } from './components/SectionAboutMe/SectionAboutMe.jsx'
import { AboutMeTxt } from './components/SectionAboutMe/AboutMeTxt.jsx'
import { Photo } from './components/SectionAboutMe/Photo.jsx'

import { SectionSkills } from './components/SectionSkills/SectionSkills.jsx'
import { SkillCard } from './components/SectionSkills/SkillCard.jsx'

import { PortfolioBody } from './components/PortfolioBody.jsx'
import { Title } from './components/Title.jsx'

import { LinkedinBtn } from './components/SocialMediaBtns/LinkedinBtn.jsx'
import { InstagramBtn } from './components/SocialMediaBtns/InstagramBtn.jsx'
import { GithubBtn } from './components/SocialMediaBtns/GithubBtn.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SectionMain>
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
      </PortfolioBody>
      
    </>
  )
}

export default App
