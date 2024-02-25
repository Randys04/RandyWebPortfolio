import { useState } from 'react'

import { SectionMain } from './components/SectionMain/SectionMain.jsx'
import { Text } from './components/SectionMain/Text.jsx'
import { CVContact } from './components/SectionMain/CVContact.jsx'
import { DivideLine } from './components/SectionMain/DivideLine.jsx'

import { SectionAboutMe } from './components/SectionAboutMe/SectionAboutMe.jsx'
import { AboutMeTxt } from './components/SectionAboutMe/AboutMeTxt.jsx'
import { Photo } from './components/SectionAboutMe/Photo.jsx'

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
      </PortfolioBody>
      
    </>
  )
}

export default App
