const express = require('express');
const pool = require('../pool');
const router = express.Router();

// 1. 用戶列表
router.get('/list', (req, res, next) => {

    let sql = 'SELECT U.*,A.account_num,A.account_name,S.sex_name,P.permission_name FROM user1 AS U LEFT JOIN account AS A ON U.user_num = A.account_num LEFT JOIN sex AS S ON U.user_sex = S.sex_num LEFT JOIN permission AS P ON A.account_permission = P.permission_num';
    pool.query(sql ,(err, result) => {
        if (err) {
            next(err);
            return;
        }

        res.send(result);
    })
})



// 2. 用戶註冊
// ---account註冊
router.post('/reg', (req, res, next) => {
    let obj = req.body;
    console.log(obj);

    let sql = 'INSERT INTO account SET?';
    // let sql = 'INSERT INTO SELECT user1.*,account.* FROM user1 LEFT JOIN account ON user1.user_num = account.account_num SET';
    pool.query(sql, [obj], (err, result) => {
        if (err) {
            next(err);
            return;
        }

        result.affectedRows > 0 ? res.send('1') : res.send('0')
    })
})

// ---user註冊
router.post('/regdetail', (req, res, next) => {
    let obj = req.body;
    console.log(obj);

    let sql = 'INSERT INTO user1 SET?';
    pool.query(sql, [obj], (err, result) => {
        if (err) {
            next(err);
            return;
        }

        result.affectedRows > 0 ? res.send('1') : res.send('0')
    })
})

// 3. 用戶登入
router.post('/login', (req, res, next) => {
    let obj = req.body;
    console.log(obj);

    let sql = 'SELECT  * FROM account WHERE account_name = ? AND account_password = ? ';
    pool.query(sql, [obj.account_name, obj.account_password], (err, result) => {
        if (err) {
            next(err);
            return;
        }
        console.log(result)
        result.length > 0 ? res.send('1') : res.send('0');
    });
})



// 4. 用戶修改
router.post('/update', (req, res, next) => {
    let obj = req.body;
    console.log(obj);

    let sql = 'UPDATE account JOIN user1 ON account.account_num = user1.user_num SET ? WHERE account_num = ?';

    pool.query(sql, [obj, obj.account_num], (err, result) => {
        if (err) {
            next(err);
            return;
        }

        result.affectedRows > 0 ? res.send('1') : res.send('0');

    });
});


// 5 用戶查詢
router.get('/queryUser', (req, res, next) => {
    let obj = req.query;
    console.log(obj);

    let sql = 'SELECT * FROM account WHERE account_name = ?';
    pool.query(sql, [obj.account_name], (err, result) => {
        if (err) {
            next(err);
            return;
        }

        result.length > 0 ? res.send('1') : res.send('0');
    })
})

// 6 用戶刪除

router.get('/delete/:account_num',(req,res,next)=>{
    let obj = req.params
    let sql = 'DELETE account,user1 FROM account JOIN user1 ON account.account_num = user1.user_num WHERE account_num = ? '
    pool.query(sql,[obj.account_num],(err,result)=>{
        console.log('outside',result)
        if(err){
            next(err);
            return;
        }
        if(result.affectedRows > 0){
            res.send('1')
            console.log('inner',result)
        }else{
            res.send('0')
        }
    })
});


// 导出路由器对象
module.exports = router;