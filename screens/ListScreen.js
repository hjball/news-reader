import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// {import News from '../data/news.json';}

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

import axios from '../data/axios';

class ListScreen extends Component {
	static navigationOptions = {
		title: 'BBC News',
    };	

    constructor(props) {
    	super(props);
    	this.state = {
    		articles: [],
    		isLoading: false,
    	}

    	this.onPressDetails = this.onPressDetails.bind(this);
    	this.renderItem = this.renderItem.bind(this);

    }

    componentDidMount() {
    	axios.get("https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=24fe70cd36f940a6bdb3daf014dfd65c").then(({ data }) => {
    		this.setState({articles: data.articles});
    	})
    };

    onPressDetails( item ) {
    	this.props.navigation.navigate('Details', { item: item });
    }	

    keyExtractor(item, index) {
    	return `${index}`; 
  	}

  	renderSeparator() {
    	const style = { height: 1, backgroundColor: '#ddd', marginLeft: 10 };
    	return <View style={style} />;
  	}

    renderItem({item}) {
    	return(
			<TouchableOpacity
				style={ styles.articles }
				onPress={ () => this.onPressDetails( item )}
				underlayColor='#e4e4e4'>
        <View style={{ flex: 1 }}>
  				<Text numberOfLines={1}>{item.title}</Text>
  				<Text>{moment(item.publishedAt).fromNow()}</Text>
        </View>
        { isIOS ? 
        <View style={ styles.chevron }>
          <Ionicons name="ios-arrow-forward" size={20} color='grey' />
        </View>
        : null
        }
			</TouchableOpacity>
		)
  	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.state.isLoading === true ? 
					<View style={styles.container}>
						<ActivityIndicator size="large" color="#d35400" />
					</View>
				: 
				<FlatList 
					data={ this.state.articles } 
					renderItem={ this.renderItem } 
					keyExtractor={this.keyExtractor}
					ItemSeparatorComponent={this.renderSeparator}/>
				}
			</View>
		)
	}	
};

const styles = StyleSheet.create({
  	articles: {
  		height: 50, 
  		fontSize: 18, 
  		padding: 10, 
  		justifyContent: 'center',
  		backgroundColor: '#fff',
      flexDirection: 'row',
  	},
  	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
  	},
    chevron: {
      justifyContent: 'center',
      marginHorizontal: 5
    },
});

export default ListScreen;