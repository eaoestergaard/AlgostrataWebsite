import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const TeamPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="center-text"> SOME TEXT</h1>
              <Features gridItems={intro.blurbs} config={{centered:true}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

TeamPageTemplate.propTypes = {
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
    image1: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType ([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape ({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const TeamPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <TeamPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.shape ({
    markdownRemark: PropTypes.shape ({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TeamPage;

export const teamPageQuery = graphql`
  query TeamPage($id: String!) {
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
            imageHeader
          }
          heading
          description
        }
        main {
          heading
          description
        }
      }
    }
  }
`;
