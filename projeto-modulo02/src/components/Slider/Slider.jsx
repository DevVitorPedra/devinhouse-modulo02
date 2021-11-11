import React,{ useState, useEffect} from 'react'
import {StyledSliderCard,StyledSliderlist,StyledSliderImg, StyledSliderListImg} from './styles/StyledSlider'
export default function Slider(props) { 
    const [slider, setSlider] = useState(1);
    
    const images = props.screenshots
    console.log(images)
    useEffect(() => {
     setSlider(images[0].image)
    }, []);
    const handleClick = (event)=> {
        console.log('props',event.target)
       setSlider(event.target.src)
    }
    return (
        <StyledSliderCard>
            <StyledSliderImg src={slider}/>
            <StyledSliderlist>
                {images.map((element,idx)=>{
                    return (<StyledSliderListImg key={idx+1} onClick={handleClick} src={element.image}/>)
                })}
            </StyledSliderlist>
        </StyledSliderCard>
    )
}
