// 3. 페이지 만들어서 넘기면 사각형 상자 나오게끔
// 색깔 랜덤 : '#' + Math.floor(Math.random() * 16777215).toString(16);

// const data = [
//     {id:1, text:'Hu'},
//     {id:2, text:'He'},
//     {id:3, text:'Ho'},
// ]

// <Page data={data} itemsPerPage={page}/>
// function Page({data, itemsPerPage}) {
// }

import React, {useState, useEffect} from "react";

function Page({data, itemPerPage}){
    const [currentPage, setCurrentPage] =useState(1);
    const [totalPage, setTotalPage] = useState(data.length);
    const [color, setColor] = useState('');

    useEffect(() => {
        if(data.length > 0){
            setTotalPage(data.length);
        }
        setColor(randomColor());

    }, [data.length, currentPage])

    function randomColor(){
        return  '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    const handlePrevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1 );
        }
    };

    const handleNextPage = () => {
        if(currentPage < totalPage){
            setCurrentPage(currentPage + 1);
        }
    };

    return(
        <>
            <div style={{backgroundColor : color, width : '200px', height:'200px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                {data[currentPage -1].text}
            </div>

            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>이전</button>
                <span>{`페이지 ${currentPage} / ${totalPage}`}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPage}>다음</button>
            </div>
        </>
    )
}

export default Page;