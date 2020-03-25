---
title: File Encryption
order: 6
duration: 5
---

If you need to provide some protection to your data, you can encrypt them. In this section, we are going to do some exercises to encrypt and decrypt files.

### Install encryption tools
```
$sudo apt-get install ccrypt
```

### Encrypt File

1. Create a test file.
```
$touch test.file
$echo "abcdefg" >> test.files
$cat test.files
abcdefg
```
2. Encrypt the test file and enter `123456` as the encryption key.
```
ccencrypt test.file
Enter encryption key: 123456
encryption key: (repeat) 123456
```
3. Check the content of the file.
```
cat test.file.cpt
??EQ_???B?qH??zC????5??
```

### Decrypt the file
```
$ccdecrypt test.file.cpt
Enter decryption key: 123456
cat test.file
abcedfg
```