import './Gallery.css';

function App() {

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>퀴푸 숙제1</title>
      <link rel="stylesheet" href="Gallery.css" />
      <div className='container'>
        <div className="top">
          무지개
        </div>
        <div className="main">
          <div className="images">
            <img src="./image/rainbow.jpg" alt="무지개" />
            <h4>무지개</h4>
            <p>rainbow</p>
          </div>
          <div className="images">
            <img src="./image/red.jpg" alt="빨간색" />
            <h4>빨간색</h4>
            <p>red</p>
          </div>
          <div className="images">
            <img src="./image/orange.jpg" alt="주황색" />
            <h4>주황색</h4>
            <p>orange</p>
          </div>
          <div className="images">
            <img src="./image/yellow.jpg" alt="노란색" />
            <h4>노란색</h4>
            <p>yellow</p>
          </div>
          <div className="images">
            <img src="./image/green.jpg" alt="초록색" />
            <h4>초록색</h4>
            <p>green</p>
          </div>
          <div className="images">
            <img src="./image/blue.jpg" alt="파란색" />
            <h4>파란색</h4>
            <p>blue</p>
          </div>
          <div className="images">
            <img src="./image/indigo.jpg" alt="남색" />
            <h4>남색</h4>
            <p>indigo</p>
          </div>
          <div className="images">
            <img src="./image/purple.jpg" alt="보라색" />
            <h4>보라색</h4>
            <p>purple</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;