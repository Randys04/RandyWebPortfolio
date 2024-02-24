import { useState } from 'react'
import { SectionMain } from './components/SectionMain/SectionMain.jsx'
import { Text } from './components/SectionMain/Text.jsx'
import { CVContact } from './components/SectionMain/CVContact.jsx'
import { DivideLine } from './components/SectionMain/DivideLine.jsx'
import { LinkedinBtn } from './components/SectionMain/SocialMediaBtns/LinkedinBtn.jsx'
import { InstagramBtn } from './components/SectionMain/SocialMediaBtns/InstagramBtn.jsx'
import { GithubBtn } from './components/SectionMain/SocialMediaBtns/GithubBtn.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SectionMain>
        <Text
          divideLine = <DivideLine/>
          cvContact= <CVContact/>
        >
        </Text>
        {/* <Photo>
          <LinkedinBtn/>
          <GithubBtn/>
          <InstagramBtn/>
        </Photo> */}
      </SectionMain>
      <div className='remove-it'>asdasdjada</div>
      
    </>
  )
}

export default App
