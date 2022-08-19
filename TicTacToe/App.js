import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import react from 'react';

export default function App() {
 
	const [currentPlayer, setCurrentPlayer] = react.useState("X")

	const [notification, setnotification] = react.useState("Player "+currentPlayer+" to start")

	const [refresh, setRefresh] = react.useState(false)

	const [currentTurn, setCurrentTurn] = react.useState(0)

	const [board, setboard] = react.useState(
		[
			" "," "," ",
			" "," "," ",
			" "," "," "
		]
	)

	const pressField = (index) => {
		if(board[index] !="X" && board[index] !="O"){
			let newBoard = board;
			newBoard[index] = currentPlayer
			setboard(newBoard)
			setRefresh(!refresh)
			currentPlayer==="X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
			setCurrentTurn(currentTurn+1)
			checkIfWon()
		}
	}

	const checkIfWon = () => {
		if(currentTurn>=4){
			if(board[0] == board[1] && board[1]==board[2] && board[0]!=" " 
				||
				board[3] == board[4] && board[4]==board[5] && board[3]!=" " 
				||
				board[6] == board[7] && board[7]==board[8] && board[6]!=" " 
				||
				board[0] == board[4] && board[4]==board[8] && board[0]!=" " 
				||
				board[2] == board[4] && board[4]==board[6] && board[2]!=" " 
				||
				board[0] == board[3] && board[3]==board[6] && board[0]!=" " 
				||
				board[1] == board[4] && board[4]==board[7] && board[1]!=" " 
				||
				board[2] == board[5] && board[5]==board[8] && board[2]!=" " ){
				alert("PLAYER WON")
			}else if(currentTurn>=8){
				alert("TIED")
			}
		}
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
			<Text>Turno: {currentTurn}</Text>
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
