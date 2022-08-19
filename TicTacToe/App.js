import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View, Image} from 'react-native';
import react from 'react';

export default function App() {
 
	const [currentPlayer, setCurrentPlayer] = react.useState("X")

	const [notification, setnotification] = react.useState("Player "+currentPlayer+" to start")

	const [refresh, setRefresh] = react.useState(false)

	const [currentTurn, setCurrentTurn] = react.useState(0)

	const [board, setBoard] = react.useState(
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
			setBoard(newBoard)
			setRefresh(!refresh)
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
				showAlert(1, currentPlayer)
			}else if(currentTurn>=8){
				showAlert(2)
			}
		}
		
		currentPlayer==="X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
	}

	const showAlert = (num) => {
		if(num!=1){
			alert("TIED")
		}else{
			alert("PLAYER "+currentPlayer+" WON")
		}
		setCurrentTurn(0)
		setBoard(
			[
				" "," "," ",
				" "," "," ",
				" "," "," "
			]
		)
	}

	return (
		<View style={styles.container}>

			<Image 
				source={require('./assets/bg.jpg')}
				style={styles.backgroundImage}
			/>

			<View style={styles.header}>
				<StatusBar style="auto" />
				<Text style={styles.txtHeader}>TicTacToe</Text>
				<Text>{notification}</Text>
			</View>
			<View style={styles.flatListContainer}>
				<Image 
					source={require('./assets/frame.png')}
					style={styles.image}
				/>
				<FlatList 
					style={styles.list} 
					data={board} 
					numColumns={3} 
					refreshing={true} 
					extraData={refresh}
					renderItem= {
						( {item, index} ) => 
							<TouchableOpacity style={styles.square} onPress={() => pressField(index)}>
								<Text style={styles.txtXO}>{item}</Text>
							</TouchableOpacity>
					}
				>
				</FlatList>
			</View>
			<Text style={styles.topMaring10}>Turno: {currentTurn}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  header:{
	top:-100,
	justifyContent:'center',
	alignItems:'center'
  },
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
  flatListContainer: {
	justifyContent:'center',
	alignItems:'center',
	height:300,
	width:'100%',
  },
  txtHeader: {
	fontSize: 40,
	fontStyle: 'bold',
  },
  topMaring10:{
	marginTop:20
  },
  txtXO:{
	fontSize:60,
  },
  backgroundImage:{
	position:'absolute',
	zIndex: -1,
	width: '100%',
	height: '100%',
  },
  image:{
	width: 300,
	height: 300,
	position: 'absolute',
  },
  list: {
	width: 300,
	height: 300,
	display:'grid',
	placeItems:'center',
  },
  centeredInside: {
	display:'flex',
	justifyContent:'center'
  },
  square:{
	width:100,
	height:100,
	justifyContent:'center',
	alignItems: 'center',
  },
});
