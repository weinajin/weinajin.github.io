---
layout: page
title: Neurosurgeon User Study
description: A clinical study with neurosurgeons to assess the clinical utility of AI and its explanation
img: assets/img/publication_preview/brain_ai.png
category: research
comments: true
date:   2024-01-17
importance: 2
permalink: /brain-ai.html
---

# Blog post on this paper


After more than two years of work, our paper on the clinical utility of AI and explainable AI has finally been published in the Artificial Intelligence in Medicine journal! I write this blog post to summarize our insights and thoughts from this work.

<h5>Related Publication</h5>
<div class="publications">
  {% bibliography -f papers -q @*[project=brain_ai_clinical_study]* %}
</div>

For healthcare professionals, the significance of this study is that we should use rigorous clinical evaluation method and criteria (such as the phases in clinical trials) to critically assess the so-called “AI outperforming doctors” claims. For AI researchers, the value of this research lies in presenting new evaluation metrics and directions for the development of AI algorithms for real-world scenarios.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rhLQQsc8Z8Y?si=g9VlclJt_Dveo8ZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


Using the framework of clinical research, many studies claiming that AI surpasses doctors are actually pre-clinical or at most phase 1 clinical studies. If such results are taken seriously and assumed to be applicable in clinical settings, it is akin to treating results from a phase 1 clinical study as equivalent to phase 3 results – an ineffective approach. The significance of real-world phase 2 or 3 clinical trial results is entirely different from that of pre-clinical or phase 1 laboratory studies. Therefore, regardless of how superior AI appears to be compared to doctors, these studies can at best be considered as phase 1 clinical study. Without support from higher-level clinical research evidence, these are merely boastful claims from AI people, lacking practical value.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/4phases_evaluating_AI_in_glioma.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Figure 1. The four phases of evaluating the clinical utility of AI in glioma imaging. Image is from our previous publication: [Artificial intelligence in glioma imaging: challenges and advances](https://arxiv.org/pdf/1911.12886.pdf). J Neural Eng. 2020


In this work, we propose that effective clinical studies to test the utility of AI should consider real clinical usage scenarios, which are doctors in collaboration with, not being replaced by, AI. In other words, we use the premise that when involving AI in clinical settings, AI is always used in a collaborative or supportive setting, not in a full automation setting. Under this new premise, studies that claim “AI outperforming doctors” does not follow the real-world clinical scenarios of doctor-AI collaboration, and are thus regarded as pre-clinical or phase 1 studies, which lacks evidence to prove the utility of AI in real-world scenarios.  

With the doctor-AI collaboration setting, we conducted the first phase 2 clinical study in neuro-oncological setting. Being phase 2 study means it is conducted in a small sample to test the primary efficacy of the intervention. The study design was straightforward: we recruited 35 neurosurgeons in Canada, and each read 25 MRI scans to grade glioma, a type of brain tumor. We recorded doctors’ task performances in three conditions: doctors reading the MRI alone, assisted by AI predictions, and assisted by AI predictions and explanations.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/neurosurgeon_user_study_result1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Figure 2. Result on doctors' task accuracies in the three conditions.

As shown in Figure 2, compared to doctors working alone (82.5%), doctors’ performance was indeed higher when assisted by AI predictions (87.7%), which was statistically significant. However, the improvement in doctors' performance did not surpass the original performance of AI (88.0%); in other words, doctors + AI could at most achieve parity with AI alone, but could not surpass it. This result indicates that while AI does help improve doctors’ performance, further data analysis (Figure 3) revealed that the improvement in doctors' performance was mainly due to doctors’ judgments aligning more with AI. In other words, the observed enhancement in doctors' performance when collaborating with AI was simply because doctors relied more on AI judgments (i.e.: overreliance). If one were to continuously agree with AI judgments, even a lay person could achieve comparable performance to AI, and outperform other doctors. In this way, the utility of human+AI is no better than AI alone. The involvement of human is purely redundant step, and the true value of human input are not fully realized. (Once again, based on the premise, fully automated AI is not applicable.) Therefore, in real clinical scenarios, merely improving doctors' performance without outperforming the best performance of AI and doctor, is not very useful.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/neurosurgeon_user_study_result2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Figure 3. Result on doctors' decision change patterns from reading MRI alone to being assisted by AI.

To enable doctors’ performance when assisted by AI outperforming the best performance of AI and doctor (called “complementary human-AI performance”), merely providing doctors with a prediction from AI is insufficient regarding the predictive tasks such as classification and regression; additional information from AI is needed to assist doctors’ judgments. In this study, the additional information was the AI’s explanation of why AI predicts such output. We utilized an explainable AI technique, “SmoothGrad”, selected from 16 other techniques based on how truthful the technique can explain the AI model’s decision. However, the study result showed that the additional assistance of AI explanations did not change doctors’ performance, with the same accuracy of 88.5%. This is due to doctors changed the same number of their judgments correctly and incorrectly (Figure 4).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/neurosurgeon_user_study_result3.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Figure 4. Result on doctors' decision change patterns from being assisted by AI to being assisted by explainable AI.

To understand why AI explanations were ineffective, qualitative data played a crucial role. By interviewing five doctors, we found out that current explainable AI technologies have significant shortcomings, unable to provide reliable information to help doctors accurately determine when to accept or reject AI advice. This finding is summarized in the discussion section of the article, with more detailed analysis and summarized clinical guidelines available in our previous publication: "[Guidelines and evaluation of clinical explainable AI in medical image analysis](https://weina.me/clinical_xai_guideline)".

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/neurosurgeon_user_study_result4.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Figure 5. Qualitative result on doctors' comments on explainable AI.


This experiment confirms that current AI technologies cannot enable doctors to achieve complementary human-AI task performance. Given that AI should be used as a clinical decision support aid and not fully automated, not achieving complementary human-AI performance render AI useless. My next work demonstrates the theoretical conditions to achieve complementary performance. However, designing AI technology to achieve complementary performance is a new challenge, and it may even be another important AI evaluation metric comparable to current algorithmic evaluation. This research also indicates that, regardless of how advanced AI is, if AI cannot provide users with the utility to achieve complementary human-AI performance, it is futile.

This simple clinical study reminds healthcare professionals: when engaging in AI-related research, it is important not being misled by the technical paradigm in the AI field. When we examine the history of medical or computer science disciplines, it becomes evident which field is relatively more mature with more refined methods. The advantage of doctors lies in using the unique clinical experience to question, critically inspect, and improve the technical practice from problem formulation to evaluation, and enabling technology to better understand and adapt to clinical needs. 

For technical professionals, this study reminds us that in the process of technical development from problem identification to algorithm evaluation, many presumptions are made about the real-world problems. These presumptions, big or small, embed our understandings, values, interests, beliefs, and biases. Without critical examination, these presumptions may be erroneous. And to understanding more about the problem to properly adjust the presumptions require us to engage deeply in the real-world problem by talking with and collaborating with end users. In fact, this work is a close collaboration between clinicians and AI researchers. As we see in this study, different presumption lead to different problem formulations and technical solutions. We abandon the common presumption in AI field that AI is for fully automation and replace humans, we used a more realistic presumption of human-machine collaboration, and discovered problems that cannot be resolved under current AI algorithm optimization and presumptions. New optimization problems for AI algorithms have also emerged from this presumption.


## Why do we use the premise of human-AI collaboration, not AI replacing humans and achieving full automation?

In real-world tasks that involve interactions with reality or people, full automation with AI is not feasible. From the algorithmic perspective, the current paradigm of AI relies on learning pattern recognition from finite training datasets. This inductive learning paradigm cannot fully address the endless out-of-distribution and unpredictable possibilities in real-world settings. For example, autonomous vehicles cannot fully replace drivers. 

In low-risk scenarios such as customer service, attempting to replace humans with AI may result in the “so-so AI”, in which the user experience is significantly worsened because of the gap between machine learned patterns and the reality. (Think about your experience with the AI chatbot when seeking customer service…) The “so-so AI” is from the book "[Power and Progress: Our Thousand-Year Struggle Over Technology and Prosperity](https://www.google.ca/books/edition/Power_and_Progress/BV2HEAAAQBAJ?hl=en&gbpv=0)", which has a detailed analysis of the negative economical and social consequences due to full automation. More negative social consequences are involved with full automation, such as the “echo chamber effect” that biases in the autonomous system may be intensified because the poor gets poorer, and there is no mechanism to detect and correct such biases for the fully automated system.  

In high-risk scenarios like healthcare, education, finance, in addition to the above negative consequences, because of the inherent limitation of the existing AI and the task risks that related to humans or money, full automation poses greater legal and liability risks and cannot replace human workers. 


# Prior recruitment information

*The recruitment phase is ended. Thank you very much for your interest!*

Study Title:

**A usability study to assess the clinical utility of artificial intelligence and explainable artificial intelligence on brain tumor classification tasks**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OZ-vEunRwos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



As a doctor, are you interested in using artificial intelligence in your practice? 

Have you doubted the clinical utilities of AI, and whether AI can actually augment your work performance? 

To find out the answer, we would like to invite you to our research: 

- This research is an online survey 
- You will read 25 MRIs for patients with gliomas, and give your judgment on the tumor grading without and with AI assistance. 
- This AI can also explain its decision by highlighting the important regions on MRI, with more red indicate the area is more importance for AI’s decision.
- The survey will take an average of 40 min to a maximum of 1hr. 
- You will be compensated with a Amazon gift card of $50 CAD (or equivalent value) for your time and efforts. 
- Your valuable input can help the medical AI community to shape the future medical AI technologies!
- The study is conducted by Dr. Weina Jin, Dr. Fatehi and Prof. Hamarneh, computer scientists and neurosurgeons, and is approved by the Research Ethics Board of Simon Fraser University and The University of British Columbia, Ethics Number: H20-03588

To participate in the survey, you must:

- be a consultant neurosurgeon, radiologist, or neuro-radiologist
- or a resident/fellow in neurosurgery, radiology, or neuro-radiology

[Certificate of Ethical Approval](/assets/pdf/Certificate of Ethical Approval for Harmonized Minimal Risk Behavioural Study.pdf)


