import React from 'react';
import './Loading.css';

const Loading = (props) => {
    const loading = props.isLoading;

    return (
        <div className={`layers layer2 ${!loading && "animate2"}`}>
            <div className={`layers layer1 ${!loading && "animate1"}`}>
                <div className={`spinner-wrapper ${!loading && "hidden"}`}>
                    <div className="spinner">
                        <div className="sk-folding-cube">
                            <div className="sk-cube1 sk-cube"></div>
                            <div className="sk-cube2 sk-cube"></div>
                            <div className="sk-cube4 sk-cube"></div>
                            <div className="sk-cube3 sk-cube"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;