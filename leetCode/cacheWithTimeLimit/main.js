var TimeLimitedCache = function() {
    this.cache = new Map();   
}

TimeLimitedCache.prototype.set = function(key, value, duration)
{
    const now = Date.now(); //Date.now returns the current timestamp in milliseconds.
    const existed = this.cache.has(key) && this.cache.get(key).expires > now;
    this.cache.set(key, {
        value: value,
        expires:duration + now
    });
}

TimeLimitedCache.prototype.get = function(key){
    const now = Date.now();
    if(this.cache.has(key)){
        const entry = this.cache.get(key);
        if(entry.expires > now){
            return entry.value;
        }else {
            this.cache.delete(key);
        }
    }
    return 'key is deleted';
}

TimeLimitedCache.prototype.count = function(){
    const now = Date.now();
    let count = 0;
    for( const [key, entry] of this.cache.entries()){
        if(entry.expires > now){
             count ++;
        }else{
            this.cache.delete(key); // cleanup expired
        }
    }
    return count;  
}
const cache = new TimeLimitedCache();
cache.set(1, 42, 10000);
cache.set(2,67,15000);
console.log(cache.get(1));  
console.log(cache.get(2));  
console.log(cache.count());


setTimeout(()=>{
    console.log(cache.get(1));
    console.log(cache.get(2));
    console.log(cache.count());  
}, 11000);
