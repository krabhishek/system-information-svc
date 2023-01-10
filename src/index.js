const si = require('systeminformation');
const express = require("express");
const app = express();

const PORT = process.env.FF_DEVICE_SVC_PORT || 4422;

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/system', async (req, res) => {
    try {
        const systemData = await si.system();
        res.status(200).json(systemData);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/macs', async (req, res) => {
    try {
        const uuid = await si.uuid();
        res.status(200).json(uuid);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/bios', async (req, res) => {
    try {
        const bios = await si.bios();
        res.status(200).json(bios);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/chasiss', async (req, res) => {
    try {
        const chasiss = await si.chassis();
        res.status(200).json(chasiss);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/battery', async (req, res) => {
    try {
        const battery = await si.battery();
        res.status(200).json(battery);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/osinfo', async (req, res) => {
    try {
        const osInfo = await si.osInfo();
        res.status(200).json(osInfo);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/allstaticdata', async (req, res) => {
    try {
        const staticData = await si.getStaticData();
        res.status(200).json(staticData);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/defaultnetworkinterface', async (req, res) => {
    try {
        const networkData = await si.networkInterfaceDefault();
        res.status(200).json(networkData);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/networkinterfaces', async (req, res) => {
    try {
        const networkData = await si.networkInterfaces();
        res.status(200).json(networkData);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.get('/networkstats', async (req, res) => {
    try {
        const networkData = await si.networkStats();
        res.status(200).json(networkData);
    } catch (err) {
        res.status(503).json({
            error: "could not read system information",
            details: err
        })
    }
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));