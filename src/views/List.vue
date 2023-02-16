<template>
    <div id="admin">
        <h1>管理員頁面</h1><br>
        <div id="head">
            <div id="user" style="padding-right: 20px;">{{ this.$store.state.ac_name  = 'Ac02'? '管理員' : this.$store.state.ac_name}} 你好</div>
            <button id="logout" @click="logout">退出</button>
        </div><br>
        
        <table border="1" borderColor="purple" borderRadius="50%" id="table">
            <tr style="background-color:lawngreen">
                <td>會員編號</td>
                <td>姓名</td>
                <td>性別</td>
                <td>電話</td>
                <td>用戶地址</td>
                <td>會員層級名</td>
                <td colspan="2">控制中心</td>
            </tr>
            <tr v-for="(item,index) in data" :key="index" >
                <td v-if=" item.account_name != 'Ac02'">{{ item.account_num }}</td>
                <td v-if=" item.account_name != 'Ac02'">{{ item.user_name }}</td>
                <td v-if=" item.account_name != 'Ac02'">{{ item.sex_name }}</td>
                <td v-if=" item.account_name != 'Ac02'">{{ item.user_phone }}</td>
                <td v-if=" item.account_name != 'Ac02'">{{ item.user_address }}</td>
                <td v-if=" item.account_name != 'Ac02'">{{ item.permission_name }}</td>
                <td v-if=" item.account_name != 'Ac02'"><button class="update" @click="goUpdate(item.account_num)">修改</button></td>
                <td v-if=" item.account_name != 'Ac02'"><button class="del" @click="delAc(item.account_num)">刪除</button></td>
            </tr>
        </table><br>
        <!-- <button @click="goUpdate">測試</button> -->
        <button @click="getData" id="check">查看資料</button><br>
    </div>
</template>
<style src="./list.css"></style>

<script>
    export default {
        data() {
                return {
                    data:null,
                    admin:false,
                    emp:false
                }
            },
        methods:{
            goUpdate(account_num){
                // let urlParams = new URLSearchParams(location.search)
                // let $account_num = urlParams.get('account_num')
                location.href = `/update/${account_num}`
                // console.log(account_num)
                this.$store.commit('getac_num',account_num)
            },
            delAc(ac_num){
                let url = `/delete/${ac_num}`
                    let status = confirm('確定刪除嗎')
                    if(status){
                        this.axios.get(url).then((res)=>{
                            console.log(res)
                            if(res.data == 1){
                                alert('刪除成功',`刪除第${ac_num}筆`)
                                location.reload()
                            }else if(res.data == 0){
                                alert('刪除失敗')
                            }
                        })
                    }
                },
            getData(){
                let url = '/list'
                this.axios.get(url).then((res)=>{
                    this.data = res.data
                    console.log(res.data)
                    // this.$store.commit('updateUser',this.data[0])
                    for(let i = 0; i < res.data.length; i++){
                        if(res.data[i].permission_name == '管理員' && res.data[i].account_name == this.$store.state.ac_name){
                        this.admin = true
                        console.log(this.admin)
                        console.log(res.data[i].permission_name)
                        }
                    } 
                })
            },
            logout(){
                sessionStorage.clear()
                location.href='/login'
            }
        }
    }
</script>

<style lang="scss" scoped>
// table{
//     border-collapse:collapse
// }


</style>