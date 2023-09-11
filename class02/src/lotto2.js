import React, {Component} from "react";

class Lotto2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value : ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleClick() {
        for(var i = 0; i<6; i++){
            this.setState({count: Math.floor(Math.random()*45+1)});
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div>
            <h2>랜덤 자동 뽑기</h2>
            <p>로또 번호는 {this.handleClick()} 입니다.</p>
            
            <h2>랜덤 수동 뽑기</h2>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Lotto2;