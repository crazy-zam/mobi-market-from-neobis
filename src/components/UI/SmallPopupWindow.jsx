import React from 'react';
import redDelete from './../../assets/red delete.svg';
import redExit from './../../assets/red exit.svg';
import redHeart from './../../assets/red heart.svg';
import styles from './smallPopupWIndow.module.css';

const PopupWIndow = ({ type, content = 'delete', title = false }) => {
  console.log(type, content, title);
  const types = {
    delete: ['Удалить', redDelete],
    likeDelete: ['Удалить', redHeart],
    exit: ['Выйти', redExit],
    registration: ['Зарегистрироваться', redExit],
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.window}>
        {title && <div>{title}</div>}
        <img src={types[content][1]} />
        <div>Description</div>
        <div>Description-help</div>
        <input type="text" />
        <button className="send-sms-btn"></button>
        <div>error/help</div>
        <button>{types[content][0]}</button>
        <button>Отмена</button>
      </div>
    </div>
  );
};

export default PopupWIndow;
