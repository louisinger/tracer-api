#!/bin/sh
e1-cli sendtoaddress CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb 1 "" "" false false 5 "UNSET" 38e5dd4a428b5323913f9009901494fd3470e3f3fd12a038ed1a3a5fd4f6bb1e

e1-cli importaddress CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb
e1-cli listunspent 1 99999 "[\"CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb\"]" true '{"asset": "38e5dd4a428b5323913f9009901494fd3470e3f3fd12a038ed1a3a5fd4f6bb1e"}'
# returns ==> 
# [
#   {
#     "txid": "3dd648b1b3b1f30c710a98c31966d3f3ea8774c6f9cfe6c32e4245215f10bf6e",
#     "vout": 1,
#     "address": "2diiF5MiL9D7h7M8Qrqdt1S4jfCCeMHVfpS",
#     "label": "",
#     "scriptPubKey": "76a91465d7bbea5763cad761f1ed6794e4005130bbeac288ac",
#     "amount": 1.00000000,
#     "assetcommitment": "0ac526a6dd65c6eca010741b815ab5d6da967729988499271e54e8d156d79b19c7",
#     "asset": "38e5dd4a428b5323913f9009901494fd3470e3f3fd12a038ed1a3a5fd4f6bb1e",
#     "amountcommitment": "09609c4bbe9c442dd1bd87bfe9450ffc7904d6d8f87c7dcb963b97845cfcb7ec15",
#     "amountblinder": "1bf22c22d48cf901ab51c0d1c0830afa29b902c44ed757a6ecc480944e76a0c9",
#     "assetblinder": "7e8016819034f5e47810c1ae4844a20d115211a5f3d6194da85459b9bedd570f",
#     "confirmations": 101,
#     "spendable": false,
#     "solvable": false,
#     "safe": true
#   }
# ]

e1-cli listissuances "17ea03dc79f5416f224953bb4046249f90595bb41da24e6501dcefa7f0b5d966" | jq ".[0].entropy" | tr -d '"'
# returns => fdb2b1bd8dc186d4f30d4eb51b6b35572adf6d04d500697dc969be0232c51ee9

# RTX=$(e1-cli createrawtransaction "[]" '{"data":"1170bda35de764c0713f31c1aa8256bcd223441f7755f3c838688ed7c7a81f2d"}')
RTX=$(e1-cli createrawtransaction "[{\"txid\": \"3dd648b1b3b1f30c710a98c31966d3f3ea8774c6f9cfe6c32e4245215f10bf6e\", \"vout\": 1}]" '{"data":"1170bda35de764c0713f31c1aa8256bcd223441f7755f3c838688ed7c7a81f2d", "CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb": 0.00000001 } 0 { "CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb": "38e5dd4a428b5323913f9009901494fd3470e3f3fd12a038ed1a3a5fd4f6bb1e" }')
RE=$(e1-cli rawreissueasset $RTX "[{\"asset_amount\": 0.00000001, \"asset_address\": \"CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb\", \"input_index\": 0, \"asset_blinder\": \"7e8016819034f5e47810c1ae4844a20d115211a5f3d6194da85459b9bedd570f\", \"entropy\": \"fdb2b1bd8dc186d4f30d4eb51b6b35572adf6d04d500697dc969be0232c51ee9\"}]")

# e1-cli decoderawtransaction $RTX

RE=$(e1-cli rawreissueasset $RTX "[{\"asset_amount\": \"0.00000001\", \"asset_address\": \"CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb\", \"input_index\": 0, \"asset_blinder\": \"7e8016819034f5e47810c1ae4844a20d115211a5f3d6194da85459b9bedd570f\", \"entropy\": \"fdb2b1bd8dc186d4f30d4eb51b6b35572adf6d04d500697dc969be0232c51ee9\"}]")

e1-cli decoderawtransaction $RE

###### v2 below

RTX=$(e1-cli createrawtransaction "[]" '{"data":"1170bda35de764c0713f31c1aa8256bcd223441f7755f3c838688ed7c7a81f2d", "CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb": 0.00000001}' 0 true '{ "CTEq9QWdEgzhheGjVYaFDPxiJZVz8j2x2cf5z1VpyjG2TRAL3icqh1d3LDNM2EBrDfMVfMWQEZifNEGb": "38e5dd4a428b5323913f9009901494fd3470e3f3fd12a038ed1a3a5fd4f6bb1e"}')

