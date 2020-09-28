import data from '../config.json';

const GSpeedTest = (inUrl, auditCallback, loadingCallback, popupCallback) => {

    const url = setUpQuery(inUrl);

    fetch(url)
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong, please try again");
        }
      })
      .then(json => {
        // See https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#response
        // to learn more about each of the properties in the response object.
        try {
          const cruxMetrics = {
            "Url": inUrl,
            "First Contentful Paint": json.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
            "First Input Delay": json.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
          };
        } catch(e) {
          console.log(e);
        };
        try {
          const lighthouse = json.lighthouseResult;
        const lighthouseMetrics = {
          'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
          'Speed Index': lighthouse.audits['speed-index'].displayValue,
          'Time To Interactive': lighthouse.audits['interactive'].displayValue,
          'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
          'First CPU Idle': lighthouse.audits['first-cpu-idle'].displayValue,
          'Estimated Input Latency': lighthouse.audits['estimated-input-latency'].displayValue
        };
        console.log(json.lighthouseResult)
        auditCallback([inUrl, json.lighthouseResult]);
        //showLighthouseContent(lighthouseMetrics);
        loadingCallback(false);
        } catch (e) {
          console.log(e);
        }
      })
      .catch(e => {
        loadingCallback(false);
        popupCallback(e.toString());
      });
  }

  
  const setUpQuery = testUrl => {

    const tUrl = testUrl;
    const parameters = {
      url: 'https://' + encodeURIComponent(tUrl) + '?',
      key: data.googleKey,
    };
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    let query = `${api}?`;
    for (let key in parameters) {
      query += `${key}=${parameters[key]}`;
    }
    return query;
  }
  
  const showLighthouseContent = lighthouseMetrics => {    
    for (let key in lighthouseMetrics) {
      console.log(`${key}: ${lighthouseMetrics[key]}`)
    }
  }

export default GSpeedTest;