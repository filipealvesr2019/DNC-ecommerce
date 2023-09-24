import React from 'react'
import "./index.scss"
import profileLogo from "../../assets/people.png"
import searchLogo from "../../assets/search.png"
import favoriteLogo from "../../assets/heart.png"
const Search = () => {
  return (
    <div className="search">
      <div className="search__input-container">
        <img src={searchLogo} alt="search logo" className='search__search-logo'/>
        <input type="text" placeholder='O que você está procurando?' className="Search" />
      </div>
      <div className='container-icone-right'></div>
      <img src={profileLogo} alt="profile Logo"/>
      <img src={favoriteLogo} alt="favorite Logo}" />
    </div>
  )
}

export default Search
