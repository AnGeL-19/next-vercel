import React, { FC } from 'react';
import Head from 'next/head'
import styles from '../layouts/MainLayout.module.css'
import { Navbar } from '../Navbar'

type PropsLayout = {
  children: React.ReactNode
}

export const MainLayout: FC <PropsLayout> = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        
        { children }

      </main>
      
    </div>
  )
}
