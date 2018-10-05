module.exports = {

    getHouses: (req, res) => {
        // res.status(200).send(`It's working! It's working!!!`)
        
        const dbInstance = req.app.get('db')
        dbInstance.get_houses()
        .then(response => {
            // console.log(response);
            res.status(200).send(response)
        })
        .catch( err => {
            res.sendStatus(500)
            console.log(err);
        })
        
    },
    addHouse: ( req, res ) => {
        const { propertyName, address, city, state, zip } = req.body;
        console.log('data: ', propertyName, address, city, state, zip);
        
        const dbInstance = req.app.get('db');
        dbInstance.add_house( [ propertyName, address, city, state, zip ] )
        .then( response => {
            console.log( response );
            res.status( 200 )
        })
        .catch( err => {
            res.sendStatus( 500 );
            console.log( err );
            
        })

    },
    deleteHouse: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params
        dbInstance.delete_house( id )
        .then( () => {
            res.sendStatus( 200 )
        })
        .catch( err => {
            res.sendStatus( 500 )
            console.log( err );
        })
    }
}