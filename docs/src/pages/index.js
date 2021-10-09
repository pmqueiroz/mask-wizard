import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import logoHero from '../../static/img/logo-hero.png'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
     <div className={clsx('first--section', styles.container)}>
       <div className={clsx('hero hero--primary', styles.decorationOne)}/>
       <div className={clsx('hero hero--primary', styles.decorationTwo)}/>
       <div className={clsx('hero hero--primary', styles.decorationThree)}/>
       <div className={clsx('hero hero--primary', styles.decorationFour)}/>
       <div className={clsx('hero hero--primary', styles.decorationFive)}/>

        <div className={clsx('second--section', styles.contentTexts)}>
          <h1 className={clsx('hero hero--primary', styles.firstText)}>Mask Wizard</h1>
          <p className={clsx('hero hero--primary', styles.secondText)}>Simple usage string masking functions, checkout our documentation.</p>
          <a href="/docs/Intro"><button className={clsx('hero hero--primary',styles.buttons)}>Get start</button></a>
        </div>

        <div className={clsx('hero hero--primary', styles.imgContainer)}>
          <img src={logoHero}/>
        </div>                   
      </div>
    </header>
  )
}

function HomepageBody() {
  const {siteConfig} = useDocusaurusContext()
  return ( 
    <section className={clsx('firstSection', styles.firstSection)}>
    <div className="container">
       <p className={clsx('firstSection', styles.firstBodyText)}>Simple usage string <span className={clsx('firstSection', styles.decorateBodyText)}>masking functions</span>, checkout our documentation.</p>
       <p className={clsx('firstSection', styles.secondBodyText)}>Pellentesque sit amet facilisis nulla, nam tincidunt urna quis efficitur cursus. </p>
       </div>
</section>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageBody/>
    </Layout>
  )
}
