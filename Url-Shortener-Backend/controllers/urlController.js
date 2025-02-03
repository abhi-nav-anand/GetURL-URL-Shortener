const Url = require("../models/Url");
const validator = require('validator');
const fnv = require('fnv-plus');
require("dotenv");
const BASE_URL = process.env.BASE_URL;

exports.createUrl = async (req, res) => {

    try{

        const {originalUrl} = req.body;

        if(validator.isURL(originalUrl)){
            
            const shortId = fnv.fast1a32hex(originalUrl);

            const url = new Url({
                _id: shortId, 
                originalUrl: originalUrl
            });

            const findUrl = await Url.findById(shortId);

            if(findUrl != null){
                res.status(201).json({
                    shortenUrl: `${BASE_URL}/${findUrl._id}`
                });
            }
            else  {
                const savedUrl = await url.save();
                res.status(201).json({
                    shortenUrl: `${BASE_URL}/${savedUrl._id}`
                });
            } 
            


        } else {
            res.status(400).json({
                success: false,
                message: "Invalid Url, Please try again with proper URL"
            })
        }

    }
    catch(error) {
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
}

exports.fetchAllUrls = async (req, res) => {

    try{
        const allUrls = await Url.find({});
        res.status(200).json({
            TotalShortenUrls: allUrls.length,
            AllUrlsData: allUrls
        })
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
}

exports.fetchUrlDetails = async (req, res) => {

    try{
        const uniqueId = req.params.id;

        const urlDetails = await Url.findById(uniqueId);

        res.status(200).json({
            urlUniqueId:urlDetails._id,
            originalUrl: urlDetails.originalUrl,
            shortenUrl: `${BASE_URL}/${urlDetails._id}`,
            linkRedirectionCount: urlDetails.linkRedirectionCount,
            generationDate: urlDetails.generationDate
            
        })
    }
    catch(error) {
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
            error: "This id not exist in database."
        });
    }
}

exports.redirectUrl = async (req, res) => {

    try{

        const uniqueId = req.params.id;
        const findUrl = await Url.findById(uniqueId);
        let count = findUrl.linkRedirectionCount;
        count++;

        await Url.findByIdAndUpdate(uniqueId, {linkRedirectionCount: count});
        res.redirect(findUrl.originalUrl);
    }
    catch(error) {
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
            error: "Url Not Found in Database"
        });
    }
}