import { Button } from '@heroui/react';
import { PlayCircle } from 'lucide-react';
import { Vec2 } from 'ogl';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface SnakesGameProps {

}

interface Square {
  position: Vec2;
  direction: Vec2;
  preDirection: Vec2 | null;
  size: number;
}

interface SnakeInfor {
  head: Square;
  tail: Square[];
}

const SIZE = 30 // 30px
const DEFAULT_VECTOR : Vec2 = new Vec2(0,0); // default vector
const DIRECTION_RIGHT : Vec2 = new Vec2(1,0) // left to right
const DIRECTION_LEFT : Vec2 = new Vec2(-1,0) // right to left
const DIRECTION_UP : Vec2 = new Vec2(0,-1) // down to up
const DIRECTION_DOWN : Vec2 = new Vec2(0,1) // up to down

const MIN_SIZE = { width: 300, height: 150 }

const SnakesGame: React.FC<SnakesGameProps> = () => {

  const defaultSnakeInfor : SnakeInfor = {
    head: {position: new Vec2(2,0), direction:DIRECTION_RIGHT.clone(), preDirection:DIRECTION_RIGHT.clone(), size: SIZE * 0.9}, 
    tail: [{position: new Vec2(1,0), direction:DIRECTION_RIGHT.clone(), preDirection:DIRECTION_RIGHT.clone(), size: SIZE * 0.7}, {position: DEFAULT_VECTOR.clone(), direction:DIRECTION_RIGHT.clone(), preDirection:null, size: SIZE * 0.7}]
  };

  const boardRef = useRef<HTMLDivElement>(null);
  const [boardSize, setBoardSize] = useState({width: 0, height: 0})
  const [snake, setSnake] = useState<SnakeInfor>(defaultSnakeInfor);
  const [direction, setDirection] = useState<Vec2>(DIRECTION_RIGHT.clone());
  const [time, setTime] = useState<number>(0);

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const [feed, setFeed] = useState<Square | null>(null)

  const createFeed = () => {
    const avaiPos = [snake.head.position, ...snake.tail.map(e => e.position)]
    const lstPool = []

    for (let i = 0; i < boardSize.width / SIZE; i++) {
      for (let j = 0; j < boardSize.height / SIZE; j++) {
        const point = new Vec2(i, j)
        if (avaiPos.filter(pos => pos.equals(point)).length == 0) lstPool.push(point);
      }
    }

    if (lstPool.length === 0) {
      // cannot generate position
      setIsPlay(false);
      return null
    }  

    const idx = Math.floor(Math.random() * lstPool.length);
    return lstPool[idx]
  }

  useLayoutEffect(() => {
    const { width, height } = boardRef?.current?.getBoundingClientRect() ?? MIN_SIZE;
    const bSize = { width: width > MIN_SIZE.width ? width : MIN_SIZE.width, height: height > MIN_SIZE.height ? height : MIN_SIZE.height };
    bSize.width = Math.floor(bSize.width / SIZE) * SIZE;
    bSize.height = Math.floor(bSize.height / SIZE) * SIZE;
    setBoardSize(bSize);
  }, [])

  useEffect(() => {
    const loopGame = () => {
      if (!isPlay) return;
      
      if (!feed) {
        updateFeed()
      }
      handleUpdateSnake()
      setTime(prev => prev + 1)
    }

    const startGame = setInterval(loopGame, 300);
    return () => clearInterval(startGame)
  }, [isPlay, direction, time])

  const handleUpdateSnake = () => {
    if (!isPlay) return; 

    let snakeUpdate = updateDirectionSnake(snake)
    snakeUpdate = updatePositionSnake(snakeUpdate)

    if (feed && snakeUpdate.head.position.equals(feed.position)) {
      // handle snake eat feed
      updateFeed()
      const lastTail = snakeUpdate.tail[snakeUpdate.tail.length - 1]
      const newTail = { position: lastTail.position.clone().add(lastTail.direction.clone().multiply(-1)), direction: lastTail.direction.clone(), preDirection: null, size: SIZE * 0.7 }
      snakeUpdate.tail.push(newTail)
    }

    //handle check gameover
    if (snakeUpdate.tail.filter(e => e.position.equals(snakeUpdate.head.position)).length > 0){
      setIsGameOver(true)
      setIsPlay(false)
    }

    setSnake(snakeUpdate)
  }

  const updateFeed = () => {
    const posFeed = createFeed()
    if (posFeed) setFeed({ position: posFeed, direction: DEFAULT_VECTOR.clone(), preDirection: null, size: SIZE * 0.7 })
    else setFeed(null)
  }

  const updateDirectionSnake = (snake: SnakeInfor) : SnakeInfor => {
    // if (!snake || snake?.tail || snake?.head) return snake;

    const preHead = snake.head
    const preTail: Square[] = snake.tail
    let prevDec : Vec2 | null = preHead?.direction?.clone() ?? null;

    return {
      head: {...preHead, preDirection: preHead.direction.clone(), direction: direction.clone()},
      tail: preTail?.map((e, i) => {
        const futureDec = prevDec?.clone() ?? DEFAULT_VECTOR.clone()
        const curDirection = i == preTail.length - 1 ? null : e.direction.clone()
        prevDec = e.direction?.clone() ?? null
        return { ...e, direction: futureDec, preDirection: curDirection }
      })
    }
  }

  const updatePositionSnake = (snake: SnakeInfor) : SnakeInfor => {
    const preHead = snake.head
    const preTail: Square[] = snake.tail

    preHead.position = resetPositionOutOfBoundation(preHead.position.add(preHead?.direction).clone())
    return { head: { ...preHead }, tail: preTail.map((e) => { return { ...e, position: resetPositionOutOfBoundation(e.position.add(e.direction).clone())}})}
  }

  // reset position if out of boundation
  const resetPositionOutOfBoundation = (position : Vec2) => {
    if (position.x >= (boardSize.width / SIZE)) position.x = 0
    else if (position.x < 0) position.x = (boardSize.width / SIZE) - 1
    if (position.y >= (boardSize.height / SIZE)) position.y = 0
    else if (position.y < 0) position.y = (boardSize.height / SIZE) - 1

    return position
  }

  const onPlay = () => {
    setIsPlay(true)
  }

  const onHandleSpaceKey = useCallback(() => {
    setIsPlay(prev => !prev);
  }, []);

  // handle move snake
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.key === " ") {
        // pause/resume
        event.preventDefault();
        onHandleSpaceKey();
      } else if (event.code === "ArrowUp" || event.key === "ArrowUp") {
        // turn up
        if (snake.head.direction.equals(DIRECTION_DOWN)) return;
        event.preventDefault();
        setDirection(DIRECTION_UP.clone());
      } else if (event.code === "ArrowDown" || event.key === "ArrowDown") {
        // turn down
        if (snake.head.direction.equals(DIRECTION_UP)) return;
        event.preventDefault();
        setDirection(DIRECTION_DOWN.clone());
      } else if (event.code === "ArrowLeft" || event.key === "ArrowLeft") {
        // turn left
        if (snake.head.direction.equals(DIRECTION_RIGHT)) return;
        event.preventDefault();
        setDirection(DIRECTION_LEFT.clone());
      } else if (event.code === "ArrowRight" || event.key === "ArrowRight") {
        // turn right
        if (snake.head.direction.equals(DIRECTION_LEFT)) return;
        event.preventDefault();
        setDirection(DIRECTION_RIGHT.clone());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onHandleSpaceKey, snake]);

  // reset game
  const onReset = () => {
    setSnake(defaultSnakeInfor)
    setFeed(null)
    setTime(0)
    setDirection(DIRECTION_RIGHT.clone())
    if(isGameOver) {
      setIsGameOver(false)
      setIsPlay(true)
    } else {
      setIsPlay(false)
    }
  }

  return (
    <div className="w-full h-full relative" ref={boardRef}>
      {!isPlay && (
        <div className='absolute z-40  flex justify-center items-center' style={{ width: boardSize.width, height: boardSize.height }}>
          <div className="flex gap-5 flex-col justify-center items-center">
            <div className="z-50"><p className=''>{isGameOver ? 'GameOver' : 'Pause'}</p></div>
            <div className=" flex gap-2">
              {!isGameOver && (
                <Button
                  className='z-50'
                  color="primary"
                  variant="solid"
                  startContent={<PlayCircle size={18} />}
                  onClick={onPlay}
                  size="sm"
                >
                  {"Play"}
                </Button>
              )}
              <Button
                className='z-50'
                color="primary"
                variant="solid"
                startContent={<PlayCircle size={18} />}
                onClick={onReset}
                size="sm"
              >
                {"Reset"}
              </Button>
            </div>
            <div className="absolute top-0 left-0 bg-gray-300 opacity-60 w-full h-full z-10"></div>
          </div>
        </div>
      )}
      <div className={`bg-black/80 `}
        style={{ width: boardSize.width, height: boardSize.height }}
      >
        {snake.head && (<Square data={snake.head} />)}
        {snake.tail && snake.tail.map((e,i) => <Square key={i} data={e} />)}
        {feed && <Square data={feed}/>}
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
