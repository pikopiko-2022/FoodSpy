import React from 'react'
import Search from './Search'

export default function Home() {
  return (
    // Choose city just for demonstration purposes at this stage, as it would be too much data in the database to have multiple cities
    <>
      <div className="landing-container">
        <div className="dropdowns">
          <h3 className="landing-first-dropdown">1. Where are you?</h3>
          <form>
            <div>
              <select className="form-select">
                <option value=""> ---Choose city--- </option>
                <option value="auckland">Auckland</option>
                <option value="tauranga">Tauranga</option>
                <option value="rotorua">Rotorua</option>
                <option value="taupo">Taupo</option>
                <option value="hastings">Hastings</option>
                <option value="napier">Napier</option>
                <option value="whanganui">Whanganui</option>
                <option value="palmerston north">Palmerston North</option>
                <option value="wellington">Wellington</option>
                <option value="nelson">Nelson</option>
                <option value="christchurch">Christchurch</option>
                <option value="dunedin">Dunedin</option>
                <option value="queenstown">Queenstown</option>
              </select>
            </div>
          </form>

          <h3 className="landing-second-dropdown">
            2. What are you looking for?
          </h3>
          <div>
            <Search />
          </div>
        </div>
        <div className="home-tag-line">
          <h2 className="home-tag-line">
            A platform to share local prices on essential items
          </h2>
        </div>
      </div>
    </>
  )
}
