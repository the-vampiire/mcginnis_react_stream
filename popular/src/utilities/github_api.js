import Axios from 'axios';

const API = {
  getTopRepos: (language) => {
    const topRepoURL = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
    return Axios.get(topRepoURL).then(({ data }) => data.items);
  },
};

export default API;
