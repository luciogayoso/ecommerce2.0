const server = require('express').Router();
const axios = require('axios');

let cache = {};

server.get('/', (req, res) => {
    const search = req.query.query;
    if(search === 'undefined'){
       return res.json([]);
    }
    if (!cache.hasOwnProperty(search)) {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
        .then(rest => {
            let productos = rest.data.results.map(product => {
                   return ({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        currency_id: product.currency_id,
                        available_quantity: product.available_quantity,
                        thumbnail: product.thumbnail,
                        condition: product.condition
                    })
            })
            // console.log('soy server');
            cache[search] = productos
            res.json(cache[search]);
        })
        .catch(err => {
            res.send('error: ' + err);
        })
    }else {
        // console.log('soy cache');
        res.json(cache[search]);
    }
})

module.exports = server;