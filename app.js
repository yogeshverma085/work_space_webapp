const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
const path = require('path');

// import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobTypeRoute = require('./routes/jobsTypeRoutes');
const jobRoute = require('./routes/jobsRoutes');

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//database connection
mongoose.connect(process.env.DATABASE, {

})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

//MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
  limit: "5mb",
  extended: true
}));
app.use(cookieParser());
app.use(cors());


//ROUTES MIDDLEWARE
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoute);
app.use('/api', jobRoute);

__dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "./frontend/build")));

  app.get("*",function(_, res) {
    res.sendFile(
      path.join(__dirname, "./frontend/build/index.html"),
      function(err) {
        res.status(500).send(err);
      }
    );
    });
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

// error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 7003

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
