# Why 0.1 + 0.2 ≠ 0.3

#### Assume you have 10 bits floating number
|Sign|Exponent|Fraction|
|:-:|:-:|:-:|
|1|4|5|

#### Decimal to Binary
$$
0.1\times 2=0.2\rightarrow 0_{1}\\
0.2\times 2=0.4\rightarrow 0_{2}\\
0.4\times 2=0.8\rightarrow 0_{3}\\
0.8\times 2=1.6\rightarrow 1_{4}\\
0.6\times 2=1.2\rightarrow 1_{5}\\
0.2\times 2=0.4\rightarrow 0_{6}\\
0.4\times 2=0.8\rightarrow 0_{7}\\
0.8\times 2=1.6\rightarrow 1_{8}\\
0.6\times 2=1.2\rightarrow 1_{9}\\
0.2\times 2=0.4\rightarrow 0_{10}\\
0.4\times 2=0.8\rightarrow 0_{11}\\
.\\
.\\
.\\
$$
#### From above method, we know that
$$
0.1=0.000\overline {1100}\\
$$
#### Hence for 10 bits register, there can only be 5 digits for fraction
$$
0.1=11001\times 2^{-4}\\
0.2=11001\times 2^{-3}\\
0.3=10011\times 2^{-2}\\
$$
#### For 0.1+0.2
$$
01100\times 2^{-3}\\
+\\
11001\times 2^{-3}\\
=\\
100101\times 2^{-3} \\
$$
#### Which is overflowed. Hence it can only save
$$
10010\times 2^{-2}\\
$$
#### What happened in register/cpu/computer
|Sign|Exponent|Fraction|
|:-:|:-:|:-:|
|1|0011|01100|
|1|0011|11001|
|1|0010|10010|
#### Binary to Decimal
$$
10010\times 2^{-2}=0.010010\\
010010\rightarrow 0\times 2^{-1}+1\times 2^{-2}+0\times 2^{-3}+0\times 2^{-4}+1\times 2^{-5}+0\times 2^{-6}=0.28125\neq 0.3
$$