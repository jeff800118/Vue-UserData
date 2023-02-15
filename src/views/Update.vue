<template>
    <div>
        <h1>用戶修改頁面</h1>
        <!-- 帳號 -->
        
        用戶號碼 : <input type="text" v-model="ac_name" value="" :placeholder="this.$store.state.ac_num" readonly><br>
        <!-- 密碼 -->
        密碼 : <input type="password" v-model="upwd" @blur="$checkupwd"><br>
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkupwd==1">請填入密碼</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkupwd==2" >格式正確</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkupwd==3" >密碼不得為空</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkupwd==4" >格式不正確</i><br>
        <!-- 確認密碼 -->
        *確認密碼 :  <input type="password" v-model="reupwd" @blur="$checkreupwd"><br>
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkreupwd==1">請填入密碼，*為必填</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkreupwd==2" >與密碼相符</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkreupwd==3" >與密碼不符</i><br>
        
        <button @click="updateAccount">修改</button><br><br>
        <!-- 姓名 -->
        姓名 : <input type="text" v-model="uname" @blur="$checkuname"><br>
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkuname==1">請填入姓名</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkuname==2">姓名不得為空</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkuname==3">格式正確</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkuname==4">格式不正確</i><br>
       <!-- 電話 -->
        電話 : <input type="text" v-model="phone" @blur="$checkphone"><br>
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkphone==1">請填入電話</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkphone==2" >電話不得為空</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkphone==3" >格式正確</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkphone==4" >格式不正確</i><br>

        <button @click="updateUser">修改</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:"",
                ac_name:"",
                upwd:"",
                reupwd:"",
                uname:"",
                phone:"",
                checkupwd:1,
                upwdBool:false,
                checkreupwd:1,
                reupwdBool:false,
                checkuname:1,
                unameBool:false,
                checkphone:1,
                phoneBool:false,
            }
        },
        methods:{
            // goUpdate(){
            //     let urlParams = new URLSearchParams(location.search)
            //     let this. = urlParams.get('account_num')
            //     console.log(f)
            // },
            $checkphone(){
                if(this.phone.length == 0){
                    this.checkphone = 2
                    this.phoneBool = false
                }else if(this.phone.length >=8  && this.phone.length <= 10){
                    this.checkphone = 3
                    this.phoneBool = true
                }else{
                    this.checkphone = 4
                    this.phoneBool = false
                }
            },
            $checkuname(){
                if(this.uname.length == 0){
                    this.checkuname = 2
                    this.unameBool = false
                }else if(this.uname.length >= 2 && this.uname.length <= 20){
                    this.checkuname = 3
                    this.unameBool = true
                }else{
                    this.checkuname = 4
                    this.unameBool = false
                }
            },
            $checkreupwd(){
                if(this.upwd == this.reupwd ){
                    this.checkreupwd = 2
                    this.reupwdBool = true
                }else{
                    this.checkreupwd = 3
                    this.reupwdBool = false
                }
            },
            $checkupwd(){
                if(this.upwd.length >= 6 && this.upwd.length <= 10){
                    this.checkupwd = 2
                    this.upwdBool = true
                }else if(this.upwd.length == 0){
                    this.checkupwd = 3
                    this.upwdBool = false
                }else{
                    this.checkupwd = 4
                    this.upwdBool = false
                }
            },
            updateAccount(){
                // console.log(this.$store.state.ac_num)
                let url = `/update`
                let params = `account_num=${this.$store.state.ac_num}&account_password=${this.$md5(this.upwd)}`

                if(this.upwdBool && this.reupwdBool ){
                    this.axios.post(url,params).then((res)=>{
                        console.log(res)
                        alert('帳號表單修改成功')
                        this.$router.go(-1)
                    })   
                }else{  
                    alert('用戶表單修改失敗')
                    this.$router.go(-1)
                }
            },
            updateUser(){
                let url = '/update'
                let params = `account_num=${this.$store.state.ac_num}&user_name=${this.uname}&user_phone=${this.phone}`
                if(this.unameBool && this.phoneBool){
                    this.axios.post(url,params).then((res)=>{
                    // console.log(res)
                        alert('用戶表單註冊成功')
                        this.$router.go(-1)
                    })
                }else{
                    alert('用戶表單註冊失敗')
                    this.$router.go(-1)
                }
            }
        },
        filters:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>