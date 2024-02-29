import Order from "../models/order.model.js";

export const getOrders = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
};

export const createOrder = async (req, res) => {
    const { dishName, price, clientRequests, orderDate, orderStatus } = req.body;

    const newOrder = new Order({
        dishName,
        price,
        clientRequests,
        orderDate,
        orderStatus
    });

    const savedOrder = await newOrder.save();

    res.json(savedOrder);
};

export const getOrder = async (req, res) => {};
export const updateOrder = async (req, res) => {};
export const deleteOrder = async (req, res) => {};