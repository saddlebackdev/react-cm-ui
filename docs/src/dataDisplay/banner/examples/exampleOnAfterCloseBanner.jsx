import {
    find,
    isObject,
    map,
    remove,
} from 'lodash';
import React, { useState } from 'react';
import {
    Banner,
    Button,
} from 'react-cm-ui';

function ExampleOnCloseAfterBanner() {
    const [acData, setBannerAfterCloseData] = useState([]);

    function onAfterClose(id) {
        remove(acData, (d) => d.id === id);

        setBannerAfterCloseData(acData);
    }

    function onAcBannerClick(id) {
        let newAcData = find(acData, (d) => d.id === id);

        if (isObject(newAcData)) {
            newAcData.isOpen = !newAcData.isOpen;
        } else {
            newAcData = {
                id,
                isOpen: true,
                message: 'A short notification description',
                title: `AC Banner ${id + 1}`,
                type: 'notification',
            };
            acData.push(newAcData);
        }
        setBannerAfterCloseData(acData);
    }

    function renderBanners() {
        return map(acData, (d) => (
            <Banner
                id={d.id}
                isOpen={d.isOpen}
                key={`banner-key-${d.id}`}
                message={d.message}
                onAfterClose={() => onAfterClose(d.id)}
                onClose={() => onAcBannerClick(d.id)}
                title={d.title}
                type={d.type}
            />
        ));
    }

    return (
        <div>
            <Button onClick={() => onAcBannerClick(0)}>AC Banner 0</Button>
            <Button onClick={() => onAcBannerClick(1)}>AC Banner 1</Button>
            <Button onClick={() => onAcBannerClick(2)}>AC Banner 2</Button>
            <Button onClick={() => onAcBannerClick(3)}>AC Banner 3</Button>
            {renderBanners()}
        </div>
    );
}

export default ExampleOnCloseAfterBanner;
