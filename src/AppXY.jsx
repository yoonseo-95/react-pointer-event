import React,{useState} from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({x:0, y:0});

  // z값 추가
  // const [position, setPosition] = useState({x:0, y:0, z:0});
  return (
    <div className="container" onPointerMove={(e)=>{
      // console.log(e.clientX, e.clientY)
      // setX(e.clientX);
      // setY(e.clientY);

      // 하나로 묶어서 처리할때
      setPosition({x: e.clientX, y: e.clientY});
      
      // 만약 수평으로만 이동이 가능하려면
      // setPosition(prev =>({x: e.clientX, y: prev.y}));
      
      // z값도 추가하면 '...prev' 스프레드 연산자: 배열의 모든 값을 가져옴
      // setPosition(prev=>({...prev, x:e.clientX}));
    }}>
      {/* <div className="pointer" style={{transform: `translate(${x}px, ${y}px)`}}/> */}
      <div className="pointer" style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
      </div>
    </div>
  );
}

