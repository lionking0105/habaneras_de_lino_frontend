import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import CartDetail from '../components/CartDetail'

export default function Home() {
  const {cart} = useCart()
  
  return (cart == null)? <div></div>:(
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CartDetail />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
