const axios = require('axios');
(async() =>{
    for(let i = 1;i<=30;i++){
        try{
            const res = await axios.get('http://localhost:3000/funcionario');
            console.log(`[${i}]Status:`,res.status);
        }catch(err){
            console.log(`[${i}] Erro:`,err.message)
        }

    }
})();