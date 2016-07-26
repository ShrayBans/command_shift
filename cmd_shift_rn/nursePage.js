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
		this.state = {
			nurseData : {}
		};
		this.fetchNurses = this.fetchNurses.bind(this);
	}

	componentDidMount(){
		this.fetchNurses();
	}

	fetchNurses(){
		var names = this.props.nurseName.split(' ');
		var nurseFirst = names[0];
		var nurseLast = names[1];
		//if nurse.beds === null || undefined, navigate back 

		fetch('http://localhost:3000/nurses').then((response)=> response.json()).then((dataJson) => {
				var nurseData = dataJson.filter(function(nurse){

					return nurse.first.toUpperCase() === nurseFirst.toUpperCase() && nurse.last.toUpperCase() === nurseLast.toUpperCase();
				});
				if(nurseData[0].beds) {
					var nurseObj = {};
					for(var prop of nurseData[0].beds){
						nurseObj[prop] = ''
					}
					this.setState({nurseData: nurseObj});
				}
		});
	}

	navigateBack(){
		this.props.navigator.pop();
	}

	navigateNotes(bedNum){
		// console.log(event)
		this.props.navigator.push({
			id: 'NotesPage',
			passProps: {
				notes: this.state[bedNum]
			}
		})
	}

	render(){
		var names = this.props.nurseName.split(' ');
		var nurseFirst = names[0];
		var nurseLast = names[1];
		nurseFirst[0] = nurseFirst.toUpperCase();
		nurseLast[0] = nurseLast.toUpperCase();

		var nurseArr = Object.keys(this.state.nurseData)
		var bedData = nurseArr.map((item, i) =>{
			return <TouchableHighlight key={item} onPress={() => this.navigateNotes(item)}><Text>
			{item}
				</Text>
			</TouchableHighlight>
		});
		return (
			<View style={styles.container}>
				<View style ={styles.viewPlaceholder}>
					<TouchableHighlight onPress={this.navigateBack.bind(this)} style={styles.backButton}>
					<Image source={require('./Images/backButton.png')} style={styles.backImage}></Image>
					</TouchableHighlight>
				</View>
				<View style ={styles.viewBottom}>

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
		flex: 1,
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

module.exports = NursePage;
