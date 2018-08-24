import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { getStorage } from '../utility';
import SplashScreen from 'react-native-smart-splash-screen';

class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.rootRouteHandler();
		SplashScreen.close({
			animationType: SplashScreen.animationType.fade,
			duration: 850,
			delay: 500
		});
	}
	// Fetch the token from storage then navigate to our appropriate place
	rootRouteHandler = async () => {
		const userToken = await getStorage('currentUser');

		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		setTimeout(() => {
			this.props.navigation.navigate(userToken ? 'App' : 'Auth');
		}, 2000);
	};

	// Render any loading content that you like here
	render() {
		return (
			<View>
				<Image source={require('../../assets/water_1.gif')} style={{ height: '100%', width: '100%' }} />
			</View>
		);
	}
}

export default AuthLoadingScreen;
