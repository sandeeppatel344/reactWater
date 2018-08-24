import React, { Component } from 'react';
import ThreeBoxLayout from '../../layout/ThreeBoxLayout';
import LoginForm from './LoginForm';
//import LoginReduxForm from "./LoginReduxForm";
import { logoHeader } from '../../global';
import NewRegistration from './NewRegistration';
//import { newRegistration } from "../Login/newRegistration";
import { ScrollView, Dimensions, StyleSheet, View } from 'react-native';
import { loginComponentStyles } from './functions';

class LoginScreen extends Component {
	render() {
		//Specify Modules Below To Be Attached
		const loginForm = <LoginForm {...this.props} />;
		const newRegistration = <NewRegistration {...this.props} />;
		//Use ThreeBoxLayout
		return (
			<ScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={{flexGrow:1}}>
				<ThreeBoxLayout
					style={loginComponentStyles}
					componentone={logoHeader}
					componenttwo={loginForm}
					componentthree={newRegistration}
				/>
			</ScrollView>
		);
	}
}

export default LoginScreen;
