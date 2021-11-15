import React, { useState, useEffect } from 'react'
import { renderMatches } from 'react-router-dom';
import { StyledSliderCard, StyledSliderlist, StyledSliderImg, StyledSliderListImg } from './styles/StyledSlider'
export default function Slider(props) {
    const [slider, setSlider] = useState(1);
  
    const images = props.screenshots
    console.log(images)
    useEffect(() => {
        setSlider(images[0].image)
        
    }, []);
    const handleClick = (event) => {
        console.log('props', event.target)
        setSlider(event.target.src)
        

    }
    return (
        <StyledSliderCard>
           <a className="slider-img" href={slider} target="_blank"> <StyledSliderImg key={slider} src={slider} /></a>
            <StyledSliderlist>
                {images.map((element, idx) => {
                    return (<StyledSliderListImg key={idx + 1} onClick={handleClick} src={element.image} />)
                })}
            </StyledSliderlist>
        </StyledSliderCard>
    )
}
