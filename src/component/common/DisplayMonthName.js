import React from 'react'
import { View, Text } from 'react-native';
import moment from 'moment';

export const DisplayMonthName = () => {
	return (
		<View
			style={{
				backgroundColor: '#F1F0EE',
				height: 25,
				paddingLeft: 8,
				paddingTop: 3
			}}
		>
			<Text style={{ color: '#252525' }}> {moment().format('MMMM YYYY')}</Text>
		</View>
	);
};
