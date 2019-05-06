import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Card from "../Card/Card";

@inject("app")
@observer
class LeftContents extends Component {
  state = {
    items: [],
    nextPageToken: ""
  };

  get = () => {
    const data = this.props.app.requestStore.findSearch();
    data.then(result => {
      this.setState({
        items: Object.assign([], result.data.items),
        nextPageToken: result.data.nextPageToken
      });
    });
  };

  componentDidMount = () => {
    this.get();
  };

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => (
          <div key={i} className="CardList">
            <Card data={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default LeftContents;
