import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory(); 
    return (
        <div className="home">
            <h1>Home components</h1>
            <Banner/> 
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
               />
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home__section">
              <button onClick={()=> history.push('/detail-page')}> <Card
                            src="https://a0.muscache.com/im/pictures/3e973cc2-9755-410a-a922-c982d848fd39.jpg?aki_policy=x_medium"
                            title="Uptown Chic in Hoboken"
                            description="Modern Chic Studio Apartme"
                            price="$65/ night"
                            
                />
                </button> 
                <Card 
                            src="https://a0.muscache.com/im/pictures/103241544/5b858882_original.jpg?aki_policy=x_medium"
                            title="The Artist's Experience"
                            description="Private room in apartment hosted by Jeffrey"
                            price="$100/ night"
                />
                
                <Card 
                            src="https://a0.muscache.com/im/pictures/140e873e-9767-4721-81a1-6659db6582ac.jpg?aki_policy=x_medium"
                            title="Chic Designer Home Guest Studio"
                            description="Entire townhouse hosted by Maggie"
                            price="$74/ night"
                />
            </div>
        </div>
    )
}

export default Home
