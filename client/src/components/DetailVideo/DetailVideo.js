import React from 'react'

function DetailVideo() {
  return (
    <div>
       <div className="videopleer">
                    <video id="videoPlayer" className="video" width="100%" muted="muted" loop='true' autoPlay>
                        <source src="http://localhost:3001/video" type="video/mp4" />
                    </video>
                </div>
    </div>
  )
}

export default DetailVideo
