// const data=document.getElementById('but')
// data.addEventListener('click',touch)
//  async function touch(){
    //    const resp= await fetch('/get-data')
    //    const dt= await resp.json()
    //    console.log(dt)
    // }

    // const { application } = require("express")

    const data=document.getElementById('but')
    const data1=document.getElementById('but1')
    const data2=document.getElementById('but2')
    const data3=document.getElementById('but3')
    const username=document.getElementById('username')
    const password=document.getElementById('password')
    const email=document.getElementById('email')
    const phno=document.getElementById('phno')
    const age=document.getElementById('age')
    data.addEventListener('click',touch)
    async function touch(){
        const resp=await fetch('/make-new-record',{
        method:'POST',
        body:JSON.stringify({
            'username':username.value,
            'email':email.value,
            'phno':phno.value,
            'age':age.value,
            'password':password.value,

        }),
        headers:{
            Accept : 'application/json',
            'content-type':'application/json'
        }
    })
       const dt= await resp.json()
       console.log(dt)
}

data1.addEventListener('click',touch1)
    async function touch1(){
        const resp1=await fetch('/delete-data',{
        method:'POST',
        body:JSON.stringify({
            // '_id':'65b3b517b4ec669e910df134',
            'username':username.value,
            'email':email.value,
            'phno':phno.value,
            'age':age.value,
            'password':password.value  
        }),
        headers:{
            Accept : 'application/json',
            'content-type':'application/json'
        }
    })
       const dt= await resp1.json()
       console.log(dt)
}
data2.addEventListener('click', async ()=>{
    const updata=await fetch('/update-data',{
        method:'POST',
        body:JSON.stringify({
            'username':username.value,
            'email':email.value,
            'phno':phno.value,
            'age':age.value,
            'password':password.value  
        }),
        headers:{
            Accept:'application/json',
            'content-type':'application/json'
        }
        
    })
    const d1=await updata.json()
    console.log(d1)

})