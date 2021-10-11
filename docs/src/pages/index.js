import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import LogoHero from '../../static/img/LogoHero'

export const Left = () => {
  return (
  <div className={clsx('col col--6', styles.featureTexts)}>
    <h1 className={styles.featureTitle}>Mask Wizard</h1>
    <p className={styles.featureDescription}>Simple usage string masking functions.</p>
    <a href="/docs/Intro" className={styles.bodyLink}><button className={styles.buttonStart}>Get start</button></a>
  </div>
  )
}

export const Right = () => {
  return(
  <div className={clsx('col col--6', styles.featureImage)}>
    <LogoHero/>
  </div>
  )
}

function HomepageHeader() {
    return (
      <section className={clsx('firstSection',styles.firstSection)}>
        <div className={clsx('firstSection', styles.decorationOne)}/>
        <div className={clsx('firstSection', styles.decorationTwo)}/>
        <div className={clsx('firstSection', styles.decorationThree)}/>
        <div className={clsx('firstSection', styles.decorationFour)}/>
        <div className={clsx('firstSection', styles.decorationFive)}/>
          <div className="row">
            <Left/>
            <Right/>
        </div>
      </section>
    )
  }

function HomepageBody() {
  return(
  <section className={styles.secondSection}>
    <h3 className={styles.featureBodyTitle}>Checkout our <span className={clsx('secondSection', styles.decorateBodyText)}>documentation</span>.</h3>
    <p className={styles.featureBodyDescription}>Get started with Mask Wizard.</p>
  </section>
    )
  }


export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <>
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <HomepageBody/>
    </Layout>
</>
  )
}
