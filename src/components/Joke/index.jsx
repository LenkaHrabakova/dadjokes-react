import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [likesPlus, setLikesPlus] = useState(props.likes);
  const [likesMinus, setLikesMinus] = useState(props.dislikes);
  const clickLikePlus = () => {
    setLikesPlus(likesPlus + 1);
  };

  const clickLikeMinus = () => {
    setLikesMinus(likesMinus + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={props.userAvatar} />
          <p className="user-name">{props.userName}</p>
        </div>
        <p className="joke__text">{props.text}</p>
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
  );
};
