---
title:  A friendly introduction to Convolutional in CNN
date:   2018-08-05 10:00:00
comments: true
description: Convolution is one of the most mysterious words for a novice deep learner. It is just a fancy operation of the weighted sum.
tags: technical
---


[Notebook version]( https://github.com/weinajin/ml_notes/blob/master/friendly_intro_to_convolution.ipynb)


# A friendly introduction to *convolution* in CNN

"Convolution" is one of the most mysterious words for a novice deep learner. The first time when I opened [wikipedia on convolution](https://en.wikipedia.org/wiki/Convolution) and tried to make sense, I just got dizzy and lost. After a long time mingling with CNN and a bit with signal processing, I finally figure it out a little better. In my current understanding,

### the convolution is just a fancy operation of the weighted sum.

And here is the whole story:

## 1. A very simple version of *weighted sum*

To see what is a weighted sum, Let's begin with the following expression, which may remind you of algebra in high school:

$$ y = w_1 \times x_1 + w_2 \times x_2 $$

Pretty easy, right? We give $x_1$ and $x_2$ different weights of $w_1$ and $w_2$, because in our mind, we value $x_1$ and $x_2$ differently. For example, if you want to calculate the final course score from the midterm and final exam, the weights reflect how important you think each exam is.

**Weights reflect how important we think a variable is numerically**, in a numerical perspective. Here, by injecting our thoughts, we are bringing in new perspectives into the original *flat* world (since the original weights are : $ w_1 = 1 $, $ w_2 = 1 $).

And **sum is just an operation that condenses our deliberate thoughts on each variable into one final value** (like the final course score).

<!--- As a side note, I'd like to regard it as the projection from high dimensional space (where all x_i reside) to 1 dimension (y is just a dot). But if you don't understand this paragraph, you can go ahead to ignore it. It will have little to do with the whole story.) --->


## 2. The *weighted sum* with more $x$

If we have more than two, say $n$ number of $x$, then the above formula can be written as:

$$ y = w_1 \times x_1 + w_2 \times x_2 + w_3 \times x_3 + ... + w_n \times x_n $$

Or, a more condensed version:

$$ y = \sum^n_{i=1} w_i \times x_i $$

This works totally well when the number of $x_i$  is small. But what if the number of $x_i$ becomes large, say $1,000,000$, or even infinite, how do we assign each $x_i$ a weight wisely?

Here is the trick:

Instead of using a single number $y$ to describe $x$ sequence, now we use a group of numbers $\vec{y}$. That's because a single number compresses the information of $x$ too much, so that it could not reflect its character very well.

Now since we are dealing with a whole bunch of $x$s and $y$s, we will use $\vec{x}$ and $\vec{y}$ instead. Don't be intimidated by the fancy new notation. They are called "vector", which is merely a sequence of numbers grouped together.

To generate a sequence of numbers $\vec{y}$ out of $\vec{x}$, there are some different approaches. Let's explore one by one.

### 2.1 Same weight for all $x_i$


The easiest approach is to assign a signal weight $w$ to all $x_i$. It is equal to $\vec{y} = w \times \vec{x} $, where $w$ is a single number.

We will evaluate this approach from the following two aspects:

|         | Same weight for all $x_i$ |
|:---|:---|
| $w$ is simple and compact          | Yes |
| $w$ adds information on how we value different value in $\vec{x}$     | No      |


$w$ is quite simple: it is just a number. However, it adds little information from "our perspective". It only scales the original $\vec{x}$, and could not differentiate the fine details inside $\vec{x}$.

<!--to treating each $x_i$ equally, therefore doesn't add our additional thoughts on different characters in $x$. -->

Here is an example:


```python
import numpy as np
import matplotlib.pyplot as plt
x = np.sin(np.linspace(-2* np.pi, 2*np.pi, 200))
plt.plot(x)
plt.ylim(-2.5, 2.5)
plt.xlabel("The sequence of x")
plt.ylabel("The value of x")
plt.show()
```


![png](/images/friendly_intro_to_convolution_files/friendly_intro_to_convolution_1_0.png)


We draw $\vec{x}$ as a sequence of numbers. Now if we multiply each $x_i$ with a weight, say $2$, then the output $\vec{y} $ will look like this:


```python
plt.plot(x)
#plt.plot(2*np.ones(x.shape))
plt.plot(2 * x)
plt.plot(np.convolve(x, 2))
plt.ylim(-2.5, 2.5)
plt.legend(['x', 'w * x', 'convolve with 2'], bbox_to_anchor=(1.05, 1), loc=2)
plt.xlabel("Sequence")
plt.ylabel("Value")
plt.show()
```

![png](/images/friendly_intro_to_convolution_files/friendly_intro_to_convolution_3_0.png)


As you can see, the green line $\vec{y} $ has exactly the same "pattern", i.e.: it has peaks and valleys in the same position as in $\vec{x}$. It stretched $\vec{x}$ but that's it.

You may notice I actually draw 3 lines. The graph only shows two lines because the lines of "multiply by 2" and "convolve with 2" are overlapped. I'll talk about it later. But now you see we begin to touch *convolution* a little bit after a long reading!

### 2.2 Distinct weight for each $x_i$

Another extreme is to assign each $x_i$ with a distinct weight. For every resulting point $y_i$, it is the product of $w_i$ and $x_i$.

$$ y_i = w_i \times x_i $$

Now $\vec{w}$ becomes a sequence of numbers with the same length as $\vec{x}$. The weight $\vec{w}$ reflects our thoughts on each $x_i$ in much finer details. This is similar to what we do in the first example of calculating the final score of a course, but here we didn't apply the summation.

To take another example, here we assign the weight as a sequence of numbers on a straight line, as the orange line shown in the picture. When we multiply each $w_i$ with $x_i$, we get the resulting $\vec{y}$ as the green line. Even with a very simple form of $\vec{w}$, the resulting $\vec{y}$ can do a very good job in incorporating the information from both $\vec{w}$ and $\vec{x}$.


```python
x = np.sin(np.linspace(0, 20*np.pi, 400))
w = np.arange(400)/400
plt.plot(x)
plt.plot(w)
plt.plot(np.multiply(x, w))
plt.legend(['x', 'w', 'y'], bbox_to_anchor=(1.05, 1), loc=2)
plt.xlabel("Sequence")
plt.ylabel("Value")
plt.show()
```


![png](/images/friendly_intro_to_convolution_files/friendly_intro_to_convolution_6_0.png)


This approach has some real-world applications, such as [Amplitude modulation](https://en.wikipedia.org/wiki/Amplitude_modulation). Depending on the specific problems, if we want to apply this approach to identifying peaks and valleys, it will become unpractical, since we will need to deliberately design all the weight sequence according to all the domain of $\vec{x}$. It is also redundant and costly to express and store $\vec{w}$.  

|         | Same weight for all $x_i$ | Distinct weight for each $x_i$   |
|:-------------|:-------------:|:-----:|:-----:|
| $w$ is simple and compact          | Yes | No |
| $w$ adds information on how we value different value in $\vec{x}$     | No      |  Yes |

### 2.3 Repetitive weight

An improvement to the above approach, is to express $\vec{w}$ in a repetitive manner, i.e.: to repeat a short sequence $\vec{w}$ over $\vec{x}$.

In this way, the $\vec{w}$ is expressed by a short sequence of numbers, meanwhile still carry out our thoughts over the raw data $\vec{x}$.

|         | Same weight for all $x_i$ | Distinct weight for each $x_i$   |Repetitive weight|
|:-------------|:-------------:|:-----:|:-----:|
| $w$ is simple and compact          | Yes | No | Yes|
| $w$ adds information on how we value different value in $\vec{x}$     | No      |  Yes | Yes|



```python
n = 50
x = np.sin(np.linspace(0, 20*np.pi, 400))
w = np.tile(np.concatenate((np.arange(n), np.flip(np.arange(n), axis = 0)), axis = 0), int(200/n))/n/2
plt.plot(x)
plt.plot(w)
plt.plot(np.multiply(x, w))
plt.legend(['x', 'w', 'y'], bbox_to_anchor=(1.05, 1), loc=2)
plt.xlabel("Sequence")
plt.ylabel("Value")
plt.show()
```


![png](/images/friendly_intro_to_convolution_files/friendly_intro_to_convolution_9_0.png)


In this example, we repeat $\vec{w}$ four times. We notice that $\vec{y}$ (in green) has the largest peaks when the peaks of $\vec{w}$ overlap with the one of $\vec{x}$.

However, in the above example, I set the length of $\vec{w}$ deliberately to match the shape of $\vec{x}$. Thus the interesting pattern of the $\vec{w}$ can only fall on the specific segment of $\vec{x}$. The real-world data are way more complex than the sinusoid. How to make $\vec{w}$ cover the whole sequence of $\vec{x}$ without missing any potential interesting combination of $ w \times x$?

### 2.4 Repetitive weight with smaller stepsize

The problem with the previous approach is that its step size is too large. It equals the length of $\vec{w}$. We can solve the problem by shortening the stepsize. Let's push the stepsize to another extreme, say $1$ in case that $x$ is discrete.

Concretely, we iteratively use each number in $\vec{w}$ as the start point, and periodically repeat $\vec{w}$ to get the same length as $\vec{x}$, then we multiply the two sequence element-wise.

Wait a minute, in this way, since we repeat the process many times, we will get many $\vec{y}$, how do we summarize the multiplied information.

So far, we only discussed different scenarios of the **weight**, we still didn't talk much about the **sum**. Now it's time to let the **sum** shine!

I thought about adding all the resulting $\vec{y}$ element-wise, but then I realized the result equals to add all the elements of $\vec{w}$ together, then multiply the number with $\vec{x}$. It becomes the case in Section 2.1, which destroyed the information we extracted by shifting the start point of $\vec{w}$.

The real trick of **convolution** is:

we **sum** over the sequence of $\vec{w}$, right after multiplying $\vec{w}$ with the corresponding $x$ segment.

The resulting output from the sum will be a single number $y_n$:

$$ y_n = \sum_{i=0}^{|w|} w_i \times x_{n + i} $$

where $n$ is the start position of $\vec{w}$ on $\vec{x}$.

After calculating all the $y_n$ along the sequence of $\vec{x}$, we just complete the convolution operation.  

$$ y(n) = (x * w)(n) = \sum_{i=0}^{|w|} w_i \times x_{n + i} $$


where the $ * $ symbol denotes the convolution operation, and $y$ is denoted as a function of the sequence $n$.

Remember in the beginning, I mentioned **sum is an operation that condenses our deliberate thoughts on each variable into one final value**. Instead of summing over the whole sequence as above, the convolution sum over the area covered by the weight size. In this way, the sum operation won't lose much information, and concisely represents the combined information from $w$ and $x$ patch. Moreover, since the weighted sum is actually the dot product of $w$ and the local $x$ patch, it is a similarity measure of the two, where a larger weighted sum represents a detected pattern on $\vec{x}$ that corresponding to the pattern of $\vec{w}$. Thus, we can design weights with the patterns we want and use them to detect if similar patterns exist on the target data $\vec{x}$.


The formula is similar to the one in [Discrete convolution in Wikipedia](https://en.wikipedia.org/wiki/Convolution#Discrete_convolution). Except for that in the wikipedia's formula, it is $x_{n - i}$ instead of $x_{n + i}$. The minus sign used to confused me a lot, until I found out when we talk about **convolution** in CNN, we actually talk about **cross-correlation**, where it uses $x_{n + i}$. The **convolution** in math uses $x_{n - i}$, where the weight is flipped. The difference only matters when writing proofs, but as regarded to CNN implementation, people just use $x_{n + i}$ and call it **convolution**. ([Ref: Deep Learning book p. 324](https://www.deeplearningbook.org/contents/convnets.html))

That's almost the whole story of **convolution**.

But what does it to do with convolution and image, you may ask. The above story tells us how to calculate convolution with 1-dimensional data. The convolution in CNN for images is calculated exactly in the same way, we just extend the data and weights to 2 dimensions.


$$ Y(m, n) = (X * W)(m, n) = \sum_{i} \sum_{j} W_{i , j} \times X_{m + i, n + j} $$


That's it!

The convolution is really a smart, simple and powerful operation. It uses a small size of weight, which is easy to express. I'd like to think the weight as a searchlight that focuses on one small patch of $X$ at a time. While the "light" shines on one image patch, it synthesizes the information of the image data with our values on different spatial location, by using the **weighted sum** operation. The convolved output is a group of such **weighted sum** aligned with the shape of input data $X$. This is my intuition on the strength of convolution. More advantages of convolution include **sparse interactions**, **parameter sharing**, and **equivariant representations**. These contents are described in much details in [Ch 9.2 of Deep Learning book](https://www.deeplearningbook.org/contents/convnets.html).

My next notebook will introduce the implementation and a variety of convolutions in CNN. See you later!

---

This article reflects my current understanding of *convolution* in CNN. Please let me know if you identified any errors or have any questions: [@weina_jin](https://twitter.com/weina_jin) or by [creating an issue](https://github.com/weinajin/ml_notes/issues/new). Thanks for your reading &#x1F60E;
