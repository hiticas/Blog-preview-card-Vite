import './BlogPreviewCard.scss'
import blogPreviewCard from '../../assets/images/illustration-article.svg'
import avatarImage from '../../assets/images/image-avatar.webp'

function BlogPreviewCard() {
  return (
    <div className="blog-preview-card">
      <img className="top-image" src={blogPreviewCard} alt="image" />
      <p className="tag">Learning</p>
      <p className="date">Published 21 Dec 2023</p>
      <h1 className="title">HTML & CSS foundations</h1>
      <p className="descriptiopn">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      <div className="author-info">
        <img className="author-image" src={avatarImage} />
        <p className="author-name">Greg Hooper</p>
      </div>
    </div>
  )
}

export default BlogPreviewCard