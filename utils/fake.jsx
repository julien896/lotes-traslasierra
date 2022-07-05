import React from 'react';

export const data = () => {
    return [
        {
            id: '1',
            img: '/assets/1.jpg',
            pics: [
                'https://i.ibb.co/2yZWQ9Q/arroyo-1.jpg',
                'https://i.ibb.co/7JwLby6/arroyo-2.jpg',
                'https://i.ibb.co/3vPpPyt/arroyo-3.jpg' 
            ],
            name: 'Lotes en venta',
            description: 'Lotes en Arroyo de los Patos.',
            descriptionFull: 
            `Tres lotes en venta ubicados en Arroyo de los Patos. 
            Todos cuentan con factibilidad de servicios(agua y luz).
            Se encuentran inscriptos en la municipalidad de Arroyo de los Patos.
            Aptos para el desarrollo de viviendas o complejo turistico.
            Excelente vista a todo el cordon de las sierras grandes.
            ${<><br /><br /></>} 
            Cuentan con derechos posesorios.
            Para coordinar una visita o para recibir mayor información no dude en consultar.`,            
            squareMeters: '10m x 25m.',
            price: 'US$12.500',
            place: 'Arroyo de los Patos',
            featured: true,
            street: 'S/N'
        },
        {
            id: '2',
            img: '/assets/2.jpg',
            pics: [
                'https://i.ibb.co/t8Ttmfs/brochero-loteo-1.jpg',
                'https://i.ibb.co/wW3xjdM/brochero-loteo-2.jpg',
                'https://i.ibb.co/875j5st/brochero-loteo-3.jpg',
                'https://i.ibb.co/DzXHtpp/brochero-loteo-4.jpg',
                'https://i.ibb.co/6WcxyCn/brochero-loteo-5.jpg',
                'https://i.ibb.co/jMm7Ws0/brochero-loteo-6.jpg',
                'https://i.ibb.co/TmJzqjW/brochero-loteo-7.jpg',
                'https://i.ibb.co/f2ZbZ3d/brochero-loteo-8.jpg' 
            ],
            name: 'Loteo',
            description: 'Loteo en Cura Brochero',
            descriptionFull: 
            `Contamos con un desarrollo propio de 50 unidades aptas para el desarrollo de viviendas
            o complejo. ${<><br /><br /></>} 
            El loteo se encuentra a 900m de la plaza de Cura Brochero y cuenta con factibilidad de servicios(agua y luz).
            Disponemos de financiacion propia, entrega 25%, el resto en 36 cuotas.`,
            squareMeters: '15m x 40.5m',
            price: 'ARS1.700.000',
            place: 'Cura Brochero',
            featured: true,
            street: 'S/N'
        },
        {
            id: '3',
            img: '/assets/3.jpg',
            pics: [
                'https://i.ibb.co/rGj46L0/lomitas.jpg'
            ],
            name: 'Lotes en venta',
            description: 'Terrenos en venta en Las Lomitas.',
            descriptionFull: 
            `Lotes en venta ubicados en el barrio Las Lomitas, Cura Brochero. 
            Todos cuentan con factibilidad de servicios(agua y luz).
            Magnifica vista. ` +
            `Cuentan con derechos posesorios.
            Para coordinar una visita o para recibir mayor información no dude en consultar.`,            
            squareMeters: '10m x 30m',
            price: 'US$10.000',
            place: 'Cura Brochero',
            featured: true,
            street: 'S/N'
        },
/*         {
            id: '4',
            img: '/assets/1.jpg',
            name: 'Terreno',
            description: 'Terreno en venta en la zona de Mina Clavero.',
            descriptionFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mauris faucibus dolor viverra imperdiet et eu nibh. Fusce commodo ligula in justo posuere sollicitudin. Morbi eu fringilla neque. Mauris sed lacinia lacus. Donec tincidunt erat ac ipsum elementum lobortis. Nulla facilisi. Proin vel purus id arcu faucibus rhoncus tristique sit amet nisi. Sed placerat pretium vestibulum. Etiam tincidunt elit eu justo eleifend, id accumsan lectus volutpat. Donec eu orci mi. In vestibulum nisi ullamcorper, vehicula dolor quis, imperdiet sapien. Praesent in neque quam. Curabitur tincidunt finibus nunc et accumsan.',
            squareMeters: '40000 m2',
            price: 'USD 31.000',
            place: 'Mina Clavero',
            featured: false,
            street: 'Los Aromos S/N'
        }, */
    ]
}