"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.kyveToEth = exports.ethToKyve = exports.KYVE = exports.cosmosToEth = exports.ethToCosmos = exports.COSMOS = exports.osmosisToEth = exports.ethToOsmosis = exports.OSMOSIS = exports.evmosToEth = exports.ethToEvmos = exports.EVMOS = exports.ethermintToEth = exports.ethToEthermint = exports.treasurenetToEth =exports.ethToTreasurenet = exports.ETHERMINT = exports.ETH = void 0;
const crypto_addr_codec_1 = require("crypto-addr-codec");
const bech32_1 = require("bech32");

function makeChecksummedHexDecoder(chainId) {
    return (data) => {
        const stripped = (0, crypto_addr_codec_1.stripHexPrefix)(data);
        if (!(0, crypto_addr_codec_1.isValidChecksumAddress)(data, chainId || null) &&
            stripped !== stripped.toLowerCase() &&
            stripped !== stripped.toUpperCase()) {
            throw Error('Invalid address checksum');
        }
        return Buffer.from((0, crypto_addr_codec_1.stripHexPrefix)(data), 'hex');
    };
}

function makeChecksummedHexEncoder(chainId) {
    return (data) => (0, crypto_addr_codec_1.toChecksumAddress)(data.toString('hex'), chainId || null);
}

const hexChecksumChain = (name, chainId) => ({
    decoder: makeChecksummedHexDecoder(chainId),
    encoder: makeChecksummedHexEncoder(chainId),
    name,
});
exports.ETH = hexChecksumChain('ETH');

function makeBech32Encoder(prefix) {
    return (data) => bech32_1.bech32.encode(prefix, bech32_1.bech32.toWords(data));
}

function makeBech32Decoder(currentPrefix) {
    return (data) => {
        const {prefix, words} = bech32_1.bech32.decode(data);
        if (prefix !== currentPrefix) {
            throw Error('Unrecognised address format');
        }
        return Buffer.from(bech32_1.bech32.fromWords(words));
    };
}

const bech32Chain = (name, prefix) => ({
    decoder: makeBech32Decoder(prefix),
    encoder: makeBech32Encoder(prefix),
    name,
});
exports.ETHERMINT = bech32Chain('ETHERMINT', 'ethm');
const ethToEthermint = (ethAddress) => {
    const data = exports.ETH.decoder(ethAddress);
    return exports.ETHERMINT.encoder(data);
};
exports.ethToEthermint = ethToEthermint;
const ethermintToEth = (ethermintAddress) => {
    const data = exports.ETHERMINT.decoder(ethermintAddress);
    return exports.ETH.encoder(data);
};
exports.ethermintToEth = ethermintToEth;

exports.TREASURENET = bech32Chain('TREASURENET', 'treasurenet');
const ethToTreasurenet = (ethAddress) => {
    const data = exports.ETH.decoder(ethAddress);
    return exports.TREASURENET.encoder(data);
}
exports.ethToTreasurenet = ethToTreasurenet;
const treasurenetToEth = (treasurenetAddress) => {
    const data = exports.TREASURENET.decoder(treasurenetAddress);
    return exports.ETH.encoder(data);
};
exports.treasurenetToEth = treasurenetToEth;

exports.EVMOS = bech32Chain('EVMOS', 'evmos');
const ethToEvmos = (ethAddress) => {
    const data = exports.ETH.decoder(ethAddress);
    return exports.EVMOS.encoder(data);
};
exports.ethToEvmos = ethToEvmos;
const evmosToEth = (evmosAddress) => {
    const data = exports.EVMOS.decoder(evmosAddress);
    return exports.ETH.encoder(data);
};
exports.evmosToEth = evmosToEth;
exports.OSMOSIS = bech32Chain('OSMOSIS', 'osmo');
const ethToOsmosis = (ethAddress) => {
    const data = exports.ETH.decoder(ethAddress);
    return exports.OSMOSIS.encoder(data);
};
exports.ethToOsmosis = ethToOsmosis;
const osmosisToEth = (evmosAddress) => {
    const data = exports.OSMOSIS.decoder(evmosAddress);
    return exports.ETH.encoder(data);
};
exports.osmosisToEth = osmosisToEth;
exports.COSMOS = bech32Chain('COSMOS', 'cosmos');
const ethToCosmos = (ethAddress) => {
    const data = exports.ETH.decoder(ethAddress);
    return exports.COSMOS.encoder(data);
};
exports.ethToCosmos = ethToCosmos;
const cosmosToEth = (evmosAddress) => {
    const data = exports.COSMOS.decoder(evmosAddress);
    return exports.ETH.encoder(data);
};
exports.cosmosToEth = cosmosToEth;
exports.KYVE = bech32Chain('KORELLIA', 'kyve');
const ethToKyve = (ethAddress) => {
    const data = exports.ETH.decoder(ethAddress);
    return exports.KYVE.encoder(data);
};
exports.ethToKyve = ethToKyve;
const kyveToEth = (kyveAddress) => {
    const data = exports.KYVE.decoder(kyveAddress);
    return exports.ETH.encoder(data);
};
exports.kyveToEth = kyveToEth;
//# sourceMappingURL=converter.js.map
