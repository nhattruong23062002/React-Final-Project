import React from 'react'
import Header from '../component/layout/Header/Header'
import { Footer } from 'antd/es/layout/layout'
import InputAntDesign from '../component/Input/InputAntDesign'
import Main from '../component/layout/Main/Main'

const LoginPages = () => {
  return (
    <div>
      <Main>
      <div className="wrapper__login">
        <InputAntDesign/>
      </div>
      </Main>
    </div>
  )
}

export default LoginPages