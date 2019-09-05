import React from 'react'

const DisplayData = (props) => (
    <>
    {props.city && !props.ok && <p className = "DisplayData__error">Please enter a valid city name.</p>}
    
    {(props.city && props.ok) &&<div className="DisplayData__info">
     <p className = "DisplayData__key">City: <span className = "DisplayData__value">{props.city}</span></p>
     <p className = "DisplayData__key">Country: <span className = "DisplayData__value">{props.country}</span></p>
     <p className = "DisplayData__key">Sunrise: <span className = "DisplayData__value">{props.sunrise}</span></p>
     <p className = "DisplayData__key">Sunset: <span className = "DisplayData__value">{props.sunset}</span></p>
    </div>
    
}


</>
);

export default DisplayData;
