console.log('loading');
const matches = document.getElementById('matches');
const getAll = async () => {
  const {
    data: { match },
  } = await axios.get('/api/v1/events');
  console.log(match);
  const allTasks = match
    .map((data) => {
      const { match, _id: taskid } = data;
      return `<li>${match}</li> <button id='${taskid}'>D</button> `;
    })
    .join('');
    console.log(allTasks);
  matches.innerHTML = allTasks
};

getAll();
