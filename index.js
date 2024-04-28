const crypto = require('crypto');

const alice = crypto.createECDH('secp256k1');
alice.generateKeys();

const bob = crypto.createECDH('secp256k1');
bob.generateKeys();

const alicePublicKeyBase64 = alice.getPublicKey().toString('base64');
const bobPublicKeyBase64 = alice.getPublicKey().toString('base64');

const aliceSharedKey = alice.computeSecret(bobPublicKeyBase64, 'base64', 'hex');
const bobSharedKey = alice.computeSecret(alicePublicKeyBase64, 'base64', 'hex');

console.log(aliceSharedKey === bobSharedKey);

const aes256 = require('aes256');

const message = 'This is random message';

const encrypted = aes256.encrypt(aliceSharedKey, message);

const decrypted = aes256.decrypt(bobSharedKey, encrypted);

console.log('encrypted: ', encrypted);
console.log(decrypted);
