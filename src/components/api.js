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
      const myUrlJson = `https://georgi-tech-test.herokuapp.com/messages/${id}`;
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

  postMessage: (message) => {
    const myUrl = 'https://georgi-tech-test.herokuapp.com/messages/';
    return fetch(myUrl, {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: message.id,
        text: message.text,
        created_at: message.created_at
      })
    })
  }
};

module.exports = api;
