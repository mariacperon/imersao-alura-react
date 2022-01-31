function GlobalStyle() {
    return (
        <style global jsx>{`
            *{
                margig: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }
            body{
                font-family: arial;
            }
            /*App fit height*/
            html, body, #__next{
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next{
                flex: 1;
            }
            #__next > *{
                flex: 1;
            }
            /*./App fit height */
        `}</style>
    );
}

export default function myApp({Component, pageProps}){
    console.log('Roda em todas as páginas');
    return  (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}