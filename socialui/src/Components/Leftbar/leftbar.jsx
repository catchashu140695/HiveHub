import React from 'react';
import '../Leftbar/leftbar.scss';
import checkimg from  '../../Assets/img/check.png';
import commentsimg from  '../../Assets/img/comments.png';
import peopleimg from  '../../Assets/img/people.png';
import sixteenimg from  '../../Assets/img/sixteen.png';
import userimg from '../../Assets/img/user.png';

const leftbar = () => {
  return (
    <>
      <div className="leftbar">
        <div className="user">
          <img src={userimg} alt=''></img>
          <span>Ashutosh Mishra</span>
        </div>
        <div className="item">
          <img src={userimg} alt=''></img>
          <span>Profile</span>
        </div>
        <div className="item">
          <img src={commentsimg} alt=''></img>
          <span>Messages</span>
        </div>
        <div className="item">
          <img src={peopleimg} alt=''></img>
          <span>Friends</span>
        </div>
        <div className="item">
          <img src={sixteenimg} alt=''></img>
          <span>Events</span>
        </div>
        <div className="item">
          <img src={checkimg} alt=''></img>
          <span>To Do</span>
        </div>
      </div>
    </>
  )
}

export default leftbar
