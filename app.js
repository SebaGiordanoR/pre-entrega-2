const productos =[
    {nombre: 'Vela' , precio: 1500, material:'amatista'},
    {nombre: 'Pendulo' , precio: 4000, material:'obsidiana'},
    {nombre: 'piedra' , precio: 3500, material:'obsidiana'},
    {nombre: 'vela' , precio: 1500, material:'obsidiana'},
    {nombre: 'piedra' , precio: 3500, material:'amatista'}
];

const factura = []
let cantidad;
let total = 0;
let opcion;
let agregar

alert('bienvenido a Wiccat, el oraculo nos informo de tu llegada')

do{
    const listaProductos = productos.map((item,lista) => `${lista + 1}: ${item.nombre} de ${item.material}   $ ${item.precio}`);
    opcion = parseInt(prompt('Qué producto deseas llevar?' + '\n' + listaProductos.join('\n')))

    while(opcion <=0 || opcion > productos.length){
        opcion = parseInt(prompt('ingrese una opción válida' + '\n' + listaProductos.join('\n')))
    }

    cantidad = parseInt(prompt('Cuantos te gustaria llevar?'))
    factura.push({nombre: productos[opcion-1].nombre, material: productos[opcion-1].material, precioUnitario: productos[opcion-1].precio, cantidad, subtotal: productos[opcion-1].precio*cantidad})

    agregar = prompt('deseas agregar más productos al carrito? si/no')
}while (agregar == 'si')

total= factura.reduce((acc, itemFactura) => acc + itemFactura.precioUnitario*itemFactura.cantidad, 0)

const facturaString = factura.map((itemFactura) => `producto: ${itemFactura.nombre} de ${itemFactura.material}, cantidad: ${itemFactura.cantidad}, Subtotal: $${itemFactura.subtotal}`);

alert(`el total de su compra es de: $${total}\n\n ${facturaString.join('\n')}`)