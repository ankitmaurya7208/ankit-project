function createShortDhanYodhaForm() {
  // Create Short & Simple Google Form
  var form = FormApp.create('Dhan Yodha: Quick Banking Safety Survey (1 Min)');
  
  form.setDescription('Quick 1-Minute Survey on Safe Online Banking Awareness & Cyber Security (Dhan Yodha Initiative).');
  form.setConfirmationMessage('Thank you for completing the quick survey! Remember: Never enter your UPI PIN to receive money. Helpline: 1930.');
  
  // Q1: Name
  var q1 = form.addTextItem();
  q1.setTitle('1. Full Name');
  q1.setRequired(true);

  // Q2: Age Group
  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Age Group');
  q2.setChoices([
    q2.createChoice('Under 18 years'),
    q2.createChoice('18 – 35 years'),
    q2.createChoice('36 – 60 years'),
    q2.createChoice('Above 60 years (Senior Citizen)')
  ]);
  q2.setRequired(true);

  // Q3: UPI PIN Rule
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Is entering your UPI PIN required to RECEIVE money into your bank account?');
  q3.setChoices([
    q3.createChoice('Yes'),
    q3.createChoice('NO (UPI PIN is ONLY for sending/deducting money)'),
    q3.createChoice('Don\'t know')
  ]);
  q3.setRequired(true);

  // Q4: Cyber Helpline
  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. What is India\'s 24x7 National Cyber Crime Emergency Helpline number?');
  q4.setChoices([
    q4.createChoice('100'),
    q4.createChoice('112'),
    q4.createChoice('1930'),
    q4.createChoice('1800-BANK')
  ]);
  q4.setRequired(true);

  // Q5: OTP Sharing Rule
  var q5 = form.addMultipleChoiceItem();
  q5.setTitle('5. Should you ever share your OTP, Bank PIN, or screen with a caller claiming to be a bank manager?');
  q5.setChoices([
    q5.createChoice('Yes, if urgent'),
    q5.createChoice('NO, NEVER! Bank officials never ask for OTP or PIN')
  ]);
  q5.setRequired(true);

  Logger.log('✅ Short Google Form Created!');
  Logger.log('📝 Edit URL: ' + form.getEditUrl());
  Logger.log('🌐 Public URL: ' + form.getPublishedUrl());
}
