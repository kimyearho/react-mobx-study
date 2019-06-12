import { observable, action } from "mobx";
import HomeRepo from "../components/Home/repo/index"
import HomeModel from "../components/Home/model/index"
import VideoModel from "../components/Home/components/videoList/model/index"

export default class HomeStore {

  @observable
  data = {
    list: [],
    nextToken: null
  };

  @observable
  detail = {
    item: []
  }

  @observable
  videoId = null

  @observable
  searchQuery = null

  @action
  findAllSearch = () => {
    HomeRepo
      .findSearch(this.searchQuery)
      .then(result => {
        const data = result.data;
        const homeModelData = new HomeModel(data)
        this.data.list = homeModelData.getSearchList
        this.data.nextToken = homeModelData.getNextToken
      })

  };

  @action
  findPagingSearch = nextToken => {
    HomeRepo
      .findPageSearch(nextToken)
      .then(result => {
        const data = result.data;
        console.log(data)
      });
  }

  @action
  findDetailVideo = videoId => {
    HomeRepo
      .findVideo(videoId)
      .then(result => {
        const data = result.data;
        const videoModelData = new VideoModel(data)
        this.detail.item = videoModelData.getOneVideo
        this.videoId = videoModelData.getVideoId
      })
  }

}