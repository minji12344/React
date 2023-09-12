import React, {Component} from "react";

class Lotto2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value : Math.floor(Math.random()*45+1)};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleClick() {
        this.setState(this.state.value); 
    }

    handleChange = (event) => {
        newlotto(event.target.value);
    }
    handleSubmit = () => {
        const newItem = {text: input};
         setItem([newItem]);
         newlotto("");
    }

    
    render() {
        return (
            <div>
            <h4>랜덤 자동 뽑기</h4>
            <p>로또 번호는 {this.state.value} 입니다.</p>
            
            <h4>랜덤 수동 뽑기</h4>
            <form onSubmit={this.handleSubmit}>
                <label>로또 번호 :
                    <input type="text" value={input} onChange={this.handleClick}/>
                </label>
                <input type = "submit" value="submit" />
            </form>
           </div>
        );
    }
}

export default Lotto2;