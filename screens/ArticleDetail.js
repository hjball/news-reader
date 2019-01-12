import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { WebBrowser } from 'expo';
import moment from 'moment';

class ArticleDetail extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('item').title,
    });	

	render() {
		const article = this.props.navigation.getParam('item');
		return (
			<React.Fragment>
				<View 
					style={{ alignItems: 'center', paddingHorizontal: 20 }}>
					<Image 
						style={{ width: 400, height: 225 }}
						source={{ uri: article.urlToImage }}
					/>
				</View>
				<View>
					<Text style={ styles.headline }>{ article.title }</Text>
					<Text style={ styles.time }>{moment(article.publishedAt).fromNow()}</Text>
					<View style={ styles.divider }/>
					<Text style={ styles.text }>{ article.description }</Text>
					<TouchableOpacity 
						onPress={ () => WebBrowser.openBrowserAsync( article.url )}>
    					<Text style={ styles.link }>Read More</Text>
    				</TouchableOpacity>
				</View>
			</React.Fragment>
		)
	}	
};



const styles = StyleSheet.create({
  	headline: {
  		fontSize: 20,
  		fontWeight: 'bold',
  		margin: 15,
  	},
  	time: {
  		marginHorizontal: 15,
  		marginBottom: 5,
  	},
  	divider: {
  		height: 1, 
  		backgroundColor: '#ddd', 
  		marginHorizontal: 15,
  	},
  	text: {
	    fontSize: 14,
	    margin: 15,
  	},
  	link: {
  		marginHorizontal: 15,
  		color: '#d35400',
  	}
});

export default ArticleDetail;