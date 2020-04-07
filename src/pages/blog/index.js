import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import WaveSection from '../../components/WaveSection';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
            <WaveSection>
      <h2 className="has-text-weight-bold main-header center-text">
        Seneste Nyheder
      </h2>
    </WaveSection>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
