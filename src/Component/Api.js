import React from 'react'
import './style.css'


const Api = ({details}) => {
    console.log(details)
    const output=[details]
  return (
    <div >
        {output.map((value,index)=>
            <h5 className='block'key={index}> Name:{value.name}<br/>Nasa_JPL_URL:{value.nasa_jpl_url}
            <br/>is_potentially_hazardous_asteroid:{value.is_potentially_hazardous_asteroid ? "true":"false"}
</h5>
        )}
    </div>
  )
}

export default Api