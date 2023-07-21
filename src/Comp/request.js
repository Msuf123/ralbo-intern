export default async function  req(url){
    return await fetch(url).then((res)=>{
        if(res.ok){
            return res.json()
        }
        else if(res.status!==200){
            return {status:res.status}
        }
    }).catch(()=>{
        return 'Error'
    })
    
    
}