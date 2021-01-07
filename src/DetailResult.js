import React from 'react';
import './DetailResult.css';
import StarIcon from "@material-ui/icons/Star";

function DetailResult({
    img,
    litleimg1,
    litleimg2,
    litleimg3,
    litleimg4,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="detail-page-container">

            <div className="detail-page-title">
                 <h2>{title}</h2>
                 <div className="star_result">
                 <StarIcon className="detailResult__star"/>
                 <p><strong>{star}</strong></p>
                 </div>
            </div>

            <div className="detail-page-box">
                    <div className="big-section">
                        <img src={img} alt="big-img" />
                       
                    </div>
                    <div className="little-section">
                        <img src={litleimg1} alt="lit1"/>
                        <img src={litleimg2} alt="lit2"/>
                        <img src={litleimg3} alt="lit3"/>
                        <img src={litleimg4} alt="lit8"/>
                    </div>
            </div>
            
        </div>
    )
}

export default DetailResult
