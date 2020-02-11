import React from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import Header from './components/Header.js';
import MatchInfoContainer from './components/MatchInfoContainer.js';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Header />
				<View style = {{padding: 50}}>
					<MatchInfoContainer />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	headerContainer: {
		flexDirection: "column",
		paddingVertical: 15,
		backgroundColor: "#ddd",
		alignItems: "center"
	},
	headerTextContainer: {
		flex: 1,
		flexDirection: "row"
	},
	headerText: {
		flex: 1,
		fontSize: 30,
		textAlign: "center"
	}
});
