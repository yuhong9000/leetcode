/**
https://leetcode.com/problems/coin-change/description/
322. Coin Change
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = {};
    dp[0] = 0;
    coins.sort((a,b) => (b-a));
    return dfs(dp,coins,amount);
};

var dfs = function(dp,coins,amount){
    if(amount in dp)
        return dp[amount];
    if(amount < 0)
        return -1;

    let result = amount+1;

    for(let i = 0; i < coins.length; i++){
        let temp = dfs(dp,coins,amount-coins[i]);
        if(temp >= 0){
            temp++;
            if(temp <= result)
                result = temp;
        }
    }
    dp[amount] = result < amount+1? result : -1;
    return dp[amount];
}
