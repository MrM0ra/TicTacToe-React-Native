import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import react from 'react';

export default function App() {
 
	const [notification, setnotification] = react.useState("Player X to start")

	const [refresh, setRefresh] = react.useState(false)

	const [currentPlayer, setCurrentPlayer] = react.useState("X")

	const [board, setboard] = react.useState(
		[
			" "," "," ",
			" "," "," ",
			" "," "," "
		]
	)

	const pressField = (index) => {
		let newBoard = board;
		newBoard[index] = currentPlayer
		setboard(newBoard)
		setRefresh(!refresh)
		currentPlayer==="X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.txtHeader}>TicTacToe</Text>
			<Text>{notification}</Text>
			<FlatList 
				style={styles.list} 
				data={board} 
				numColumns={3} 
				refreshing={true} 
				extraData={refresh}
				renderItem= {
					( {item, index} ) => 
						<TouchableOpacity style={styles.square} onPress={() => pressField(index)}>
							<Text>{item}</Text>
						</TouchableOpacity>
				}
			>

			</FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
  txtHeader: {
	fontSize: 40,
	fontStyle: 'bold',
  },
  list: {
	width: 300,
	height: 400,
	display:'grid',
	placeItems:'center',
  },
  centeredInside: {
	display:'flex',
	justifyContent:'center'
  },
  square:{
	width:30,
	height:60,
	backgroundColor: 'gray',
	margin: 10,
	display:'flex',
	justifyContent:'center',
	alignItems: 'center',
  },
});
