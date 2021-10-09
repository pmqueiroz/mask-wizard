import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { useREPL } from '../hooks'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        Salve Brasileirinho
      </div>
    </header>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext()

  useREPL({
     initialValue: decodeURIComponent(window.location.hash)?.substring(1)
  })

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />

      <code id="repl-target">maskWizard.time.interval()</code>
    </Layout>
  )
}
