import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { TITLE_PROP_TYPE } from './iconConstants';

const propTypes = {
    circle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        cx: PropTypes.string.isRequired,
        cy: PropTypes.string.isRequired,
        r: PropTypes.string.isRequired,
    }),
    gradientId: PropTypes.string.isRequired,
    maskId: PropTypes.string.isRequired,
    path: PropTypes.shape({
        id: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
        transform: PropTypes.string,
    }),
    paths: PropTypes.arrayOf(PropTypes.shape({
        d: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.shape({}),
    })),
    polygon: PropTypes.shape({
        id: PropTypes.string.isRequired,
        transform: PropTypes.string,
        points: PropTypes.string.isRequired,
    }),
    renderGradientColor: PropTypes.node,
    style: PropTypes.shape({}),
    title: TITLE_PROP_TYPE,
    type: PropTypes.string,
    viewBox: PropTypes.string,
};

const defaultProps = {
    circle: null,
    path: null,
    paths: [],
    polygon: null,
    renderGradientColor: null,
    style: null,
    type: null,
    title: null,
    viewBox: '0 0 24 24',
};

function IconSVG(props) {
    const {
        circle,
        gradientId,
        maskId,
        path,
        paths,
        polygon,
        renderGradientColor,
        style,
        title,
        type,
        viewBox,
    } = props;

    let id;

    if (circle) {
        id = circle.id;
    }

    if (path) {
        id = path.id;
    }

    if (polygon) {
        id = polygon.id;
    }

    return (
        <svg
            style={style}
            viewBox={viewBox}
        >
            {title !== false && <title>{title || type}</title>}

            {!isEmpty(paths) && (paths.map((p) => (
                <path
                    className={p.className}
                    d={p.d}
                    style={p.style}
                    key={p.id}
                    id={p.id}
                />
            )))}

            <defs>
                {circle && (
                    <circle
                        id={id}
                        cx={circle.cx}
                        cy={circle.cy}
                        r={circle.r}
                    />
                )}

                {path && (
                    <path
                        id={id}
                        d={path.d}
                        transform={path.transform}
                    />
                )}

                {polygon && (
                    <polygon
                        id={id}
                        transform={polygon.transform}
                        points={polygon.points}
                    />
                )}

                {renderGradientColor}
            </defs>

            <g fill="none" fillRule="evenodd">
                {renderGradientColor && (
                    <mask
                        id={maskId}
                        fill="white"
                    >
                        <use
                            xlinkHref={`#${id}`}
                        />
                    </mask>
                )}

                <use
                    className="icon-use-path"
                    xlinkHref={`#${id}`}
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
