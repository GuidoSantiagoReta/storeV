
//función para favoritos con some.
//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

export const isItemExist = (id, arr) => arr.some((item) =>  item.id == id)