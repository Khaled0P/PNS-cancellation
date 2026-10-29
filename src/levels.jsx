// Each level is one "are you sure?" popup.
// trick: what the popup does to make cancelling harder.
export const LEVELS = [
  {
    emoji: '🥔',
    title: 'Are you sure you want to cancel?',
    body: <p>You're about to cancel <b>Potato Network Services</b>. This will end your access to all premium potato features, effective immediately.</p>,
    cancel: 'Yes, cancel',
    keep: 'No, keep my potato',
  },
  {
    emoji: '📋',
    title: "Before you go, here's what you'll lose",
    body: (
      <ul className="perks">
        <li>Unlimited bad puns, delivered daily</li>
        <li>24/7 emotional support (starch-based)</li>
        <li>A potato that listens (mostly)</li>
        <li>Lifetime access to being right (occasionally)</li>
      </ul>
    ),
    cancel: "I'm aware",
    keep: 'Oh no, I forgot about those',
  },
  {
    emoji: '🪟',
    title: 'The potato has been informed.',
    body: <p>It is now sitting by the window, staring at the rain. It says it's fine.<br /><b>It is not fine.</b></p>,
    cancel: 'Continue cancelling',
    keep: 'Go check on it',
  },
  {
    emoji: '💸',
    title: 'Wait! Exclusive retention offer',
    body: <p>Stay and get <b>50% off</b> your subscription!<br /><small>PNS is already free. 50% off free is still free. Our finance department (also a potato) has confirmed this is a great deal.</small></p>,
    cancel: 'Decline free stuff',
    keep: 'Claim my deal',
    trick: 'swap',
  },
  {
    emoji: '📝',
    title: 'Help us improve: why are you leaving?',
    body: <p>Your feedback goes directly to the potato, who will read it and think about it for a very, very long time.</p>,
    options: [
      'The potato is too charming',
      'Too much potato in my life',
      'Not enough potato (have you tried Premium+?)',
      "We're fighting (statistically temporary)",
    ],
    cancel: 'Submit & continue',
    keep: "Never mind, we're good",
    trick: 'survey',
  },
  {
    emoji: '⚖️',
    title: 'Legal notice',
    body: <p>Per Section 4.2(b) of the Potato Terms of Service, cancellations must be reviewed by the Potato Council. The Council is currently in a meeting (it is one potato, and it is napping).<br /><br />Estimated review time: <b>7–10 business years.</b></p>,
    cancel: 'skip the line and cancel anyway',
    keep: "Fine, I'll wait (keep subscription)",
    trick: 'tiny',
    variant: 'legal',
  },
  {
    emoji: '⌨️',
    title: 'Identity verification',
    body: <p>To prove you're not a robot (or a hungry person who misunderstood the service), please type the following exactly:</p>,
    phrase: 'I no longer want the potato',
    cancel: 'Verify',
    keep: "Typing is effort, I'll stay",
    trick: 'type',
  },
  {
    emoji: '🥺',
    title: 'One last look',
    body: <p>This is the potato right now. Look at it. Look at its little face.<span className="big-face">🥺🥔</span></p>,
    cancel: 'Still cancel',
    keep: "Okay, I looked. I'm staying.",
    trick: 'shrink',
  },
  {
    emoji: '🤔',
    title: 'Please confirm your choice',
    body: <p>Are you sure you don't <i>not</i> want to not keep your subscription?</p>,
    cancel: 'No (yes)',
    keep: 'Yes (no)',
  },
  {
    emoji: '⚠️',
    title: 'cancellation.exe has stopped responding',
    body: <p>A problem caused the program to stop working correctly. The potato may have unplugged something. Please try again.</p>,
    cancel: 'Try again',
    caughtLabel: 'ugh, fine. try again',
    keep: 'Restart potato (recommended)',
    trick: 'dodge',
    escapes: 4,
    variant: 'error',
  },
  {
    emoji: '🚨',
    title: 'FINAL WARNING',
    body: <p>This is it. After this there's no going back. The potato will have to find a new person to annoy, and frankly, nobody is as fun to annoy as you.</p>,
    cancel: 'Cancel anyway',
    caughtLabel: '...ok, you got me',
    keep: "Okay okay, I'm staying",
    trick: 'dodge',
    escapes: 8,
  },
  {
    emoji: '🏁',
    title: 'Last step: confirm cancellation',
    body: <p>Just click the button below and you're free. That's it. Easy. 🙂</p>,
    cancel: 'Confirm cancellation',
    caughtLabel: 'Fine. Keep the potato 🥔',
    keep: 'Give up and keep the potato',
    trick: 'unreachable',
    escapes: 16,
    taunts: [
      'nope', 'too slow', 'missed me', 'over here!', 'lol', 'not today',
      '🥔💨', 'catch me if you can', 'potatoes are fast, actually', 'still trying?',
      'this is cardio now', 'the potato admires your persistence', '...but no',
      'almost (not really)', "okay I'm getting tired",
    ],
  },
]
