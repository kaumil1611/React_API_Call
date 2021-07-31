import React from 'react';
import "../styleComponents/imageList.css";
const ImageList = (props) => {

    const images=props.images.map(({description,id,urls})=>{

        return(
            <section className="image-section" key={id}>
                <div className="img-container">
                    <div className="main">
                        <img className={`img1`}  src={urls.regular} alt={description} />
                    </div>
                </div>
            </section>
        );  
    })
    
    return <div> {images} </div>
    
}

export default ImageList;
