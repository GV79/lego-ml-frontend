/*
 * REST calls
 */

import axios from 'axios';

/*
 * Function for sending user chosen Lego Part Data to server
 * ie. [{ id: '1', num: 6 }, { id: '2', num: 4 }]
 */
const sendData = async data => {
  console.log(data);
  /*
    // when backend is setup, send HTTP request
    try {
      await axios.post('/someendpoint', data);
    } catch (err) {
      throw err;
    }
  */
};

/*
 * Function for obtaining JSON Lego Part Data from server
 * Similar structure as resources/exampleData.js
 */
const retrieveData = async () => {
  /*
    // when backend is setup, send HTTP request
    try {
      await axios.get('/someendpoint');
    } catch (err) {
      throw err;
    }
  */
};

export { retrieveData, sendData };
