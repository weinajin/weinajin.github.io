---
layout: post
title: Guidelines and Evaluation for Clinical Explainable AI
description: How to design and evaluate explainable AI in real-world high-stakes domains?
img: assets/img/publication_preview/graphicabstract_XAI_guideline.jpg
importance: 1
category: research
permalink: /clinical_xai_guideline.html

authors:
  - name: Weina Jin
    url: "https://weina.me"
    affiliations:
      name: Medical Imaging Analysis Lab, School of Computing Science, Simon Fraser University
  - name: Xiaoxiao Li
    url: "https://xxlya.github.io/xiaoxiao/"
    affiliations:
      name: Department of Electrical and Computer Engineering, The University of British Columbia
  - name: Mostafa Fatehi
    affiliations:
      name: Division of Neurosurgery, Vancouver General Hospital
   - name: Ghassan Hamarneh
    url: "https://www.medicalimageanalysis.com/"
    affiliations:
      name: Medical Imaging Analysis Lab, School of Computing Science, Simon Fraser University
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication_preview/graphicabstract_XAI_guideline.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/clinical_XAI_guideline.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

* The Clinical Explainable AI Guidelines provides design and evaluation criteria that supports the XAI design and evaluation for clinical use.
* Explanation form is chosen based on G1 Understandability and G2 Clinical relevance.
* Explanation method is chosen based on G3 Truthfulness and G4 Informative plausibility.
* Evaluations on two medical datasets showed existing heatmap methods met G1, partially met G2, but failed G3 and G4.
* We propose a novel problem of multi-modal medical image explanation and its metrics.

**Related Publication**
<div class="publications">
  {% bibliography -f papers -q @*[project=xai_eval]* %}
</div>

---

A precursor of this work is published at AAAI 22 Social Impact Track:

# <a name="AAAI22"></a> Evaluating Explainable AI on a Multi-Modal Medical Imaging Task: Can Existing Algorithms Fulfill Clinical Requirements?

<div class="publications">
  {% bibliography -f papers -q @*[project=xai_eval_aaai]* %}
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/publication_preview/Poster_AAAI22_Evaluating_ExplainableAI_Jin_Li_Hamarneh.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


The overarching problem is: how to design and evaluate explainable AI in real-world high-stakes domains. We propose a novel problem in the medical domain, multi-modal medical image explanation, and use it as an example to demonstrate our evaluation process that incorporates both technical and clinical requirements.

Our evaluation is on the commonly used heatmap methods for end-user understandability. We cover both gradient and perturbation-based methods. 

Based on the explanation goals in real-world critical tasks, we set two primary evaluation objectives on faithfulness and plausibility. Three evaluations on faithfulness show all the examined algorithms did not faithfully represent the AI model decision process at feature level. And plausibility evaluation results show that users’ assessment of how plausible explanations are, is not indicative for model decision quality. 

Our systematic evaluation provides a roadmap and objectives for the design and evaluation of explainable AI in critical tasks. 

---

Link to the previous work-in-progress paper: [One Map Not Fit All](https://weina.me/one-map-not-fit-all.html).


<div class="publications">
  {% bibliography -f papers -q @*[project=one_map]* %}
</div>