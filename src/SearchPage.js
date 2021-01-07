import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 26 aygust to 30 augut - 2 guest</p>
                <h1>Stays naerby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filtres</Button>

            </div>
            <SearchResult 
            img="https://a0.muscache.com/im/pictures/f245a3fd-38c6-4cbe-a93e-9004d50b82e7.jpg?im_w=720"
            location="Private room in Monaco"
            title="Stay at this spacious Edwardian House"
            description="2 guests - 1 bedroom - 2 bed - 1,5 shared bthrooms - wi-fi"
            star={5.0}
            price="100$ / night"
            total="300$ - total"
            
            />

            <SearchResult 
            img="https://a0.muscache.com/im/pictures/16682077/0ccf39a6_original.jpg?im_w=720"
            location="Entire apartament in Monaco"
            title="Designer Garden View Apartment in Heart of City"
            description="1 guest - 1 bedroom - 1 bed - 1,5 shared bthrooms - wi-fi"
            star={4.76}
            price="30$ / night"
            total="120$ - total"
            
            />


            <SearchResult 
            img="https://a0.muscache.com/im/pictures/e033e0be-1fd3-448b-bd78-63f7cf6fc0d9.jpg?im_w=720"
            location="Entire apartament in Monaco"
            title="Exclusive villa with swimming pool"
            description="3 guest - 2 bedrooms - 2 beds - 1,5 shared bthrooms - wi-fi"
            star={4.76}
            price="1000$ / night"
            total="5000$ - total"
            
            /> 
        </div>
    )
}

export default SearchPage; 
