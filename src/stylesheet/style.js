import { StyleSheet, Dimensions } from 'react-native';
let { height, width } = Dimensions.get('window');
const BASE_SIZE = (Dimensions.get('window').width-50) * 0.5
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},

	containernew: {
		height: height,
		width: width,
		flexDirection: 'column'
	},

	rowLayoutStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingRight: 5,
		paddingLeft: 5,
		position: 'relative'
	},
	bodyLayoutStyle: {
		marginLeft: 5,
		marginRight: 5
	},

	customTextinput: {
		fontSize: 14,
		marginTop: 0,
		paddingVertical: 0,
		width: '100%',
		borderBottomColor: '#d1d1d1',
		borderBottomWidth: 1,

		backgroundColor: '#fff'
	},

	customTextLabel: {
		fontSize: 13,
		paddingTop: 2,
		color: '#959595'
	},

	footerLayoutStyle: {
		position: 'absolute',
		flex: 0.1,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'lightblue',
		flexDirection: 'row',
		height: 40,
		justifyContent: 'center'
	},

	commonButtonStyle: {
		width: '100%'
	},

	threeBoxLayoutStyle: {
		flex: 1,

		backgroundColor: 'white'
	},

	footerBackgroundImage: {
		flex: 1,
		resizeMode: 'cover'
	},
	linearGradientButton: {
		height: 40,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		// shadowColor: "#000",
		// shadowOffset: { width: 0, height: 2 },
		// shadowRadius: 2,
		// shadowOpacity: 0.2,
		//elevation: 2.5,
		marginTop: 15
	},

	textLabelStyle: {
		fontSize: 5,
		color: '#d1d1d1'
	},
	headerColor: {
		backgroundColor: '#0099ff'
	},
	headerTextColor: {
		color: 'white',
		textAlign: 'center',
		marginRight: 60,
		flex: 1
	},
	logoHeaderContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		marginTop: 20
	},
	logoHeaderImage: {
		alignSelf: 'center',
		height: 120,
		width: 120
	},
	AuthContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},

	// Flex to fill, position absolute,
	// Fixed left/top, and the width set to the window width
	AuthScreenoverlay: {
		flex: 1,
		position: 'absolute',
		left: 0,
		top: 0,
		opacity: 0.2,
		backgroundColor: 'black',
		width: '100%'
	},
	HamburgerMenuButton: {
		color: 'white',
		padding: 10,
		marginLeft: 10,
		fontSize: 20
	},

	//Footer Common Styles

	footerViewContainer: {
		flex: 1,
		height: 25 //80
	},
	footerImageStyle: {
		resizeMode: 'stretch',
		height: '100%'
	},
	footerImageBackground: {
		width: '100%',
		height: '90%',
		bottom: 0,
		position: 'absolute'
	},
	customAlert: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	customAlertModal: {
		borderRadius: 2,
		backgroundColor: 'transparent'
	},
	customAlertButton: {
		flexDirection: 'row',
		marginTop: 10,
		width: '100%',
		justifyContent: 'flex-end'
	},

	//MontlyCharges Circular Component

	monthlyChargesContainer: {		
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	monthlyChargesTopContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	outerCircle: {
		width: BASE_SIZE * 1.1,
		height: BASE_SIZE * 1.1,
		borderRadius: BASE_SIZE * 1.1 / 2,
		borderColor: '#eba738',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 3,
    marginLeft:2
	},
	innerCircle: {
		width: BASE_SIZE,
		height: BASE_SIZE,
		borderRadius: BASE_SIZE / 2,
		borderColor: '#eba738',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		backgroundColor: '#eba738'
	},
	
	rupessSymbol: {
		color: '#ffffff',
		fontSize: 45
	},
	monthlyChargesText: {
		color: '#ffffff',
		fontSize: 13,
		fontWeight: 'bold'
	},
	amountStyle: {
		color: 'white',
		fontSize: 45,
		fontWeight: 'bold'
	},

	//TimeStamp Component Styling
	dateTime: {
		fontSize: 15,
		color: '#0099ff',
		paddingTop: 10,
		fontWeight: 'bold'
	},
	timeIcon: {
		height: 18,
		width: 18,
		marginTop: 11,
		marginLeft: 5
	},

	//Set Target Display Compennt

	columnDivider: { width: '35%', alignItems: 'center' },

	parentRow: {
		height: 25,
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#f1f0ee'
	},
	sectionTextHolder: {
		flex: 1,
		paddingLeft: 10,
		justifyContent: 'center'
	},
	sectionHeaderStyle: { height: 30, backgroundColor: '#FF9C1B' },

	//Activity indicator

	commonActivityStyle: {
		flex: 1,
		/*     position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0, */
		alignItems: 'center',
		justifyContent: 'center'
	},
	dotStyle:{
		height: 4,
			width: 4,
			borderRadius: 10,
			backgroundColor: '#FA5555'
	}


});
