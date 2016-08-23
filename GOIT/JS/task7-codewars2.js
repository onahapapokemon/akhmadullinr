function createSecretHolder(secret) {
    return {
        setSecret: function(value) {
            secret = value;
        },
        getSecret: function() {
            return secret;
        }
    }
    return secret;
}

obj = createSecretHolder(5)
console.log(obj.getSecret());
obj.setSecret(2)
console.log(obj.getSecret()); 