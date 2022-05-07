import React, { useState } from 'react'

export default function Todo() {
    const[ input, setInput ] = useState();
    const[ list, setList ] = useState([]);

    const handleInput = (e) =>{
        setInput(e.target.value);
    }

    const handleClick = () =>{
        setList((prevData) =>{
            return([...prevData, input])  
        });
        setInput('');
    }
    const handleDelete = (id) =>{
        console.log(id);
        setList((prevState) =>{
            return(
                prevState.filter((elem, index) =>{
                    return index !== id;
                })
            )
        })
    }
    return (
        <>
            <div className="container">
                <div className="content">
                <h2>Todo List</h2>
                    <input type="text" onChange={handleInput} value={input} placeholder='Write here..'/>
                    <button onClick={handleClick}>Add</button>
                    <div className="lists">
                        <ul>
                            {list.map((listItem, index) =>{
                                return(
                                    <div className="li"  key={index}  onSelect={handleDelete}>
                                        <button className='li-btn' onClick={() =>{handleDelete(index)}}>X</button>
                                        <li className='li-item'>{listItem}</li>
                                    </div>
                                    )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
