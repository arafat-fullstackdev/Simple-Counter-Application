import React, {useState} from 'react';
import Button from './Button';

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

    function counterButton(){
      const [compute, setCompute ] = useState(0);

      const incrementCompute = () => {
        setCompute((prevCompute)=> prevCompute + 1);
      };

      const deccrementCompute = () => {
        setCompute((prevCompute)=> prevCompute - 1);
      };

    }

  return (
    <div className='container-fluid  items-center'>
      <div>
        <Button className='btn primary'>Increment</Button>
        <Button className='btn danger'>Decrement</Button>
        <h2>{counterButton}</h2>
      </div>
        <button onClick={changeState}>Show</button>
        <div>
        <h3>{myName}</h3>
        <h4>{myInfo.id}</h4>
        <h4>{myInfo.address}</h4>
        </div>
    </div>
  )
}

export default ArryDestructure;