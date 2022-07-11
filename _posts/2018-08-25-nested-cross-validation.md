---
layout: post
title:  Nested cross validation explained
date:   2018-08-25 17:00:00
comments: true
description: Using two-round cross validation for model selection and performance evaluation.
tags: technical
permalink: /nested-cross-validation
---

It is natural to come up with cross-validation (CV) when the dataset is relatively small. The basic idea of cross-validation is to train a new model on a subset of data, and validate the trained model on the remaining data. Repeat the process multiple times and average the validation error, we get an estimate of the generalization performance of the model. Since the test data is untouched during each training, we kind of use the whole dataset to estimate the generalization error, which will reduce the bias. However, since it will train multiple models instead of one, the drawback of CV is that quite computational expensive.

It is necessary to make it clear that, the aim of CV is **not to get one or multiple trained models for inference**, but to **estimate an unbiased generalization performance**. This may be quite confusing at the beginning, since the outcome of the common train/validate/test split approach are a trained model with tuned hyperparameter (on train/validate set), plus a generalization estimation of performance (on trainval/test set).

Why bother to have a validation set? Why not just use the test set for the two tasks of hyperparameter tuning(model selection) and estimation at once? The problem is, if we use the test set multiple times for different trained models, during our selection of the optimal model, the test set actually "leaks" information, and thus unpure. When we later apply the model to real-world data, the model will probably have a larger error than on the test set. That being said, when using the test set for both model selection and estimation, it tends to overfit the test data, and the estimation leads to an optimistic bias.

(A side note: if we match the `test` set in above to the `test` set of many benchmark datasets, we will find the machine learning community is actually overfitting the benchmark. Since now we are using the results on the benchmark `test` dataset to select the best model, we are again mixing the model selection and performance estimation together by using the two tasks on the same benchmark `test` set.)

When doing one round CV to evaluate the performance of different models, and select the best model based on the CV results, it is similar to the above case of using test set both for model selection and estimation. Thus, when we want to perform model selection and generalization error estimation, we have to separate the two tasks by using two test set for each task. That's why we have the validation and test set, and the same version in CV is called nested or two-round cross validation.

The nested CV has an inner loop CV nested in an outer CV. The inner loop is responsible for model selection/hyperparameter tuning (similar to validation set), while the outer loop is for error estimation (test set).


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://i.stack.imgur.com/vh1sZ.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Nested cross validation. <a><href = "https://stats.stackexchange.com/questions/292179/whats-the-meaning-of-nested-resampling" target="_blank">Image source: Cross Validated</a>
</div>



The algorithm is as follows (adapted from Hastie et. al [1] and [this post](https://stats.stackexchange.com/questions/266225/step-by-step-explanation-of-k-fold-cross-validation-with-grid-search-to-optimise)):

**The nested cross validation**

1. Divide the dataset into $$K$$ cross-validation folds at random.

2. For each fold $$k=1,2,...,K$$:  *outer loop for evaluation of the model with selected hyperparameter*

    2.1 Let `test` be fold $$k$$

    2.2 Let `trainval` be all the data except those in fold $$k$$

    2.3 Randomly split `trainval` into $$L$$ folds

    2.4 For each fold $$l= 1,2,...L$$: *inner loop for hyperparameter tuning*

      2.4.1 Let `val` be fold $$l$$

      2.4.2 Let `train` be all the data except those in `test` or `val`

      2.4.3 Train with each hyperparameter on `train`, and evaluate it on `val`. Keep track of the performance metrics

    2.5 For each hyperparameter setting, calculate the average metrics score over the $$L$$ folds, and choose the best hyperparameter setting.

    2.6 Train a model with the best hyperparameter on `trainval`. Evaluate its performance on `test` and save the score for fold $$k$$.

3. Calculate the mean score over all $$K$$ folds, and report as the generalization error.



As for the implementation, [the scikit-learn documentation](http://scikit-learn.org/stable/auto_examples/model_selection/plot_nested_cross_validation_iris.html) points out: the inner loop can call scikit-learn's `GridSearchCV` to achieve grid search of hyperparameter evaluated on the inner loop `val` set, and the outer loop can call `cross_val_score` for generalization error.


### Q&A

1. Can I apply the best hyperparameter selected in the first iteration of the outer fold, to build models for the remaining $$K-1$$ outer loop? i.e. to save the search of the best hyperparameter in the next $$K-1 \times L \times M$$ (where $$M$$ is the number of hyperparameter combinations, if use grid search).


    I think the answer is no. The reason is that in this way, the `test` sets in the following loop are not "untouched" by the hyperparameter selection process. For example, in the outer loop # $$2$$, the `test` set for evaluating the model performance was actually used in the outer loop # $$1$$ for selecting the hyperparameter, then some data were used both for hyperparameter tuning and performance evaluation. This will cause overfitting.

2. What if the $$K$$ outer loop has distinct hyperparameter? How can I use the nested CV to build the best model?

    As I state in the beginning, CV is **not a method to get one or multiple trained models for inference**, but only a tool to **estimate an unbiased generalization performance**. CV will generate multiple models in each outer loop, but we can hardly estimate the performance of each individual model, since the number of the test set in each outer loop is small. However, if the model is stable (do not change much if the training data is perturbed), the hyperparameter found in each outer loop may be the same (using grid search) or similar to each other (using random search). A more in-depth explanation can be found [here](https://stats.stackexchange.com/questions/65128/nested-cross-validation-for-model-selection).


That's all for what I would like to share of nested CV. This post reflects my current understanding of the cross validation. Please correct me if you identify any problems. Thanks!

---
### References

[1] T. Hastie, J. Friedman, and R. Tibshirani, “Model Assessment and Selection,” in The Elements of Statistical Learning: Data Mining, Inference, and Prediction, T. Hastie, J. Friedman, and R. Tibshirani, Eds. New York, NY: Springer New York, 2001, pp. 193–224.


[2] G. C. Cawley and N. L. C. Talbot, “On Over-fitting in Model Selection and Subsequent Selection Bias in Performance Evaluation,” Journal of Machine Learning Research, vol. 11, no. Jul, pp. 2079–2107, 2010.
