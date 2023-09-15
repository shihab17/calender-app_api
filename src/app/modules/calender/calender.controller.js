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
const update = async (req, res, next) => {
    try {
        if (!req.params.id) return res.status(400).send({ error: { message: "id is required" } });
        let docs = await Calender.updateOne({ _id: req.params.id }, { $set: req.body }, { new: true });
        res.status(200).send({ result: docs });
    } catch (error) {
        return res.status(500).send({ error })
    }
};
const remove = async (req, res, next) => {
    try {
        if (!req.params.id) return res.status(400).send({ error: { message: "id is required" } });
        await Calender.deleteOne({ _id: req.params.id });
        res.status(200).send({ result: { message: "Successfully deleted" } });
    } catch (error) {
        return res.status(500).send({ error })
    }
};
module.exports = {
    get,
    create,
    remove,
    update
}