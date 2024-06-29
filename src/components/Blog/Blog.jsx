/* eslint-disable */

import './Blog.css';
import { useState } from 'react';

function App() {

  let post = '리액트'
  let [글제목, 글제목변경] = useState(['1번', '2번', '3번', '4번'])
  let [따봉, 따봉변경] = useState([0, 0, 0, 0]);
  let [따봉ㄴ, 따봉ㄴ변경] = useState([0, 0, 0, 0]);
  let [모달, 모달변경] = useState(0);
  let [모달제목, 모달제목변경] = useState('');
  let [입력값, 입력값변경] = useState('');
  let [logo, setlogo] = useState('ReactBlog')

  return (

    <div className="container">
      <div className='title'>
        <h1>Blog</h1>
      </div>
      <div className="input-box">
        <input onChange={(e) => {
          입력값변경(e.target.value);
        }}></input>
        <button onClick={() => {
          if (입력값.trim() == '') {
            alert("제목을 입력하세요.");
          }
          else {
            let copy글제목 = [...글제목];
            let copy따봉 = [...따봉];
            let copy따봉ㄴ = [...따봉ㄴ];
            copy글제목.unshift(입력값);
            copy따봉.unshift(0);
            copy따봉ㄴ.unshift(0);
            글제목변경(copy글제목);
          }
        }}>저장</button>
      </div>

      {
        글제목.map(function (element, count) {
          return (
            <List index={count} 글제목={글제목} 글제목변경={글제목변경} 따봉={따봉} 따봉ㄴ={따봉ㄴ} 따봉변경={따봉변경} 따봉ㄴ변경={따봉ㄴ변경} 모달={모달} 모달변경={모달변경} 모달제목변경={모달제목변경}></List>
          )
        })
      }

      {
        모달 == 1 ? <Modal 모달제목={모달제목}></Modal> : null
      }

    </div>
  );
}
function Modal({모달제목}) {
  return (
    <div className="modal">
      <h4>{모달제목}</h4>
      <p>5월 30일 발행</p>
    </div>
  )
}

function List(props) {

  return (
    <div className="list">
      <h4 onClick={() => {
        props.모달변경(!props.모달);
        props.모달제목변경(props.글제목[props.index]);
      }}>{props.글제목[props.index]} <span onClick={(event) => {
        let copy따봉 = [...props.따봉];
        copy따봉[props.index] += 1;
        props.따봉변경(copy따봉);
        event.stopPropagation();
      }}>👍</span> {props.따봉[props.index]}
        <span onClick={(event) => {
          let copy따봉ㄴ = [...props.따봉ㄴ];
          copy따봉ㄴ[props.index] += 1;
          props.따봉ㄴ변경(copy따봉ㄴ);
          event.stopPropagation();
        }}>👎</span> {props.따봉ㄴ[props.index]}
      </h4>
      <p>5월 30일 발행</p>

      <button onClick={() => {
        let copy글제목 = [...props.글제목];
        let copy따봉 = [...props.따봉];
        let copy따봉ㄴ = [...props.따봉ㄴ];
        copy글제목.splice(props.index, 1);
        copy따봉.splice(props.index, 1);
        props.글제목변경(copy글제목);
        props.따봉변경(copy따봉);
        props.따봉ㄴ변경(copy따봉ㄴ);
      }}>삭제</button>
    </div>
  )
}
export default App;