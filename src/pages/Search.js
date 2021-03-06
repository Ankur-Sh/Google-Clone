import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
function Search() {
    {
        /*const [input,setInput]
    const search=e=>{
    e.preventDefault();}*/
    }
    return (
        <div className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon" />
                <input placeholder="Search Google or type a URL" />
                <MicIcon />
            </div>
            <div className="search_buttons">
                <Button /*onClick={search}*/ variant="outlined">
                    Google Search
                </Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    );
}

export default Search;
