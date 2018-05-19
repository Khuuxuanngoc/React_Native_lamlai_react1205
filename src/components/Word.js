import React, { Component } from 'react';

class Word extends Component {
    
    getButton() {
        const { en, vn, isMemorized, id } = this.props.wordInfo;
        if (this.props.wordInfo.isMemorized) {
            return <button className="btn btn-danger">Forgot</button>;
        }
        return <button className="btn btn-success">Memorized</button>;
    }

    getid(){
        return <span class="label label-warning">My ID: {this.props.wordInfo.id}</span>;
    }

    createButton(){
        return <button onclick="createButton()">Click me</button>;
    }

    render() {
        const { en, vn, isMemorized, id } = this.props.wordInfo;
        const color = isMemorized ? 'green' : 'red';
        return (
            <div style={{ backgroundColor: '#D5D6D4', padding: '10px', margin: '10px', width: '200px', borderRadius: '5px' }}>
                <h3 style={{ color, margin: '10px' }}>{en}</h3>
                <p>{vn} {id}</p>
                <p>{id}</p>
                <span>{ this.getButton() }</span>
                <span>{this.getid()}</span>
                <p>{ this.createButton() }</p>
            </div>
        );
    }
}

export default Word;