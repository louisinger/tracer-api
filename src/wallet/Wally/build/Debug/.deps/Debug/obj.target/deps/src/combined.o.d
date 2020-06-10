cmd_Debug/obj.target/deps/src/combined.o := cc '-DNODE_GYP_MODULE_NAME=deps' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DSWIG_JAVASCRIPT_BUILD' '-DHAVE_CONFIG_H' '-DBUILD_ELEMENTS' '-DDEBUG' '-D_DEBUG' '-DV8_ENABLE_CHECKS' -I/home/ubuntu/.cache/node-gyp/12.16.2/include/node -I/home/ubuntu/.cache/node-gyp/12.16.2/src -I/home/ubuntu/.cache/node-gyp/12.16.2/deps/openssl/config -I/home/ubuntu/.cache/node-gyp/12.16.2/deps/openssl/openssl/include -I/home/ubuntu/.cache/node-gyp/12.16.2/deps/uv/include -I/home/ubuntu/.cache/node-gyp/12.16.2/deps/zlib -I/home/ubuntu/.cache/node-gyp/12.16.2/deps/v8/include -I../. -I../../.. -I../../../src -I../../../src/secp256k1 -I../../../src/secp256k1/src -I../../../src/ccan  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -g -O0  -MMD -MF ./Debug/.deps/Debug/obj.target/deps/src/combined.o.d.raw   -c -o Debug/obj.target/deps/src/combined.o ../src/combined.c
Debug/obj.target/deps/src/combined.o: ../src/combined.c \
 ../../../src/internal.c ../../../src/internal.h \
 ../../../include/wally_core.h ../../../src/secp256k1/include/secp256k1.h \
 ../../../src/secp256k1/include/secp256k1_recovery.h \
 ../../../src/secp256k1/include/secp256k1.h ../../../src/config.h \
 ../../../src/ccan_config.h ../../../include/wally_crypto.h \
 ../../../include/wally_core.h \
 ../../../src/ccan/ccan/build_assert/build_assert.h \
 ../../../src/ccan/ccan/crypto/ripemd160/ripemd160.h \
 ../../../src/ccan/ccan/crypto/sha256/sha256.h \
 ../../../src/ccan/ccan/crypto/sha512/sha512.h \
 ../../../src/ccan/ccan/endian/endian.h ../../../src/address.c \
 ../../../src/base58.h ../../../include/wally_address.h \
 ../../../include/wally_bip32.h ../../../include/wally_script.h \
 ../../../include/wally_transaction.h ../../../include/wally_crypto.h \
 ../../../src/aes.c ../../../src/ctaes/ctaes.h ../../../src/ctaes/ctaes.c \
 ../../../src/ctaes/ctaes.h ../../../src/base58.c ../../../src/bech32.c \
 ../../../src/script.h ../../../src/blech32.c ../../../src/bip32.c \
 ../../../src/hmac.h ../../../src/bip32_int.h ../../../src/bip38.c \
 ../../../include/wally_bip38.h ../../../src/bip39.c \
 ../../../src/mnemonic.h ../../../src/wordlist.h \
 ../../../include/wally_bip39.h \
 ../../../src/data/wordlists/chinese_simplified.c ../../../src/wordlist.h \
 ../../../src/data/wordlists/chinese_traditional.c \
 ../../../src/data/wordlists/english.c \
 ../../../src/data/wordlists/french.c \
 ../../../src/data/wordlists/italian.c \
 ../../../src/data/wordlists/spanish.c \
 ../../../src/data/wordlists/japanese.c ../../../src/ecdh.c \
 ../../../src/secp256k1/include/secp256k1_ecdh.h ../../../src/elements.c \
 ../../../include/wally_elements.h ../../../include/wally_symmetric.h \
 ../../../src/secp256k1/include/secp256k1_generator.h \
 ../../../src/secp256k1/include/secp256k1_rangeproof.h \
 ../../../src/secp256k1/include/secp256k1_generator.h \
 ../../../src/secp256k1/include/secp256k1_surjectionproof.h \
 ../../../src/secp256k1/include/secp256k1_rangeproof.h \
 ../../../src/secp256k1/include/secp256k1_whitelist.h ../../../src/hex.c \
 ../../../src/ccan/ccan/str/hex/hex.h ../../../src/hmac.c \
 ../../../src/ccan/ccan/crypto/sha256/sha256.h \
 ../../../src/ccan/ccan/crypto/sha512/sha512.h ../../../src/hmac.inl \
 ../../../src/mnemonic.c ../../../src/pbkdf2.c \
 ../../../src/ccan/ccan/compiler/compiler.h ../../../src/pbkdf2.inl \
 ../../../src/script.c ../../../include/wally_transaction.h \
 ../../../src/script_int.h ../../../src/scrypt.c \
 ../../../src/scrypt/crypto_scrypt_smix_sse2.c \
 ../../../src/scrypt/crypto_scrypt.c ../../../src/sign.c \
 ../../../src/symmetric.c ../../../src/transaction.c \
 ../../../src/transaction_int.h ../../../src/transaction_shared.h \
 ../../../src/wif.c ../../../src/wordlist.c \
 ../../../src/secp256k1/src/secp256k1.c \
 ../../../src/secp256k1/include/secp256k1.h \
 ../../../src/secp256k1/include/secp256k1_preallocated.h \
 ../../../src/secp256k1/src/util.h \
 ../../../src/secp256k1/src/libsecp256k1-config.h \
 ../../../src/secp256k1/src/num_impl.h ../../../src/secp256k1/src/num.h \
 ../../../src/secp256k1/src/field_impl.h \
 ../../../src/secp256k1/src/field_5x52_impl.h \
 ../../../src/secp256k1/src/field.h \
 ../../../src/secp256k1/src/field_5x52.h \
 ../../../src/secp256k1/src/field_5x52_asm_impl.h \
 ../../../src/secp256k1/src/scalar_impl.h \
 ../../../src/secp256k1/src/group.h ../../../src/secp256k1/src/scalar.h \
 ../../../src/secp256k1/src/scalar_4x64.h \
 ../../../src/secp256k1/src/scalar_4x64_impl.h \
 ../../../src/secp256k1/src/group_impl.h \
 ../../../src/secp256k1/src/ecmult_impl.h \
 ../../../src/secp256k1/src/ecmult.h ../../../src/secp256k1/src/scratch.h \
 ../../../src/secp256k1/src/ecmult_const_impl.h \
 ../../../src/secp256k1/src/ecmult_const.h \
 ../../../src/secp256k1/src/ecmult_gen_impl.h \
 ../../../src/secp256k1/src/ecmult_gen.h \
 ../../../src/secp256k1/src/hash_impl.h ../../../src/secp256k1/src/hash.h \
 ../../../src/secp256k1/src/ecmult_static_context.h \
 ../../../src/secp256k1/src/group.h \
 ../../../src/secp256k1/src/ecdsa_impl.h \
 ../../../src/secp256k1/src/ecdsa.h \
 ../../../src/secp256k1/src/eckey_impl.h \
 ../../../src/secp256k1/src/eckey.h \
 ../../../src/secp256k1/src/scratch_impl.h \
 ../../../src/secp256k1/include/secp256k1_generator.h \
 ../../../src/secp256k1/include/secp256k1_rangeproof.h \
 ../../../src/secp256k1/src/modules/rangeproof/pedersen.h \
 ../../../src/secp256k1/src/ecmult_gen.h \
 ../../../src/secp256k1/src/group.h ../../../src/secp256k1/src/scalar.h \
 ../../../src/secp256k1/src/modules/rangeproof/rangeproof.h \
 ../../../src/secp256k1/src/ecmult.h \
 ../../../src/secp256k1/src/modules/ecdh/main_impl.h \
 ../../../src/secp256k1/include/secp256k1_ecdh.h \
 ../../../src/secp256k1/src/ecmult_const_impl.h \
 ../../../src/secp256k1/src/modules/recovery/main_impl.h \
 ../../../src/secp256k1/include/secp256k1_recovery.h \
 ../../../src/secp256k1/src/modules/generator/main_impl.h \
 ../../../src/secp256k1/src/field.h ../../../src/secp256k1/src/hash.h \
 ../../../src/secp256k1/src/modules/rangeproof/main_impl.h \
 ../../../src/secp256k1/src/modules/rangeproof/pedersen_impl.h \
 ../../../src/secp256k1/src/eckey.h \
 ../../../src/secp256k1/src/ecmult_const.h \
 ../../../src/secp256k1/src/util.h \
 ../../../src/secp256k1/src/modules/rangeproof/borromean_impl.h \
 ../../../src/secp256k1/src/modules/rangeproof/borromean.h \
 ../../../src/secp256k1/src/modules/rangeproof/rangeproof_impl.h \
 ../../../src/secp256k1/src/modules/rangeproof/rangeproof.h \
 ../../../src/secp256k1/src/hash_impl.h \
 ../../../src/secp256k1/src/modules/rangeproof/pedersen_impl.h \
 ../../../src/secp256k1/src/modules/rangeproof/pedersen.h \
 ../../../src/secp256k1/src/modules/rangeproof/borromean.h \
 ../../../src/secp256k1/src/modules/whitelist/main_impl.h \
 ../../../src/secp256k1/include/secp256k1_whitelist.h \
 ../../../src/secp256k1/src/modules/whitelist/whitelist_impl.h \
 ../../../src/secp256k1/src/modules/surjection/main_impl.h \
 ../../../src/secp256k1/src/libsecp256k1-config.h \
 ../../../src/secp256k1/include/secp256k1_surjectionproof.h \
 ../../../src/secp256k1/src/modules/surjection/surjection_impl.h \
 ../../../src/ccan/ccan/crypto/sha256/sha256.c \
 ../../../src/ccan/ccan/crypto/sha256/sha256.h \
 ../../../src/ccan/ccan/endian/endian.h \
 ../../../src/ccan/ccan/crypto/sha256/sha256_sse4.c
../src/combined.c:
../../../src/internal.c:
../../../src/internal.h:
../../../include/wally_core.h:
../../../src/secp256k1/include/secp256k1.h:
../../../src/secp256k1/include/secp256k1_recovery.h:
../../../src/secp256k1/include/secp256k1.h:
../../../src/config.h:
../../../src/ccan_config.h:
../../../include/wally_crypto.h:
../../../include/wally_core.h:
../../../src/ccan/ccan/build_assert/build_assert.h:
../../../src/ccan/ccan/crypto/ripemd160/ripemd160.h:
../../../src/ccan/ccan/crypto/sha256/sha256.h:
../../../src/ccan/ccan/crypto/sha512/sha512.h:
../../../src/ccan/ccan/endian/endian.h:
../../../src/address.c:
../../../src/base58.h:
../../../include/wally_address.h:
../../../include/wally_bip32.h:
../../../include/wally_script.h:
../../../include/wally_transaction.h:
../../../include/wally_crypto.h:
../../../src/aes.c:
../../../src/ctaes/ctaes.h:
../../../src/ctaes/ctaes.c:
../../../src/ctaes/ctaes.h:
../../../src/base58.c:
../../../src/bech32.c:
../../../src/script.h:
../../../src/blech32.c:
../../../src/bip32.c:
../../../src/hmac.h:
../../../src/bip32_int.h:
../../../src/bip38.c:
../../../include/wally_bip38.h:
../../../src/bip39.c:
../../../src/mnemonic.h:
../../../src/wordlist.h:
../../../include/wally_bip39.h:
../../../src/data/wordlists/chinese_simplified.c:
../../../src/wordlist.h:
../../../src/data/wordlists/chinese_traditional.c:
../../../src/data/wordlists/english.c:
../../../src/data/wordlists/french.c:
../../../src/data/wordlists/italian.c:
../../../src/data/wordlists/spanish.c:
../../../src/data/wordlists/japanese.c:
../../../src/ecdh.c:
../../../src/secp256k1/include/secp256k1_ecdh.h:
../../../src/elements.c:
../../../include/wally_elements.h:
../../../include/wally_symmetric.h:
../../../src/secp256k1/include/secp256k1_generator.h:
../../../src/secp256k1/include/secp256k1_rangeproof.h:
../../../src/secp256k1/include/secp256k1_generator.h:
../../../src/secp256k1/include/secp256k1_surjectionproof.h:
../../../src/secp256k1/include/secp256k1_rangeproof.h:
../../../src/secp256k1/include/secp256k1_whitelist.h:
../../../src/hex.c:
../../../src/ccan/ccan/str/hex/hex.h:
../../../src/hmac.c:
../../../src/ccan/ccan/crypto/sha256/sha256.h:
../../../src/ccan/ccan/crypto/sha512/sha512.h:
../../../src/hmac.inl:
../../../src/mnemonic.c:
../../../src/pbkdf2.c:
../../../src/ccan/ccan/compiler/compiler.h:
../../../src/pbkdf2.inl:
../../../src/script.c:
../../../include/wally_transaction.h:
../../../src/script_int.h:
../../../src/scrypt.c:
../../../src/scrypt/crypto_scrypt_smix_sse2.c:
../../../src/scrypt/crypto_scrypt.c:
../../../src/sign.c:
../../../src/symmetric.c:
../../../src/transaction.c:
../../../src/transaction_int.h:
../../../src/transaction_shared.h:
../../../src/wif.c:
../../../src/wordlist.c:
../../../src/secp256k1/src/secp256k1.c:
../../../src/secp256k1/include/secp256k1.h:
../../../src/secp256k1/include/secp256k1_preallocated.h:
../../../src/secp256k1/src/util.h:
../../../src/secp256k1/src/libsecp256k1-config.h:
../../../src/secp256k1/src/num_impl.h:
../../../src/secp256k1/src/num.h:
../../../src/secp256k1/src/field_impl.h:
../../../src/secp256k1/src/field_5x52_impl.h:
../../../src/secp256k1/src/field.h:
../../../src/secp256k1/src/field_5x52.h:
../../../src/secp256k1/src/field_5x52_asm_impl.h:
../../../src/secp256k1/src/scalar_impl.h:
../../../src/secp256k1/src/group.h:
../../../src/secp256k1/src/scalar.h:
../../../src/secp256k1/src/scalar_4x64.h:
../../../src/secp256k1/src/scalar_4x64_impl.h:
../../../src/secp256k1/src/group_impl.h:
../../../src/secp256k1/src/ecmult_impl.h:
../../../src/secp256k1/src/ecmult.h:
../../../src/secp256k1/src/scratch.h:
../../../src/secp256k1/src/ecmult_const_impl.h:
../../../src/secp256k1/src/ecmult_const.h:
../../../src/secp256k1/src/ecmult_gen_impl.h:
../../../src/secp256k1/src/ecmult_gen.h:
../../../src/secp256k1/src/hash_impl.h:
../../../src/secp256k1/src/hash.h:
../../../src/secp256k1/src/ecmult_static_context.h:
../../../src/secp256k1/src/group.h:
../../../src/secp256k1/src/ecdsa_impl.h:
../../../src/secp256k1/src/ecdsa.h:
../../../src/secp256k1/src/eckey_impl.h:
../../../src/secp256k1/src/eckey.h:
../../../src/secp256k1/src/scratch_impl.h:
../../../src/secp256k1/include/secp256k1_generator.h:
../../../src/secp256k1/include/secp256k1_rangeproof.h:
../../../src/secp256k1/src/modules/rangeproof/pedersen.h:
../../../src/secp256k1/src/ecmult_gen.h:
../../../src/secp256k1/src/group.h:
../../../src/secp256k1/src/scalar.h:
../../../src/secp256k1/src/modules/rangeproof/rangeproof.h:
../../../src/secp256k1/src/ecmult.h:
../../../src/secp256k1/src/modules/ecdh/main_impl.h:
../../../src/secp256k1/include/secp256k1_ecdh.h:
../../../src/secp256k1/src/ecmult_const_impl.h:
../../../src/secp256k1/src/modules/recovery/main_impl.h:
../../../src/secp256k1/include/secp256k1_recovery.h:
../../../src/secp256k1/src/modules/generator/main_impl.h:
../../../src/secp256k1/src/field.h:
../../../src/secp256k1/src/hash.h:
../../../src/secp256k1/src/modules/rangeproof/main_impl.h:
../../../src/secp256k1/src/modules/rangeproof/pedersen_impl.h:
../../../src/secp256k1/src/eckey.h:
../../../src/secp256k1/src/ecmult_const.h:
../../../src/secp256k1/src/util.h:
../../../src/secp256k1/src/modules/rangeproof/borromean_impl.h:
../../../src/secp256k1/src/modules/rangeproof/borromean.h:
../../../src/secp256k1/src/modules/rangeproof/rangeproof_impl.h:
../../../src/secp256k1/src/modules/rangeproof/rangeproof.h:
../../../src/secp256k1/src/hash_impl.h:
../../../src/secp256k1/src/modules/rangeproof/pedersen_impl.h:
../../../src/secp256k1/src/modules/rangeproof/pedersen.h:
../../../src/secp256k1/src/modules/rangeproof/borromean.h:
../../../src/secp256k1/src/modules/whitelist/main_impl.h:
../../../src/secp256k1/include/secp256k1_whitelist.h:
../../../src/secp256k1/src/modules/whitelist/whitelist_impl.h:
../../../src/secp256k1/src/modules/surjection/main_impl.h:
../../../src/secp256k1/src/libsecp256k1-config.h:
../../../src/secp256k1/include/secp256k1_surjectionproof.h:
../../../src/secp256k1/src/modules/surjection/surjection_impl.h:
../../../src/ccan/ccan/crypto/sha256/sha256.c:
../../../src/ccan/ccan/crypto/sha256/sha256.h:
../../../src/ccan/ccan/endian/endian.h:
../../../src/ccan/ccan/crypto/sha256/sha256_sse4.c:
