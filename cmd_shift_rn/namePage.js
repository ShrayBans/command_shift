import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

class NamePage extends Component {
		constructor(props){
		super(props);
		this.state = {
			text: ''
		};
	}

	onButtonPress(){
		this.props.navigator.push({
			id: 'NursePage',
			passProps: {
				nurseName: this.state.text
			}
		});
	}

	render() {
		return (
			<ResponsiveImage source={require('./Images/doctor_bg.jpg')} style={styles.container} initWidth='420'>
				<View style={styles.placeholder}>
					<Text style={styles.logo}>cmd_shift</Text>
				</View>
				<Text style={styles.welcome}>
						Nurse of Ivy Creek Medical Center! {'\n'} Please enter your Name! 
				</Text>
				<View style={styles.placeholder}></View>

				<TextInput 
					style={styles.textBox} 
					onChangeText= {(text) => this.setState({text})}
					value= {this.state.text}
				/>
				<View style={{flex: 1}}>
					<TouchableHighlight 
						onPress={this.onButtonPress.bind(this)}
						style={styles.submitButton}>
							<Text
								style={styles.buttonText}>Find Beds
							</Text>
					</TouchableHighlight>
				</View>
				<View style={{flex: 3}}>
				</View>
				<View style={styles.placeholder}></View>

			</ResponsiveImage>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		marginTop: 70,
		fontSize: 48,
		textShadowColor: '#28a4f4',
		textShadowOffset: {width: 3, height: 3},
		textShadowRadius: 2,
		fontFamily: 'Cochin'
	},
	welcome: {
		flex: 1,
		marginTop: 100,
		justifyContent: 'flex-end',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: '#00d6f7',
		fontWeight: '700',
		backgroundColor: 'rgba(0,0,0,0)',
		fontFamily: 'Helvetica'
	},
	submitButton: {
		flex: 1,
		justifyContent: 'flex-start',
		marginTop: 50,
		height: 70,
		width: 150,
		backgroundColor: '#6072f7',
		borderRadius: 15,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#2139ef'
	},
	buttonText: {
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#bac1ef',
		fontWeight: '700',
		fontFamily: 'Cochin',
		fontSize: 25
	},
	textBox: {
		backgroundColor: '#b7e3f4',
		height: 50,
		width: 414,
		borderRadius: 10,
		alignItems: 'center',
		textAlign: 'center'
	},
	placeholder: {
		flex: 1
	}
});

module.exports = NamePage;
