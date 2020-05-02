import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import StarRating from "react-native-star-rating";

export default class StarsCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor={"orange"}
          emptyStar={"star-o"}
          fullStar={"star"}
          halfStar={"star-half-full"}
          iconSet={"FontAwesome"}
          starSize={22}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
