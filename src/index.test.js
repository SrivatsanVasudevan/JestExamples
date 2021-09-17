const functions = require('./index');

test('Checking if TwoSum has a valid solution', () => {
    let array = [1,2,3];
    let target = 5;
    let result = functions.twoSum(array,target);
    expect(result).toEqual([2,1]);
})

test('Checking if there is no solution ', () => {
    let array = [1,2,3,4,5];
    let target = 45;
    let result = functions.twoSum(array,target);
    expect(result).toEqual([]);
})

test('Checking if we get duplicate indices as output ', () => {
    let array = [1,0,4];
    let target = 2;
    let result = functions.twoSum(array,target);
    expect(result).toEqual([]);
})

test('Check if we have valid input for two sum ', () => {
    let array= [];
    let target = 10;
    let result = functions.twoSum(array,target);
    expect(result).toEqual([]);
})

test('Check if input array is not of data type number ', () => {
    let array = ['1','2','3'];
    let target = 5;
    let result = functions.twoSum(array,target);
    expect(result).not.toEqual([2,1]);
})

