import React from 'react'
import PropTypes from 'prop-types'
import { GlossaryPostTemplate } from '../../templates/glossary-post'

const GlossaryPostPreview = ({ entry, widgetFor }) => (
  <GlossaryPostTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

GlossaryPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GlossaryPostPreview
