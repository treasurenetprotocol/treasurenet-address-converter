/// <reference types="node" />
export declare const ETH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ETHERMINT: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEthermint: (ethAddress: string) => string;
export declare const ethermintToEth: (ethermintAddress: string) => string;

export declare const TREASURENET: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToTreasurenet: (ethAddress: string) => string;
export declare const treasurenetToEth: (treasurenetAddress: string) => string;

export declare const EVMOS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEvmos: (ethAddress: string) => string;
export declare const evmosToEth: (evmosAddress: string) => string;
export declare const OSMOSIS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToOsmosis: (ethAddress: string) => string;
export declare const osmosisToEth: (evmosAddress: string) => string;
export declare const COSMOS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToCosmos: (ethAddress: string) => string;
export declare const cosmosToEth: (evmosAddress: string) => string;
export declare const KYVE: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToKyve: (ethAddress: string) => string;
export declare const kyveToEth: (kyveAddress: string) => string;
//# sourceMappingURL=converter.d.ts.map
