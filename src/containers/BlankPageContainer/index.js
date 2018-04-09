// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import BlankPage from "@screens/BlankPage";

import { fetchJokes } from "./src/actions";
import styles from "./styles";

export interface Props {
  navigation: any;
  fetchJokes: Function;
  jokesList: Object;
}
export interface State {}

class BlankPageContainer extends Component {
  componentDidMount() {
    this.props.fetchJokes();
  }

  render() {
    console.log(this.props.jokesList);
    return (
      <BlankPage
        navigation={this.props.navigation}
        jokesList={this.props.jokesList}
        styles={styles}
      />
    );
  }
}

const mapStateToProps = state => ({
  jokesList: state.blankReducer.jokesList
});

export default connect(mapStateToProps, {
  fetchJokes
})(BlankPageContainer);
