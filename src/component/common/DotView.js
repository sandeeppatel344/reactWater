import React from 'react';
import { styles } from '../../stylesheet/style';
import { View } from 'react-native';
//Use in current Monthly Charges For selected Day and Present Day and Limit Exceed
export const DotView = (props) => {
	const { style } = props;
	return <View style={{ ...styles.dotStyle, ...style }} />;
};
