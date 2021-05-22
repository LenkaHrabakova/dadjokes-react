import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [likesPlus, setLikesPlus] = useState(0);
  const [likesMinus, setLikesMinus] = useState(0);
  const clickLikePlus = () => {
    setLikesPlus(likesPlus + 1);
  };

  const clickLikeMinus = () => {
    setLikesMinus(likesMinus - 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={clickLikePlus}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likesPlus}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={clickLikeMinus}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {likesMinus}
          </span>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
