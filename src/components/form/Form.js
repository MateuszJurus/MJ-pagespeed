import React, { useState } from "react";
import Input from '../input/Input';
import Button from '../button/Button';
import GSpeedTest from '../../utils/GSpeedTest';
import LoadPlaceholder from '../LoadPlaceholder/LoadPlaceholder';
import './Form.scss';
import Display from "../display/Display";

const Form = props => {
    
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(0);
  const [response, setResponse] = useState('');

  return (
    <>
      <form className="search__form panel" onSubmit={e => handleSubmit(url, e, setLoading, setResponse, props.popupCallback)} >
        <Input isLoading={loading} passUrl={setUrl} required={true} />
        <Button isLoading={loading} text="Submit" type="submit" className="submit" />
      </form>
      <LoadPlaceholder isLoading={loading} />
      {response !== '' ? <Display data={response} /> : null}
    </>
  );
}

const handleSubmit = (url,e, loadingCallback, auditCallback, popupCallback) => {
    e.preventDefault();
    clearAll(loadingCallback, popupCallback, auditCallback);
    try {
      if(url !== undefined) {
        loadingCallback(true);
        GSpeedTest(url, auditCallback, loadingCallback, popupCallback);     
      } else {
        console.log('undefined');
      }
    } catch (e) {
      console.log(e)
    }
}

const clearAll = (loadingCallback, popupCallback, auditCallback) => {
  loadingCallback(0);
  popupCallback('');
  auditCallback('');
}

export default Form;