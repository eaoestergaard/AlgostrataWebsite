import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import WaveSection from '../components/WaveSection';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
const sectionStyle = {paddingBottom: 50, paddingTop: 50};
export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  main2,
  main3,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <WaveSection>
      <h2 className="has-text-weight-bold main-header center-text">
        {title}
      </h2>
    </WaveSection>
    <section className="section section--gradient" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} config={{rows: 4}} />
              <div className="columns">
                <div className="column is-12 has-text-centered">
                  <a
                    className="btn"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VISIT GOOGLE
                  </a>
                </div>
              </div>
              <div style={sectionStyle}>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                    <p>{main.description2}</p>
                  </div>
                  <div className="column is-5">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main2.image1} />
                    </article>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/contact" style={{}}>
                      LINK TEXT
                    </Link>
                  </div>
                </div>
              </div>
              <div style={sectionStyle}>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main2.heading}
                    </h3>
                    <p>{main2.description}</p>
                    <Features gridItems={main2.blurbs} config={{rows: 4}} />
                    <p>{main2.description2}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/contact" style={{marginTop:50}}>
                    LINK TEXT
                    </Link>
                  </div>
                </div>
              </div>
              <div style={sectionStyle}>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main3.heading}
                    </h3>
                    <p>{main3.description}</p>
                    <h4 style={{marginTop: 20}}>{main3.blurbs1heading}</h4>
                    <Features gridItems={main3.blurbs1} config={{rows: 4}} />
                    <h4>{main3.blurbs2heading}</h4>
                    <Features gridItems={main3.blurbs2} config={{height:250}} />
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/contact">
                    LINK TEXT
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape ({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape ({
    heading: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    image1: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
  }),
  main2: PropTypes.shape ({
    heading: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    blurbs: PropTypes.array,
    image1: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
  }),
  main3: PropTypes.shape ({
    heading: PropTypes.string,
    description: PropTypes.string,
    blurbs1: PropTypes.array,
    blurbs2: PropTypes.array,
    blurbs1heading: PropTypes.string,
    blurbs2heading: PropTypes.string,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape ({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ProductPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;
  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        main2={frontmatter.main2}
        main3={frontmatter.main3}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape ({
    markdownRemark: PropTypes.shape ({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          description2
        }
        main2 {
          heading
          description
          description2
          image1 {
                       image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
                main3 {
          heading
          description
          blurbs1heading
          blurbs2heading
          blurbs1 {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          blurbs2 {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`;
