import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
  <>
  
<Header/>
<Hero props={"Prerna Nanwani"} pic={"https://i.ibb.co/WHfX36c/ttt.jpg"}/>
<Work/>
<Blog/>
<Contact/>
<Footer/>

  </>

  )
}
