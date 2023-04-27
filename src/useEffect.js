import React, {useState, useEffect} from 'react';
function exemple (){
    const [count, setCount] = userState(0);
    useEffect(() => {
        document.title = 'you clicked ${count} times';
        });
        return(
            <div>
                    <p>Count the number of ticks in your page title :</p>
                        <button onClick = {() => setCount(count+1)}>Click here</button>
            </div>
        )
}