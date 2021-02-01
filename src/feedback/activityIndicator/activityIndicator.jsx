import {
    Back,
    Power1,
    TimelineMax,
} from 'gsap';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withTheme from '../../styles/withTheme';

const propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(['backgroundColorHighlight', 'backgroundColorStatic']),
    id: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.shape({}),
    theme: PropTypes.shape({
        palette: PropTypes.shape({
            cyan: PropTypes.shape({}),
            grey: PropTypes.shape({}),
        }),
    }),
};

const defaultProps = {
    className: undefined,
    color: 'backgroundColorHighlight',
    id: undefined,
    size: 68,
    style: {},
    theme: undefined,
};

const BLOCK_CLASS = 'activity_indicator';
const BAR_CLASS = `${BLOCK_CLASS}--bar`;
const BAR_HEIGHT = 68;
const CIRCLE_CLASS = `${BLOCK_CLASS}--circle`;
const DURATION_DOWN = 0.55;
const DURATION_UP = 0.3;
const CIRCLE_SIZE = 16;
const CIRCLE_UP_Y_POS = -(BAR_HEIGHT - CIRCLE_SIZE);

class ActivityIndicator extends React.PureComponent {
    constructor() {
        super();

        this.barTweenLeft = new TimelineMax();
        this.barTweenMiddle = new TimelineMax();
        this.barTweenRight = new TimelineMax();
        this.circleTweenLeft = new TimelineMax();
        this.circleTweenMiddle = new TimelineMax();
        this.circleTweenRight = new TimelineMax();
    }

    componentDidMount() {
        // const principleDefaultEase = CustomEase.create('custom', 'M0,0 C0.302,0.116 0.302,1 1,1')
        const barToUpOptions = {
            ease: Power1.easeOut, // eslint-disable-line no-undef
            height: BAR_HEIGHT,
            opacity: 1,
        };

        const barToDownOptions = {
            ease: Back.easeOut.config(1.5), // eslint-disable-line no-undef
            height: CIRCLE_SIZE,
            opacity: 0,
        };

        const circleToUpOptions = {
            ease: Power1.easeOut, // eslint-disable-line no-undef
            y: CIRCLE_UP_Y_POS,
        };

        const circleToDownOptions = {
            ease: Back.easeOut.config(1.5), // eslint-disable-line no-undef
            y: 0,
        };

        this.barTweenLeft.delay(0).set(
            `.${BAR_CLASS}-left`,
            {
                height: CIRCLE_SIZE,
                opacity: 0,
            },
        ).to(
            `.${BAR_CLASS}-left`,
            DURATION_UP,
            barToUpOptions,
        ).to(
            `.${BAR_CLASS}-left`,
            DURATION_DOWN,
            barToDownOptions,
        )
            .repeat(-1)
            .repeatDelay(0.5);

        this.barTweenMiddle.delay(0.45).set(
            `.${BAR_CLASS}-middle`,
            {
                height: CIRCLE_SIZE,
                opacity: 0,
            },
        ).to(
            `.${BAR_CLASS}-middle`,
            DURATION_UP,
            barToUpOptions,
        ).to(
            `.${BAR_CLASS}-middle`,
            DURATION_DOWN,
            barToDownOptions,
        )
            .repeat(-1)
            .repeatDelay(0.5);

        this.barTweenRight.delay(0.9).set(
            `.${BAR_CLASS}-right`,
            {
                height: CIRCLE_SIZE,
                opacity: 0,
            },
        ).to(
            `.${BAR_CLASS}-right`,
            DURATION_UP,
            barToUpOptions,
        ).to(
            `.${BAR_CLASS}-right`,
            DURATION_DOWN,
            barToDownOptions,
        )
            .repeat(-1)
            .repeatDelay(0.5);

        this.circleTweenLeft.delay(0).set(
            `.${BAR_CLASS}-left`,
            {
                y: 0,
            },
        ).to(
            `.${CIRCLE_CLASS}-left`,
            DURATION_UP,
            circleToUpOptions,
        ).to(
            `.${CIRCLE_CLASS}-left`,
            DURATION_DOWN,
            circleToDownOptions,
        )
            .repeat(-1)
            .repeatDelay(0.5);

        this.circleTweenMiddle.delay(0.45).set(
            `.${BAR_CLASS}-middle`,
            {
                y: 0,
            },
        ).to(
            `.${CIRCLE_CLASS}-middle`,
            DURATION_UP,
            circleToUpOptions,
        ).to(
            `.${CIRCLE_CLASS}-middle`,
            DURATION_DOWN,
            circleToDownOptions,
        )
            .repeat(-1)
            .repeatDelay(0.5);

        this.circleTweenRight.delay(0.9).set(
            `.${BAR_CLASS}-right`,
            {
                y: 0,
            },
        ).to(
            `.${CIRCLE_CLASS}-right`,
            DURATION_UP,
            circleToUpOptions,
        ).to(
            `.${CIRCLE_CLASS}-right`,
            DURATION_DOWN,
            circleToDownOptions,
        )
            .repeat(-1)
            .repeatDelay(0.5);
    }

    render() {
        const {
            className,
            color,
            id,
            size,
            style,
            theme,
        } = this.props;

        const {
            palette: {
                cyan,
                grey,
            },
        } = theme;

        const rootClasses = ClassNames(
            'ui',
            BLOCK_CLASS,
            className,
        );

        const transformScaleDecimal = (1 / 68) * size;

        let backgroundColorStyle;

        switch (color) {
            case 'backgroundColorStatic':
                backgroundColorStyle = grey[400];

                break;

            case 'backgroundColorHighlight':
                backgroundColorStyle = cyan[500];

                break;
            default:
                break;
        }

        return (
            <div
                className={rootClasses}
                id={id}
                style={{
                    ...style,
                    transform: `scale(${transformScaleDecimal})`,
                    transformOrigin: 0,
                }}
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

ActivityIndicator.propTypes = propTypes;
ActivityIndicator.defaultProps = defaultProps;

export default withTheme(ActivityIndicator);
