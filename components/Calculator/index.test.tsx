import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculator from './index'


test('loads and displays greeting', async () => {
  const {debug} = render(<Calculator />)
  debug()
})
