function checkYuGiOh(m){
    let output = []
    if(isNaN(m)){
        return `invalid parameter ${n}`
    } else {
        for(let b = 1; b <= m; b++){
            let saveValue = []
            if(b % 2 == 0){
                saveValue.push(`Yu`)
            }
            if(b % 3 == 0){
                saveValue.push(`Gi`)
            }
            if(b % 5 == 0){
                saveValue.push(`Oh`)
            }
            if(saveValue.length > 0){
                output.push(saveValue.join(`-`))
            } else {
                output.push(b)
            }
        }
        return output
    }
}