const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const ConnectMongoDb = require('./utils/mongooseConnect');
const error = require('./Middlewares/error');
const chatRoute = require('./routers/chat-route');
const UserRoute = require('./routers/User-route');
const orderRoute = require('./routers/orders-route');
const { booksRoute } = require('./routers/books-route');
const { verifyRoute } = require('./routers/veriffyLogins');

app.use(express.json());
// app.use(cors());

// CORS configuration - MUST be before routes
app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true, // ALLOW CREDENTIALS (cookies)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'],
  }),
);
//allow the send of cookies fronm the frontend
app.use(cookieParser());

const port = process.env.PORT || 5000;

//connect to mongoose
ConnectMongoDb();

//route path
app.use('/chat', chatRoute);
app.use('/user', UserRoute);
app.use('/order', orderRoute);
app.use('/books', booksRoute);
app.use('/verify', verifyRoute);

//error middleware to console when error occurs;
app.use(error);

app.listen(port, () => {
  console.log(`Listerning to port: ${5000}`);
});
