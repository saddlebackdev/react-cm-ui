'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Chart extends React.Component {
    constructor() {
        super();

        this._setChart = this._setChart.bind(this);
    }

    render() {
        const { className, style } = this.props;
        const containerClasses = ClassNames('ui', 'chart', className);

        return <div className={containerClasses} ref={this._setChartRef} style={style} />;
    }

    componentDidMount() {
        const { options, type} = this.props;

        this._chart = new Highcharts[type || 'Chart'] (
            this._chartRef,
            options
        );
    }

    componentWillUnmount() {
        this._chart.destroy();
    }

    _setChart(chartRef) {
        this._chartRef = chartRef;
    }
}

Chart.propTypes = {
    className: PropTypes.string,
    options: PropTypes.object.isRequired,
    style: PropTypes.object,
    type: PropTypes.string
};

export default Chart;
