import {z} from "zod";

export const createOrderSchema = z.object({
    dishName: z.string({
        required_error: "El nombre del platillo es requerido",
    }).max(50, {message: "Ha excedido el numero de palabras para el platillo"}),
    price: z.number({
        required_error: "Se necesita el precio del platillo",
    }).nonnegative({
        message: "El precio debe ser mayor o igual a 0",
    }),
    clientRequest: z.string().max(150, {message: "Ha excedido el numero de palabras en las peticiones"}).optional(),
    orderDate: z.string().datetime().optional(),
    orderStatus: z.string().max(15, {message: "Ha excedido el numero de caracteres"}).optional(),
});