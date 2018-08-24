import { StyleSheet } from 'react-native';
const BASE_SIZE = 160  
export const dashboardStyles = StyleSheet.create({
	dashboardFooterContainer: {
		flex: 1,
		flexDirection: 'row',
		marginTop: '15%'
	},
	monthlyTargetContainer: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		marginLeft: '10%'
	},
	monthlyLimitRuppess: {
		marginLeft: '18%',
		color: '#ffffff',
		fontSize: 27,fontWeight:'bold'
	},
	monthlyTargetText: {
		marginLeft: '2%',
		color: '#ffffff',
		fontSize: 13
	},
	estimationDateContainer: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		marginLeft: '10%'
	},
	estimationDate: {
		color: '#ffffff',
		fontSize: 27,
		fontWeight:'bold'
	},
	estimationDateText: {
		marginLeft: '2%',
		color: '#ffffff',
		fontSize: 13
	},
	setTargetModal: {
		borderRadius: 20,
		backgroundColor: 'transparent',
		justifyContent: 'flex-end',
		marginBottom: 20
	},
	setTargetContainer: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
	setTargetButton: {
		flexDirection: 'row',
		marginTop: 10,
		width: '100%',
		justifyContent: 'flex-end'
	},
	dashboardComponentBody: {
		alignItems: 'center',
		justifyContent: 'center'
	},
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
	outerCircle: {
		marginTop: 25,
		width: BASE_SIZE *0.2,
		height: BASE_SIZE *0.2,
		borderRadius: BASE_SIZE * 0.2 / 2,
		borderColor: '#eba738',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 3
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
	errorMessageDisplay:{
		position:'absolute',marginTop:140,marginLeft:35,color:'white',fontSize:15
	},

	exceedMessage:{
height: 16, width: 16 
	},
	exceedMessageContainer:{
		justifyContent: "flex-start", marginTop: 8
	}
});
