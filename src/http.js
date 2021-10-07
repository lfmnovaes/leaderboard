// "lfmnovaes game"
// P7kNrWElj37qybjDKd9L

export const fetchData = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/P7kNrWElj37qybjDKd9L/scores/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  });
  return data.json();
};

export const sendData = async () => {
  console.log('sendData');
}