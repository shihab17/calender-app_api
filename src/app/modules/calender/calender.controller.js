const Calender = require("./calender.model");

const get = async (req, res, next) => {
    try {
        let docs = await Calender.find({});
        res.status(200).send({ result: docs });
    } catch (error) {
        return res.status(500).send({ error })
    }
};
const create = async (req, res, next) => {
    try {
        let calender = new Calender(req.body);
        let docs = await calender.save();
        res.status(200).send({ result: docs });
    } catch (error) {
        return res.status(500).send({ error })
    }
};
module.exports = {
    get,
    create
}