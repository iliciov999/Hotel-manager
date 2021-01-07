import React from 'react';
import './DetailPage.css';
import DetailResult from './DetailResult';


function DetailPage() {
    return (
        <div className="detail-container">
            
            <DetailResult 
            img="https://a0.muscache.com/im/pictures/f245a3fd-38c6-4cbe-a93e-9004d50b82e7.jpg?im_w=720"
            litleimg1="https://a0.muscache.com/im/pictures/48e69d2f-18fc-4776-9cc1-fc33af6816b1.jpg?im_w=720"
            litleimg2="https://a0.muscache.com/im/pictures/48e69d2f-18fc-4776-9cc1-fc33af6816b1.jpg?im_w=720"
            litleimg3="https://a0.muscache.com/im/pictures/48e69d2f-18fc-4776-9cc1-fc33af6816b1.jpg?im_w=720"
            litleimg4="https://a0.muscache.com/im/pictures/48e69d2f-18fc-4776-9cc1-fc33af6816b1.jpg?im_w=720"
            title="Exclusive villa with swimming pool"
            star={5.0}
            />
        </div>
    )
}

export default DetailPage
