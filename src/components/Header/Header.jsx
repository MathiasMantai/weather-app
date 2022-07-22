import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="bg-blue-400 grid  place-content-center  text-white p-1">
                <h1 className="text-xl text-center border border-white rounded-lg w-fit p-1">
                    Wetter
                </h1>
            </div>
        )
    }
}