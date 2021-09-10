# Why 0.1 + 0.2 ≠ 0.3

#### Assume you have 10 bits floating number
|Sign|Exponent|Fraction|
|:-:|:-:|:-:|
|1|4|5|

#### Decimal to Binary

![How to dicimal to binary](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20%5C%5C%200.1%5Ctimes%202%3D0.2%5Crightarrow%200_%7B1%7D%5C%5C%200.2%5Ctimes%202%3D0.4%5Crightarrow%200_%7B2%7D%5C%5C%200.4%5Ctimes%202%3D0.8%5Crightarrow%200_%7B3%7D%5C%5C%200.8%5Ctimes%202%3D1.6%5Crightarrow%201_%7B4%7D%5C%5C%200.6%5Ctimes%202%3D1.2%5Crightarrow%201_%7B5%7D%5C%5C%200.2%5Ctimes%202%3D0.4%5Crightarrow%200_%7B6%7D%5C%5C%200.4%5Ctimes%202%3D0.8%5Crightarrow%200_%7B7%7D%5C%5C%200.8%5Ctimes%202%3D1.6%5Crightarrow%201_%7B8%7D%5C%5C%200.6%5Ctimes%202%3D1.2%5Crightarrow%201_%7B9%7D%5C%5C%200.2%5Ctimes%202%3D0.4%5Crightarrow%200_%7B10%7D%5C%5C%200.4%5Ctimes%202%3D0.8%5Crightarrow%200_%7B11%7D%5C%5C%20.%5C%5C%20.%5C%5C%20.%5C%5C)
<!--
\\ 
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
-->

#### From above method, we know that
![Get 1st digits out](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%200.1%3D0.000%5Coverline%20%7B1100%7D%5C%5C)
<!-- 
0.1=0.000\overline {1100}\\
-->

#### Hence for 10 bits register, there can only be 5 digits for fraction
![Other dicimal to binary](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20%5C%5C%200.1%3D11001%5Ctimes%202%5E%7B-4%7D%5C%5C%200.2%3D11001%5Ctimes%202%5E%7B-3%7D%5C%5C%200.3%3D10011%5Ctimes%202%5E%7B-2%7D%5C%5C)
<!-- 
\\
0.1=11001\times 2^{-4}\\ 
0.2=11001\times 2^{-3}\\ 
0.3=10011\times 2^{-2}\\
-->

#### For 0.1+0.2
![0.1+0.2](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20%5C%5C01100%5Ctimes%202%5E%7B-3%7D%5C%5C%20&plus;%5C%5C%2011001%5Ctimes%202%5E%7B-3%7D%5C%5C%20%3D%5C%5C%20100101%5Ctimes%202%5E%7B-3%7D%20%5C%5C)
<!-- 
\\01100\times 2^{-3}\\
+\\
11001\times 2^{-3}\\
=\\
100101\times 2^{-3} \\
-->
#### Which is overflowed. Hence it can only save
![Fit in to register](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%2010010%5Ctimes%202%5E%7B-2%7D%5C%5C)
<!--
10010\times 2^{-2}\\
-->
#### What happened in register/cpu/computer
|Sign|Exponent|Fraction|
|:-:|:-:|:-:|
|1|0011|01100|
|1|0011|11001|
|1|0010|10010|
#### Binary to Decimal
![Convert back to binary](https://latex.codecogs.com/svg.latex?%5Cfn_jvn%20%5C%5C%2010010%5Ctimes%202%5E%7B-2%7D%3D0.010010%5C%5C%20010010%5Crightarrow%200%5Ctimes%202%5E%7B-1%7D&plus;1%5Ctimes%202%5E%7B-2%7D&plus;0%5Ctimes%202%5E%7B-3%7D&plus;0%5Ctimes%202%5E%7B-4%7D&plus;1%5Ctimes%202%5E%7B-5%7D&plus;0%5Ctimes%202%5E%7B-6%7D%3D0.28125%5Cneq%200.3)
<!-- 
\\
10010\times 2^{-2}=0.010010\\
010010\rightarrow 0\times 2^{-1}+1\times 2^{-2}+0\times 2^{-3}+0\times 2^{-4}+1\times 2^{-5}+0\times 2^{-6}=0.28125\neq 0.3
-->