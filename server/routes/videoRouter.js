const router = require('express').Router()
const fs = require("fs");
const { Content } = require('../db/models')


router.route('/')
    .get(async (req, res) => {
        try {
            const range = req.headers.range;
            if (!range) {
                res.status(400).send("Requires Range header");
            }
            // get video stats (about 61MB)
            const videoPath = './public/video/trailer.mp4';
            const videoSize = fs.statSync(videoPath).size;
            // Parse Range
            // Example: "bytes=32324-"
            const CHUNK_SIZE = 10 ** 6; // 1MB
            const start = Number(range.replace(/\D/g, ""));
            const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
            // Create headers
            const contentLength = end - start + 1;
            const headers = {
                "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4",
            };
            // HTTP Status 206 for Partial Content
            res.writeHead(206, headers);
            // create video read stream for this particular chunk
            const videoStream = fs.createReadStream(videoPath, { start, end });
            // Stream the video chunk to the client
            videoStream.pipe(res);
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    });

router.route('/:id')
    .get(async (req, res) => {
     
        try {
            const content = await Content.findOne({ where: { id: req.params.id } })
            const { dataValues } = content
            try {
                const range = req.headers.range;
                if (!range) {
                    res.status(400).send("Requires Range header");
                }
              
                const videoPath = content.path_video
                const videoSize = fs.statSync(videoPath).size;
                
                const CHUNK_SIZE = 10 ** 6
                const start = Number(range.replace(/\D/g, ""));
                const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

                const contentLength = end - start + 1;
                const headers = {
                    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                    "Accept-Ranges": "bytes",
                    "Content-Length": contentLength,
                    "Content-Type": "video/mp4",
                };

                res.writeHead(206, headers);
                const videoStream = fs.createReadStream(videoPath, { start, end });
                videoStream.pipe(res);

            } catch (error) {
                console.log(error)
                res.sendStatus(500)
            }

        } catch (error) {
            console.log(error)
        }
    })


module.exports = router