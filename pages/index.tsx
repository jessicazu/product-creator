import { Button, Card, Checkbox, Page } from '@shopify/polaris'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = useCallback((newChecked) => setChecked(newChecked), [])
  return (
    <Page title='Example app'>
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>
  )
}

export default Home
