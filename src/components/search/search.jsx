import React, { Component } from 'react'
import { FormControl, ControlLabel } from 'react-bootstrap'
import "./search_styles.scss"
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            error: "",
            results: null
        }
    }

    render() {
        const { error } = this.state
        console.log(this.state)
        return (
            <div className="parent search-parent">
            <div className="contained">
            <form
            onSubmit={this.handleSubmit}
            >
                <div className="search">
                        <ControlLabel>
                            {error.length > 0 ? error : "Search for summoner"}
                        </ControlLabel>
                        <FormControl 
                        type="text"
                        value={this.state.search}
                        name="search"
                        placeholder="Enter summoner name"
                        onChange={(e) => this.setState({[e.target.name]: e.target.value})}
                        />
                </div>
                </form>
            </div>
            </div>
        )
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const { search } = this.state
        try {
            const fetcher = await fetch(`/api/stats/${search}`)
            const data = await fetcher.json()
            this.setState({results: data[0]})
        } catch(err) {
           this.setState({error: "No results, try again."}, () => {
               setTimeout(() => {
                   this.setState({error: ""})
               }, 3000)
           })
        }
    }
}