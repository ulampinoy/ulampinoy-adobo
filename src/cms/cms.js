import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import VideoPostPreview from './preview-templates/VideoPostPreview'
import GlossaryPostPreview from './preview-templates/GlossaryPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('videos', VideoPostPreview)
CMS.registerPreviewTemplate('glossary', GlossaryPostPreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
