import React from "react";
import { observer, inject } from "mobx-react";
import Autosuggest from "react-autosuggest";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import axios from "axios";
import axiosp from "axios-jsonp-pro";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  }
};

const theme = {
  container: {
    position: "relative",
    display: "inline-block"
  },
  input: {
    width: 730,
    height: 34,
    padding: "10px",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: 300,
    fontSize: 16,
    border: "1px solid #aaa",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  inputFocused: {
    outline: "none"
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: "none"
  },
  suggestionsContainerOpen: {
    display: "block",
    position: "absolute",
    top: 51,
    width: 730,
    color: "#000",
    border: "1px solid #aaa",
    backgroundColor: "#fff",
    fontFamily: "Helvetica, sans-serif",
    fontWeight: 300,
    fontSize: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 20px"
  },
  suggestionHighlighted: {
    backgroundColor: "#ddd"
  }
};
const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

@inject("app")
@observer
class AutoComplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", suggestions: [] };
    this.store = this.props.app.homeStore;
    this.query = this.query.bind(this);
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
  onSuggestionsFetchRequested = ({ value }) => {
    let uri =
      "https://suggestqueries.google.com/complete/search?ds=yt&client=youtube&q=" +
      value;
    axiosp
      .jsonp(uri)
      .then(res => {
        return res[1].map(item => {
          return { name: item[0] };
        });
      })
      .then(result => {
        this.setState({
          suggestions: result
        });
      });
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  query() {
    this.store.searchQuery = this.state.value;
    this.store.findAllSearch(this.state.value);
  }
  render() {
    const { classes } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "검색",
      value,
      onChange: this.onChange
    };
    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={theme}
        />
        <div style={{ display: "inline-block", paddingLeft: "10px" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.query}
            style={{ verticalAlign: "middle", padding: "7px 30px" }}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AutoComplate);
