const express = require('express')
const router = express.Router()
const multer = require('multer')
const connexion = require('../connexion/database')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage: storage,
});


module.exports=router

router.get('/',(req,res)=>{
    const q = 'SELECT * FROM products'
    connexion.query(q,(err,data)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(data);
    })
})

router.post('/', upload.array('imageUrl', 1), async (req, res) => {

    try {

        if (!req.files || req.files.length === 0 || !req.files[0].filename) {
            return res.status(400).json({ error: 'No file uploaded or missing filename' });
        }

        const q = "INSERT INTO products(name, montant, devise, imageurl) VALUES (?, ?, ?, ?)";
        const values = [
            req.body.name,
            req.body.montant,
            req.body.devise,
            req.files[0].filename,
        ];

        connexion.query(q, values, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            return res.json('Product has been created');
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/getsingle/:id',(req,res)=>{
    const q = 'SELECT * FROM products WHERE idproducts=?'
    const values = [req.params.id]
    connexion.query(q,values,(err,data)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        return res.json(data[0]);
    })
})

router.delete('/delete/:id',(req,res)=>{
    const q = 'DELETE FROM products WHERE idproducts=?'
    const values = [req.params.id]
    connexion.query(q,values,(err,data)=>{
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        return res.json('Product has been deleted');
    })
})




