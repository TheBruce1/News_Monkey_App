import React, { useEffect, useState, useRef } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingBar from 'react-top-loading-bar'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const loadingBar = useRef(null)

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)


  const fetchNews = async (pageNum = 1, concat = false) => {
    loadingBar.current && loadingBar.current.continuousStart()
    setLoading(true)
    const searchQuery = props.searchTerm ? `&q=${props.searchTerm}` : '';
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNum}&pageSize=${props.pageSize}${searchQuery}`
    try {
      const data = await fetch(url);
      const parsedData = await data.json()
      setArticles(concat ? articles.concat(parsedData.articles || []) : (parsedData.articles || []));
      setTotalResults(parsedData.totalResults || 0);
      // setPage(pageNum);
      setLoading(false);
      loadingBar.current && loadingBar.current.complete();
    } catch (error) {
      setArticles([]);
    }
    setLoading(false);
    loadingBar.current && loadingBar.current.complete();
  }


  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`
    fetchNews(1)
    // eslint-disable-next-line
  }, [props.category, props.searchTerm])

  const fetchMoreData = async () => {
    if (page < 5) { // Only fetch up to page 5
      await fetchNews(page + 1, true);
    }
  }

  return (
    <>
      <LoadingBar height={2} color='#f11946' ref={loadingBar} />
      <div className='container px-0 mt-5'>
        <h1 className='my-3 text-center mt-5 pt-5'>News Monkey - Top {capitalize(props.category)} - Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className='row'>
              {(articles || []).map((element, index) => (
                <div className='col-md-4' key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={element.description ? element.description.slice(0, 75) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source && element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string
}

export default News