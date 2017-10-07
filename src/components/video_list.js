import React from 'react';

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.video.length}
    </ul>
  );
};

export default VideoList;
