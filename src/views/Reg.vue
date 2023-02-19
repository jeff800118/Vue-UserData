<template>
    <div>
        <h1>用戶註冊頁</h1>
        <div  class="regBase">
            <!-- 帳號 -->
        <span style="color:red">【*號為必填項】</span><br>
        *帳號 : <input type="text" @blur="$checkac_name" v-model="ac_name">
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkac_name==1">請填入帳號</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkac_name==2" >用戶名已被註冊</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkac_name==3" >√用戶名可註冊</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkac_name==4" >格式不正確</i>
        <!-- 密碼 -->
        *密碼 : <input type="password" v-model="upwd" @blur="$checkupwd">
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkupwd==1">請填入密碼</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkupwd==2" >格式正確</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkupwd==3" >密碼不得為空</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkupwd==4" >格式不正確</i>
        <!-- 確認密碼 -->
        *確認密碼 :  <input type="password" v-model="reupwd" @blur="$checkreupwd">
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkreupwd==1">請填入密碼</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkreupwd==2" >與密碼相符</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkreupwd==3" >與密碼不符</i><br>
        
        <button @click="next" class="btn" :data-state="state">送出</button>
        </div>

        <div v-if="state" class="regBase">
                    <!-- 姓名 -->
        *姓名 : <input type="text" v-model="uname" @blur="$checkuname">
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkuname==1">請填入姓名</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkuname==2">姓名不得為空</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkuname==3">格式正確</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkuname==4">格式不正確</i>
        <!-- 性別 -->
        <div v-if="ac_nameBool && upwdBool && reupwdBool">
        *性別 : 
        女 <input type="radio"  name="gender" value="0" v-model="gender">
        <!-- <label for="women" name="women"></label> -->
        男 <input type="radio"  name="gender" value="1" v-model="gender">
        <!-- <label for="men" name="men"></label> -->
        </div>

        <!-- 信箱 -->
        *信箱 : <input type="text" v-model="email" @blur="$checkemail"><br>
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkemail==1">請填入信箱</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkemail==2" >信箱不得為空</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkemail==3" >格式正確</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkemail==4" >格式不正確</i>
        *電話 : <input type="text" v-model="phone" @blur="$checkphone"><br>
        <i style="display: inline;color:blue;font-weight: bolder;" v-if="checkphone==1">請填入電話</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkphone==2" >電話不得為空</i>
        <i style="display: inline;color:green;font-weight: bolder;" v-if="checkphone==3" >格式正確</i>
        <i style="display: inline;color:red;font-weight: bolder;" v-if="checkphone==4" >格式不正確</i>
        地址 : <input type="text" v-model="address"><br>
        <button @click="getAll" class="btn">送出</button>
        </div>
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
                gender:0,
                email:"",
                phone:"",
                address:"",
                permission:1,
                checkac_name:1,
                ac_nameBool:false,
                checkupwd:1,
                upwdBool:false,
                checkreupwd:1,
                reupwdBool:false,
                checkuname:1,
                unameBool:false,
                checkemail:1,
                emailBool:false,
                checkphone:1,
                phoneBool:false,
                state:false
            }
        },
        methods:{
            checkMan(){
                if(event.target.checked){
                    console.log(this.man)
                    console.log(this.woman)
                    this.man = true
                }
            },
            checkWoman(){
                if(event.target.checked){
                    console.log(this.woman)
                    console.log(this.man)
                    this.woman = true
                }
            },
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
            $checkemail(){
                if(this.email.length == 0){
                    this.checkemail = 2
                    this.emailBool = false
                }else if(this.email.length >= 10 && this.email.length <= 50){
                    this.checkemail = 3
                    this.emailBool = true
                }else{
                    this.checkemail = 4
                    this.emailBool = false
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
            $checkac_name(){
                let url = `/queryUser?account_name=${this.ac_name}`
                this.axios.get(url).then((res)=>{
                    if(res.data == 1){
                        this.checkac_name = 2
                        this.ac_nameBool=false
                    }else if(this.ac_name.length >=4 && this.ac_name.length <=9 && res.data == 0 ){
                        this.checkac_name = 3
                        this.ac_nameBool=true
                    }else{
                        this.checkac_name = 4
                        this.ac_nameBool=false
                    }
                    console.log(res)
                })
            },
            next(){
                // let url = '/reg'
                // let params = `account_name=${this.ac_name}&account_password=${this.$md5(this.upwd)}&account_permission=1`

                if(this.ac_nameBool && this.upwdBool && this.reupwdBool){
                    this.state = true
                    alert('請繼續填入個人資料')
                }else{
                    alert('請確認帳號密碼是否符合要求')
                }

            },
            getAll(){
                this.getAccount();
                this.getUser();
            },
            getUser(){
                let url = '/regdetail'
                let params = `user_name=${this.uname}&user_sex=${this.gender}&user_mail=${this.email}&user_phone=${this.phone}&user_address=${this.address}`
                if(this.ac_nameBool && this.upwdBool && this.reupwdBool && this.unameBool && this.emailBool && this.phoneBool){
                    this.axios.post(url,params).then((res)=>{
                        // console.log(res)
                        if(res.data == 1){
                            alert('用戶帳號註冊成功')
                        }else{
                            alert('用戶帳號註冊失敗，請確認必填項目或格式是否正確')
                        }
                    });
                };
            },
            getAccount(){
                let url = '/reg'
                let params = `account_name=${this.ac_name}&account_password=${this.$md5(this.upwd)}&account_permission=1`

                if(this.ac_nameBool && this.upwdBool && this.reupwdBool){
                    this.axios.post(url,params).then((res)=>{
                        // console.log(res)
                        if(res.data == 1){
                            alert('用戶資料註冊成功')
                        }else{
                            alert('用戶資料註冊失敗，請確認必填項目或格式是否正確')
                        }
                    })
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>