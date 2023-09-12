import React, {Component} from 'react';

class Compo extends React.Component{
    constructor(props){
        super(props);
        this.state = { count : 0 };
        this.random = Math.round(Math.random()*45+1);
        console.log('1. constructor Call');
    }
    render(){
        console.log('3. render Call');
        return(
            <div>
                <p>{this.state.count} 번 클릭했습니다. </p>
                <button onClick={() => this.setState({count : this.state.count +1})}>
                    증가!
                </button>
                <button onClick={() => this.setState({count : this.state.count -1})}>
                    감소!
                </button>

                <h2>1~45 랜덤 로또번호 뽑기</h2>
                <p>로또번호는 : '{this.random}' 입니다</p>
              
            </div>
            
        )
    }
}

export default Compo;