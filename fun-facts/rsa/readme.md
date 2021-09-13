# Why people can have secret chat even when they tell everybody how they cipher their message?
Short answer, they use a mathematics algorithm called RSA.

## How does RSA works?
Imagine there are some magic keys pair, if you use one key to lock a box, you have to use another to unlock.  They can do it both ways.  We called it public key and private key.<br>
If you lock your box with public key, you have to unlock it with private key, if you lock your box with private key, you have to unlock it with your public key.

## But how do people use those keys?
Imagine you use the private key to cipher the message, and then you send the message to me along with the public key.  Then I can use your public key to decipher your message.<br>
If I want to reply you with some ciphered message, all I need to do is to cipher my message with your public key you send me and then send the cipher back to you.<br>
After you received the message, all you need to do is to use your private key to decipher my message.

## How can such magical keys exists?
It is actually all about mathematics.
1. Pick 2 random prime number and call it p and q.
2. Where ![P≠Q](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20P%5Cneq%20Q) and let another variable N where ![N=p times q](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20N%3Dp%5Ctimes%20q).
3. Pick an integer e where ![1 < e < (p-1)(q-1)](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%201%20%3C%20e%20%3C%20%28p-1%29%28q-1%29)
4. Let k be any integer
5. Then the public key will be e and private key will be d.  Where ![d=\frac{k\times (q-1)+1}{e}](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20d%3D%5Cfrac%7Bk%5Ctimes%20%28q-1%29&plus;1%7D%7Be%7D)

# Example
If ![p=53,q=59,k=2,e=3](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20p%3D53%2Cq%3D59%2Ck%3D2%2Ce%3D3)
Then ![N=53\times 59=3127,d=\frac {2((59-1)(53-1))+1}{3}=2011](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20N%3D53%5Ctimes%2059%3D3127%2Cd%3D%5Cfrac%20%7B2%28%2859-1%29%2853-1%29%29&plus;1%7D%7B3%7D%3D2011)
Where Public key will be 3 and private key will be 2011
|Encrypt|Decrypt|
|:-:|:-:|
|Message:89|Cipher:1394|
|![C=89^3mod 3127\\C=1394](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20%5C%5CC%3D89%5E3mod%203127%5C%5CC%3D1394)|![M=1394^{2011}mod 3127\\M=89](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20%5C%5CM%3D1394%5E%7B2011%7Dmod%203127%5C%5CM%3D89)|
|Cipher:1394|Message:89|