import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="card mt-5">
          <img src={imageUrl ? imageUrl : "https://static.foxnews.com/foxnews.com/content/uploads/2025/08/trump-dc-crime-crackdown-arrests.png"} className="card-img-top" style={{ height: "250px" }} alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </>
    )
  }

export default NewsItem