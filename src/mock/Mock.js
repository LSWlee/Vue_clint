/**
 * Created by lsw on 2018/12/25 0025.
 */
import Mock from 'mockjs';
import data from './data.json';

Mock.mock('/info',{code:0,data:data.info})
Mock.mock('/goods',{code:0,data:data.goods})
Mock.mock('/ratings',{code:0,data:data.ratings})


//mock的数据不需要向外暴露，在js入口文件中引入就可以

