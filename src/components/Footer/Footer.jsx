import React from 'react';
import Github from '../icons/Github';
import Twitter from '../icons/Twitter';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="bg-gray-700 text-white grid place-items-center p-5">
            <div >
                Copyright&copy; 2022 Mathias Mantai
            </div>
            <div className="flex">
                <a href="https://github.com/MathiasMantai"><Github /></a> <Twitter />
            </div>
            </div>
        )
    }

}