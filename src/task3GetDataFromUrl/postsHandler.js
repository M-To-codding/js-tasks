import axios from "axios";

//constants
const url = 'http://jsonplaceholder.typicode.com/posts';

//api methods
function fetchData1() {
  axios.get(url)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response;
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => {
      errorHandler(error);
    })
}

async function fetchData2() {
  let response = null;

  try {
    response = await axios.get(url);
    if (response.status >= 200 && response.status <= 299) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    errorHandler(error);
  }

  return response;
}


// handlers
function errorHandler(error) {
  // handling 4xx - 5xx errors
  if (error.response) {
    // if(404) window.location.replace('not-found-page')
  } else if (error.request) {
    return `Connection error: ${error.message}`;
  } else {
    console.log(`Some other error: ${error}`)
  }
}