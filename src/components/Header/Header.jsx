import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="bg-blue-400 grid text-white p-1 h-[20%]">
                <h1 className="text-xl rounded-lg w-fit p-1 ml-4 font-bold">
                    Wetter
                </h1>
            </div>
        )
    }
}