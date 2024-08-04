import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn={firstName:" Milan Ghimre "}
  return (
    <section className='home'>

      <div className='home-content'>
        <header className='home-header'>

          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName||"Guest"}
          subtext="Your All Banking Details and Playground"
          
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={2}
          totalCurrentBalance={1245.43}
          />
         
          
        </header>
        REECENT TRANSACTION
        
      </div>
    </section>
  )
}

export default Home