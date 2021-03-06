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
      <h2 className="has-text-weight-bold main-header center-text is-size-1">
        {title}
      </h2>
    </WaveSection>
    <section className="section section--gradient" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section">
          <div className="columns">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
          </div>
          <div className="columns">
            <div className="column is-10 is-offsetoffset-1">
              <div style={sectionStyle}>
                <div className="columns">
                  <div className="column is-10">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                    <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    <p>{main.description2}</p>
                    <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                  </div>
                </div>
              </div>
              <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/contact" style={{}}>
                     Contact us
                    </Link>
                  </div>
                </div>
              <div style={sectionStyle}>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main2.heading}
                    </h3>
                    <p>{main2.description}</p>
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main2.image1} />
                      </article>
                    <p>{main2.description2}</p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                  </div>
                </div>
              </div>
              <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/contact" style={{}}>
                     Contact us
                    </Link>
                  </div>
                </div>
              <div style={sectionStyle}>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main3.heading}
                    </h3>
                    <h3 className="has-text-weight-semibold is-size-3">{main3.description}</h3>
                    <h3 style={{marginTop: 20}}>{main3.blurbs1heading}</h3>
                    <Features gridItems={main3.blurbs1} config={{width:500}} />
                    <h3 className="has-text-weight-semibold is-size-3 ">{main3.blurbs2heading}</h3>
                    <Features gridItems={main3.blurbs2} config={{width:500}} />
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/contact">
                    Contact us
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
          image1 {
            image {
              childImageSharp {fluid(maxWidth: 1600, quality: 100) {...GatsbyImageSharpFluid}
              }
            }
          }
          image2 {
            image {
              childImageSharp {fluid(maxWidth: 1600, quality: 100) {...GatsbyImageSharpFluid}
              }
            }
          }
        }
        main2 {
          heading
          description
          description2
          image1 {
            image {
              childImageSharp {fluid(maxWidth: 1600, quality: 100) {...GatsbyImageSharpFluid}
              }
            }
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
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          blurbs2 {
            image {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
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
