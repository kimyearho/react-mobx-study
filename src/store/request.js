import { observable, action } from "mobx";
import axios from "axios";

class RequestStroe {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable
  REQUEST_INFO = {
    API_URL: "https://www.googleapis.com/youtube/v3/",
    API_KEY: "AIzaSyAcNGab-jHH_79rEhgFFFy_4oS46yUMNds"
  };

  @action
  findSearch = () => {
    const url =
      this.REQUEST_INFO.API_URL +
      `search?part=snippet&q=2019 Bilboard` +
      `&type=video,playlist,channel&maxResults=50&safeSearch=strict&key=${
        this.REQUEST_INFO.API_KEY
      }`;
    return axios.get(url);
  };

  @action
  findPageSearch = (nextToken) => {
    if (nextToken) {
      const url =
        this.REQUEST_INFO.API_URL +
        `search?part=snippet&q=audio` +
        `&type=video,playlist,channel&maxResults=50&safeSearch=strict&pageToken=${nextToken}&key=${
          this.REQUEST_INFO.API_KEY
        }`;
      return axios.get(url);
    }
  };
}

export default RequestStroe;
