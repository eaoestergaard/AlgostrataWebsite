import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []
//  const entryBlurbs2 = entry.getIn(['data', 'main2', 'blurbs'])
 // const blurbs2 = entryBlurbs2 ? entryBlurbs2.toJS() : []
 // const entryBlurbs31 = entry.getIn(['data', 'main2', 'blurbs'])
 // const blurbs31 = entryBlurbs31 ? entryBlurbs31.toJS() : []
 // const entryBlurbs32 = entry.getIn(['data', 'main2', 'blurbs'])
  //const blurbs32 = entryBlurbs32 ? entryBlurbs32.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ProductPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        }
      }}
      main2={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
      }}
        main3={{
        heading: entry.getIn(['data', 'main3', 'heading']),
        description: entry.getIn(['data', 'main3', 'description']),
        //blurbs1heading: entry.getIn(['data', 'main3', 'blurbs1heading']),
        //blurbs2heading: entry.getIn(['data', 'main3', 'blurbs2heading']),
        //blurbs1: blurbs31,
        //blurbs2: blurbs32
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']),
        description: entry.getIn(['data', 'pricing', 'description']),
        plans: pricingPlans,
      }}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
