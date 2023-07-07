import React from 'react'
import "./index.scss"
const Search = () => {
  return (
    <div className="search">
      <div className="search__input-container">
        <img src={searchLogo} alt="search logo" className='search__search-logo'/>
        <input type="text" className="Search" />
      </div>

      <img src={profileLogo} alt="profile Logo"/>
      <img src={favoriteLogo} alt="favorite Logo}" />
    </div>
  )
}

export default Search
