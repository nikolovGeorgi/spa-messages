let api = {
  getMessages: () => {
    try {
      const myUrlApi = 'https://georgi-tech-test.herokuapp.com/messages/';
      return fetch(myUrlApi, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then((res) => {
        return res.json();
      }).then((data) => {
        const apiProms = [];
        // pagesNumber needs to be fixed!
        let pagesNumber = Math.floor((data.count + 4) / 5);
        for (let i = pagesNumber; i > 0; i--){
          apiProms.push(fetch(myUrlApi + '?page=' + i, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then((res) => {
            return res.json();
          }).then((data) => {
            return data;
          })

        );}
        return Promise.all(apiProms)
        .then((res) => {
          return res;
        });
      });
    } catch(error) {
      console.error(error);
    }
  },
  deleteMessage: (id) => {
    try {
      const myUrlJson = `https://georgi-tech-test.herokuapp.com/messages/${id}`;
      return fetch(myUrlJson, {
        method: 'DELETE',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((res) => {
        return res;
      });
    }catch(error){
      console.error(error);
    }
  },
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
      .then((res) => {
        return res.json();
      }).then((data) => {
        let temp = [];
        temp.push(data);
        return temp;
      });
    }catch(error){
      console.error(error);
    }
  },

  postMessage: (message) => {
    try{
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
      }).then((res) => {
        return res.json();
      }).then((data) => {
        return data;
      });
    } catch(error) {
      console.error(error);
    }
  }
};

module.exports = api;
