'use strict';

import { backgroundColorHighlight, backgroundColorStatic } from '../shared/styles/colors';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TimelineMax } from 'gsap';

const BLOCK_CLASS = 'activity_indicator';

const BAR_CLASS = `${BLOCK_CLASS}--bar`;
const BAR_HEIGHT = 68;
const CIRCLE_CLASS = `${BLOCK_CLASS}--circle`;
const DURATION_DOWN = .55;
const DURATION_UP = .3;
const CIRCLE_SIZE = 16;
const CIRCLE_UP_Y_POS = -(BAR_HEIGHT - CIRCLE_SIZE);

class ActivityIndicator extends React.PureComponent {
    constructor() {
        super();

        this._barTweenLeft = new TimelineMax();
        this._barTweenMiddle = new TimelineMax();
        this._barTweenRight = new TimelineMax();
        this._circleTweenLeft = new TimelineMax();
        this._circleTweenMiddle = new TimelineMax();
        this._circleTweenRight = new TimelineMax();
    }

    componentDidMount() {
        // const principleDefaultEase = CustomEase.create('custom', 'M0,0 C0.302,0.116 0.302,1 1,1');
        const barToUpOptions = {
            ease: Power1.easeOut,
            height: BAR_HEIGHT,
            opacity: 1,
        };
        const barToDownOptions = {
            ease: Back.easeOut.config(1.5),
            height: CIRCLE_SIZE,
            opacity: 0,
        };
        const circleToUpOptions = {
            ease: Power1.easeOut,
            y: CIRCLE_UP_Y_POS,
        };
        const circleToDownOptions = {
            ease: Back.easeOut.config(1.5),
            y: 0,
        };

        this._barTweenLeft.delay(0).set(
            `.${BAR_CLASS}-left`,
            {
                height: CIRCLE_SIZE,
                opacity: 0,
            }
        ).to(
            `.${BAR_CLASS}-left`,
            DURATION_UP,
            barToUpOptions,
        ).to(
            `.${BAR_CLASS}-left`,
            DURATION_DOWN,
            barToDownOptions
        ).repeat(-1).repeatDelay(.5);

        this._barTweenMiddle.delay(.45).set(
            `.${BAR_CLASS}-middle`,
            {
                height: CIRCLE_SIZE,
                opacity: 0,
            }
        ).to(
            `.${BAR_CLASS}-middle`,
            DURATION_UP,
            barToUpOptions,
        ).to(
            `.${BAR_CLASS}-middle`,
            DURATION_DOWN,
            barToDownOptions,
        ).repeat(-1).repeatDelay(.5);

        this._barTweenRight.delay(.9).set(
            `.${BAR_CLASS}-right`,
            {
                height: CIRCLE_SIZE,
                opacity: 0,
            }
        ).to(
            `.${BAR_CLASS}-right`,
            DURATION_UP,
            barToUpOptions,
        ).to(
            `.${BAR_CLASS}-right`,
            DURATION_DOWN,
            barToDownOptions,
        ).repeat(-1).repeatDelay(.5);

        this._circleTweenLeft.delay(0).set(
            `.${BAR_CLASS}-left`,
            {
                y: 0,
            }
        ).to(
            `.${CIRCLE_CLASS}-left`,
            DURATION_UP,
            circleToUpOptions,
        ).to(
            `.${CIRCLE_CLASS}-left`,
            DURATION_DOWN,
            circleToDownOptions,
        ).repeat(-1).repeatDelay(.5);

        this._circleTweenMiddle.delay(.45).set(
            `.${BAR_CLASS}-middle`,
            {
                y: 0,
            }
        ).to(
            `.${CIRCLE_CLASS}-middle`,
            DURATION_UP,
            circleToUpOptions,
        ).to(
            `.${CIRCLE_CLASS}-middle`,
            DURATION_DOWN,
            circleToDownOptions,
        ).repeat(-1).repeatDelay(.5);

        this._circleTweenRight.delay(.9).set(
            `.${BAR_CLASS}-right`,
            {
                y: 0,
            }
        ).to(
            `.${CIRCLE_CLASS}-right`,
            DURATION_UP,
            circleToUpOptions,
        ).to(
            `.${CIRCLE_CLASS}-right`,
            DURATION_DOWN,
            circleToDownOptions,
        ).repeat(-1).repeatDelay(.5);
    }

    render() {
        const {
            className,
            color,
            id,
            size,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', BLOCK_CLASS, className);
        let backgroundColorStyle;

        switch (color) {
            case 'backgroundColorStatic':
                backgroundColorStyle = backgroundColorStatic;

                break;

            case 'backgroundColorHighlight':
                backgroundColorStyle = backgroundColorHighlight;

                break;
        }

        return (
            <div
                className={containerClasses}
                id={id}
                style={Object.assign({}, style, {
                    transform: `scale(${1 / 68 * size})`,
                })}
            >
                <div
                    className={`${BLOCK_CLASS}--left`}
                >
                    <div
                        className={`${CIRCLE_CLASS} ${CIRCLE_CLASS}-left`}
                        style={{
                            backgroundColor: backgroundColorStyle,
                        }}
                    />

                    <div
                        className={`${BAR_CLASS} ${BAR_CLASS}-left`}
                        style={{
                            backgroundColor: backgroundColorStyle,
                        }}
                    />
                </div>

                <div
                    className={`${BLOCK_CLASS}--middle`}
                >
                    <div
                        className={`${CIRCLE_CLASS} ${CIRCLE_CLASS}-middle`}
                        style={{
                            backgroundColor: backgroundColorStyle,
                        }}
                    />

                    <div
                        className={`${BAR_CLASS} ${BAR_CLASS}-middle`}
                        style={{
                            backgroundColor: backgroundColorStyle,
                        }}
                    />
                </div>

                <div
                    className={`${BLOCK_CLASS}--right`}
                >
                    <div
                        className={`${CIRCLE_CLASS} ${CIRCLE_CLASS}-right`}
                        style={{
                            backgroundColor: backgroundColorStyle,
                        }}
                    />

                    <div
                        className={`${BAR_CLASS} ${BAR_CLASS}-right`}
                        style={{
                            backgroundColor: backgroundColorStyle,
                        }}
                    />
                </div>
            </div>
        );
    }
}

ActivityIndicator.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'backgroundColorHighlight', 'backgroundColorStatic' ]),
    id: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
};

ActivityIndicator.defaultProps = {
    className: '',
    color: 'backgroundColorHighlight',
    id: 'PropTypes.string',
    size: 68,
    style: {},
};

export default ActivityIndicator;
