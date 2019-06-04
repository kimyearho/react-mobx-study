import { observable, action } from "mobx";
import homeRepo from "../components/Home/repo/index"

export default class RequestStroe {

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable
  data = {
    list: [],
    nextToken: null
  };

  @observable
  detail = {
    videoId: null,
    item: []
  };

  @action
  findAllSearch = () => {
    const { data } = homeRepo.findSearch()
    console.log(data)
  };

}