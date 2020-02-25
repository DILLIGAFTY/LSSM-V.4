window.lssmv4.$store.dispatch('hook', {
    event: 'missionPositionMarkerAdd',
    callback(e) {
        let poi =
            window.mission_poi_markers[window.mission_poi_markers.length - 1];
        poi.bindTooltip(e.caption);
        poi._icon.setAttribute('caption', e.caption);
        poi._icon.classList.add('poi');
    },
});

let isPOIWindow = false;

let resetNewPoiMarker = () => {
    if (isPOIWindow) {
        window.mission_position_new_marker &&
            !window.map
                .getBounds()
                .contains(window.mission_position_new_marker.getLatLng()) &&
            window.mission_position_new_marker.setLatLng(
                window.map.getCenter()
            ) &&
            window.mission_position_new_dragend();
    }
};

let hideIcons = () => {
    if (isPOIWindow) {
        document
            .querySelectorAll('.leaflet-marker-icon:not(.poi)')
            .forEach(el => (el.style.display = 'none'));
        window.mission_position_new_marker &&
            window.mission_position_new_marker._icon &&
            (window.mission_position_new_marker._icon.style.display = null);
    }
};

let showIcons = () => {
    if (isPOIWindow) {
        document
            .querySelectorAll('.leaflet-marker-icon:not(.poi)')
            .forEach(el => (el.style.display = null));
    }
};

window.map.addEventListener('zoomend', resetNewPoiMarker);
window.map.addEventListener('zoomend', hideIcons);

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        let form = mutation.target.querySelector('#new_mission_position');
        if (!form) {
            showIcons();
            isPOIWindow = false;
            return;
        }
        if (isPOIWindow) return;
        isPOIWindow = true;

        hideIcons();

        document
            .querySelectorAll(
                `.lefalet-marker-icon[caption="${
                    document.querySelector(
                        '#mission_position_poi_type option:checked'
                    ).innerText
                }"]`
            )
            .forEach(
                el =>
                    (el.style.filter =
                        'contrast(500%) brightness(60%) invert(100%)')
            );
        form.querySelector('#mission_position_poi_type').onchange = e => {
            document
                .querySelectorAll('.poi')
                .forEach(el => (el.style.filter = null));
            document
                .querySelectorAll(
                    `.poi[caption="${
                        e.target.querySelector('option:checked').innerText
                    }"]`
                )
                .forEach(
                    el =>
                        (el.style.filter =
                            'contrast(500%) brightness(60%) invert(100%)')
                );
        };
    });
});
observer.observe(document.getElementById('buildings'), { childList: true });
