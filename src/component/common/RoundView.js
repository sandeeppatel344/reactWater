import React, { Component } from 'react';
import { styles } from '../../stylesheet/style';
import { Text, View, TouchableOpacity } from 'react-native';
import { Row } from './Row';
import { Rupees } from '../utility';
import { withNavigation } from 'react-navigation';

class RoundView extends Component {
	render() {
		const { outerRoundStyle, innerRoundStyle, message, charges, handler } = this.props;
		return (
			<View style={{ ...styles.outerCircle, ...outerRoundStyle }}>
				<View style={{ ...styles.innerCircle, ...innerRoundStyle }}>
					<TouchableOpacity onPress={handler}>
						<Row>
							<Text style={styles.rupessSymbol}>{Rupees}</Text>
							<Text style={styles.amountStyle}>{charges}</Text>
						</Row>
						<Row
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								width: 115
							}}
						>
							<Text
								style={{
									...styles.monthlyChargesText,
									textAlign: 'center'
								}}
							>
								{message}
							</Text>
						</Row>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
export default withNavigation(RoundView);
