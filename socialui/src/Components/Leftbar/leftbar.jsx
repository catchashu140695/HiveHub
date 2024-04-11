import React from 'react';
import '../Leftbar/leftbar.scss';
import userimg from '../../Assets/img/user.png';
import YouTubeIcon from '@mui/icons-material/YouTube';

const leftbar = () => {
  return (
    <>
      <div className="leftbar">
        <div className="user">
          <img src={userimg} alt=''></img>
          <span>Ashutosh Mishra</span>
        </div>
        <div className="item">
          <YouTubeIcon />
          <span>Youtube Downloader</span>
        </div>
        <div className="item">
          <YouTubeIcon />
          <span>Upload Automate</span>
        </div>
        <div className="item">
          <YouTubeIcon />
          <span>Text to Video</span>
        </div>
        
      </div>
    </>
  )
}

export default leftbar
