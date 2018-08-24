import { StyleSheet } from 'react-native';

export const currentMonthChargesStyles = StyleSheet.create({
	readingContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#EBA738',
		alignItems: 'center',
		justifyContent: 'center'
	},
	readingStyle: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	readingLable: { fontSize: 30, color: '#ffffff', fontWeight: 'bold' },
	readingLableText: { color: '#ffffff' },
	sequantialRow: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	dotLegendStyle: {
		marginTop: 8,
		marginRight: 5
	},
	displayMUnit: {
		fontSize: 30,
		lineHeight: 40,
		color: '#ffffff',
		fontWeight: 'bold'
	},
	displayMUnitVal: {
		fontSize: 11,
		lineHeight: 11,
		color: '#ffffff',
		fontWeight: 'bold'
	},
	sequantialTextColor: { color: '#828281' },
	grayStrip: { backgroundColor: '#f1efee' },
	whiteStrip: { backgroundColor: '#ffffff' },
	sequantialHeading: {
		flexDirection: 'row',
		fontWeight: 'bold',
		backgroundColor: '#f1efee'
	},
	currentMonthlyChargesLegend: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#FAFAFA',
		marginTop: 35,
		width: '90%',
		height: 30,
		marginLeft: 20,
		borderRadius: 5
	},
	legendContainer: {
		flexDirection: 'row'
	},
  currentMonthDay:
  {
    marginLeft: 10,
												justifyContent: 'center',
												alignItems: 'center',
												borderRadius: 11,
												height: 22,
												width: 22,
												fontSize: 15,
												paddingBottom: 3
  },
  currentMonthDayContainer:{
    justifyContent: 'center', alignItems: 'center'
  }
});
