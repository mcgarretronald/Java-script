function fibonacci(n){
    if (n==0){
        return[]
    }else if(n==1){
        return[0]
    }else if(n==2){
        return[0,2]
    }else{
        fibb_arr =[0,1]
        for(i=2;i<n;i++){
        numstobepushed=fibb_arr[i-1]+fibb_arr[i-2]
        fibb_arr.push(numstobepushed)
        }return fibb_arr
    }
}console.log(fibonacci(5));