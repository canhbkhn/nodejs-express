
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app){

    app.use('/news', newsRouter);
    app.use('/', siteRouter);
// route
    // app.get('/', (req,res)=>{
    //     console.log(res);
    //     return res.render('home');
    // });

    // // route
    // // app.get('/news', (req,res)=>{
    // //     return res.render('news');
    // // });

    

    // app.get('/search', (req,res)=>{
    //     console.log(req.query);
    //     return res.render('search');
    // });

    app.post('/search', (req,res)=>{
        console.log(req.body);
        return res.render('search');
    });
}

module.exports = route;