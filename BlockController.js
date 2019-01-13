const SHA256 = require('crypto-js/sha256');
const Block = require('./Block.js');
const Blockchain = require('./Blockchain.js');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        this.app = app;
        this.blocks = new Blockchain.Blockchain();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        let self = this;
        try {
            self.app.get("/block/:index", async (req, res) => {
                let index = req.params.index;
                try {
                    let block = await self.blocks.getBlock(index);
                    //res.send(JSON.stringify(block)).toString();
                    return res.status(200).json(block);
                } catch (error) {
                    return res.status(404).json({status: 404, message: 'Block not found'});
                }
            });
        } catch (error) {
            return res.status(404).json({status: 404, message: 'Block not found'});
        }
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/block", (req, res) => {
            let self = this;
            let newBlock = new Block.Block(req.body.body);

            self.blocks.addBlock(newBlock).then(function(block){
                res.status(200).send(JSON.parse(block));
            });

        });
    }

}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}