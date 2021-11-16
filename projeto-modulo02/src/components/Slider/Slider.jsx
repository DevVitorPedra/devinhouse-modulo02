import React, { useState, useEffect } from 'react'
import { StyledSliderCard, StyledSliderlist, StyledSliderImg, StyledSliderListImg } from './styles/StyledSlider'
export default function Slider(props) {
    const [slider, setSlider] = useState(1);
  
    const images = props.screenshots
   
    useEffect(() => {
        setSlider(images[0].image)
        
    }, []);
    const handleClick = (event) => {
      
        setSlider(event.target.src)
        

    }
    return (
        <StyledSliderCard>
           <a className="slider-img" href={slider} target="_blank" rel="noreferrer"> <StyledSliderImg key={slider} src={slider} /></a>
            <StyledSliderlist>
                {images.map((element, idx) => {
                    return (<StyledSliderListImg key={idx + 1} onClick={handleClick} src={element.image} />)
                })}
            </StyledSliderlist>
        </StyledSliderCard>
    )
}
