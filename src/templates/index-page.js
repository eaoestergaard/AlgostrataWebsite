import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import WaveSection from '../components/WaveSection';
import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import global from '../components/global';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <WaveSection>
      <div className="wave-section">
        <h2 className="has-text-weight-bold main-header">
          {title}
        </h2>
        <Link
          className="button is-white  is-outlined wave-button"
          to="/about"
          style={{marginRight: 15}}
        >
          Vision
        </Link>
        <Link
          className="button is-white  is-outlined wave-button"
          to="/products"
          style={{marginRight: 15}}
        >
          Products
        </Link>
        <Link
          className="button is-white  is-outlined wave-button"
          to="/contact"
          style={{}}
        >
          Contact
        </Link>
      </div>
    </WaveSection>
    <section className="section section--gradient" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section">
          <div className="columns">
              <div className="content">
                <div className="columns">
                             <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>

                    <p>{description}</p>
                </div>
                <Features
                  gridItems={intro.blurbs}
                  config={{headerAlignTop: true,height:50, width: 850}}
                />
               {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      LINK TITLE
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                     News
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      LINK TITLE
                    </Link>
                  </div>
</div>*/}
              </div>
            </div>
          </div>
        </div>
    </section>

  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape ({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape ({
    markdownRemark: PropTypes.shape ({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading        
        mainpitch {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            imageHeader
          }
          heading
          description
        }
      }
    }
  }
`;
