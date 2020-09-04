module.exports = {
    getAllProducts: (req, res) => {
       const db = req.app.get('db');

       db.get_all_products().then(products => {
           res.status(200).send(products)
       })
    }
}