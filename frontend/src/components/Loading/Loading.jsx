import React from 'react';
import 'src/components/Loading/Loading.css'
import logo from 'src/assets/loading.gif'

function Loading() {

  return (
    <div id="loading-image">
      <img src = {logo} alt="loading..." width="5%" height="5%"/>
    </div>
  );
}

export default Loading;