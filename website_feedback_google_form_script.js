function createDhanYodhaFeedbackForm() {
  // Create Website Feedback Google Form
  var form = FormApp.create('Dhan Yodha: Website Feedback & User Experience Survey');
  
  form.setDescription(
    'Official User Feedback Survey for the Dhan Yodha Safe Online Banking Awareness Portal (https://dhanyodha20.vercel.app/).\n\n' +
    'Please rate your experience and share your suggestions to help us improve digital financial security awareness across communities.'
  );
  
  form.setConfirmationMessage(
    'Thank you for your feedback! Your response has been recorded to help us build a safer digital banking experience.\n\n' +
    'Explore live tools on: https://dhanyodha20.vercel.app/'
  );

  // Q1: User Name
  var q1 = form.addTextItem();
  q1.setTitle('1. Your Name / Display Name');
  q1.setRequired(true);

  // Q2: Rating Scale
  var q2 = form.addScaleItem();
  q2.setTitle('2. How would you rate your overall experience on the Dhan Yodha portal?');
  q2.setBounds(1, 5);
  q2.setLabels('Poor', 'Excellent');
  q2.setRequired(true);

  // Q3: Feedback Category
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Which section or feature are you providing feedback for?');
  q3.setChoices([
    q3.createChoice('Overall Website Experience'),
    q3.createChoice('Safety Quiz & Leaderboard'),
    q3.createChoice('Senior Citizen Hub'),
    q3.createChoice('Phishing & QR Code Simulator'),
    q3.createChoice('Community Scam Stories'),
    q3.createChoice('AI Cyber Assistant Chatbot'),
    q3.createChoice('General Suggestions & Improvements')
  ]);
  q3.setRequired(true);

  // Q4: Ease of Navigation
  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Was the website easy to use and navigate on your mobile device or computer?');
  q4.setChoices([
    q4.createChoice('Very Easy & Smooth'),
    q4.createChoice('Moderately Easy'),
    q4.createChoice('Difficult / Confusing')
  ]);
  q4.setRequired(true);

  // Q5: Comments & Detailed Feedback
  var q5 = form.addParagraphTextItem();
  q5.setTitle('5. What did you like most, or what improvements would you suggest for Dhan Yodha?');
  q5.setRequired(true);

  // Q6: Recommendation
  var q6 = form.addMultipleChoiceItem();
  q6.setTitle('6. Would you recommend Dhan Yodha (https://dhanyodha20.vercel.app/) to your friends and family?');
  q6.setChoices([
    q6.createChoice('Yes, absolutely!'),
    q6.createChoice('Maybe'),
    q6.createChoice('No')
  ]);
  q6.setRequired(true);

  Logger.log('✅ Website Feedback Google Form Created!');
  Logger.log('📝 Edit URL: ' + form.getEditUrl());
  Logger.log('🌐 Public URL: ' + form.getPublishedUrl());
}
