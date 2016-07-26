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
			nurseData : []
		};
		this.fetchNurses = this.fetchNurses.bind(this);
	}

	componentDidMount(){
		console.log('SUPPPP')
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
				this.setState({nurseData:nurseData[0].beds})
		});
	}

	navigateBack(){
		this.props.navigator.pop();
	}

	render(){
		var bedData = this.state.nurseData.map((item, i) =>{
			return <Text key={i}>{item}</Text>
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
						Welcome {this.props.nurseName}!
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
