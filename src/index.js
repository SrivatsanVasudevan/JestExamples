const functions = {
    twoSum: (array,target) => {
        if(array.length < 1)return [];
        
        for(let i of array){
            if(Number.isNaN(i)){
                return [];
            }
        }

        let map = new Map();
        for(let i = 0; i < array.length; i++){
            let complement = target - array[i];
            if(map.has(complement) && map.get(complement) !== i){
                return [i,map.get(complement)];
            }
            else{
                map.set(array[i],i);
            }
        }
        return [];
    }
}

console.log('running the file!')

module.exports = functions;