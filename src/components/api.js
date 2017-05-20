let api = {
  getMessages: () => {
    const myUrlApi = 'https://georgi-tech-test.herokuapp.com/messages/';
    // const myUrlJson = 'https://georgi-tech-test.herokuapp.com/messages/?format=json';
    return fetch(myUrlApi, {
      method: 'GET',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      // const apiProms = [];
      // pagesNumber needs to be fixed!
      // let pagesNumber = Math.floor((data.count + 4) / 5);
      // console.log(pagesNumber);
      // for (let i = pagesNumber; i > 0; i--){
      //   apiProms.push(fetch(myUrlApi + '?page=' + i))
      // }
      // Promise.all(apiProms)
      //   .then(responses => {
      //     const processResponse = [];
      //     responses.map(response => {
      //       return response;
      //     })
      //   });
      return data;
    });
  },

  // TODO
  // UNFINISHED -> account for async and fix .then((data))
  // get_track = async function(trackID) {
  //   try {
  //     const data = await this.api.getTracks([trackID]);
  //     return data.body;
  //   } catch(err) {
  //     console.error(err);
  //   }
  // }
  getMessageById: (id) => {
    console.log(id);
    try {
      const myUrlJson = `https://georgi-tech-test.herokuapp.com/messages/${id}`;
      return fetch(myUrlJson, {
        method: 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((res) => {return res.json()});
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
