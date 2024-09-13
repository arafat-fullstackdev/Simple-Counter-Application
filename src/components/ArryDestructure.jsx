import React, {useState} from 'react'

const ArryDestructure = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({});

    const changeState = () => {
        setMyName("spaceOne");
        setMyInfo({
            id: 21,
            address: 'Los Angles'
        })
    }

  return (
    <div>
        <button onClick={changeState}>Show</button>
        <h3>{myName}</h3>
        <h4>{myInfo.id}</h4>
        <h4>{myInfo.address}</h4>
    </div>
  )
}

export default ArryDestructure;