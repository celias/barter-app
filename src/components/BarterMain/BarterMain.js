import React from 'react';
import ImageUpload from './../ImageUpload/ImageUpload';

let BarterMain = () => {
    return (
        <div>
            <h1>You are at the barter page</h1>
            <p>Upload what you'd like to barter</p>
            <div className="imgUploader">
            <ImageUpload /> 
            </div>
        </div>
    )
} 

export default BarterMain;