var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Dolgu alanı ile değişen plaj / Beach transformed by land reclamation',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'boş',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [ 29.12420879460502,40.92681852967929],
                zoom: 13,
                pitch: 6,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/6cVrWnjq/2.png',
            description: '',
            location: {
                center: [ 29.12420879460502,40.92681852967929],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/6c79Y3KB/MEF-AAP-027-BAP-2025-05-22-13-27-42.png',
            description: '',
            location: {
                center: [ 29.11977812087005,40.925028818840396],
                zoom: 17,
                pitch: 0,
                bearing: -5,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe frameborder="0" class="juxtapose" width="100%" height="1033" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=88f49656-c917-11ef-9397-d93975fe8866"></iframe>1982-2022 yılları arası Maltepe Dolgu Alanı değişimi ile yeri değişen Bakireler Anıtı/ İstanbul Urban Database 1982 Uydu ve Google Earth 2022 Uydu görüntülü kullanılarak elde edilmiştir.',
            location: {
                center: [ 29.11977812087005,40.925028818840396],
                zoom: 16,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            
        },
    
    ]
};
