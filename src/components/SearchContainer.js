import React, { Component } from "react"
import Axios from "axios"
import {Link} from "gatsby"
import * as JsSearch from "js-search"

class Search extends Component {
  state = {
    blogList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("https://wolfactive.net/wp-json/blogs-api/v1/search")
      .then(result => {
        const blogData = result.data
        this.setState({ blogList: blogData})
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { blogList } = this.state
    const dataToSearch = new JsSearch.Search("isbn")
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("isbn")

    dataToSearch.addIndex("title") // sets the index attribute for the data

    dataToSearch.addDocuments(blogList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }
  render() {
    const { blogList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? blogList : searchResults
    return (
      <div className="search">
        <div className="search__contain">
          <form className="search__form" onSubmit={this.handleSubmit}>
            <div className="search__form-input">
              <label htmlFor="Search">
                <i className="fas fa-search"></i>
              </label>
              <input
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Enter your search here"
              />
            </div>
          </form>
          <div  className={ queryResults === blogList ? 'search__result' :'search__result active'}>
            <div className="mxl-20">
            <b>Số lượng:
            {queryResults.length}</b>
            </div>
            <div  className="search__result-list">
                {queryResults.map(item => {
                  return (
                    <Link to={item.slug} className="search__result-item" key={`row_${item.id}`}>
                    <div className="search__result-item-img">
                      <img src={item.featured_image} className="d--block" alt={item.slug}/>
                    </div>
                    <div className="search__result-item-title">
                        {item.title}
                      </div>
                    </Link>
                  )
                })}
            </div >
          </div>
        </div>
      </div>
    )
  }
}
export default Search
