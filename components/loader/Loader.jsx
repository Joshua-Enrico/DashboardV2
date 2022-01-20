import React from 'react';
import { Cont  } from "./Style"
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const Loader = () => {
    return (
        <Cont>
        <div className="svg-loader">
            <svg className="svg-container" height={30} width={30} viewBox="0 0 100 100">
                <circle className="loader-svg bg" cx={50} cy={50} r={45} />
                <circle className="loader-svg animate" cx={50} cy={50} r={45} />
            </svg>
        </div>
        </Cont>
    )

};

export default Loader;
