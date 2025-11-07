import React from "react";
import "./Competition.css";

export default function Competition() {
  return (
    <section id="competition">
      <h2 className="section-title">Video-based Seizure Detection Challenge (2026)</h2>

      <div className="competition-intro">
        <p>
          In partnership with <strong><a href= "https://www.aiepilepsy-neuro.com/" >The International Conference on Artificial Intelligence in Epilepsy and Other Neurological Disorders (2026)</a></strong>, the Section on Computational Neurology at Charité – Universitätsmedizin Berlin and partners are organizing a video-based seizure detection challenge.
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
         Epilepsy is a common neurological disorder affecting around 50 million people worldwide. Infantile epileptic spasm syndrome (IESS) is an early developmental and epileptic encephalopathy condition affecting approximately 1 in 2000-2500 infants in their first year of life. IESS is characterized by epileptic spasms which are sudden motor movements involving the head, arms, and legs. Despite the stereotypical nature of epileptic spasms, diagnosis is frequently delayed by weeks to months due to misidentification of symptoms as benign physiological occurrences or failure to recognize any abnormality by physicians or parents. These delays are associated with long-term poor cognitive outcomes, inadequate seizure control, increased disability, and higher healthcare costs. The widespread availability of smartphones and advancements in artificial intelligence (AI) may open new avenues for decision support in diagnosing these seizures [1].
        </p>
      </div>

      <div className="competition-card">
        <h3>Objective</h3>
        <p>
          This challenge aims to build a video-based seizure detection model that detects if a <strong>5-second video segment</strong> contains an epileptic spasm or not. Video content is anonymized using a pose estimation algorithm. The pose estimation data includes a number of landmarks that represent key points on the skeleton of the child's body (further details below). Every 5-second segment contains 150 frames (fps=30), and pose estimation is performed on each frame. In this challenge, we are providing a training dataset to build the seizure detection models as a binary classification tast (video segment contains a seizure yes/no). The models will then be evaluated on large out-of-sample dataset.
        </p>
      </div>

      <div className="competition-card">
        <h3>Data description</h3>
        <p>
          The data includes 5-second video segments recorded from smartphones or other cameras from different children. Some of the children were diagnosed with infantile spasms. Each 5-second video segment may contain a seizure (at any time point) or could be normal, i.e., seizure-free. Across the training dataset, the same child may contribute multiple video segment from both classes or only from one class. To extract relevant movement while also preserving data privacy, we used the mediapipe library [2] to extract the pose landmarks from the children’s video segments. The total number of landmarks is 33, and each landmark has 3 coordinates reflecting the position on the x, y, z axes, and two values (visibility and presence) referring to the degree of the presence of the landmark inside the frame scene. Note, that mediapipe may sometimes not extract the landmarks for some frames due to video quality issues. We used mediapipe version 0.10.21 with the model pose_landmarker_heavy.task.
        </p>
      </div>

           <div className="competition-card">
  <h3>Training data</h3>
  <p>
    The shared training data is a set of .npy files containing the landmarks from each frame of the respective 5-second segments (in total 150 frames corresponding to 30 frames per second (fps)). Missed frames have ‘nan’ landmarks. Besides the .npy files, there is a .csv file (comma ‘,’ separated) containing the true labels of those video segments along with their names (two columns; first column: segment_name (string), second column: label (int 0 or 1; 1 for seizure, 0 no seizure).
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
         The prediction from each submitted model must be summarized in one single .csv file containing the predicted labels as 1 for seizure and 0 for non-seizure for each 5-second video segment (.npy file) along with the file name. Thus, the output .csv file must have only two columns (first column: file name, second column: label). Please note that the predicted labels are required per each 5-second video segment and not per each child, so participants must not predict if a child has infantile spasms or not.
        </p>
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
          <li><strong>#1:</strong> $7,000</li>
          <li><strong>#2:</strong> $3,000</li>
        </ul>
        <p>
          Both winning participant teams (first/second place) are required to send their detailed solutions with the source code for final verification. This will demand them to agree on sharing their code under a CC-BY- SA 4.0 license to receive the full awarded prize money.
</p>
        <p>
          The challenge organizers will write a summary of the outcome of the challenge in a leading journal in our field. The top challenge contributors will be invited to contribute to this paper to describe their methodology.
    </p>

      </div>

      <div className="competition-card">
        <h3>Organizers</h3>
        <p>
         The challenge is organized by the Section on Computational Neurology at Charité - Universitätsmedizin Berlin in Germany, in collaboration with sponsor1, sponsor2 and sponsor3. 

        For questions to the organizers, you can contact Christian Meisel or Mustafa Halimeh: <a href="mailto:computational-neurology@charite.de">computational-neurology@charite.de</a>

        </p>
      </div>

      <div className="competition-card">
        <h3>Legal statement</h3>
        <p>Participants must acknowledge that the shared data must only be used for this competition.</p>
      </div>

      <div className="competition-card">
        <h3>Submission guidelines</h3>
        Participants should provide a pre-trained model packaged as a Docker image. The Docker image should be downloadable from an image registry. Participants can have a maximum of three different submissions. An abstract describing the methodology and performance of the training data is optional. Participants are invited to submit a poster in addition to the challenge submission, more details on poster submission are available on the <a href="https://www.aiepilepsy-neuro.com/"> AI in epilepsy conference website</a>. 
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
          We will run all submitted models and algorithms on our HPC on premises. The device will have no internet access during the evaluation of the submissions. The computer is a DELL workstation with 2 Nvidia RTX 6000 GPUs, 32 CPU cores, and 48 GB RAM memory in each GPU. Windows 11 is the main OS but also Linux Subsystem is included (WSL ubuntu).
        </p>
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
          Please submit your algorithms via submission form (link below).
          The algorithms submitted here remain the strict property of the inventor. Neither the conference organizers nor the challenge sponsors have any intellectual property claims on the algorithms. The conference organizers will not share or disseminate them after the evaluation of the model. They will use the algorithms during the challenge to evaluate performance on a holdout dataset.

To be eligible to receive the prize money, at least one co-author of the submitted model must be registered (in person or virtual) for the conference. Teams that are not registered can participate, but they will not be eligible to win.

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