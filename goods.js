let data = {
    a: 10,
    b: 20,
    c: 30,
};

function readRecepts() {
    return data;
}

function saveRecepts (newData) {
    data = {...newData};
}

exports.getRecepts = (req, res) => {
    const data = readRecepts();
    res.send(JSON.stringify(data));
};

exports.postRecept = (req, res) => {
    res.send('post recept\n');
};

exports.putRecept = (req, res) => {
    const data = readRecepts();
    data.recId = req.query.recId;
    saveRecepts(data);
    res.send('put recept\n');
};

exports.getRecept = (req, res) => {
    res.send('get recept\n');
};

exports.deleteRecept = (req, res) => {
    res.send('delete recept\n');
};