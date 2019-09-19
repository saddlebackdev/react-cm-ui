'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TimelineMax } from 'gsap';

const BLOCK_CLASS = 'activity_indicator';

const BAR_CLASS = `${BLOCK_CLASS}--bar`;
const BAR_HEIGHT = 68;
const CIRCLE_CLASS = `${BLOCK_CLASS}--circle`;
const DURATION = .33;
const CIRCLE_SIZE = 16;
const CIRCLE_UP_Y_POS = -(BAR_HEIGHT - CIRCLE_SIZE);

class ActivityIndicator extends React.PureComponent {
    constructor() {
        super();

        const timelineMaxOptions = {
            repeat: -1,
            repeatDelay: 0,
        };

        this._barTween = new TimelineMax(timelineMaxOptions);
        this._circleTween = new TimelineMax(timelineMaxOptions);
    }

    componentDidMount() {
        const barToOption = {
            ease: Power1.easeOut,
            height: BAR_HEIGHT,
            opacity: 1,
        };
        const barToBackOption = {
            ease: Back.easeOut.config(1),
            height: CIRCLE_SIZE,
            opacity: 0,
        };
        const circleToOption = {
            ease: Power1.easeOut,
            y: CIRCLE_UP_Y_POS,
        };
        const circleToBackOption = {
            ease: Back.easeOut.config(1),
            y: 0,
        };

        this._barTween.to(
            `.${BAR_CLASS}-left`,
            DURATION,
            barToOption
        ).to(
            `.${BAR_CLASS}-left`,
            DURATION,
            barToBackOption
        ).to(
            `.${BAR_CLASS}-middle`,
            DURATION,
            barToOption,
        ).to(
            `.${BAR_CLASS}-middle`,
            DURATION,
            barToBackOption,
        ).to(
            `.${BAR_CLASS}-right`,
            DURATION,
            barToOption,
        ).to(
            `.${BAR_CLASS}-right`,
            DURATION,
            barToBackOption,
        );

        this._circleTween.to(
            `.${CIRCLE_CLASS}-left`,
            DURATION,
            circleToOption,
        ).to(
            `.${CIRCLE_CLASS}-left`,
            DURATION,
            circleToBackOption,
        ).to(
            `.${CIRCLE_CLASS}-middle`,
            DURATION,
            circleToOption,
        ).to(
            `.${CIRCLE_CLASS}-middle`,
            DURATION,
            circleToBackOption,
        ).to(
            `.${CIRCLE_CLASS}-right`,
            DURATION,
            circleToOption,
        ).to(
            `.${CIRCLE_CLASS}-right`,
            DURATION,
            circleToBackOption,
        );
    }

    render() {
        const {
            className,
            id,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', BLOCK_CLASS, className);

        return (
            <div
                className={containerClasses}
                id={id}
                style={style}
            >
                <div
                    className={`${BLOCK_CLASS}--left`}
                >
                    <div className={`${CIRCLE_CLASS} ${CIRCLE_CLASS}-left`} />

                    <div className={`${BAR_CLASS} ${BAR_CLASS}-left`} />
                </div>

                <div
                    className={`${BLOCK_CLASS}--middle`}
                >
                    <div className={`${CIRCLE_CLASS} ${CIRCLE_CLASS}-middle`} />

                    <div className={`${BAR_CLASS} ${BAR_CLASS}-middle`} />
                </div>

                <div
                    className={`${BLOCK_CLASS}--right`}
                >
                    <div className={`${CIRCLE_CLASS} ${CIRCLE_CLASS}-right`} />

                    <div className={`${BAR_CLASS} ${BAR_CLASS}-right`} />
                </div>
            </div>
        );
    }
}

ActivityIndicator.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
};

export default ActivityIndicator;
