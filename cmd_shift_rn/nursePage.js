import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image
} from 'react-native';

class NursePage extends Component {
	constructor(props){
		super(props);
	}

	navigateBack(){
		this.props.navigator.pop();
	}

	navigateNotes(bedNum){
		// console.log(event)
		this.props.navigator.push({
			id: 'NotesPage',
			passProps: {
				bedNum: bedNum,
				notes: this.props.nurseData[bedNum],
				updateNote: this.props.updateNote
			}
		})
	}

	render(){
		var names = this.props.nurseName.split(' ');
		var nurseFirst = names[0];
		var nurseLast = names[1];
		nurseFirst[0] = nurseFirst.toUpperCase();
		nurseLast[0] = nurseLast.toUpperCase();

		var nurseArr = Object.keys(this.props.nurseData)
		var bedData = nurseArr.map((bedNum, i) =>{
			return <TouchableHighlight key={bedNum} onPress={() => this.navigateNotes(bedNum)}><Text>
			{bedNum}
				</Text>
			</TouchableHighlight>
		});
		return (
			<View style={styles.container}>
				<View style ={styles.viewBackButton}>
					<TouchableHighlight onPress={this.navigateBack.bind(this)} style={styles.backButton}>
					<Image source={require('./Images/backButton.png')} style={styles.backImage}></Image>
					</TouchableHighlight>
				</View>
				<View style={styles.viewTop}>
					<Text style={styles.welcome}>
						Welcome {nurseFirst} {nurseLast}!
					</Text>
					<Text style={styles.displayNames}>
						Your beds are: 
					</Text>
				</View>
				<View style ={styles.bedsView}>
						{bedData}
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	viewBackButton: {
		flex: 1,
		alignItems: 'flex-start',
	},
	viewTop: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	viewBottom: {
		flex: 3,
		alignItems: 'center',
	},
	bedsView: {
		justifyContent: 'flex-start',
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

module.exports = NursePage;
