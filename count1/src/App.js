import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { CardList } from "./components/card-lists/card-list.components";
import { SearchBox } from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      myTokens: [
        {
          name: "Zuckbuckneign",
          id: 1,
        },
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => this.setState({ myTokens: response }));
  }

  render() {
    const { myTokens, searchField } = this.state;
    //this is equivalent to;
    // const myTokens = this.state.monster; and
    // const searchField = this.state.searchField;

    const filtererdmyTokens = myTokens.filter((myTokens) =>
      myTokens.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>NFT Token Rolodex</h1>
        <SearchBox
          placeholder="search myTokens"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />

        <CardList myTokens={filtererdmyTokens}></CardList>
      </div>
    );
  }
}

export default App;
