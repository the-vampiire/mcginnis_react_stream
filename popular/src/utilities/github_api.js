import Axios from 'axios';
const API = {
    getTopRepos: (language) => Axios.get(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    ).then(({ data }) => data.items)
};

export default API;
