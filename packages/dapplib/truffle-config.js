require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purse grace fork sure seed'; 
let testAccounts = [
"0x9c3ad0e75801f93754acf45ab919d1d1609936c622c868d535ad578d4d0f3cbd",
"0xb8a9f2b68c26eb0eba1b21742611b41773d165de9e1841fe74b0378e8bf207e7",
"0x28dbeb0f152ccb8249ec4062ffa5131122f5d8e20711edebae12f231cd3c760d",
"0x27817c5eddaaf3024b3340503111939229609adf083c127f4326ecbe10fad4af",
"0x8b515e80a5b423b26a4d3ff161f5af9bfcf9a546b4d9ead73c2100dcebad04d9",
"0x8246f0099696f80f4fa3a3b7b4eba005dbe98cb2c6f20b959928f7c61716b7ea",
"0x4675848903afcf4c520616c7ee6ea46535475364b7fd326779b5a432abe33a1f",
"0x925ce0e5b550ddd870e79eaab1e5c3287748a94e4ca8603d7be4595b7bc6553b",
"0x05195417e8a903d0a3d09ba0256e4727fd54d0a8416ef064c08c9c75210e3bdd",
"0x7d9af2d836d710930213e31891b9451c8d15c21529a5fcc6291dd3c845956549"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

