import * as Axios from 'axios';

const api = {
  topRepos: (language) => {
    const uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&type=Repositories&sort=stars&order=desc`;
    return Axios.get(uri).then(({ data }) => data.items);
  },
};

export default api;
