var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_cadastre38419parcelles_2 = new ol.format.GeoJSON();
var features_cadastre38419parcelles_2 = format_cadastre38419parcelles_2.readFeatures(json_cadastre38419parcelles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cadastre38419parcelles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cadastre38419parcelles_2.addFeatures(features_cadastre38419parcelles_2);
var lyr_cadastre38419parcelles_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cadastre38419parcelles_2, 
                style: style_cadastre38419parcelles_2,
                interactive: true,
                title: '<img src="styles/legend/cadastre38419parcelles_2.png" /> cadastre-38419-parcelles'
            });
var format_pci38419batiment_3 = new ol.format.GeoJSON();
var features_pci38419batiment_3 = format_pci38419batiment_3.readFeatures(json_pci38419batiment_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pci38419batiment_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pci38419batiment_3.addFeatures(features_pci38419batiment_3);
var lyr_pci38419batiment_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pci38419batiment_3, 
                style: style_pci38419batiment_3,
                interactive: true,
                title: '<img src="styles/legend/pci38419batiment_3.png" /> pci-38419-batiment'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_cadastre38419parcelles_2.setVisible(true);lyr_pci38419batiment_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_cadastre38419parcelles_2,lyr_pci38419batiment_3];
lyr_cadastre38419parcelles_2.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'arpente': 'arpente', 'created': 'created', 'updated': 'updated', 'Ref': 'Ref', });
lyr_pci38419batiment_3.set('fieldAliases', {'id': 'id', 'DUR': 'DUR', 'DATE_OBS': 'DATE_OBS', 'DATE_MAJ': 'DATE_MAJ', 'Photo': 'Photo', 'PDF': 'PDF', });
lyr_cadastre38419parcelles_2.set('fieldImages', {'id': '', 'commune': '', 'prefixe': '', 'section': '', 'numero': '', 'contenance': '', 'arpente': '', 'created': '', 'updated': '', 'Ref': '', });
lyr_pci38419batiment_3.set('fieldImages', {'id': 'TextEdit', 'DUR': 'TextEdit', 'DATE_OBS': 'DateTime', 'DATE_MAJ': 'DateTime', 'Photo': 'ExternalResource', 'PDF': 'ExternalResource', });
lyr_cadastre38419parcelles_2.set('fieldLabels', {'id': 'no label', 'commune': 'no label', 'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'arpente': 'no label', 'created': 'no label', 'updated': 'no label', 'Ref': 'inline label', });
lyr_pci38419batiment_3.set('fieldLabels', {'id': 'header label', 'DUR': 'header label', 'DATE_OBS': 'header label', 'DATE_MAJ': 'header label', 'Photo': 'inline label', 'PDF': 'inline label', });
lyr_pci38419batiment_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});