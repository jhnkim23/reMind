import React from 'react';
import 'src/components/Loading/Loading.css'
import logo from 'src/assets/loading.gif'
function Loading() {
  return (
    <>
        <img src = {logo} alt="loading.." />
    </>
  );
}

export default Loading;