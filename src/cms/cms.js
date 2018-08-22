import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import VideoPostPreview from './preview-templates/VideoPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('videos', VideoPostPreview)
