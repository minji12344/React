import React, {Component} from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value : ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.value){
            alert('환영합니다. "' +  this.state.value + '" 님');
        }
        else{
            alert('로그인 해주세요');
        }
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>ID:
                    <input type = "text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type = "submit" value="submit" />
            </form>
        );
    }
}

export default Login;