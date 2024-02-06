const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const karyawanRouter = require('./routes/karyawan');
const perusahaanRouter = require('./routes/perusahaan');
const transaksiRouter = require('./routes/transaksi');
const axiosRouter = require('./routes/axios');
const uploadRouter = require('./routes/upload');
const soal5Router = require('./routes/soal5');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/perusahaan', perusahaanRouter);
app.use('/karyawan', karyawanRouter);
app.use('/transaksi', transaksiRouter);
app.use('/axios', axiosRouter);
app.use('/upload', uploadRouter);
app.use('/soal5', soal5Router);
app.use('/assets', express.static('assets'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
