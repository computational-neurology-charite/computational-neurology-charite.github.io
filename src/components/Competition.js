import React from "react";
import "./Competition.css";

export default function Competition() {
  return (
    <section id="competition">
      <h2 className="section-title">Video-based Seizure Detection Challenge (2026)</h2>

      <div className="competition-intro">
        <p>
          In partnership with <a href= "https://www.aiepilepsy-neuro.com/" >The International Conference on Artificial Intelligence in Epilepsy and Other Neurological Disorders (2026)</a>, the <a href="https://www.computational-neurology.org">Section on Computational Neurology at Charité – Universitätsmedizin Berlin</a> and partners are organizing a video-based seizure detection challenge.
        </p>
      </div>

      <div className="competition-card">
        <h3>Key dates</h3>
        <div className="keydates">
          <div className="k">Mid November 2025</div><div className="v">Challenge begins.</div>
          <div className="k">February 23, 2025</div><div className="v">Submission closes — submit early.</div>
          <div className="k">March 16–19, 2025</div><div className="v">Winners announced during the AI in Epilepsy 2026 conference.</div>
        </div>
      </div>

      <div className="competition-card">
        <h3>Background</h3>
        <p>
         <strong>Epilepsy</strong> affects about 50 million people worldwide. One severe early form, called <strong>infantile epileptic spasm syndrome (IESS)</strong>, occurs in roughly 1 in 2,000–2,500 infants during their first year of life. IESS causes sudden, repetitive movements of the head, arms, or legs known as <strong>epileptic spasms</strong>. These seizures are often mistaken for normal baby movements, leading to delays in diagnosis and treatment. Such delays can worsen long-term development and health outcomes. With the growing use of videos, smartphones and advances in <strong>artificial intelligence (AI)</strong>, new tools may help detect and diagnose these seizures more quickly [1].
        </p>
      </div>

      <div className="competition-card">
        <h3>Objective</h3>
        <p>
          The goal of this challenge is to develop an <strong>AI model</strong> that can automatically detect <strong>epileptic spasms</strong> from short video clips. Each clip is <strong>5 seconds long</strong> and may or may not contain a seizure event.
To protect privacy, all videos have been <strong>anonymized using pose estimation</strong>, which tracks only key body landmarks rather than showing identifiable features. Each 5-second segment includes <strong>150 frames (30 frames per second)</strong>, and pose estimation has been applied to every frame, providing the coordinates of key points on the child’s skeleton.
Participants will receive a <strong>training dataset</strong> to build and train a <strong>binary classification model</strong> (seizure vs. no seizure). The submitted models will then be tested on a <strong>large unseen dataset</strong> to evaluate their accuracy and generalization.

        </p>

      </div>

      <div className="competition-card">
        <h3>Data description</h3>
        <p>
          The dataset consists of <strong>5-second video segments</strong> recorded using smartphones or other cameras from multiple children, some of whom were diagnosed with <strong>infantile spasms</strong>. Each segment may contain a <strong>seizure event</strong> (at any point within the 5 seconds) or show <strong>normal, seizure-free activity</strong>.
          </p>
          <p>
Within the training dataset, a single child may contribute <strong>multiple video segments</strong>, either from both classes (seizure and non-seizure) or from only one.
</p>
          <p>
To capture body movements while ensuring <strong>data privacy</strong>, all videos were processed using the <strong>MediaPipe</strong> library [2] to extract <strong>pose landmarks</strong> instead of sharing raw video frames. MediaPipe identifies <strong>33 body landmarks</strong>, each described by three spatial coordinates (x, y, z) and two confidence measures (<strong>visibility</strong> and <strong>presence</strong>) that indicate how clearly each point is detected in the frame.

        </p>
                <p>
          Note that in some frames, landmarks may be missing due to <strong>video quality or motion artifacts</strong>. Pose extraction was performed using <strong>MediaPipe</strong> version 0.10.21 with the <strong>pose_landmarker_heavy.task</strong> model.
        </p>
      </div>

           <div className="competition-card">
  <h3>Training data</h3>
    <p><strong>The training data is available at the <a href="https://gitlab.com/computational-neurologie/video-based-seizure-detection-challenge#">repository</a>. To be granted access, send an email to <a href="mailto:computational-neurology@charite.de">computational-neurology@charite.de</a></strong></p>
  <p>
    The training data consists of a set of .npy files containing the landmarks from each frame of the respective 5-second segments (in total 150 frames corresponding to 30 frames per second (fps)). Missed frames have ‘nan’ landmarks. Besides the .npy files, there is a .csv file (comma ‘,’ separated) containing the true labels of those video segments along with their names (two columns; first column: segment_name (string), second column: label (int 0 or 1; 1 for seizure, 0 no seizure).
  </p>
  <p>The .npy files have the following naming convention:</p>
    <code>child_{'{'}id{'}'}_{'{'}segment{'}'}</code>
    <p>where <code>id</code> and <code>segment</code> are both integers. Segments belonging to the same child have the same <code>id</code>. Here is an example of code to read the landmarks .npy file:</p>


  <div className="codeblock">
          <pre><code>{`import numpy as np

# Read a .npy file containing video 5-second segments landmarks
lmk_arr = np.load('child_1_1.npy')
# lmk_arr.shape -> (150, 33, 5) -> (n_frames, n_landmarks, [x, y, z, visibility, presence])
# lmk_arr.dtype -> float64

# Get frames with nan landmarks
is_nan = np.isnan(lmk_arr)
nan_inx = np.any(is_nan, axis=(1, 2))
`}
  </code>
</pre>
</div>
<p>Here is an example of code to read the .csv file:</p>
        <div className="codeblock">
          <pre><code>{`import pandas as pd

train_df = pd.read_csv('train_data.csv', sep=',')

# Example:
# segment_name,label
# child_1_1.npy,1
# child_1_2.npy,0`}</code></pre>
        </div>

      </div>


      <div className="competition-card">
        <h3>Output data</h3>
        <p>
          Each submitted model must produce a single .csv file containing the predicted labels for all 5-second video segments.
The file should have two columns:

        </p>
        <ul>
          <li><strong>file_name</strong> – the name of the corresponding <code>.npy</code> file</li>
          <li><strong>label</strong> – the predicted class (<strong>1</strong> = seizure, <strong>0</strong> = non-seizure)</li>
        </ul>
      <p>Please note that predictions must be made for each 5-second segment individually, not for each child. The task is to detect whether a segment contains a seizure, not to classify whether a child has infantile spasms.</p>
      </div>


    <div className="competition-card">
      <h3>Performance metrics</h3>
      <p>Based on the predicted labels from each participant’s model, we will compute the performance metrics of sensitivity, specificity, accuracy, and F1-score using an out-of-sample test dataset. These metrics will be computed as sample-based, i.e., each 5-second video segment will have a single prediction value of either 1 or 0. We will report the metrics as follows:
        </p>
      <ul>
        <li><strong>Sensitivity</strong>: TP / (TP + FN)</li>
        <li><strong>Specificity</strong>: TN / (TN + FP)</li>
        <li><strong>Precision</strong>: TP / (TP + FP)</li>
        <li><strong>F1-score</strong>: 2 × (Precision × Sensitivity) / (Precision + Sensitivity)</li>
      </ul>

    </div>

      <div className="competition-card">
        <h3>Evaluation</h3>
        <p>
          Submissions will be evaluated on an out-of-sample dataset using the above defined performance metrics. The F1 score will be used as a main metric to rank the performances and, in case of tie of F1 score values, sensitivity will be considered as a secondary ranking metric.
        </p>
      </div>



      <div className="competition-card">
        <h3>Awards</h3>
        <p>Our sponsors are generously offering $10,000 prizes for the winning participants. This prize money will be split among only the best two algorithms as follows:</p>
        <ul className="awards">
          <li><strong>First place:</strong> $7,000</li>
          <li><strong>Second place:</strong> $3,000</li>
        </ul>
        <p>
          Both winning participant teams (first/second place) are required to send their detailed solutions with the source code for final verification. This will demand them to agree on sharing their code under a CC-BY- SA 4.0 license to receive the full awarded prize money.
</p>
        <p>
          The challenge organizers will write a summary of the outcome of the challenge in a leading journal in our field. The top challenge contributors will be invited to contribute to this paper to describe their methodology.
        </p>
        <p>
          To be eligible to receive the prize money, at least one co-author of the submitted model must be registered (in person or virtual) for the conference. Teams that are not registered can participate, but they will not be eligible to win.
    </p>

      </div>

      <div className="competition-card">
        <h3>Organizers</h3>
        <p>
         The challenge is organized by the <a href="https://www.computational-neurology.org">Section on Computational Neurology at Charité - Universitätsmedizin Berlin in Germany</a>, in collaboration with <a href="https://www.aiepilepsy-neuro.com/">The International Conference on Artificial Intelligence in Epilepsy and Other Neurological Disorders (2026)</a>.
        </p>
        <p>
        For questions to the organizers: <a href="mailto:computational-neurology@charite.de">computational-neurology@charite.de</a>

        </p>
      </div>

      <div className="competition-card">
        <h3>Legal statement</h3>
        <p>Participants must acknowledge that the shared data must only be used for this competition.</p>
      </div>

      <div className="competition-card">
        <h3>Submission guidelines</h3>
        <p>Participants should provide a pre-trained model packaged as a Docker image. The Docker image should be downloadable from an image registry. The training data contain an example of a Docker file. Participants can have a maximum of three different submissions. An abstract describing the methodology and performance of the training data is optional. Participants are invited to submit a poster in addition to the challenge submission, more details on poster submission are available on the <a href="https://www.aiepilepsy-neuro.com/"> AI in epilepsy conference website</a>. 
        </p>
        <p><strong>Docker requirements:</strong></p>
        <p>The docker image must contain two volumes, and define two environment variables:</p>
        <div className="codeblock">
          <pre><code>{`VOLUME ["/data"]
VOLUME ["/output"]
ENV INPUT=""
ENV OUTPUT=""`}</code></pre>
        </div>
        <p>
          Where <code>INPUT</code> and <code>OUTPUT</code> variables contain the path to test-out dataset and .csv file relative to /data and /output.
        </p>
      </div>

      <div className="competition-card">
        <h3>Computing platform</h3>
        <p>
          All submitted models will be evaluated on our on-premises high-performance computing (HPC) system. During the evaluation process, the device will have no internet access to ensure data security and fairness across submissions.
The evaluation will be performed on a DELL workstation equipped with:
        </p>
<ul>
  <li><strong>2× NVIDIA RTX 6000 GPUs</strong> (48 GB RAM each)</li>
  <li><strong>32 CPU cores</strong></li>
  <li><strong>Windows 11</strong> operating system with <strong>Ubuntu (WSL)</strong> support</li>
</ul>

      </div>

      <div className="competition-card">
        <h3>Submission form</h3>
        {/* <div className="keydates">
          <div className="k">Title</div><div className="v">Name of the model</div>
          <div className="k">Docker image</div><div className="v">Registry path to pull</div>
          <div className="k">Authors</div><div className="v">Comma-separated list</div>
          <div className="k">Abstract</div><div className="v">Brief method description</div>
        </div> */}
        <p className="smallprint">
          Please submit your algorithms via submission form (link below). The algorithms submitted here remain the strict property of the inventor. Neither the conference organizers nor the challenge sponsors have any intellectual property claims on the algorithms. The challenge organizers will not share or disseminate them after the evaluation of the model and only use them during the challenge to evaluate performance on a holdout dataset. 

        </p>
        

      </div>

      <a
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=ORnprz6SLEO8ZsvD7BjQLE1mFpKUXcBDnOuOUqQLSWVUREQ5WEJLVUdFQkE5VTVENVhCUjNJQ0NITCQlQCN0PWcu"
        target="_blank"
        rel="noopener noreferrer"
        className="competition-button"
      >
        Submit your entry
      </a>

      <div className="refs">
        <h4>References</h4>
        <ol>
          <li>Miron, G., Halimeh, M., Tietze, S. et al. Detection of epileptic spasms using foundational AI and smartphone videos. npj Digit. Med. 8, 370 (2025). https://doi.org/10.1038/s41746-025-01773-1
          </li>
          
          <li>Lugaresi, C., Tang, J., Nash, H., McClanahan, C., Uboweja, E., Hays, M., Zhang, F., Chang, C., Yong, M.G., Lee, J., Chang, W., Hua, W., Georg, M., & Grundmann, M. (2019). MediaPipe: A Framework for Building Perception Pipelines. https://doi.org/10.48550/arXiv.1906.08172</li>
        </ol>
      </div>
    </section>
  );
}