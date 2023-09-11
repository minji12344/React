import React, {Component} from "react";

class DataList extends Component {
    constructor(props) {
        super(props)
        const [iemt, setItems] = useState(['Apple', 'Banana', 'Kiwi']);
    }

    addItem(){
        const addItem = () => {
            const newItem = prompt('Enter a new item: ');
            if(newItem) {
                setItems([items, newItem]);
            }
        };
    }
    removeItem(){
        const removeItem = (index) => {
            const updateItem = items.filter((_, i) => i !== index);
            setItems(updateItem);
        };
    }
    render(){
        return(
            <div>
                <h2>아이템</h2>
                <p>배열에 있는 데이터로 리스트 아이템을 생성</p>
                <form value = {this.removeItem}></form>
            </div>
        )
    }
}

export default DataList;