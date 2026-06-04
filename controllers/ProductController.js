
// index: to retreive all records and send in response
const index = (req,res)=>{
    res.send("List of all products")
}

// find: to find a records
const find = (req,res)=>{
    const id = req.params.id
    res.send(`The product with id of ${id} is found.`)
}

// create: to store a record

// update: to update a record

// delete/destroy: to delete a records

export {index, find}