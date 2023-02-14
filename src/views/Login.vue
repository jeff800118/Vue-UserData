<template>
    <div>
        <h1>用戶登入頁</h1><br>
        帳號 : <input type="text" v-model="ac_name" :id="admin | adminFilter(adminP)"><br><br>
        密碼 : <input type="password" v-model="upwd" :id="adminP | adminFilter(adminP)"><br><br>
        <button @click="getData">登入</button><br>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    ac_name:"",
                    upwd:"",
                    admin:false,
                    adminP:false
                }
            },
        methods:{
            getData(){
                let url = '/login'
                let params =`account_name=${this.ac_name}&account_password=${this.$md5(this.upwd)}`
                // console.log(this.ac_name,this.$md5(this.upwd))
                this.axios.post(url,params).then((res)=>{
                    console.log(res)
                    if(res.data == 1 && this.ac_name == 'Ac02'){
                        alert('管理員你好')
                        // console.log(this.upwd,this.ac_name)
                        this.$store.commit('updateUser',this.ac_name)
                        this.admin = true
                        console.log(this.admin)
                        this.adminP = true
                        console.log(this.adminP)
                        // location.href='/list'
                    }else if(res.data == 1){
                        alert('登入成功')
                        this.$store.commit('updateUser',this.ac_name)
                        location.href='/detail'
                    }else if(res.data == 0){
                        alert('登入失敗')
                        console.log(this.$md5(this.upwd))
                    }
                })
            }
        },
        filters:{
            adminFilter(admin,adminP){
                if(admin &&adminP ){
                    // console.log(admin,adminP)
                    location.href = '/list'
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
table{
    border-collapse:collapse
}

</style>