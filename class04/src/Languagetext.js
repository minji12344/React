import React, {createContext, useContext, useState} from 'react';

//<select> onChange={}
// <option value="en">English</option>
// <option value="ko">한국어</option>
//</select>

const LanguageContext = createContext();

function LanguageProvider({children}) {
    const [lang, setLang] = useState('en');

    const switchLang = () => {
        setLang(prevLang => prevLang === 'en' ? 'ko' : 'en');
        //이전 상태를 체크
        //만약 이전 언어가 'en'라면 'ko'로 바꿔줘
    };

    <select> onChange={lang}
    <option value="en">English</option>
    <option value="ko">한국어</option>
    </select>

    return (
        <LanguageContext.Provider value={{lang}}>
            {children}
        </LanguageContext.Provider>
    );
}

function SayHello() {
    const {lang} = useContext(LanguageContext);

    return <p>{lang === 'en' ? 'Hello' : '안녕하세요'}</p>
}

function Language() {
    return (
        <LanguageProvider>
            <SayHello/>
        </LanguageProvider>
    );
}

export default Language;