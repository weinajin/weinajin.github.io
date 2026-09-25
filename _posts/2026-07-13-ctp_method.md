---
layout: post
title: Methods of Critical Technical Practice
date: 2026-07-13 10:00:00
description: Methods of critical technical practice.
tags: research
permalink: /ctp_method/
---

# Methods of Conducting Critical Technical Practice
{:.no_toc}

One goal of critical technical practice is to have collective actions in the technical community and the civil society to accumulate collective power to check and balance power from the for-profit sector, which is the root problem in technical practice. To do so, we aim to accumulate and summarize experience, knowledge, and methodology during our collective actions of critical technical practice, which will be presented here. This is an ongoing work. 

For the outcome of this work, we aim to provide practical tools and methods to technical and non-technical audiences including general public to critically inspect a given technology. Technical audiences can use the tools and methods in their own technical work. And stakeholders and the public can use the tools and methods to effectively oversight and criticize technologies. 
The outcome format can be tutorials, courses, reports, checklists, etc. in both technical and non-technical versions. 

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## A preliminary method of conducting critical technical practice 

By Weina Jin, 2026-05-04

I provide a preliminary method based on my experience in conducting critical technical practice for three years. The results include the following research papers:

- XAI-plausibility: [Why is plausibility surprisingly problematic as an XAI criterion?](https://arxiv.org/abs/2303.17707) Weina Jin, et al. 2025.  
- AI-imagination: [AI for Just Work: Constructing Diverse Imaginations of AI beyond "Replacing Humans"](https://arxiv.org/abs/2503.08720). Weina Jin, et al. 2025.
- Ethical-MISyn: [Ethical Medical Image Synthesis](https://arxiv.org/abs/2508.09293). Weina Jin, et al. 2025.
- XAI-power: [Making Power Explicable in AI: Analyzing, Understanding, and Redirecting Power to Operationalize Ethics in AI Technical Practice](https://arxiv.org/abs/2510.10588). Weina Jin, et al. 2025.  

### My approach 

A straight forward approach I use is:

1. **Grasp the doubt** that you raised, no matter how trivial or vague it can be 

    For example, the [XAI-plausibility](https://arxiv.org/abs/2303.17707) work starts from an uncomfortable feeling I had when interviewing a doctor in our [clinical user study](https://www.sciencedirect.com/science/article/abs/pii/S0933365723002658), where the doctor mentioned he would trust the AI prediction but only I knew that the prediction was an incorrect one. I grasped my doubt and realized that the popular evaluation metric for explainable AI of plausibility is problematic. Then I began to develop the [XAI-plausibility](https://arxiv.org/abs/2303.17707) work. 
    
    From this work, especially Theorem 2, I began to realize that it actually states a totally different objective of AI, compared to the existing mainstream objective of AI to outperform humans. This doubt about the mainstream objective of AI motivated me to closely and critically inspect it, which resulted in the [AI-imagination](https://arxiv.org/abs/2503.08720) paper. 
    
    The [Ethical-MISyn](https://arxiv.org/abs/2508.09293) work started from a discussion where I doubted about the clinical realism and the lack of incorporating enough clinical knowledge of the synthetic images. Then it gradually becomes the current paper to discuss how to ethically develop medical image synthesis techniques. 

2. Given the statement you doubt about, **identify its underlying assumptions and justifications for the assumptions**

    Basically this process is to keep asking “why”: why this statement that I doubt about is generally accepted in the technical community? What are the underlying rationales that justify it? Then what are the underlying assumptions for these rationales? Etc. This process is similar to the scientific inquiry process that to continue ask why for a phenomenon. 
    
    By doing this recursive reflection, we gradually expose the fundamental assumptions about our values, beliefs, and worldviews that are usually running in the background, are taken for granted, and haven’t been critically inspected.
    
    For example, the [XAI-plausibility](https://arxiv.org/abs/2303.17707) work targets and refute the common rationales that support using plausibility to evaluate XAI algorithms. The [AI-imagination](https://arxiv.org/abs/2503.08720) work provides counterarguments that defend against the prevailing assumptions of the outperforming human objective of AI. 

3. Conduct a **critical examination** on the identified assumptions and justifications.

    We can use multiple approaches to critically examine the assumptions and justifications. For example, by referring to the existing knowledge that has debated on the subject (which may or may not be within the technical domain), by conducting empirical studies and computational experiments, or by keeping it as an open question and no longer take the assumptions and justifications at their face value, etc. 
    
    For example, in the [XAI-plausibility](https://arxiv.org/abs/2303.17707) work, we have logic reasoning, proofs, empirical data analysis, and simulation experiment to construct our thesis. 
    In the [AI-imagination](https://arxiv.org/abs/2503.08720) work, we draw on multidisplinary theories from epistemology and the philosophy of science, social science, feminist and critical theory, work justice, and economics to construct our counterarguments.

### Assumptions of my approach 

The underlying assumption of this approach is: 

By being able to doubt the existing technical practices and their underlying assumptions, we assume that technical practice and development are not deterministic and inevitable processes driven by the natural course of technical advancement, but are shaped by complex factors. I illustrate the complex factors in this picture:

![sociotechnical_system](../assets/images/tree.jpg)


Technical practices are leaves of the tree, and the resulting techniques are the fruits, seeds, or oxygen that trees produce. Technical practices and the resulting technologies are shaed by the institutional arrangements (the tree structure of trunks and branches) in the technical community, including:
- The funding system, which determines what research gets funded and what research does not get funded.
- The publication system, which determines what research gets published and what research does not get published.
- The education system, which determines what knowledge and skills get taught and what knowledge and skills do not get taught.
- The incentive system such as career advancement, which determines what behaviors get rewarded and what behaviors do not get rewarded.

It is evident that the institutional arrangements are social processes and not pure scientific or engineering processes. Technical development and technical practices are deeply entangled with and inseparable from the institutional arrangements, just like the leaves and fruits cannot get rid of their relationship with the whole tree. The institutional arrangements are also shaped by a larger social system, just like the tree trunk are connected with their roots. The larger social system involves power structures, social assumptions, values, and worldviews. These are visualized as the roots of the tree, because they are usually running in the background to construct our basic beliefs about the world and society. 

The tree crown and trunks are visible part in technical community. However, if we don't include the roots in our understanding of technical practice, we can implicitly assume that the tree crown and trunks are given and their growth are the natural process out of the scientific or engineering advancement. If we don't have the awareness and power to shape the roots, then the roots can be shaped by unjust power (because power is a salient feature of a social process) that may be against our initial intentions of conducting technical practice, and we may still wrongly assume that our technical practice is out of a natural, pure scientific process. This is the process of manipulation by unjust power. 

This view on technical practice is called the sociotechnical system and co-production. If we regard the tree as the sociotechnical system of technologies, then the surrounding ecosystems of the tree represent the society. The tree and its surrounding ecosystems co-produce and co-shape each other.

