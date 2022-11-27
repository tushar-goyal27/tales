import React, { useEffect, useRef, useState } from 'react';
// import './App.css';

const Histogram = (props) => {
    const [labels, setLabels] = useState(props.freqData[0]);
    const [data, setData] = useState(props.freqData[1]);

    const mainRef = useRef(null);

    const vals = []
    for(let i = 1; i < 29; i++) {
        vals.push(i);
    }

    // Toggle display for histogram 
    useEffect(() => {
        if(props.freqData[0][0] == 0) {
            mainRef.current.style.display = "none";
        } else {
            setData(props.freqData[1]);
            setLabels(props.freqData[0]);
            mainRef.current.style.display = "flex";
        }
        
    }, [props.freqData]);

    return (
        <div className='histogram' ref={mainRef}>
            <div className='vals'>
                {vals.map(ele => {
                    return (
                        ele % 2 !== 0 ?
                        <div className='num'>
                            {ele}
                        </div> :
                        <div className='num'>
                        </div>
                    )
                })}
            </div>
            <div className='col-flex'>
                <div className='main-data'>
                    {
                        data.map(ele => {
                            return (
                                <div className='bar' style={{height: (ele*15) + "px"}}>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='labels'>
                    {
                        labels.map(ele => {
                            return(
                                <div className='label'>
                                    {ele}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Histogram;