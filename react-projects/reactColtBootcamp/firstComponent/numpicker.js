function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats' : 'Try again!!!'}</p>
                <p>{num === 7 && <img src="https://media3.giphy.com/media/Q6gPyUYrCk76g/giphy.gif?cid=790b76115d012a07646a716e55ebfcd7&rid=giphy.gif" width="200" />}</p>
            </div>
        )
    }
}
