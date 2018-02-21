// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    if (currency === 0) return {};
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    else {
    	let obj = {};
    	var H = Q = D = N = P = 0;
    	counter(currency);
    	function counter (all){
    		if(all >= 50){
    			H++;
    			all = all-50;
    		}
    		else if(all >= 25){
    			Q++;
    			all = all-25;
    		}
    		else if(all >= 10){
    			D++;
    			all = all-10;
    		}
    		else if(all >= 5){
    			N++;
    			all = all-5;
    		}
    		else if(all >= 1){
    			P++;
    			all = all-1;
    		}
    		if(all > 0) counter(all);
    	}
    	if (H > 0) obj.H = H;
    	if (Q > 0) obj.Q = Q;
    	if (D > 0) obj.D = D;
    	if (N > 0) obj.N = N;
    	if (P > 0) obj.P = P;

    	// Return an object containing the minimum number of coins needed to make change
    	return obj;
    }
}
