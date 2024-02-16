import React from 'react'
import Welcome from './homeSections/Welcome'
import Case from './homeSections/case/Case'
import Advantage from './homeSections/advantages/Advantage'
import Application from './application/Application'

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Case/>
      <Advantage/>
      <Application/>
    </>
  )
}

export default HomePage