let api = {
  getMessages: () => {
    // const myUrlApi = 'https://georgi-tech-test.herokuapp.com/messages/?format=api';
    const myUrlJson = 'https://georgi-tech-test.herokuapp.com/messages/?format=json';
    return fetch(myUrlJson, {
      method: 'GET',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((res) => res.json());
  },

  // TODO
  // UNFINISHED -> account for async and fix .then((data))
  getMessageById: (id) => {
    try {
      const myUrlJson = 'https://georgi-tech-test.herokuapp.com/messages/';
      return fetch(myUrlJson, {
        method: 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((data) => {
        let index = data.results.findIndex(message => message.id === id)
      });
    }catch(error){
      console.error(error);
    }
  },

  // TODO // check for the need of charset=UTF-8'
  postMessage: (message) => {
    const myUrl = 'https://georgi-tech-test.herokuapp.com/messages/';
    return fetch(myUrl, {
      method: 'POST',
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        text: message
      })
    })
  }
};

module.exports = api;
