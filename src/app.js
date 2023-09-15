const cors = require('cors');
const express = require('express');
const httpStatus = require('http-status');
// import routes from './app/routes';
const routes  = require('./app/routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.send('Calender App API  ');
});
// app.use(globalErrorHandler);
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});
module.exports = app;