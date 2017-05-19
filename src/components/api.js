let api = {
  getMessages(){
    // const myUrlApi = 'https://georgi-tech-test.herokuapp.com/messages/?format=api';
    const myUrlJson = 'https://georgi-tech-test.herokuapp.com/messages/?format=json';
    return fetch(myUrlJson, {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((res) => res.json());
  }
};

module.exports = api;
