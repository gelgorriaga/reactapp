function getNum() {
   return Math.floor(Math.random() * 5);
}
class Slot extends React.Component {
	render() {
        const fr = this.props.fruits;
        let s1 = fr[getNum()];
        let s2 = fr[getNum()];
        let s3 = fr[getNum()];
        const winner = ((s1===s2) && (s1===s3));
		return (
		<div>
			<h1>Slot Machines</h1>
            <div>
                {s1}{s2}{s3} 
            </div>
            <h2>{winner ? "You win" : null}</h2>
		</div>
		)
	}
}