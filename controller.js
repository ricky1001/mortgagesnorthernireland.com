


exports.postingData = (req, res, next) => {

    console.log("req body below")
    console.log(req.body)
    console.log("req body above")
    return res.status(200).json({
         status: 200,
         message: "whatthe  fuck"
    })
}



