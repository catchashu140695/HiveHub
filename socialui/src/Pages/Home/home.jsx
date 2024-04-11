import React from 'react'
import '../Home/home.scss'

const home = () => {
  return (

    <div className="box">
      <div className="logo">
        <iframe src="https://lottie.host/embed/de220bd8-9497-4e70-840f-fec8c67e7969/zMK2myTfhp.json"></iframe>
        <p><b>Note:-</b>Just paste the youtube url and click on the submit button to download the video.</p>
      </div>
      <div className="form">
        <input type='text' className='input-field' placeholder='Youtube URL'></input>
        <button className='button-success'>Submit</button>
      </div>
      <div className="table">

      </div>
    </div>

  )
}

export default home
