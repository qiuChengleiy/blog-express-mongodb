var User = require("./schema/user");
var db_ = require('./operateDB');

/**
 * 插入
 */
 function insert() {
 
    var user0 = new User({
        username : 'Tracy McGrady',                 //用户账号
        password: 'abcd',                            //密码
        userAge: 37,                                //年龄
        time : new Date()                      //最近登录时间
    });

     var user1 = new User({
        username : 'user1',                 //用户账号
        password: 'abcd',                            //密码
        userAge: 37,                                //年龄
        time : new Date()                      //最近登录时间
    });

      var user2 = new User({
        username : 'user12',                 //用户账号
        password: 'abcd',                            //密码
        userAge: 37,                                //年龄
        time : new Date()                      //最近登录时间
    });

       var user3 = new User({
        username : 'user13',                 //用户账号
        password: 'abcd',                            //密码
        userAge: 37,                                //年龄
        time : new Date()                      //最近登录时间
    });

        var user4 = new User({
        username : 'user14',                 //用户账号
        password: 'abcd',                            //密码
        userAge: 37,                                //年龄
        time : new Date()                      //最近登录时间
    });

         var user5 = new User({
        username : 'user15',                 //用户账号
        password: 'abcd',                            //密码
        userAge: 37,                                //年龄
        time : new Date()                      //最近登录时间
    });

    const userArr = [user0,user1,user2,user3,user4,user5]

    //初始化插入表数据
    // for(let i =0;i<userArr.length;i++) {
    //     userArr[i].save((err,result) => {
    //         if (err) {
    //             console.log("Error:" + err);
    //         }
    //         else {
    //             console.log("Res:" + result);
    //         }
    //     })
    // }

    //调用 封装的 插入方法
    let date = new Date();
    let time = date.toLocaleString();
   
    var user7 ={
        username : 'userhaha',                 //用户账号
        password: 'abcdsdada',                            //密码
        age: 47,                               //年龄
        time:time                   //最近登录时间
     };

   // db_().save(user7,'user');

   //更新数据
    // User.update({'username':'user6'}, {'userAge':'20'}, (err,result) => {
    //     if (err) throw err;
    //     console.log(result);
    // })

    // User.findByIdAndUpdate('5b1c761d1856ca022a272f5d',{'username':'user26'}, (err,result) => {
    //     if(err) throw err;
    //     console.log(result);
    // })

    //封装的数据库更新操作
    // db_().update({'username':'user6'}, {'userAge':'28'},'user').update();

    // db_().update('5b1c761d1856ca022a272f5d',{'username':'usertesthahaha89'},'user').updateById();


    // 删除操作
   //db_().remove({'username':'Tracy McGrady'}, 'user');

   //查询操作

   //db_().find({'username':'user6'},{"userAge":"1", "time":"0"},'user');
   // db_().find({'username':'user6'},{"userAge":"1", "time":"0"},'user',(e) => {
   //      console.log(e);// 拿到的数据
   // })


   const query = {
    userAge: {$gte: 10, $lte: 120}, //大于等于10  小于等于120
   // $or:[{'username':'user6'}], //或
    username:{$in:['user6','user13'],$regex:/user13/i}  //在某一个范围内   $regex 正则
   }


   // User.find(query,{},(err,res) => {

   //  console.log(res);
   // })

   // User.count({},(err,res) => {
   //  console.log(res)   // 返回数据的数量
   // })

   // db_().count('user',(e) => {
   //  console.log(e);
   // })


  // 分页查询


  const pageSize = 5;
  let current = 1;
  const sort = {'time':-1};
  //const query = {};
  let skipnum = (current-1)*pageSize;

  // User.find({}).skip(skipnum).limit(pageSize).sort(sort).exec((err,res) => {
  //   console.log(res);
  // })


  let queryObj = {
    current,
    sort,
    skip:skipnum,
    pageSize,
    query:{}
  }

  db_().findPage(queryObj,'user',(e) => {
    console.log(e);
  })

  
   // User.find({'username':'user1'},{"username":"1", "time":"0","_id":"0"},(err,res) => {
   //   console.log(res);
   // })

}



module.exports = insert();


//查询逻辑

// $or　　　　或关系

// 　　$nor　　　 或关系取反

// 　　$gt　　　　大于

// 　　$gte　　　 大于等于

// 　　$lt　　　　 小于

// 　　$lte　　　  小于等于

// 　　$ne            不等于

// 　　$in             在多个值范围内

// 　　$nin           不在多个值范围内

// 　　$all            匹配数组中多个值

// 　　$regex　　正则，用于模糊查询

// 　　$size　　　匹配数组大小

// 　　$maxDistance　　范围查询，距离（基于LBS）

// 　　$mod　　   取模运算

// 　　$near　　　邻域查询，查询附近的位置（基于LBS）

// 　　$exists　　  字段是否存在

// 　　$elemMatch　　匹配内数组内的元素

// 　　$within　　范围查询（基于LBS）

// 　　$box　　　 范围查询，矩形范围（基于LBS）

// 　　$center       范围醒询，圆形范围（基于LBS）

// 　　$centerSphere　　范围查询，球形范围（基于LBS）

// 　　$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）


