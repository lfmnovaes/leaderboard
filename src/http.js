export const fetchData = async () => {
  try {
    const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/P7kNrWElj37qybjDKd9L/scores/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
    return data.json();
  } catch(err) {
    throw new Error(err);
  }
};

export const sendData = async (user, score) => {
  try {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/P7kNrWElj37qybjDKd9L/scores/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: `${user}`,
        score: `${score}`,
      }),
    });
  } catch(err) {
    throw new Error(err);
  }
}