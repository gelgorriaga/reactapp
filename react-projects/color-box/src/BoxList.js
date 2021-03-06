import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { create } from 'domain';
import { runInContext } from 'vm';
class BoxList extends Component {
    //  constructor(props){
    //      super(props);
    //      this.state = {boxes: [{ width: 10, height: 40, color: "green" }] };
    //  }

    state = { boxes: [{ width: 10, height: 40, color: "green" }] };

    create = (newBox) => {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    remove = (id) => {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box
                id={box.id}
                key={box.id}
                width={box.width}
                height={box.height}
                color={box.color} 
                removeBox = {() => this.remove(box.id)}
                />
        ));

        return (
            <div>
                <h1>Color box maker</h1>
                <NewBoxForm createBox={this.create} />
                {boxes}



            </div>
        )
    }
}

export default BoxList;
