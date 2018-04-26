import * as Axios from 'axios';

const api = {
  topRepos: (language) => {
    const uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&type=Repositories&sort=stars&order=desc`;
    return Axios.get(uri).then(({ data }) => data.items).catch(console.error);
  },
  userData: username => Axios.get(`https://api.github.com/users/${username}`).then(({ data }) => data).catch(console.error),
};

export default api;
