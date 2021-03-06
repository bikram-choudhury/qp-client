const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

if (process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'production' || true) {
  mongoose.connect('mongodb://admin4qp:admin4qp@ds263856.mlab.com:63856/querypoll', (err) => {
    if (err) throw new Error(err);
    console.log("Connected successfully");
  });
} else {
  mongoose.connect('mongodb://localhost:27017/querypoll');
}
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const api = require('./server/routes/api');
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(3000, () => {
    console.log("Server running at 3000 port");
})

module.exports = app;
