import { useState } from "react";

function Exercise1() {

    const [data, setData] = useState({
                                images: [
                                "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
                                "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
                                "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
                            ],
                                currentImg: 0
                                })
                            
    const shiftImageBack = () => {
        setData({...data, currentImg: (data.currentImg - 1 + data.images.length) % data.images.length})
    }

    const shiftImageForward = () => {
        setData({...data, currentImg: (data.currentImg + 1) % data.images.length})
    }

    return (  
        <>
        <button onClick={() => shiftImageBack()}>Back</button>
        <img src={data.images[data.currentImg]} alt="" />
        <button onClick={shiftImageForward}>Forward</button>
        </>
    );
}

export default Exercise1;