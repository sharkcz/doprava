var sharkodlak = sharkodlak || {};

sharkodlak.helper = sharkodlak.helper || {
    findProperty: function(haystack, needle) {
        for (var key in haystack) {
            if (haystack[key] == needle) {
                return key;
            }
        }
        
        return undefined;
    }
};