import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="bg-blue-400 grid grid-cols-1 place-content-center sm:grid-cols-4 items-center text-white">
                <h1 className="text-lg">
                    Wetter
                </h1>
                <ul className="flex flex-row">
                    <li>test</li>
                    <li>test2</li>
                </ul>
            </div>
        )
    }
}