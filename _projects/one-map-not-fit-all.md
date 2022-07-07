---
layout: distill
title: One Map Does Not Fit All
description: Evaluating AI Explanation on Multi-Modal Medical Image Task
img: assets/img/multimodal_xai.png
category: research
importance: 2
permalink: /one-map-not-fit-all.html

---

## Authors

Weina Jin, Medical Imaging Analysis Lab, School of Computing Science, Simon Fraser University

Xiaoxiao Li, Department of Electrical and Computer Engineering, The University of British Columbia

Ghassan Hamarneh, Medical Imaging Analysis Lab, School of Computing Science, Simon Fraser University

- <a href="https://arxiv.org/abs/2107.05047" target="_blank">Arxiv Paper</a>, <a href="https://youtu.be/J-ceZ20cBJk" target="_blank">Video paper presentation</a>, <a href="https://docs.google.com/presentation/d/1cQbQOxqihgm5QpdeUGFdabnY9ulVnRt2D7GtYbK_Kv0/edit?usp=sharing" target="_blank">Slides</a>
- The work-in-progress paper is accepted by <a href="https://sites.google.com/view/imlh2021/" target="_blank">ICML 2021 Workshop: Interpretable Machine Learning in Healthcare</a> as a spotlight paper.
- The full paper is in: [Guidelines and evaluation for clinical explainable AI](https://weina.me/clinical_xai_guideline)


![Multi_modal_image_explanation](/assets/img/poster_One Map Does Not Fit All_Evaluating Saliency Map Explanation on Multi-Modal Medical Images.png)



## Introduction
Being able to explain the prediction to clinical end-users is a necessity to leverage the power of AI models for clinical decision support. For medical images, saliency maps are the most common form of explanation. The maps highlight important features for AI model's prediction. Although many saliency map methods have been proposed, it is unknown how well they perform on explaining decisions on multi-modal medical images, where each modality/channel carries distinct clinical meanings of the same underlying biomedical phenomenon.

Understanding such modality-dependent features is essential for clinical users' interpretation of AI decisions. However, we don’t know whether existing saliency maps can still fulfill the particular clinical requirements on multi-modal images. Therefore, we would like to propose this clinically-motivated requirement to the technical community: The need for modality-specific explanations that are aligned with clinical prior knowledge, or simply: multi-modal explanation.


## Methods

As a primary step toward this direction, in this work, we propose evaluation metrics and conduct experiments on existing saliency map methods regarding their multi-modal explanation property. We included 16 commonly used methods in the evaluation, that cover activation-based, gradient-based, and perturbation-based explainable AI approaches.

The evaluation was conducted on a brain tumor classification task and two datasets: one is Brats dataset which is from real-patients, and the other is a synthetic dataset where we have a better control of the ground-truth.

With the generated saliency maps, we first conducted a doctor user study to seek doctor’s clinical requirements and rating on the saliency maps generated on multi-modal MRI.

Doctors tend to prioritize the important modality for prediction given the task, and they expect the AI to correctly localize the discriminative features.

To fulfill such clinical requirements, we propose the computational metric **MSFI (Modality-Specific Feature Importance)** that encodes the clinical requirements on modality prioritization and modality-specific feature localization.


## Results

Our evaluations show that although most saliency map methods captured modality importance information in general, most of them failed to highlight modality-specific important features consistently and precisely.


## Conclusions
We propose the clinically motivated problem to the technical community: Explain on multi-modal medical images the clinical problem of explaining multi modality medical images to the technical community.

We also propose the evaluation metric MSFI and conducted experiments to evaluate saliency maps regarding their abilities to fulfill clinical requirements. Based on MSFI metric, there are discrepancies between current saliency map methods and the clinical requirements for multi-modal image explanation.

## Significance

The application of MSFI could help to evaluate and select the saliency map method before clinical deployment, and  also provides clinical insights for the proposal of new AI method, such as those that incorporate clinical requirements on multi-modal image explanation into the model training.



