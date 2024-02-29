import mongoose from "mongoose";

class OrderStatus {
    static Pending = 'Pending';
    static Preparing = 'Preparing';
    static Ready = 'Order Ready';
    static Delivered = 'Delivered';
    static Cancelled = 'Cancelled';
}

const orderSchema = new mongoose.Schema(
    {
        dishName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        clientRequests: {
            type: String,
        },
        orderDate: {
            type: Date,
            default: Date.now,
        },
        orderStatus: {
            type: String,
            enum: Object.values(OrderStatus),
            default: OrderStatus.Pending,
        }
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)

export default Order;
