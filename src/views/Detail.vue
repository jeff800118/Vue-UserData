<template>
    <div  align="center">
        <h1>用戶檢索頁</h1><br>
        <div style="display:flex;justify-content: center;">
            <div id="user" style="padding-right: 20px;">{{ this.$store.state.ac_name}} 你好</div>
            <button @click="logout">退出</button>
        </div><br>
        
        <table border="1" >
            <tr>
                <td>會員編號</td>
                <td>姓名</td>
                <td>性別</td>
                <td>電話</td>
                <td>用戶地址</td>
                <td>用戶層級名</td>
            </tr>
            <tr v-for="(item,index) in data" :key="index">
                <td v-if="$store.state.ac_name == item.account_name">{{ item.account_num }}</td>
                <td v-if="$store.state.ac_name == item.account_name">{{ item.user_name }}</td>
                <td v-if="$store.state.ac_name == item.account_name">{{ item.sex_name }}</td>
                <td v-if="$store.state.ac_name == item.account_name">{{ item.user_phone }}</td>
                <td v-if="$store.state.ac_name == item.account_name">{{ item.user_address }}</td>
                <td v-if="$store.state.ac_name == item.account_name">{{ item.permission_name }}</td>
            </tr>
        </table><br>
        <button @click="getData">查看資料</button><br>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    data:null,
                    // admin:false,
                    // emp:false
                }
            },
        methods:{
            getData(){
                let url = '/list'
                this.axios.get(url).then((res)=>{
                    this.data = res.data
                    console.log(res.data)
                })
            },
            logout(){
                sessionStorage.clear()
                location.href='/login'
            }
        },
    }
</script>

<style lang="scss" scoped>

#user{
    font-size:25px;
    font-weight:bold;
    color:red;
}

</style>