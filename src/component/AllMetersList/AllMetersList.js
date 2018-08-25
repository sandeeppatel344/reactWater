import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text } from 'react-native';
const SECTIONS = [
	{
		title: 'First',
		content: 'Lorem ipsum...'
	},
	{
		title: 'Second',
		content: 'Lorem ipsum...'
	}
];
export default class AllMetersListComponent extends Component {
	componentWillMount() {}
	_renderSectionTitle(section) {
		return (
			<View>
				<Text>{section.content}</Text>
			</View>
		);
	}

	_renderHeader(section) {
		return (
			<View>
				<Text>{section.title}</Text>
			</View>
		);
	}

	_renderContent(section) {
		return (
			<View>
				<Text>{section.content}</Text>
			</View>
		);
	}
	render() {
		return (
			<Accordion
				sections={SECTIONS}
				renderSectionTitle={this._renderSectionTitle}
				renderHeader={this._renderHeader}
				renderContent={this._renderContent}
			/>
		);
	}
}
