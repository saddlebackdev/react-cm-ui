import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    gradientId: PropTypes.string,
    maskId: PropTypes.string,
    pathD: PropTypes.string,
    pathId: PropTypes.string,
    renderGradientColor: PropTypes.node,
    style: PropTypes.shape({}),
    title: PropTypes.string,
    type: PropTypes.string,
    viewBox: PropTypes.string,
};

const defaultProps = {
    gradientId: undefined,
    maskId: undefined,
    pathD: undefined,
    pathId: undefined,
    renderGradientColor: undefined,
    style: undefined,
    title: undefined,
    type: undefined,
    viewBox: '0 0 24 24',
};

function IconSVG(props) {
    const {
        gradientId,
        maskId,
        pathD,
        pathId,
        renderGradientColor,
        style,
        title,
        type,
        viewBox,
    } = props;

    return (
        <svg
            style={style}
            viewBox={viewBox}
        >
            <title>{title || type}</title>

            <defs>
                <path
                    id={pathId}
                    d={pathD}
                />

                {renderGradientColor}
            </defs>

            <g fill="none" fillRule="evenodd">
                {renderGradientColor && (
                    <mask
                        id={maskId}
                        fill="white"
                    >
                        <use
                            xlinkHref={`#${pathId}`}
                        />
                    </mask>
                )}

                <use
                    className="icon-use-path"
                    xlinkHref={`#${pathId}`}
                />

                {renderGradientColor && (
                    <rect
                        fill={`url(#${gradientId})`}
                        mask={`url(#${maskId})`}
                        x="0"
                        y="0"
                        height="24"
                        width="24"
                    />
                )}
            </g>
        </svg>
    );
}

IconSVG.propTypes = propTypes;
IconSVG.defaultProps = defaultProps;

export default IconSVG;
