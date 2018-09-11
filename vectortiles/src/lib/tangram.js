/**
 * Copyright 2018, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const L = require('leaflet');
const Tangram = require('tangram');

const tangramMap = (target, center, startZoom, getView, setView, label) => {
    
    const map = L.map(target, {attributionControl: false});
    const layer = Tangram.leafletLayer({
        scene: './mapstyles/tangramstyle.yaml'
    });
    
    layer.addTo(map);

    map.setView([center.lng, center.lat], startZoom);

    if (getView) {
        map.on('moveend', () => {
            getView(map.getCenter(), map.getZoom(), label);
            
        });

        setView(label, (cntr, zoom) => {
            map.setView(cntr, zoom);
        });
    }
};

module.exports = tangramMap;