import React, { useState } from "react";
import Form from '../components/form/Form';
import Error from '../components/error/Error';

const Home = () => {

  const [popupMessage, setPopupMessage] = useState('');

  let popup;
  
  if(popupMessage !== '') {
    popup = <Error popupMessage={popupMessage} />
  }

  return (

    <div className="main">
      <Form popupCallback={setPopupMessage} />
      {popup}
    </div>
  );
}

export default Home;
