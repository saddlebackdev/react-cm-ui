'use strict';

import 'components/UI/Elements/Loader.scss';

import ClassNames from 'classnames';
import React from 'react';

export default class Loader extends React.Component {

    render() {
        const { className, fluid, style } = this.props;

        const containerClasses = ClassNames('ui', 'loader', className, {
            'loader-fluid': fluid
        });

        return (
            <div className={containerClasses} style={style}>
                <svg viewBox="0 0 66 66" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="88.1877023%" x2="50%" y2="0.5939019%" id="linearGradient-1">
                            <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"></stop>
                            <stop stopColor="#00AEEF" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                        <g id="Artboard">
                            <g id="Group" transform="translate(3.000000, 3.000000)">
                                <path d="M30,60 C46.5685425,60 60,46.5685425 60,30 C60,13.4314575 46.5685425,0 30,0 C13.4314575,0 0,13.4314575 0,30 C0,46.5685425 13.4314575,60 30,60 Z" id="Oval-23" opacity="0.0447761194"></path>
                                <path d="M11,53.3760857 C16.1443852,57.5197322 22.6849569,60 29.8048261,60 C46.3733686,60 59.8048261,46.5685425 59.8048261,30 C59.8048261,13.4314575 46.3733686,0 29.8048261,0" id="Oval-24" stroke="url(#linearGradient-1)" strokeWidth="5" strokeLinecap="round"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }

}

Loader.propTypes = {
    className: React.PropTypes.string,
    fluid: React.PropTypes.bool,
    style: React.PropTypes.object
};
