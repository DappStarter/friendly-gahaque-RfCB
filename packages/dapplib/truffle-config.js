require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain umbrella half argue front skin'; 
let testAccounts = [
"0xd80400e56cd70db9bed2c17278831b71e11e7270eb019ca639b8b8bacd239948",
"0xd3b2cf1ce805a75e81b220aa9b4c35067a1d930332e47c38287a787f0a01c17b",
"0xe36fbdae56a90e80c3bfe044bb0d4aadc9fc592bcfc26c1792bd1fed85bcc169",
"0x6727d14058e986a3e33ced691ef9cf1f3133eeafd1ffdc342e69e71a16de3bd2",
"0x739c9a6e6eaa3e8f1a845b71a6ad2232505b2246de5fd8bad55889bd45637d94",
"0x65995e5b2dc38b524cfa5a5fcc159afd7a17e45ad041d168440b92608b3cc661",
"0xdb651baab463569c498b19f98c6f71b22f90e0f3226740e8bc09ba476dd14e4e",
"0xb7a34cbf3d6842ebfc924be9b4d95aed8bcd08b2e22c6729928e0eb1e2b8b3ab",
"0x1939af4082701f41f1fbe76386afd252c335ad4503429306636b2cb569aeaf69",
"0x3458b0bac2265665f77f5aa9fb9e645e7ba13a0cb5059e16d8ec4ae74515c152"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

