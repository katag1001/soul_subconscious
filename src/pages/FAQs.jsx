import '../pages/pages.css'
import '../pages/FAQs.css'
import CardGrid from '../components/CardGrid.jsx';

export default function FAQs() {

const cardsData = [
  { 
    title: "What is rapid transformational therapy?", 
    details: "Rapid Transformational Therapy is a powerful approach that combines hypnosis with practical therapeutic techniques to uncover the root cause of an issue. Instead of only managing symptoms, RTT helps you understand why a pattern began and gently change the beliefs that keep it in place. Once those beliefs are updated, real change can happen much more quickly than with many traditional approaches." 
  },
  { 
    title: "What is hypnosis and what does it feel like?", 
    details: "Hypnosis is simply a relaxed and focused state of mind. It is very similar to the feeling you have when you are absorbed in a book or daydreaming. Most people feel calm, relaxed, and deeply focused. You are always aware of what is happening and able to speak during the session." 
  },
  { 
    title: "Will I lose control during hypnosis?", 
    details: "No. You remain fully aware and in control the entire time. You can hear everything that is said and you are free to move, speak, or open your eyes whenever you want." 
  },
  { 
    title: "What does hypnosis feel like?", 
    details: "Most people describe hypnosis as feeling very calm and relaxed. Your body may feel heavy or light and your mind may feel quiet and focused. Everyone experiences it a little differently, but in general it is a pleasant and comfortable experience." 
  },
  { 
    title: "Is hypnosis like sleep?", 
    details: "It may feel deeply relaxing, but you are not asleep. You remain aware of what is happening and you can remember the session afterward. It is simply a focused state of attention." 
  },
  { 
    title: "Can anyone be hypnotized?", 
    details: "Most people can be hypnotized as long as they are willing to relax and follow the process. Hypnosis is a natural ability that we all experience in everyday life when we are deeply focused or absorbed in something." 
  },
  { 
    title: "Is hypnosis safe?", 
    details: "Yes. Hypnosis has been used safely for many years in therapeutic settings. It is a natural state that your mind already knows how to enter. A trained therapist simply guides you into that relaxed focus so we can work with the subconscious mind." 
  },
  { 
    title: "Can I get stuck in hypnosis?", 
    details: "No. It is not possible to get stuck in hypnosis. If a session ended for any reason you would simply return to your normal waking state, just like when you naturally come out of daydreaming or deep relaxation." 
  },
  { 
    title: "What issues can RTT help with?", 
    details: "RTT can help with a wide range of challenges including anxiety, confidence issues, fears, habits, self doubt, emotional blocks, and patterns that feel hard to change. It is especially effective when an issue is connected to long standing beliefs or experiences stored in the subconscious mind." 
  },
  { 
    title: "Will I have to relive painful or scary memories?", 
    details: "You are always safe and supported during the session. Sometimes we revisit past experiences to understand where a belief began, but this is done in a calm and controlled way. The purpose is not to relive pain but to gain understanding and release the emotional charge connected to it." 
  },
  { 
    title: "How does RTT work?", 
    details: "During a session we use hypnosis to access the subconscious mind where many of our beliefs and patterns are stored. Together we identify the root cause of the issue and help your mind understand it in a new way. Once the old belief is updated, we install new supportive beliefs that align with the life you want to create." 
  },
  { 
    title: "How many sessions will I need?", 
    details: "Many people experience significant change in just one to three sessions because RTT focuses on the root cause of the issue rather than managing symptoms. The number of sessions depends on the individual and the depth of the challenge being addressed." 
  },
  { 
    title: "When will I start to see changes?", 
    details: "Some people notice shifts immediately after a session, while for others the changes unfold gradually over the following days and weeks. As your mind begins to integrate the new beliefs, you may notice different thoughts, feelings, and behaviors emerging naturally." 
  },
  { 
    title: "Is RTT effective for everyone?", 
    details: "RTT is highly effective for many people, especially when they are open to the process and ready for change. Like any therapeutic approach, results can vary from person to person, but the goal is always to create meaningful and lasting transformation." 
  },
  { 
    title: "Are there any contraindications for RTT?", 
    details: "However, it may not be suitable for individuals with certain severe psychiatric conditions such as psychosis, some personality disorders, or epilepsy. If you are unsure whether RTT is right for you, we can discuss your situation beforehand to ensure the approach is appropriate and safe." 
  }
];

  return (
    <>
      <section className="page FAQs">
        <h1>Frequently Asked Questions</h1>
        <div className="faqs-content">
          <CardGrid cards={cardsData} />
        </div>
      </section>


    </>
  )
}

