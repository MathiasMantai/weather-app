import React from 'react';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="bg-gray-700 text-white grid place-items-center p-5">
            <div >
                Copyright&copy; 2022 Mathias Mantai
            </div>
            <div>
                Github Twitter Youtube
            </div>
            </div>
        )
    }

}