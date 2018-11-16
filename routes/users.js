const express = require('express');
const router = express.Router();
const Mock = require('mockjs');
const Random = Mock.Random;

const getData = function () {
    let data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'name|+1': 1
        }]
    });
    return JSON.stringify(data);
};
const getName = function () {
    return JSON.stringify(Random.csentence(5, 20));
}

router.get('/', function (req, res, next) {
    res.send(getData());
});

router.get('/:name', function (req, res, next) {
    console.log(req.params.name);

    res.send(getName());
});

module.exports = router;
