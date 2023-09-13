// 1. 장바구니
// 입력 창에 장바구니에 넣을 것을 적어서 장바구니에 추가 할 수 있다.
// 완료된 항목을 체크할 수 있는 체크박스

//2. 타이머
// 시작, 일시정지, 중지 만들어서 초 세주기
// interval을 사용해도 되고, perf_hooks 사용해도 된다.

// 3. 페이지 만들어서 넘기면 사각형 상자 나오게
// 색깔 랜덤 : '#' + Math.

import React, {useState} from "react";

function Cart() {
    const [cart, setCart] = useState([]);
    const [input, inputValue] = useState('');

    const addCart = () => {
         setCart([...cart,{text : input, completed : false}]);
         inputValue('');
    };

    const checkCart = (index) => {
        const checkList = [...cart];
        checkList[index].completed = !checkList[index].completed;
        setCart(checkList);
    };

    const deleteCart = (index) => {
        const newCart = cart.filter((cart) => !cart.completed);
        setCart(newCart);
    };

    return (
        <>
            <input type="text" value={input} onChange={(e) => inputValue(e.target.value)}/>
            <button onClick={addCart}> 추가 </button>
            <ul style={{listStyle: 'none'}}>
                {cart.map((item, index)=>(
                    <li key = {index}>
                        <label style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                            <input type="checkbox" checked={item.completed} onChange={() => checkCart(index)}/>
                            {item.text}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={deleteCart}>삭제</button>
        </>
    )
};

export default Cart;