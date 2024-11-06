import React from 'react'
import { DetailsProvider } from './context/DetailsContext'
import ChildComp1 from './components/ChildComp1'
import ChildComp2 from './components/ChildComp2'
import ChildComp3 from './components/ChildComp3'
import ChildComp4 from './components/ChildComp4'

const App = () => {
  return (
    <div>
      <DetailsProvider>
        <ChildComp1 />
        <ChildComp2 />
        <ChildComp3 /> {/* New Component Using useContext */}
        <ChildComp4 /> {/* New Component Using Context.Consumer */}
      </DetailsProvider>
    </div>
  )
}

export default App