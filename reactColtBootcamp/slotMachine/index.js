const theFruits = ['🍎','🍏', '🍍','🍇','🥥'];
class App extends React.Component {
	render() {
		return (<div>
			<div className="machine">
				<Slot 
				fruits = {['🍎','🍏', '🍍','🍇','🥥']}
				/>
				</div>
                <RenderButton />
				</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
