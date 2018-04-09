// @flow

import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Content,
  Header,
  Spinner,
  Card,
  CardItem,
  Text,
  Badge,
  Thumbnail,
  List,
  ListItem
} from "native-base";

export interface Props {
  navigation: any;
  jokesList: any;
  styles: any;
}

export interface State {}

export default class BlankPage extends Component {
  componentDidMount() {}

  _renderItem = ({ item, index }) => (
    <ListItem>
      <Text>{item.joke}</Text>
    </ListItem>
  );

  render() {
    const { navigation, jokesList, styles } = this.props;
    const param = navigation.state.params;
    const { jokes, error, loading } = jokesList;

    return (
      <Container>
        <Header />
        <Content padder>
          {loading && <Spinner />}
          {!loading && (
            <List>
              <FlatList
                data={jokes}
                keyExtractor={(item, index) => item.joke}
                renderItem={this._renderItem}
                initialNumToRender={5}
              />
            </List>
          )}
        </Content>
      </Container>
    );
  }
}
