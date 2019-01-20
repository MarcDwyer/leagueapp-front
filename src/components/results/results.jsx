import React from 'react'
import './results_styles.scss'
const Results = (props) => {
    const { results } = props

    if (!results) return null
    return (
        <div className="parent">
        <div className="contained">
        {(() => {
             return results.map(({leagueName, leaguePoints, wins, losses, summonerName, tier, rank, veteran}, index) => {
                return (
                    <div className="summoner-intro" key={index}>
                        <h3>{summonerName}</h3>
                        <h4>{leagueName}</h4>
                        <h5>{tier} {rank}</h5>
                        <h5>{leaguePoints} LP</h5>  
                        </div>
                )
            })
        })()}
        </div>
        </div>
    )
}

export default Results