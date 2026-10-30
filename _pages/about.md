---
layout: research-home
permalink: /
title: "Wenwei Zhang，张文蔚"
excerpt: "Sr. Staff Research Scientist at XPENG Robotics, working on scalable oversight of physical agents."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="research-hero" aria-labelledby="profile-title">
  <div class="research-hero__copy">
    <p class="research-kicker">AI agents</p>
    <h1 id="profile-title">Wenwei Zhang <span lang="zh">张文蔚</span></h1>
    <p class="research-role">Sr. Staff Research Scientist · XPENG Robotics</p>
    <p class="research-hero__lead">My research focuses on <strong>scalable oversight of agents in the physical world</strong> at <a href="https://xpeng-robotics.github.io/">XPENG Robotics</a>.</p>
    <p class="research-hero__context">Previously, at <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a>, I was responsible for the post-training of the InternLM and Intern-S model series and conducted research on scalable oversight of digital agents. As a core member of <a href="https://openmmlab.com/">OpenMMLab</a> since 2019, I built and released <a href="https://github.com/open-mmlab/mmdetection3d">MMDetection3D</a> and have led the development of <a href="https://github.com/open-mmlab/mmdetection">MMDetection</a> and <a href="https://github.com/open-mmlab/mmdetection3d">MMDetection3D</a> since 2020. I received my Ph.D. from Nanyang Technological University, Singapore, where I worked at <a href="https://www.mmlab-ntu.com/">MMLab</a> under the supervision of Professor <a href="https://www.mmlab-ntu.com/person/ccloy/">Chen Change (Cavan) Loy</a>. I have also collaborated with <a href="https://chenkai.site/">Kai Chen</a>, <a href="https://oceanpang.github.io/">Jiangmiao Pang</a>, and <a href="https://shijianping.me/">Jianping Shi</a>.</p>
    <div class="research-actions" aria-label="Primary links">
      <a class="primary" href="/publications/">Selected publications <span aria-hidden="true">↗</span></a>
      <a href="/files/resume.pdf">CV <span aria-hidden="true">↗</span></a>
      <a href="mailto:wayne.zw@outlook.com">Get in touch <span aria-hidden="true">↗</span></a>
    </div>
    <div class="research-social" aria-label="Social profiles">
      <a href="https://scholar.google.com/citations?user=QDXADSEAAAAJ&amp;hl=zh-CN">Google Scholar</a>
      <a href="https://github.com/ZwwWayne">GitHub</a>
      <a href="https://www.linkedin.com/in/wenweizhang-b9769a124/">LinkedIn</a>
      <a href="https://twitter.com/wenweiz97">Twitter</a>
    </div>
  </div>
  <figure class="research-portrait">
    <img src="/images/profile-mine.png" alt="Wenwei Zhang" width="320" height="320" fetchpriority="high">
  </figure>
</section>
<aside class="research-opening"><span class="opening-dot" aria-hidden="true"></span><p><strong>We’re hiring.</strong> Internships and full-time roles to build physical agents for <a href="https://www.xpeng.com/technology/ai_robot_iron">IRON</a>.</p><a href="mailto:wayne.zw@outlook.com">Let’s talk <span aria-hidden="true">↗</span></a></aside>

<section id="research" class="research-section research-section--split">
  <div>
    <p class="research-kicker">Research Direction</p>
    <h2>Scalable Oversight</h2>
  </div>
  <div class="research-direction__body">
    <p>I am interested in how agents develop cognitive and physical intelligence and how people can remain valuable collaborators as agents evolve. Reinforcement learning offers a key mechanism for this evolution through a closed loop of interaction, feedback, and policy improvement. Specifically, I study the following two questions:</p>
    <div class="research-questions">
      <article>
        <h3>Cognitive and Physical Intelligence</h3>
        <p>How can machines model, learn, and continually evolve cognitive and physical capabilities in the human world, both digital and physical?</p>
      </article>
      <article>
        <h3>Human-Machine Collaboration</h3>
        <p>How can evolving machine cognition assist complex human activities while keeping humans valuable in an increasingly automated world?</p>
      </article>
    </div>
    <p class="research-direction__approach">I approach these two questions through scalable oversight, providing reliable feedback at scale for reinforcement learning while keeping people involved in guiding agents’ progress and working alongside them. I view self-improvement and recursive self-improvement (RSI) as natural outcomes of making this learning loop reliable and scalable.</p>
  </div>
</section>

<section id="projects" class="research-section">
  <div class="section-heading"><div><p class="research-kicker">Open source</p><h2>Selected projects</h2></div><a href="https://github.com/ZwwWayne">More on GitHub ↗</a></div>
  <div class="research-projects">
    <article class="project-group" aria-labelledby="model-projects-title">
      <h3 id="model-projects-title">Foundation Models</h3>
      <div class="project-group__entries">
        <div class="project-group__entry">
          <h4><a href="https://github.com/InternLM/InternLM"><span>InternLM</span><span aria-hidden="true">↗</span></a></h4>
          <p>Post-training of the InternLM language model series.</p>
          {% include project-metric.html key="internlm" kind="downloads" %}
        </div>
        <div class="project-group__entry">
          <h4><a href="https://github.com/InternLM/Intern-S1"><span>Intern-S</span><span aria-hidden="true">↗</span></a></h4>
          <p>Post-training of the Intern-S foundation model series.</p>
          {% include project-metric.html key="intern_s" kind="downloads" %}
        </div>
      </div>
    </article>
    <article class="project-group" aria-labelledby="agent-projects-title">
      <h3 id="agent-projects-title">Foundation model-based Agents</h3>
      <div class="project-group__entries">
        <div class="project-group__entry">
          <h4><a href="https://www.shlab.org.cn/shlab-s2-ghys"><span>Long-horizon Reasoning Agent</span><span aria-hidden="true">↗</span></a></h4>
          <p>Intern-S2 supported a human–AI collaboration that proved the three-dimensional Ghys conjecture.</p>
          <a class="project-metric" href="http://finance.people.com.cn/n1/2026/1017/c1004-40816542.html" title="Media coverage of the three-dimensional Ghys conjecture"><span>Ghys · People’s Daily Online</span><span aria-hidden="true">↗</span></a>
        </div>
        <div class="project-group__entry">
          <h4><a href="https://github.com/InternLM/MindSearch"><span>MindSearch</span><span aria-hidden="true">↗</span></a></h4>
          <p>An LLM-based multi-agent framework for web search.</p>
          {% include project-metric.html key="mindsearch" %}
        </div>
      </div>
    </article>
    <article class="project-group" aria-labelledby="vision-projects-title">
      <h3 id="vision-projects-title">Computer Vision Algorithm System</h3>
      <div class="project-group__entries">
        <div class="project-group__entry">
          <h4><a href="https://github.com/open-mmlab/mmdetection"><span>MMDetection</span><span aria-hidden="true">↗</span></a></h4>
          <p>OpenMMLab object detection toolbox and benchmark.</p>
          {% include project-metric.html key="mmdetection" %}
        </div>
        <div class="project-group__entry">
          <h4><a href="https://github.com/open-mmlab/mmdetection3d"><span>MMDetection3D</span><span aria-hidden="true">↗</span></a></h4>
          <p>OpenMMLab toolbox for general 3D object detection.</p>
          {% include project-metric.html key="mmdetection3d" %}
        </div>
      </div>
    </article>
  </div>
</section>

<section id="news" class="research-section">
  <p class="research-kicker">Recent News</p>
  <h2>Selected updates</h2>
  <ol class="research-timeline">
    <li>
      <time datetime="2026-10">Oct. 2026</time>
      <p>Joined <strong>XPENG Robotics</strong> as a Sr. Staff Research Scientist and Sr. Manager, leading the Physical Agents team.</p>
    </li>
    <li>
      <time datetime="2026-10">Oct. 2026</time>
      <p><strong>Intern-S2</strong> supported a human–AI collaboration that proved the three-dimensional Ghys conjecture. Coverage in <a href="http://finance.people.com.cn/n1/2026/1017/c1004-40816542.html">People’s Daily Online</a>.</p>
    </li>
    <li>
      <time datetime="2026-07">July 2026</time>
      <p>Appointed <strong>Head of the Large Model Center</strong> at <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a>.</p>
    </li>
    <li>
      <time datetime="2026-02">Feb. 2026</time>
      <p>We released <a href="https://www.shlab.org.cn/news/5444227"><strong>Intern-S1-Pro</strong></a>, an open-source trillion-parameter multimodal foundation model for general and scientific reasoning. <a href="https://arxiv.org/abs/2603.25040">Technical report</a>.</p>
    </li>
    <li>
      <time>Dec. 2025</time>
      <p><a href="https://arxiv.org/abs/2512.10739">Intern-S1-MO</a> achieved <strong>gold-medal-level performance</strong>, ranking <strong>3rd among human competitors</strong> and <strong>1st among AI competitors</strong> in the Chinese Olympiad in Mathematics (CMO2025).</p>
    </li>
    <li>
      <time>July 2025</time>
      <p>Intern-S1, state-of-the-art open-source multi-modal foundation model has been released. See <a href="https://huggingface.co/collections/internlm/intern-s1-6882e325e8ac1c58ba108aa5">Intern-S1 Collections</a> and <a href="https://arxiv.org/abs/2508.15763">tech report</a>.</p>
    </li>
  </ol>
  <details class="research-archive"><summary>Earlier updates <span>2025–2019</span></summary>
  <ol class="research-timeline">
    <li>
      <time datetime="2025-07">July 2025</time>
      <p><a href="https://arxiv.org/abs/2410.15700">InternLM2.5-StepProver</a> received a <a href="https://sites.google.com/view/ai4mathworkshopicml2025/awards"><strong>Best Paper Honorable Mention</strong></a> at the ICML 2025 AI4Math Workshop.</p>
    </li>

    <li>
      <time>July 2024</time>
      <p>InternLM2.5-Chat, state-of-the-art open-source LLMs in <a href="https://rank.opencompass.org.cn/home">opencompass</a> and <a href="https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard/">huggingface leadboard</a>, have been released. See <a href="https://github.com/InternLM/InternLM?tab=readme-ov-file#model-zoo">InternLM2.5 Model Zoo</a>.</p>
    </li>
    <li>
      <time>Jan. 2024</time>
      <p>InternLM2-Chat, state-of-the-art open-source LLMs in <a href="https://rank.opencompass.org.cn/home">opencompass</a> and <a href="https://tatsu-lab.github.io/alpaca_eval/">AlpacaEval2</a>, have been released. See <a href="https://github.com/InternLM/InternLM?tab=readme-ov-file#model-zoo">InternLM2 Model Zoo</a>.</p>
    </li>
    <li>
      <time>Jan. 2024</time>
      <p>2 papers (<a href="https://github.com/wusize/CLIPSelf">CLIPSelf</a> and <a href="https://github.com/OpenRobotLab/UniHSI">UniHSI</a>) are accepted as <strong>spotlights</strong> by ICLR2024.</p>
    </li>
    <li>
      <time>Sept. 2022</time>
      <p>We release <a href="https://openmmlab.com/">OpenMMLab 2.0</a> with a new core, <a href="https://github.com/open-mmlab/mmengine">MMEngine</a>.</p>
    </li>
    <li>
      <time>May 2022</time>
      <p><a href="https://arxiv.org/abs/2204.04656">Video K-Net</a> is accepted by CVPR 2022 (<strong>oral</strong>).</p>
    </li>
    <li>
      <time>Oct. 2021</time>
      <p><a href="https://www.mmlab-ntu.com/project/knet/index.html">K-Net</a> is accepted by NeurIPS 2021. Code has been released at <a href="https://github.com/ZwwWayne/K-Net">here</a>.</p>
    </li>
    <li>
      <time>Dec. 2020</time>
      <p>MMDet3D team obtains <strong>Best PKL Award</strong> and best vision-only results in the 3rd nuScenes detection challenge of 5th AI Driving Olympics, NeurIPS 2020. Paper of our multi-modality method is released in <a href="https://arxiv.org/abs/2012.12741">arxiv</a>.</p>
    </li>
    <li>
      <time>2020</time>
      <p>Second runner up in <a href="https://www.lvisdataset.org/challenge_2020">LVIS2020 Challenge</a>. Paper can be found <a href="https://arxiv.org/abs/2008.10032">in arxiv</a>.</p>
    </li>
    <li>
      <time>July 2020</time>
      <p>We release <a href="https://github.com/open-mmlab/mmdetection3d">MMDetection3D</a>, OpenMMLab's next-generation platform for general 3D object detection.</p>
    </li>
    <li>
      <time>2019</time>
      <p>Win the <strong>1st prize</strong> in <a href="http://cocodataset.org/workshop/coco-mapillary-iccv-2019.html">COCO 2019 Object Detection Challenge</a> (no external data). (Team: MMDet)</p>
    </li>
  </ol>
  </details>
</section>

<section class="research-section">
  <p class="research-kicker">Academic Service</p>
  <h2>Community roles</h2>
  <ul class="research-service">
    <li><strong>Area Chair:</strong> CVPR2026/2027, ICLR2027.</li>
    <li><strong>Conference Reviewer:</strong> CVPR/ECCV since 2020, ICCV/NeurIPS since 2021, ICLR since 2022, ICML since 2023.</li>
    <li><strong>Committee member and speaker</strong> of OpenMMLab Tutorials in CVPR <a href="https://openmmlab.com/community/cvpr2021-tutorial">2021</a>/<a href="https://openmmlab.com/community/cvpr2022-tutorial">2022</a>/2023, and <a href="https://openmmlab.com/community/aaai2023-lab">AAAI2023</a>.</li>
  </ul>
</section>
