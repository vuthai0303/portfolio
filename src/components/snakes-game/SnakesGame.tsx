import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface SnakesGameProps {

}

interface Vector {
  x: number;
  y: number;
}

interface Square {
  position: Vector;
  direction: Vector;
  size: number;
}

interface SnakeInfor {
  head: Square;
  tail: Square[];
}

const SIZE = 30 // 30px
const DEFAULT_VECTOR : Vector = { x:0, y:0 }

const DIRECTION_RIGHT : Vector = { x:1, y:0 } // left to right
const DIRECTION_LEFT : Vector = { x:-1, y:0 } // right to left
const DIRECTION_UP : Vector = { x:0, y:1 } // down to up
const DIRECTION_DOWN : Vector = { x:0, y:-1 } // up to down

const MIN_SIZE = { width: 300, height: 150 }

const SnakesGame: React.FC<SnakesGameProps> = () => {

  const defaultSnakeInfor : SnakeInfor = {
    head: {position: { x:2, y:0 }, direction:DIRECTION_RIGHT, size: SIZE * 0.9}, 
    tail: [{position: { x:1, y:0 }, direction:DIRECTION_RIGHT, size: SIZE * 0.7}, {position: { x:0, y:0 }, direction:DIRECTION_RIGHT, size: SIZE * 0.7}]
  };

  const boardRef = useRef<HTMLDivElement>(null);
  const [boardSize, setBoardSize] = useState({width: 0, height: 0})
  const [snake, setSnake] = useState<SnakeInfor>(defaultSnakeInfor);

  const [isPlay, setIsPlay] = useState<boolean>(false);

  useLayoutEffect(() => {
    const { width, height } = boardRef?.current?.getBoundingClientRect() ?? MIN_SIZE;
    const bSize = { width: width > MIN_SIZE.width ? width : MIN_SIZE.width, height: height > MIN_SIZE.height ? height : MIN_SIZE.height };
    bSize.width = Math.floor(bSize.width / SIZE) * SIZE;
    bSize.height = Math.floor(bSize.height / SIZE) * SIZE;
    setBoardSize(bSize);

    const loopGame = () => {
      if (!isPlay) return;


    }

    const startGame = setInterval(loopGame, 1000);

    return clearInterval(startGame)
  }, [])

  useEffect(() => {

  }, [])


  return (
    <div className="w-full h-full relative" ref={boardRef}>
      {!isPlay && (<div className='absolute z-50 bg-gray-300/60' style={{ width: boardSize.width, height: boardSize.height }}></div>)}
      <div className={`bg-black/80 `}
        style={{ width: boardSize.width, height: boardSize.height }}
      >
        {snake.head && (<Square data={snake.head} />)}
        {snake.tail && snake.tail.map(e => <Square data={e} />)}
      </div>
    </div>
  )
}

interface SquareProps {
  data: Square
}

const Square: React.FC<SquareProps> = ({ data }) => {

  return (
    <div className="absolute flex justify-center items-center"
      style={{ width: SIZE, height: SIZE, top: data.position.y * SIZE, left: data.position.x * SIZE}}
    >
      <div className=""
        style={{ width: data.size, height: data.size}}
      >
        <div className="w-full h-full bg-blue-400 border rounded-lg"></div>
      </div>
    </div>
  )
}

export default SnakesGame
