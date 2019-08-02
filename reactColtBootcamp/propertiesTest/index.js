class App extends React.Component {
	render() {
		return (
			<div>
				<Hello 
				to = "Aegon" 
				from = "Tyrion"
				bangs = { 4 }
				img = "https://media2.giphy.com/media/2wYYlHuEw1UcsJYgAA/giphy.gif?cid=790b76115d01397e4e5867586b390952&rid=giphy.gif"
				/>
				<Hello to = "Ringo" />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
