import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image
} from 'react-native';

class NotesPage extends Component {
	constructor(props){
		super(props);
		this.state = {
		};

	}

	navigateBack(){
		this.props.navigator.pop();
	}

	render(){

		return (
			<View style={styles.container}>
				<View style ={styles.viewPlaceholder}>
					<TouchableHighlight onPress={this.navigateBack.bind(this)} style={styles.backButton}>
					<Image source={require('./Images/backButton.png')} style={styles.backImage}></Image>
					</TouchableHighlight>
				</View>
				<View style ={styles.viewBottom}>
					
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	displayNames: {
		fontSize: 20
	},
	viewPlaceholder: {
		flex: 1,
		alignItems: 'flex-start',
	},
	viewBottom: {
		flex: 5,
		alignItems: 'center',
	},
	bedsView: {
		alignItems: 'center',
		flex: 4,
	},
	backImage: {
		height: 25,
		width: 25
	},
	backButton: {
		marginTop: 20,
		marginLeft: 10
	}
});

module.exports = NotesPage;
